import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTarotComponent } from './card-tarot.component';

describe('CardTarotComponent', () => {
  let component: CardTarotComponent;
  let fixture: ComponentFixture<CardTarotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTarotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTarotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
