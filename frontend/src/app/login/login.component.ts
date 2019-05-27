import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';
import { HistoryService } from '../shared/history.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService,HistoryService]
  
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService,private router : Router,public tosatr :ToastrService,private HistoryService:HistoryService) { }
  model ={
    username:'',
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
 // email:string;
  ngOnInit() {
  }

  onSubmit(email:string,form : NgForm){
   // this.email=title;
    console.log(email);
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/instructor');
        this.HistoryService.setEmail(email);
        this.tosatr.success('Login sucsessfully','Customer');
        //alert('sucess');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        this.tosatr.warning(this.serverErrorMessages,'Customer');
        //alert('error');
      }
    );
  }
}
