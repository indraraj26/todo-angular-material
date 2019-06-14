import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

export interface PeriodicElement {
  position: number;
  name: string;
  age: number;
  hobbies: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {address: "Mumbai",
  age: 22,
  hobbies: "playing pubg",
  name: "indraraj",
  position: 1,
  }
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['position', 'Name', 'Age', 'Hobbies', 'Address' , 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onAdduser(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '500px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.dataSource.data.push({position:1,...result})
      console.log(this.dataSource)
    });
  }

  onclickJav() {
    this.dataSource.data.push({
      position:1,
      name: 'indraraj',
      age:22,
      hobbies:'playing pubg',
      address: 'Mumbai'
    })
    console.log(ELEMENT_DATA)
  }


}
