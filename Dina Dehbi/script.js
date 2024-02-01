    const btn2 = document.getElementById("btn2");
    const select = document.getElementById("slc");
    const Poids = document.getElementById("poids");
    const langueur = document.getElementById("langueur");
    const largeur = document.getElementById("largeur");
    const hauteur = document.getElementById("hauteur");
    const demo1 = document.getElementById("demo1");
    const demo2 = document.getElementById("demo2");


    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        const myObj = JSON.parse(this.responseText);
        const distance = myObj.tarifs.standard.distance;
        
        for (let x in distance) {
            select.innerHTML += `<option value="${distance[x]}">${x}</option>`;
        }
        
        const distance2 = myObj.tarifs.express.distance;
        for (let y in distance2) {
            select.innerHTML += `<option value="${distance[y]}"></option>`;
        }

        function calc(){
            let value1 = parseInt(Poids.value);
            let value2 = parseInt(langueur.value) + parseInt(largeur.value) + parseInt(hauteur.value);
            let selectvalue = parseInt(select.value); 
            let base1 = myObj.tarifs.standard.base;
            let base2 = myObj.tarifs.express.base;
            let poids = myObj.tarifs.standard.poids;
            let poids2 = myObj.tarifs.express.poids;
            let dimension = myObj.tarifs.standard.dimension;
            let dimension2 = myObj.tarifs.express.dimension;
            
            let total1 = base1 + (poids * value1) + (dimension * value2) + selectvalue;
            demo1.innerHTML = total1 + " USD";

            let total2 = base2 + (poids2 * value1) + (dimension2 * value2) + selectvalue;
            demo2.innerHTML = total2 + " USD";
        }

        btn2.addEventListener("click", function () {
            calc();
            let section4 = document.getElementById("section4");
            section4.style.display= "block";

        });
    };

    xmlhttp.open("GET", "dropdrone.json");
    xmlhttp.send();
