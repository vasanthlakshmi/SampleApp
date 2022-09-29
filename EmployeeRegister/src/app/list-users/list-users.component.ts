import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { UserServiceService } from '../services/user-service.service';

export interface element {
  EmpID: number;
  Name: string;
  Age: number;
  DateOfBirth: string;
}

const ELEMENT_DATA: element[] =[

  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},
  {EmpID: 1, Name: 'xyz', Age: 22, DateOfBirth: '2000-03-04'},


  
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent{

 dataSource = [...ELEMENT_DATA];
constructor(private userService: UserServiceService){}
 

  displayedColumns: string[] = ['EmpID', 'Name', 'Age', 'DateOfBirth'];


 @ViewChild(MatTable) table!: MatTable<element>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}