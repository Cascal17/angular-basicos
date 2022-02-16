import { Component } from "@angular/core";

@Component({
  selector: "app-contador",
  templateUrl:"./contador.component.html",
  styleUrls: ["./contador.component.css"]
})
export class ContadorComponent{
  public titulo: string = 'contador App';
  public numero:number=10;
  public base: number = 5

  sumar(){
    this.numero+= 1;
  }

  restar(){
    this.numero-= 1;
  }

  acumular(valor: number){

    this.numero += valor;
  }
}
