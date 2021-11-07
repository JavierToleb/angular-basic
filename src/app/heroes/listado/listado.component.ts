import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['goku','bro', 'nebur', 'zentyx'];
  heroeborrado: string = '';
  
  
  borrarHeroe(){  
    this.heroeborrado = this.heroes.shift() || '';
    console.log(this.heroeborrado)
  }
 /* constructor() {
  console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');

  }
  */
}
