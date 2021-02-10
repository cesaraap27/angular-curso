import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes        : string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];
  heroeBorrado  : string ='';
  // mostrar       : boolean = false;

  borrarHeroe():void{
    console.log('Borrando......');
    //this.heroes=this.heroes.slice(1);
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    // if (this.heroeBorrado !== ''){
    //   this.mostrar= true;
    // }  else {
    //   this.mostrar = false;
    // }
  }

}
