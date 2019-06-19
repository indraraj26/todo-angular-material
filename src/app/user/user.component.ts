import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['position', 'Name', 'Age', 'Hobbies', 'Address' , 'edit'];
  data = [{
    address: "That i dont know",
age: "25",
hobbies: "Video games",
name: "Ronny",
position: 1,
  }];
  dataSource =  new MatTableDataSource(this.data);
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onAdduser(element?: any, from?:string): void {
    let userDetail = {};
    console.log("on add user called")
    if(element === 'new') {
      userDetail = {position: this.data.length+1}
    } else if(from === 'edit') {
      userDetail =  this.data.find((data) => data.position === element.position )
    } else {
      console.log("Do nothing")
    }
  
    const dialogRef = this.dialog.open(AddComponent, {
        width: '500px',
        data: userDetail
    });
   
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result) {
        if(element === 'new') {
          this.data.push({position:1, ...result});
          this.dataSource.data = [...this.data];
        } else if(from === 'edit') {
          console.log("this method is getting call")
           this.data.forEach((data, i) => {
             if(data.position === element.position) {
               this.data[i] = result;
             }
           })
           this.dataSource.data = [...this.data];
        }
      }
  });
  }

  removeUser(element: number) {
   console.log(element)
   this.data.splice(element, 1);
   this.dataSource.data = [...this.data];
  }

}
 