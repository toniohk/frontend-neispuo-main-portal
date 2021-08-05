import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './modules/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponentsModule, FlexLayoutModule],
  exports: [MaterialComponentsModule, FlexLayoutModule]
})
export class SharedModule {}
