import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InfoSidebarComponent } from './info-sidebar/info-sidebar.component';
import { ShaiComponent } from "./shai/shai.component";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule,ScrollerModule,ButtonModule, SidebarModule,RouterOutlet, InfoSidebarComponent, ShaiComponent]
})
export class AppComponent {
  template!:  TemplateRef<any>;
  dialog!:string;
  title = 'infosidebar-test';
  value = 'XXX系統';
  // catchTemplate(tem:TemplateRef<any>) {
  //   this.template = this.template || tem;
  // }
  catch(name:string){
    this.dialog = name;
  }
  sidebarVisible: boolean = false;
}
