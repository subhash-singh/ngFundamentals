import { InjectionToken } from '@angular/core';

export let TOASTR_TOKET = new InjectionToken<IToastr>('toastr');

export interface IToastr {
    success(msg: string , title?: string): void;
    info(msg: string , title?: string): void;
    warning(msg: string , title?: string): void;
    error(msg: string , title?: string): void;
}
