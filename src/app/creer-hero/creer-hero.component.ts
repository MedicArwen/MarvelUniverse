import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero.model';
import { HerosService } from '../heros.service';

@Component({
  selector: 'app-creer-hero',
  templateUrl: './creer-hero.component.html',
  styleUrls: ['./creer-hero.component.scss']
})
export class CreerHeroComponent implements OnInit {
  fPseudo = new FormControl('',[Validators.required]);
  fNom = new FormControl('',[Validators.required]);
  fPrenom = new FormControl('',[Validators.required]);
  fEstVilain = new FormControl('',[Validators.required]);
  form = new FormGroup(
    {
      pseudo:this.fPseudo,
      nom:this.fNom,
      prenom:this.fPrenom,
      estVilain:this.fEstVilain
    })
  constructor(private herosService:HerosService) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const newHero = new Hero(
      this.form.value['pseudo'],
      this.form.value['nom'],
      this.form.value['prenom'],
      this.form.value['estVilain']
    )
    this.herosService.ajouter(newHero);

  }
}
