import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-afficher-hero',
  templateUrl: './afficher-hero.component.html',
  styleUrls: ['./afficher-hero.component.scss']
})
export class AfficherHeroComponent implements OnInit {
@Input() pHero?:Hero
  constructor() { }

  ngOnInit(): void {
  }

}
