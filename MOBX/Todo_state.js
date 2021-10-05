import { action, computed, makeObservable, observable } from "mobx"

class SuperHero {
    
    tache ;
    taches=[]
    constructor (){
        makeObservable(this,{
            //tache : observable,
            taches : observable,
            addTaches : action,
            removetache : action,
            nombre_taches : computed,

        })
    }
    addTaches( tache){
        this.taches=[...this.taches,tache]

    }
    removetache (index){
        let tachesCopy=[...this.taches];
        tachesCopy.splice(index,1);
        this.taches=[...tachesCopy];
    }
    get nombre_taches(){
        return this.taches.length;
    }
    


} 

export const superhero = new  SuperHero();