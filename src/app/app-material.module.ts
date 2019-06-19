import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';

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
      MatIconModule,
      MatRippleModule,
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
        MatIconModule,
        MatRippleModule,
    ]
})

export class AppMaterialModule {

}