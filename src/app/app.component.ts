import { Component } from '@angular/core';
import {Pet} from './pet.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Maria';
  age = 36;
  img = 'https://parahamster.net/wp-content/uploads/2020/01/cute-2500929_1920.jpg'
  btnDisabled = true;
  register= {
    name: '',
    email:'',
    password:'',
  }
  person = {
    name : 'maria',
    age : 36,
    avatar: 'https://parahamster.net/wp-content/uploads/2020/01/cute-2500929_1920.jpg'
  }
  names: string[] = ['maria', 'suge', 'vito', 'cata', 'karo'];
  newName ='';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  pets: Pet[] = [
  {
    name: ' gato',
    price: 20.000,
    image: 'https://res.cloudinary.com/postedin/image/upload/d_mascotas:no-image.jpg,f_auto,q_80/mascotas/c-postedin-image-60628.jpeg'
  },
  {
    name: ' Perro',
    price: 20.000,
    image: 'https://www.hotelesparaperrosmexico.com/img/fotos/tiernos_0011.jpg'
  },

  {
    name: 'Conejo',
    price: 20.000,
    image: 'https://tse3.mm.bing.net/th?id=OIP.8FnURW5jCJbLT6tvxSw-kQHaFj&pid=Api&P=0'
  },

  {
    name: 'Tortuga',
    price: 20.000,
    image: 'https://tse2.mm.bing.net/th?id=OIP.1t5VoEB8H0vdjSvoO17bhwHaEE&pid=Api&P=0'
  },

  {
    name: 'Erizo',
    price: 20.000,
    image: 'https://tse4.mm.bing.net/th?id=OIP.1tIqnbpnzalX86DsggYkggHaEl&pid=Api&P=0'
  },

  {
    name: 'Cobayas',
    price: 20.000,
    image: 'https://tse4.mm.bing.net/th?id=OIP.s_4a0cQMDIH8riggckZTyAHaEK&pid=Api&P=0'
  },


  ]


  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
   this.person.age += 1;

  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTo);
  }
  changeName(event:Event){
const element = event.target as HTMLInputElement;
this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName= '';
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
  onRegister(){
    console.log(this.register)
  }

}


