/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'his-extand-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: 'extand-dialog.component.html',
  styleUrls: ['extand-dialog.component.scss']
})
export class ExtandDialogComponent {
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
