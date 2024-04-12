import { Component, OnInit } from '@angular/core';
import { CardServiceService } from './services/card-service.service';
import { Card } from './models/card';
import { flatMap, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit{
  cardList: Card[] = [];
  displayedCards: Card[] = []; 
  constructor(
    private card_service: CardServiceService,
  ) {

  }

  shuffleDeck() {
    console.log('Shuffling deck...');
    const shuffledCards = this.shuffleArray(this.cardList);
    this.displayedCards = shuffledCards.slice(0, 3);
  }


  shuffleArray(array: any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
     
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

    
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  ngOnInit(): void {
    console.log('AppComponent initialized');
    this.getAllCards().subscribe(res => {
      this.cardList = res;
      console.log(this.cardList);
    });

  }
  

  title = 'tematarot';
  getAllCards() {
    return this.card_service.getAllCards().pipe(
      flatMap((res: any[]) => {
        return from(Promise.all(res.map((e: any) => {
      //console.log(e.payload.doc.data());
      //console.log(this.data_category.getCategoryByIdRef(e.payload.doc.id));
        return {
          Name: e.payload.doc.data()['Name'],
          Description: e.payload.doc.data()['Description'],
          Image: e.payload.doc.data()['Image'],
          Number: e.payload.doc.data()['Number'],
        };
      })));
    }));
  }
}
