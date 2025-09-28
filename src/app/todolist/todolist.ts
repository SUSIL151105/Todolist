import { Component } from '@angular/core';
import { SearchPipe } from "../search-pipe/search-pipe";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [SearchPipe,FormsModule,CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
 tasks: string[] = [];
  newTask: string = '';
  searchText: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

