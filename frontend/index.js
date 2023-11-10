const axios = require("axios");
const { response } = require("express");
const port = 4000;
const dataServiceBaseUrl = `http://127.0.0.1:${port}`;

function dohvatiArtikle(){
    axios
    .get(dataServiceBaseUrl + "/api/dohvatiArtikle")
    .then((response) => {
        console.log("Svi artikli s cijenom većom od 3:");
     console.log("Success:", response.data);   
    })
    .catch((err) => {
        console.log("Error:", err);
    });
}
dohvatiArtikle();


// async function dodajArtikl(imeArtikla) {
//     try {
//       const response = await axios.post(dataServiceBaseUrl + "/api/dodajArtikl", { ime: imeArtikla });
//       console.log(`Dodan artikl: ${response.data.ime}, Cijena: ${response.data.cijena}`);
//     } catch (error) {
//       console.error("Greška prilikom dodavanja artikla:", error);
//     }
//   }

// // Dohvati sve artikle s cijenom većom od 30
// dohvatiArtikle();

// // Dodaj novi artikl
// dodajArtikl("ime","Novi Artikl");


// 3. Zadatak -> Dohvatiti samo imena artikala
function dohvatiImenaArtikala() {
    axios
      .get(dataServiceBaseUrl + "/api/dohvatiImenaArtikala")
      .then((response) => {
        console.log("Imena svih artikala:");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Greška prilikom dohvaćanja imena artikala:", error);
      });
  }
  
  // Dohvati imena svih artikala
  dohvatiImenaArtikala();