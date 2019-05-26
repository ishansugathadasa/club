import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../shared/instructor.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
  providers:[InstructorService]
})
export class AddInstructorComponent implements OnInit {

  constructor(public UserProfileService:InstructorService) { }
  serverErrorMessages: string;
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
    form.resetForm();
    this.UserProfileService.selectInstructor = {
      _id:"",
      firstname :"",
      lastname : "",
      address:"",
      email:"",
      password:""
      
      
           
    }
    
  }

  onSubmit(form : NgForm){
    this.UserProfileService.userpostInstructor(form.value).subscribe(
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
