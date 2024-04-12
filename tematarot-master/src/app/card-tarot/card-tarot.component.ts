import { Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-tarot',
  templateUrl: './card-tarot.component.html',
  styleUrl: './card-tarot.component.css'
})
export class CardTarotComponent {
  @Input() card: Card | null = null;

  constructor() {}

  get isCardInitialized(): boolean {
    console.log("card",this.card)
    return this.card !== null;
  }
}
