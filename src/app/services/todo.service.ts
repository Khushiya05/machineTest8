import { Injectable } from '@angular/core';
import { Itodo } from '../models/todoArr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoArray:Array<Itodo>=[{
  todoItem:"Html",
  id:"1"
},
{
   todoItem:"javascript",
  id:"2"
}]
  constructor() { }
  fetchTodo(){
    return this.todoArray
  }
  onAddTodo(todoObj:Itodo){
    this.todoArray.push(todoObj)
  }
  removeTodo(id:string){
    let getIndex=this.todoArray.findIndex(todo=>todo.id===id);
    this.todoArray.splice(getIndex,1)
  }
}
