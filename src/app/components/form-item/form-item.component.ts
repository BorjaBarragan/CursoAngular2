import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { count } from 'rxjs';


@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 5 ;

  item: any = {
    product: '',
    price: '',
    quantity:''
  }

    onSubmit(itemForm : NgForm) : void{
      if(itemForm.valid){
      this.addItemEventEmitter.emit({id: this.counterId,...this.item});
      //El operador ... se utiliza para tomar todas las propiedades
      //del objeto item y añadirlas al nuevo objeto que se emitirá.
      this.counterId++;

      this.item = { 
        product: '',
        price: '',
        quantity:''
      };
      
      itemForm.reset();
      itemForm.resetForm();
    }
  }
}
