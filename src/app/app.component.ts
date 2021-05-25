import { Component } from '@angular/core';
import { MenuItem } from './menu-item'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';


items: MenuItem[] = [
  {
    name:"Cheese Lovers",
    category: "Pizza",
    price: 5.00
  },
  {
    name:"Deep Dish ",
    category: "Pizza",
    price: 9.00
  },
  {
    name:"Meat Lovers ",
    category: "Pizza",
    price: 8.00
  },
  {
    name:"Veggie Lovers",
    category: "Pizza",
    price: 7.00
  },
  {
    name:"Thin Crust ",
    category: "Pizza",
    price: 6.00
  },
  {
     name:"Everything",
     category: "Pizza",
     price: 15.00
  }      
]
}