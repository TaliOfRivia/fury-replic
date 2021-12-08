import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPseudoCheckboxModule,
  ]
})
export class RegistrationFormModule { }
