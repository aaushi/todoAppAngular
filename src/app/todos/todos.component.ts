import { Component, OnInit } from '@angular/core';
import { todoModel } from '../models/todoModel';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:todoModel[]=[];
  inputTodo:string="";
  constructor() { }

  ngOnInit(): void {
  //  this.todos=[{
  //   content:null,
  //   completed:null
  //  }]
  }
  onAdd(){
    //console.log(this.inputTodo);
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });
   // console.log(this.todos);
  }
  onRemove(i){
    console.log(i);
    this.todos.splice(i);
    console.log(this.todos);
  }
  toggleData(i){
    this.todos.map((value,id)=>{
      // console.log('hi');
      console.log(i);
      console.log(id);
      if(id==i){
        value.completed=!value.completed;
        console.log(value.completed);
        return value;
      }
    })
   
  }
}
