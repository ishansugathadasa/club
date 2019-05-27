import { Component, OnInit } from '@angular/core';
import { CashierService } from '../../shared/cashier.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cashier',
  templateUrl: './add-cashier.component.html',
  styleUrls: ['./add-cashier.component.css'],
  providers:[CashierService]
})
export class AddCashierComponent implements OnInit {

  constructor(public UserProfileService:CashierService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectCashier = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userpostCashier(form.value).subscribe(
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



