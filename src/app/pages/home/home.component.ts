import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  exadecimal: string = null;
  correo:any;
  datos: any;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.correo = localStorage.getItem('datos');
    this.datos = JSON.parse(this.correo);
  }

  salir() {

    this.auth.logout();
    this.router.navigateByUrl('/login');

  }

  myFunction(){
    console.log(this.exadecimal);
    document.getElementById("cambiar").style.backgroundColor = this.exadecimal;
    document.getElementById("cambiar2").style.color = this.exadecimal;
    document.getElementById("cambiar3").style.backgroundColor = this.exadecimal;
  }

}
