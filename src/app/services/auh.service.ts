import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLogined = false;
    login() {
        this.isLogined = true;
    }
    logOut() {
        this.isLogined = false;
    }
    isAuthenticted() {
        //  return this.isLogined;
        return new Promise((resolve, error) => {
            setTimeout(() => {
                resolve(this.isLogined);
            },0);
        })
    }
}