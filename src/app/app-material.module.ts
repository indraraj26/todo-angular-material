import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatDialogModule,
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatDialogModule,
    ]
})

export class AppMaterialModule {

}