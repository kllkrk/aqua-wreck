class Keikka {
    constructor(y, m ,d, paikka, paikkakunta, info) {
        this.pvm = new Date(y, m-1, d);
        this.paikka = paikka;
        this.paikkakunta = paikkakunta;
        if (info == null) {
            this.info = "";
        }
        else {
            this.info = info;
        }
    }

    tiedot() {
        return this.pvm.toLocaleDateString("fi-FI") + " "+ this.paikka +  ", " + this.paikkakunta;
    }
}

var keikkalista = [];


keikkalista.push(new Keikka(2024, 2, 15, "Bar Loose", "Helsinki"));
keikkalista.push(new Keikka(2024, 2, 10, "Kulttuurikeskus Maanalainen", "Tampere"));
keikkalista.push(new Keikka(2023, 12, 16, "Kulttuurikuppila Brummi", "Rauma", "https://fb.me/e/1peMiL0Hn"));
keikkalista.push(new Keikka(2023, 8, 4, "Vastavirta-Klubi", "Tampere", "https://fb.me/e/1nfLqyuHA"));
keikkalista.push(new Keikka(2023, 6, 7, "Bar Loose", "Helsinki", "https://fb.me/e/4dwOyVJMo"));
keikkalista.push(new Keikka(2023, 4, 3, "Kulttuurikuppila Brummi", "Rauma"));
keikkalista.push(new Keikka(2022, 12, 3, "Terassi Pub Yläkerta", "Tampere"));
keikkalista.push(new Keikka(2020, 9, 15, "Mascot Bar & Live Stage", "Helsinki"));
keikkalista.push(new Keikka(2020, 3, 14, "Boothill Rock Club", "Helsinki"));
keikkalista.push(new Keikka(2019, 8, 23, "Terassi Pub Yläkerta", "Tampere"));
keikkalista.push(new Keikka(2019, 5, 25, "Bar Semafori", "Turku"));

const tama = new Date();

function kirjoitaKeikat() {
    keikkalista.sort(function(a, b){return a.pvm-b.pvm});
    var x = document.getElementById("tulevat-keikat").firstElementChild;
    for (let i = 0; i < keikkalista.length; i++) {
        if(keikkalista[i].pvm - tama >= 0) {
            const node = document.createElement("li");
            const textnode = document.createTextNode(keikkalista[i].tiedot());
            node.appendChild(textnode);
            x.appendChild(node);

            if(keikkalista[i].info != "") {
                var y = document.createElement("span");
                y.classList.add("info");
                var z = document.createElement("a");
                z.href = keikkalista[i].info;
                const infoteksti = document.createTextNode("info");
                z.appendChild(infoteksti);
                y.appendChild(z);
                node.appendChild(y);
            }
        }
    }
    keikkalista.reverse();
    try {
        x = document.getElementById("menneet-keikat").firstElementChild;
        for (let i = 0; i < keikkalista.length; i++) {
            if(keikkalista[i].pvm - tama < 0) {
                const node = document.createElement("li");
                const textnode = document.createTextNode(keikkalista[i].tiedot());
                node.appendChild(textnode);
                x.appendChild(node);

                if(keikkalista[i].info != "") {
                    var y = document.createElement("span");
                    y.classList.add("info");
                    var z = document.createElement("a");
                    z.href = keikkalista[i].info;
                    const infoteksti = document.createTextNode("info");
                    z.appendChild(infoteksti);
                    y.appendChild(z);
                    node.appendChild(y);
                }
            }
        }
    }
    catch(error) {
        console.error(error);
    }
}
