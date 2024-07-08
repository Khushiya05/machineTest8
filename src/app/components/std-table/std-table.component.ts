import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/models/stdArrr';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
stddata !:Array<Istd>;
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this.stddata=this._studentService.fetchData()
  }
  onDelete(id:string){
    this._studentService.onRemove(id)
  }
}
