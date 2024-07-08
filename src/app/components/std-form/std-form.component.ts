import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/models/stdArrr';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
@ViewChild('signUpForm')signUpForm !:NgForm
  constructor(private _studentService:StudentService,
    private _uuidService:UuidService
  ) { }

  ngOnInit(): void {
  }
  onAddstd(){
    if(this.signUpForm.valid){
      let std:Istd={
        ...this.signUpForm.value,stdid:this._uuidService.uuid(),
      }
      console.log(std);
      this._studentService.onAddstd(std)
      this.signUpForm.reset()
      
    }
  }
}
