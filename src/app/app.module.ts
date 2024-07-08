import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { StdFormComponent } from './components/std-form/std-form.component';
import { StdTableComponent } from './components/std-table/std-table.component';






@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    StdFormComponent,
    StdTableComponent,
   
  ],
  imports: [
    BrowserModule,
   FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
