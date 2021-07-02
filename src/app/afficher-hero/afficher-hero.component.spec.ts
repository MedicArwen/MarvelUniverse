import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherHeroComponent } from './afficher-hero.component';

describe('AfficherHeroComponent', () => {
  let component: AfficherHeroComponent;
  let fixture: ComponentFixture<AfficherHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
