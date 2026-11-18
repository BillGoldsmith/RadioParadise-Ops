import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {finalize} from "rxjs";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {environment} from "../../../../zenvironments/environment";

interface PaymentColumn {
    key: string;        // dotted path into a provider block, e.g. 'payments.count'
    label: string;
    group: string;
    snapshot?: boolean; // point-in-time value: month total shows the latest day instead of a sum
}

@Component({
  selector: 'app-reports-payments',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatButtonModule, MatTabsModule],
  templateUrl: './reports-payments.component.html',
  styleUrls: ['./reports-payments.component.scss']
})
export class ReportsPaymentsComponent {

    pageData:any = false
    loading = false;
    selectedTab = 0;

    providers = [
        {id: 'paypal', label: 'PayPal'},
        {id: 'stripe', label: 'Stripe'},
        {id: 'combined', label: 'Combined'},
    ];

    columns: PaymentColumn[] = [
        {key: 'payments.count',             label: 'Count',         group: 'Payments'},
        {key: 'payments.errors',            label: 'Errors',        group: 'Payments'},
        {key: 'subscriptions.new',          label: 'New',           group: 'Subscriptions'},
        {key: 'subscriptions.cancellations',label: 'Cancelled',     group: 'Subscriptions'},
        {key: 'subscriptions.count',        label: 'Active',        group: 'Subscriptions', snapshot: true},
        {key: 'subscriptions.suspended',    label: 'Suspended',     group: 'Subscriptions', snapshot: true},
        {key: 'orphan_payments',            label: 'Orphan\npayments',   group: 'Anomalies', snapshot: true},
        {key: 'phantom_payments',           label: 'Phantom\npayments',  group: 'Anomalies', snapshot: true},
        {key: 'orphan_subscriptions',       label: 'Orphan\nsubs',   group: 'Anomalies', snapshot: true},
        {key: 'phantom_subscriptions',      label: 'Phantom\nsubs',  group: 'Anomalies', snapshot: true},
        {key: 'double_subscriptions',       label: 'Double\nsubs',   group: 'Anomalies', snapshot: true},
        {key: 'bad_recurring_payments',     label: 'Mislabeled\nrecurring', group: 'Anomalies', snapshot: true},
        {key: 'suspended_active_subscriptions', label: 'Suspended\nactive', group: 'Anomalies', snapshot: true},
    ];

    groups = ['Payments', 'Subscriptions', 'Anomalies'];

    months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    years: number[] = [];

    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();

    constructor(private http: HttpClient) {
        for (let y = this.year; y >= this.year - 5; y--) {
            this.years.push(y);
        }
    }

    ngOnInit(): void {
        this.loadData();
    }

    changeMonth(delta: number){
        const d = new Date(this.year, this.month - 1 + delta, 1);
        this.month = d.getMonth() + 1;
        this.year = d.getFullYear();
        this.loadData();
    }

    isEmpty(){
        return !this.pageData?.days?.length;
    }

    loadData(){

        this.loading = true;
        this.pageData = false;

        this.http.get( environment.RPSERVER_OPI + 'reports/payments/getPaymentsMonthlyHealthReport/' + this.month + '/' + this.year, {withCredentials:true })
            .pipe(finalize(() => this.loading = false))
            .subscribe( (data:any) =>{
                console.log('loaddata', data);
                if (data?.days) {
                    data.days.sort((a, b) => a.day.localeCompare(b.day));
                }
                this.pageData = data;
            })

    }

    // first column of each group gets a left border to separate the sections
    groupStart(col: PaymentColumn){
        return this.columns.find(c => c.group === col.group) === col;
    }

    groupSpan(group: string){
        return this.columns.filter(c => c.group === group).length;
    }

    value(day: any, provider: string, col: PaymentColumn): number | null {
        if (provider === 'combined') {
            const p = this.read(day.paypal, col.key);
            const s = this.read(day.stripe, col.key);
            return p === null && s === null ? null : (p ?? 0) + (s ?? 0);
        }
        return this.read(day[provider], col.key);
    }

    // month row: flows are summed across days, snapshots show the most recent day
    total(provider: string, col: PaymentColumn): number | null {
        const days = this.pageData?.days ?? [];
        if (col.snapshot) {
            return days.length ? this.value(days[days.length - 1], provider, col) : null;
        }
        const vals = days.map(d => this.value(d, provider, col)).filter(v => v !== null);
        return vals.length ? vals.reduce((a, b) => a + b, 0) : null;
    }

    // highlight error/anomaly cells that are non-zero
    isAlert(col: PaymentColumn, v: number | null){
        return !!v && (col.group === 'Anomalies' || col.key === 'payments.errors');
    }

    fmt(v: number | null){
        return v === null ? '—' : v.toLocaleString();
    }

    private read(block: any, path: string): number | null {
        const v = path.split('.').reduce((o, k) => o?.[k], block);
        return v === undefined || v === null || isNaN(+v) ? null : +v;
    }

}
