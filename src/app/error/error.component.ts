import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private _router:Router) {

  }

  ngOnInit() {
    console.log("se accede al componente error");
  }

  irAlHome() {
    console.log("entra")
    this._router.navigate(['home']);
  }

}
