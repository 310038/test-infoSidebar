import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSidebarComponent } from "../info-sidebar/info-sidebar.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
@Component({
    selector: 'app-shai',
    standalone: true,
    templateUrl: './shai.component.html',
    styleUrls: ['./shai.component.scss'],
    imports: [CommonModule,SidebarModule,ButtonModule,DialogModule, InfoSidebarComponent]
})
export class ShaiComponent {
  sidebarVisible: boolean = false;
  @Input() inputTemplate!: TemplateRef<any>;
  @Input() header!: string;
  @Input() visible!:boolean;
  @Output() visibleChange = new EventEmitter<boolean>;
  onExtendedDialog() {
    console.log(this.visible);
    console.log(this.header);
    console.log(this.inputTemplate);
}
onHideDialog() {

  this.visible = false;

  this.visibleChange.emit(false);

}
}
