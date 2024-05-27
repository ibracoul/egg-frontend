import { Taille } from "../enums/taille";

export class Alveole{
    quantite: number;
    prix_uni: number;
    prix_tt: number;
    taille: Taille;
    wati: string
    

    constructor(quantite: number, prix_uni: number, prix_tt: number, taille: Taille, wati: string){
        this.quantite = quantite;
        this.prix_uni = prix_uni;
        this.prix_tt = prix_tt;
        this.taille = taille;
        this.wati = wati;

    }

}