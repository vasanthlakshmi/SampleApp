import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { datamodel } from 'model/example.model';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  dataObjmodel: datamodel = new datamodel();
  allUsers:any;
  addUserForm: FormGroup = new FormGroup({
    
  })

  constructor(public router: Router, private formBuilder: FormBuilder, private userService: UserServiceService ) {
    //this.allUsers = this.addUserForm.value;
   }

  ngOnInit(): void {
   
    this.addUserForm = this.formBuilder.group({
      'Name' : new FormControl(''),
      'Age' : new FormControl(''),
      'DateOfBirth' : new FormControl('')
    })
    
  }

  createUser(){
    
    this.dataObjmodel.Name = this.addUserForm.value.Name ;
    this.dataObjmodel.Age = this.addUserForm.value.Age ;
    this.dataObjmodel.DateOfBirth = this.addUserForm.value.DateOfBirth ;

    this.userService.addUser(this.dataObjmodel).subscribe (data =>{
      console.log(data);
    })

    console.log(this.allUsers);
  }

}
