import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ShaiComponent } from "../shai/shai.component";
import { ExtandDialogComponent } from "../extand-dialog/src/lib/extand-dialog.component";
import { BadgeModule } from 'primeng/badge';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Sidebar } from 'primeng/sidebar';
import { ScrollerModule } from 'primeng/scroller';
@Component({
    selector: 'app-info-sidebar',
    standalone: true,
    templateUrl: './info-sidebar.component.html',
    styleUrls: ['./info-sidebar.component.scss'],
    imports: [CommonModule,ScrollerModule,ScrollPanelModule,BadgeModule, AccordionModule, TabViewModule, DialogModule, ButtonModule, CardModule, DividerModule, ShaiComponent, ExtandDialogComponent]
})
export class InfoSidebarComponent  {

  @Input() value!: any;
  @Input() systemTemplateI!: TemplateRef<any>;
  @Input() systemTemplateII!: TemplateRef<any>;
  @Input()  suggestionTemplate!: TemplateRef<any>;

  
  visible=false;
  onExtendedDialog() {
    this.visible = !this.visible;
    }

  body = document.querySelector("body");
  sidebar = this.body?.querySelector(".sidebar");
  toggle = this.body?.querySelector(".toggle");

}
