import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[]=[];
myTodo :string="";
editTodo=[]
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        id:uuidv4(),
        todo:'my first todo1',
        done:false
      },
      {
        id:uuidv4(),
        todo:'my first todo',
        done:false
      }

    ]

   
  }

  toogleDone(id:any){
    this.todos.map((todo,i)=>{
      if(todo.id==id) {
        this.todos[i].done =   !this.todos[i].done
      }
    })
  }

  onAdd(){
    if(this.myTodo !=""){
    this.todos.push({
      id:uuidv4(),
      todo:this.myTodo,
      done:false
  
    })
  }
    this.myTodo= ""
  }

  onClick(id:any){
   this.todos = this.todos.filter(items => items.id != id)
  }

  onEdit(id:any){
   this.todos.map((item,i)=>{
     if(item.id==id){
       this.myTodo= item.todo
     }
   })
   

  }

}
