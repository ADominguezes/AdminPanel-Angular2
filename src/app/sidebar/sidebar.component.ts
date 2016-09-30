import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  /**
   * get the user information of a JSON 
   */
  userInformation = [
    {
      name: "Jhon",
      lastName: "Doe",
      imgBackground: "background-1-200x100.jpg",
      imgUser: "1.jpg"
    }
  ]
  /**
   * save the user information in the variables
   */
  name: string;
  lastName: string;
  imgBackground: string;
  urlImgUser: string;
  styleBackground: string;
  hiddeInfoUser: boolean = true;

  constructor() {
    /**
     * We prepare the information for the front end
     */
    this.name = this.userInformation[0].name;
    this.lastName = this.userInformation[0].lastName;
    this.imgBackground = this.userInformation[0].imgBackground;
    this.styleBackground = "url(assets/users/" + this.imgBackground + ") center no-repeat";
    this.urlImgUser = "assets/users/" + this.userInformation[0].imgUser;
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
