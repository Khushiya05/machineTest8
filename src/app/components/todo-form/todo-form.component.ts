import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todoArr';
import { TodoService } from 'src/app/services/todo.service';
import { UuidService } from 'src/app/services/uuid.service';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild('todoForm')todoForm !:NgForm
  constructor(
    private _todoService:TodoService,
    private _uuidService:UuidService
  ) { }

  ngOnInit(): void {
    
  }
  onAddTodo(){
if(this.todoForm.valid){
 const newTodo:Itodo={
  ...this.todoForm.value,
  id:this._uuidService.uuid()
 }
 console.log(newTodo);
 
 this._todoService.onAddTodo(newTodo)
 this.todoForm.reset()
}
  }
}
