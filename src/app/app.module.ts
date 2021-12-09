import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';

import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { ForgotPasswordFormComponent } from './forms/forgot-password-form/forgot-password-form.component';
import { ComingSoonComponent } from './forms/coming-soon/coming-soon.component';
import { SimpleLayoutComponent } from './PageLayouts/simple-layout/simple-layout.component';
import { SimpleTabbedComponent } from './PageLayouts/simple-tabbed/simple-tabbed.component';
import {MatTabsModule} from "@angular/material/tabs";
import { FillerComponent } from './PageLayouts/filler/filler.component';
import { CardLayoutComponent } from './PageLayouts/card-layout/card-layout.component';
import {MatCardModule} from "@angular/material/card";
import { CardTabbedLayoutComponent } from './PageLayouts/card-tabbed-layout/card-tabbed-layout.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    ForgotPasswordFormComponent,
    ComingSoonComponent,
    SimpleLayoutComponent,
    SimpleTabbedComponent,
    FillerComponent,
    CardLayoutComponent,
    CardTabbedLayoutComponent,
    ChatpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
