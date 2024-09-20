import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import {invoiceData} from '../data/invoice.data';
import { Item } from '../models/item';

//@Injectable: 
//Este decorador indica que esta clase (InvoiceService) es un servicio y puede ser inyectado en otros componentes o servicios.
@Injectable({
  providedIn: 'root'
})
//provideIn : 
//Esto significa que Angular creará una única
//instancia de este servicio para toda la aplicación, y estará 
//disponible en cualquier lugar donde lo necesites

export class InvoiceService {

  private invoice: Invoice = invoiceData

  constructor() { }

  getInvoice():Invoice{
    const total = this.calculateTotal();
    return {...this.invoice, total};
  }

  calculateTotal(){
    //Hay diferentes formas de hacerlo :
    //1.
    let total = 0;
    //forEach es un método de los arrays que ejecuta una función para cada elemento del array.
    this.invoice.items.forEach(item => total += item.price * item.quantity);
    return total;
    //2.
    //return this.invoice.items.reduce((accumulator,item) => accumulator + (item.price * item.quantity),0)
  }

  save(item:Item): Invoice{
    this.invoice.items = [...this.invoice.items, item];
    const total = this.calculateTotal();
    return  {...this.invoice, total}

  }
  
  remove(id:number) : Invoice {
     this.invoice.items = this.invoice.items.filter(item => item.id != id);
     const total = this.calculateTotal();
     return  {...this.invoice, total}
  }

}
