import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  /**
   * save the user information in the variables
   */
  name: string;
  lastName: string;
  imgBackground: string;
  urlImgUser: string;
  styleBackground: string;
  hiddeInfoUser: boolean = true;

  constructor(private user: UserService) {
    /**
     * We prepare the information for the front end
     */
    this.name = user.getUserName();
    this.lastName = user.getUserLastName();
    this.imgBackground = user.getUserimgBackground();
    this.styleBackground = "url(assets/users/" + this.imgBackground + ") center no-repeat";
    this.urlImgUser = "assets/users/" + user.getUserimgUser();
  }
  /**
   * show user info
   */
  showInfo() {
    this.hiddeInfoUser = !this.hiddeInfoUser
  }
  ngOnInit() {
  }

}
