import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

const adminRoutes: Routes  = [
  {
    path: 'admin-panel',
    component: AdminMainComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: AdminListComponent },
      { path: 'edit', component: AdminEditComponent },
      { path: 'add', component: AdminAddComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
