import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ShaiComponent } from "../shai/shai.component";
import { TemplateInfo } from "../info-sidebar/templateInfo";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-info-sidebar',
    standalone: true,
    templateUrl: './info-sidebar.component.html',
    styleUrls: ['./info-sidebar.component.scss'],
    imports: [CommonModule, AccordionModule, TabViewModule, DialogModule, ButtonModule, CardModule, DividerModule, ShaiComponent, FormsModule]
})
export class InfoSidebarComponent  {

  @Input() value!: any;
  @Input() systemTemplateI!: TemplateRef<any>;
  @Input() systemTemplateII!: TemplateRef<any>;
  @Input()  suggestionTemplate!: TemplateRef<any>;

  visible=false;
   /**
   * 展開Dialog
   */
  templateInfo: TemplateInfo = new TemplateInfo();
  onExtendedDialog(template: TemplateRef<any>) {
    this.visible = !this.visible;
    this.templateInfo.dialogTemplate = template;
    console.log(this.templateInfo);
  }
}
