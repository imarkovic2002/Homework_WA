import { artikli } from "../models/artiklModel.js";

function dohvatiArtikle(id){
    if(!id){
        return artikli;
    }
    return artikli.find(x => x.id == id);
}

function dodajArtikl(newArtikl){
    artikli.push(newArtikl);
    return;
}

function dohvatiImenaArtikala() {
    const imenaArtikala = artikli.map((artikl) => artikl.ime);
    return imenaArtikala;
  }


export const methods = {
    dohvatiArtikle,
    dodajArtikl,
    dohvatiImenaArtikala,

}