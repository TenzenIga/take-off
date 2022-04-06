import { action, computed, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";

export interface IContact {
    id: number
    name: string
}

const URL = "http://localhost:4000";
class Store {
    public isAuth: boolean = false;

    public contacts: IContact[] = [];

    constructor(){
        makeAutoObservable(this);
    }
    
    public login(): void{
        this.isAuth = true;
    } 

    public logout(): void {
        this.isAuth = false;
    }
    public getContacts(): void {
        fetch(`${URL}/contacts`).then(response => response.json())
        .then((res: IContact[]) =>{
            runInAction(()=> this.contacts = res)
        });
        
    }

    public addContact( contact: IContact): void{
        this.contacts.push(contact)
    }

    public editContact(newName: string, id: number  ){
        this.contacts = this.contacts.map(item => {
            if(item.id === id){
                item.name = newName;
            }
            return item;
        })
    }

    public deleteContact(id:number): void {
        this.contacts = this.contacts.filter(c => c.id !== id);
    }

    public filterData(value: string): void {
        this.contacts =  this.contacts.filter( contact => contact.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }

}

const store = new Store();

export default store;