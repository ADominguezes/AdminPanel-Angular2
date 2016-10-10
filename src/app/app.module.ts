import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
//import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    HeaderComponent,
    SidebarComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
