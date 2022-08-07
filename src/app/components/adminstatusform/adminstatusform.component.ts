import { Component, OnInit } from '@angular/core';
import { Userpolicy } from 'src/app/userpolicy';

@Component({
  selector: 'app-adminstatusform',
  templateUrl: './adminstatusform.component.html',
  styleUrls: ['./adminstatusform.component.css']
})
export class AdminstatusformComponent implements OnInit {

  userpolicy:Userpolicy = new Userpolicy(0,0,0,"")
  constructor() { }

  ngOnInit(): void {
  }

}
