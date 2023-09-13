import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {Store} from "@ngxs/store";
import {ActionsMusicSearch} from "../../../../../store/music-search.state";

@Component({
  selector: 'app-widget-music-search',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSlideToggleModule, FormsModule,],
  templateUrl: './widget-music-search.component.html',
  styleUrls: ['./widget-music-search.component.scss']
})
export class WidgetMusicSearchComponent implements OnInit{

    showIds = false;

    form: FormGroup = new FormGroup({
        artist_id: new FormControl(''),
        artist_name: new FormControl(''),
        album_id: new FormControl(''),
        album_name: new FormControl(''),
        song_id: new FormControl(''),
        release_id: new FormControl(''),
        song_name: new FormControl(''),
        command: new FormControl('')
    });
    submitted = false;

    constructor(private formBuilder: FormBuilder,
                private store: Store) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                artist_id: [''],
                artist_name: [''],
                album_id: [''],
                album_name: [''],
                song_id: [''],
                release_id: [''],
                song_name: [''],
                command: ['']
            }
        );
    }

    clickSearch(command){
        this.form.patchValue({command: command});
        const formData = this.form.value;
        this.store.dispatch(new ActionsMusicSearch.update(formData));
    }

    clickClear(group){
        if (group === 'artist'){
            this.form.patchValue({artist_id: '', artist_name: ''});
        }
        if (group === 'album'){
            this.form.patchValue({album_id: '', album_name: ''});
        }
        if (group === 'song'){
            this.form.patchValue({release_id: '', song_id: '', song_name: ''});
        }
        if (group === 'form'){
            this.form.reset();
        }
    }

    clickReset(){
        this.form.reset();
        this.store.dispatch(new ActionsMusicSearch.reset());
    }

    protected readonly MusicSearchFilterCommands = MusicSearchCommands;
}


export namespace MusicSearchCommands{

    export const searchArtist = 'SEARCH-ARTIST';
    export const searchAlbum = 'SEARCH-ALBUM';
    export const searchSong = 'SEARCH-SONG';
    export const reset = 'RESET';

}
