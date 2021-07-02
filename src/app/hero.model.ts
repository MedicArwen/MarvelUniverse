export class Hero {
    pseudo:string;
    nom:string;
    prenom:string;
    estVilain:boolean;
    /**
     *
     */
    constructor(pPseudo:string,pNom:string,pPrenom:string,pEstVilain:boolean)
     {
       this.pseudo = pPseudo;
       this.prenom = pPrenom;
       this.nom = pNom;
       this.estVilain = pEstVilain;   
    }
}
