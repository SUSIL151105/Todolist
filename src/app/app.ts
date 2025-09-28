import { Component, signal } from '@angular/core';
import { Todolist } from "./todolist/todolist";
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Todolist,CommonModule,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
