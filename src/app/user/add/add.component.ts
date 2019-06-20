import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

type IUser = { name: string, 
               age: number, 
               hobbies: string,
               address: string, 
               position: number
  };

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public addUser: IUser = {name: null, age: null, hobbies: null, address: null, position: null};

   constructor(private dialogRef: MatDialogRef<AddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
     this.addUser = Object.assign({},data);
   }

   ngOnInit() {}

   onCancel(): void {
   this.dialogRef.close();
  }

  onSubmit(f: NgForm) {
    this.dialogRef.close(this.addUser);
  }
}
