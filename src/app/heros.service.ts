import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private _listeHeros: Hero[]=[]
  ajouter(pHero:Hero)
  {
    this._listeHeros.push(pHero);
    // signaler la mise à jour
  }
  lister():Hero[]
  {
    return this._listeHeros;
  }
  recharger(pListeHeros:Hero[])
  {
    this._listeHeros = pListeHeros;   
    // signaler la mise à jour au controleur
  }
  constructor() { }
}
