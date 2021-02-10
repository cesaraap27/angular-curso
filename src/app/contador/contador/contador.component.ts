import  {Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        
        <h1>{{ title }}</h1>

        <button (click)=" numero = numero + 1;">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)=" numero = numero - 1;">- 1</button>

        <h2>Funcion sumar y restar definida en la clase TypeScript</h2>
        <button (click)=" sumar()">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)=" restar()">- 1</button>

        <h2>Funcion acumular pasando un valor por parametro</h2>
        <button (click)=" acumular(+2)">+ 2</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(-2)">- 2</button>

        <!--TAREA-->
        <h2>{{subTitle}}</h2>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)=" acumular(+base)">+ {{base}}</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(-base)">- {{base}}</button>
    `
})
export class ContadorComponent{

    public title : string = 'Contador App';
    public numero: number = 10 ;
  
    public subTitle : string = 'Acumular con la base';
    public base     : number = 5;
  
    sumar(){
      this.numero +=1;
    }
    restar(){
      this.numero -=1;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }

}