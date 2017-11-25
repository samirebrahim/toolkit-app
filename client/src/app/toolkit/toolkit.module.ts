import { ToolkitService } from './toolkit.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolkitComponent } from './toolkit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,

  ],
  providers:[ToolkitService],
  declarations: [ToolkitComponent]
})
export class ToolkitModule { }
