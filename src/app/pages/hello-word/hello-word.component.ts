import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrl: './hello-word.component.scss'
})
export class HelloWordComponent { 
  //hellowrold message 

  msg : string = "Hello world from bordeaux"

  constructor(){}
}
