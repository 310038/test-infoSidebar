import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-info-sidebar',
  standalone: true,
  imports: [CommonModule,AccordionModule,TabViewModule,DialogModule,ButtonModule],
  templateUrl: './info-sidebar.component.html',
  styleUrls: ['./info-sidebar.component.scss']
})
export class InfoSidebarComponent   {
    visible: boolean = true; //記得改回false
    position: string = 'center';

    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }
}
