import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Аpp works!';

  brojki: number[] = [];
  texts: string[] = [];

  ngOnInit(){
    for (var i = 0; i < 10; i++) {
      this.brojki.push(i+1);
      this.texts.push("Text #"+(i+1));
    } 
  }

  addNumber(){
    this.brojki.push(this.brojki.length+1);
    this.texts.push("Text #"+this.brojki.length);
  }
}
