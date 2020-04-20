import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MainEmailComponent} from './email/components/main-email/main-email.component';
import {SaveEmailComponent} from './email/components/save-email/save-email.component';
import {ShowEmailComponent} from './email/components/show-email/show-email.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule],
    declarations: [
        MainEmailComponent,
        SaveEmailComponent,
        ShowEmailComponent
    ],
    exports: [MainEmailComponent]
})

export class EmailModule {}
