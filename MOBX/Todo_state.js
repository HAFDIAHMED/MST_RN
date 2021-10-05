import { makeObservable, observable } from "mobx"

class State_Management {

    taches=[]
    constructor (){
        makeObservable(this.{
            taches : observable,
            
        })
    }


}