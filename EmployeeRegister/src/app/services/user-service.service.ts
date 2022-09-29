import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  addUser(userObj:any){
    return this.http.post(this.baseUrl , userObj).pipe(map((res:any)=>{
      return res
    }))

  }

  listUsers(){
    return this.http.get(this.baseUrl).pipe(map((res:any)=>{
      return res
    }))
  }
}
