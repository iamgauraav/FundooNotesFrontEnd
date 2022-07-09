import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotPasswordComponent } from './Component/forgetpassword/forgetpassword.component';
import { ResetPasswordComponent } from './Component/resetpassword/resetpassword.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetAllNoteComponent } from './Component/get-all-note/get-all-note.component';
import { CreateNoteComponent } from './Component/create-note/create-note.component';
import { DisplayNoteComponent } from './Component/display-note/display-note.component';
import { IconsComponent } from './Component/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UpdateNoteComponent } from './Component/update-note/update-note.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchieveComponent } from './Component/archieve/archieve.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TrashNoteComponent } from './Component/trash-note/trash-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllNoteComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    IconsComponent,
    CreateNoteComponent,
    UpdateNoteComponent,
    ArchieveComponent,
    TrashNoteComponent
  ],
  imports: [
    BrowserModule,MatIconModule,MatToolbarModule,MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
