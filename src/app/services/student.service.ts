import { Injectable } from '@angular/core';
import { Istd } from '../models/stdArrr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
stdarr:Array<Istd>=[
  {
    fname:"ram",
    lname:"patil",
    email:"abc@gmail.com",
    contact:"67483823877",
    stdId:"1"
  }
]
  constructor() { }
  fetchData(){
    return this.stdarr;
  }

  onAddstd(stdObj:Istd){
this.stdarr.push(stdObj)
  }

  onRemove(id:string){
let getIndex=this.stdarr.findIndex(std=>std.stdId===id)
this.stdarr.splice(getIndex,1)
  }
}
