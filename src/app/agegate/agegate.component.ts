import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agegate',
  templateUrl: './agegate.component.html',
  styleUrls: ['./agegate.component.css']
})
export class AgegateComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  onSubmit(values) {
    console.log(values);
    localStorage.setItem('data-birthday',JSON.stringify(values) );
    //this.dato = localStorage.getItem('data-birthday');
    this.router.navigate(['']);
  }

}
