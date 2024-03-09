import {Guitar, BassGuitar, Keytar} from "./guitar.js";

const fenderStrat = new Guitar(
    "Fender", 
    "Stratocaster",
    "Ocean Blue",
    6,
    "Single Coil",
    "HumberBucker"
);

const gretschWhiteFalcon = new Guitar(
    "Gretsch",
    "Falcon",
    "White",
    12,
    "Filter'Tron",
    "Filter'Tron"
)

const alesisKeytar = new Keytar (
    "Alesis",
    "Vortex",
    "Color",
    0,
    "None",
    "None",
    49
)

console.log(alesisKeytar);
alesisKeytar.slide();

console.log(fenderStrat);
fenderStrat.strum()
console.log(gretschWhiteFalcon);
gretschWhiteFalcon.strum();

const fenderPrecisionBass = new BassGuitar();

console.log(fenderPrecisionBass);
fenderPrecisionBass.slapDaBass();