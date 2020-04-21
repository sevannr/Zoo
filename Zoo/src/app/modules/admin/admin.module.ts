import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

@NgModule({
  declarations: [AdminEditComponent, AdminAddComponent, AdminListComponent, AdminMainComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class AdminModule { }
