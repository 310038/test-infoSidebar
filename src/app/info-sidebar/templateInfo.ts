import { TemplateRef } from '@angular/core';

export class TemplateInfo{
  dialogTemplate!: TemplateRef<any>;
  header: string = '';

  constructor(that?: Partial<TemplateInfo>) {
    Object.assign(this, structuredClone(that));
  }
}

