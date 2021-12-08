import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }

  hide = true;

}
