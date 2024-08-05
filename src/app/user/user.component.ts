import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  name="sabrina";
  country="tunsia";
  
  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
