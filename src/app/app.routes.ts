import { Routes } from '@angular/router';
import { TableComponent } from '../component/header/table/table.component';
import { FormsComponent } from '../component/header/forms/forms.component';

export const routes: Routes = [
    {path: '', component: TableComponent},
    {path: 'category/:idString', component: FormsComponent},
    {path: 'category', component: FormsComponent},
];
