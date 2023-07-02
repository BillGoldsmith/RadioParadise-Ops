export class AccountModel  {
    user_id: number;
    level: number;
    username: string;
    country_code: string;
    avatar: string;
    privmsg_new: boolean;
    htsso: any;
}


export const initialAccount: AccountModel = {
    user_id: 0,
    level: 0,
    username: '',
    country_code: '',
    avatar: 'profile.jpg',
    privmsg_new: false,
    htsso: false
};

