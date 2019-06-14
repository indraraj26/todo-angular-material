import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

type IUser = {name: string, age: number, hobbies: string, address: string};


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public addUser: IUser = {name: null, age: null, hobbies: null, address: null};

   constructor(private dialogRef: MatDialogRef<AddComponent>) {}

   ngOnInit() {}

   onCancel(): void {
   this.dialogRef.close();
  }
}
