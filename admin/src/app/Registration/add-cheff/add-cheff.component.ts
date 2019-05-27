import { Component, OnInit } from '@angular/core';
import { CheffService } from '../../shared/cheff.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cheff',
  templateUrl: './add-cheff.component.html',
  styleUrls: ['./add-cheff.component.css'],
  providers:[CheffService]
})
export class AddCheffComponent implements OnInit {

  constructor(public UserProfileService:CheffService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectCheff = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userpostCheff(form.value).subscribe(
      res => {
        this.resetForm(form);
        alert('sccess');
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
          alert(this.serverErrorMessages);
        }
        else
          //this.serverErrorMessages = 'Something went wrong.';
          alert('error');
      }
    );
  }
}


