import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    getUserName() {
        return 'Jhon';
    }
    getUserLastName() {
        return 'Doe';
    }
    getUserimgBackground() {
        return 'background-1-200x100.jpg';
    }
    getUserimgUser() {
        return '1.jpg';
    }
}