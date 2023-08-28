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
  /**
   * 顯示於 extand-dialog 之模板內容
   * @type {TemplateRef<any>}
   * @memberof ExtandDialogComponent
   */
  @Input() inputTemplate!: TemplateRef<any>;
  /**
   * 傳入顯示於 dialog 之標題
   * @type {string}
   * @memberof ExtandDialogComponent
   */
  @Input() header: string = 'Extand Dialog';
  /**
   * 控制 dialog 的可見性
   * @type {boolean}
   * @memberof ExtandDialogComponent
   */
  @Input() visible:boolean = false;
  /**
   * 傳入控制 dialog 的 min-height 為 string 型別
   * @type {string}
   * @memberof ExtandDialogComponent
   */
  @Input() height:string = '50vh';
  /**
   * 傳入控制 dialog 的 min-width 為 string 型別
   * @type {string}
   * @memberof ExtandDialogComponent
   */
  @Input() width:string = '1200px';
  /**
   * 關閉 dialog 時傳出 visible 雙向綁定
   * @memberof ExtandDialogComponent
   */
  @Output() visibleChange = new EventEmitter<boolean>;
  /**
   * 點擊右上角 Ｘ 後關閉 dialog 並傳出 visible
   */
  onHideDialog() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
