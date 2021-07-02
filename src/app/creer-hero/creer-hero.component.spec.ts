import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerHeroComponent } from './creer-hero.component';

describe('CreerHeroComponent', () => {
  let component: CreerHeroComponent;
  let fixture: ComponentFixture<CreerHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
