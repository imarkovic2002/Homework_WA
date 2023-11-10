import { methods } from "./handlers/artiklHandlers.js";
import express from "express";
import { artikli } from "./models/artiklModel.js";
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", router);


router.route("/dohvatiArtikle").get((req, res) => {
    const skupljiArtikli = artikli.filter((artikl) => artikl.cijena > 3);
    res.json(skupljiArtikli);
});


router.route("/dodajArtikl").post((req, res, next) => {
    const artiklData = req.body;
    methods.dodajArtikl(artiklData);
    const id= artikli.length + 1;
    const randomCijena = Math.floor(Math.random()* 100) + 1;
    const noviArtikl = {
      id: id,
      ime:req.body.ime,
      cijena: randomCijena,
    };
    artikli.push(noviArtikl);
    res.status(204).json({});
  });


  router.route("/dohvatiImenaArtikala").get((req, res) => {
    const imenaArtikala = methods.dohvatiImenaArtikala();
    res.json(imenaArtikala);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });