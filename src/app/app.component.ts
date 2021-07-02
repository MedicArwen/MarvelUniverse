import { Component } from '@angular/core';
import { Hero } from './hero.model';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarvelUniverse';
  listeHeros : Hero[];
  constructor(private herosService: HerosService)
  {
    // récupération de la liste de supers héros
    herosService.ajouter(new Hero('Captain America','Rogers','Steve',false))
    this.listeHeros = herosService.lister()
  }


}
