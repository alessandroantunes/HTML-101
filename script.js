
let export1;
// name1 = document.getElementById("name");

inicializa();

function inicializa() {
    let nome;
    let count = 0;
    while (count <= 31) {
        nome = document.getElementById(count);
        nome.innerHTML = "...";
        count++;

    }
}

function fillRow1() {
    let nome;
    let count = 16;
    let ind = 0;
    console.log("okkkkkk");
    while (count <= 31) {
        nome = document.getElementById(count);
        nom1 = Object.keys(export1)[ind];
        nom1 = nom1.charAt(0).toUpperCase() + nom1.slice(1);
        nom1 = nom1.replace("_", " ");
        // nom1 = nom1.toUpperCase();
        nome.innerHTML = nom1;

        // nome.innerHTML = "ovo";
        count++;
        ind++;
        // console.log(Object.keys(export1));
    }

}

function fillRow2() {
    let nome;
    let count = 0;
    let tep;
    while (count <= 15) {
        nome = document.getElementById(count);
        tep = Object.values(export1)[count];
        tep = String(tep);
        console.log(typeof tep);

        if (count !=  9 || 10 || 11 || 12 ) {
            console.log(count)
            console.log("funca")
            
                console.log(tep)
                nome.innerHTML = tep.charAt().toUpperCase() + tep.slice(1);
            
        }else{
            console.log(count)
            console.log("else", Object.keys(tep))
            nome.innerHTML = tep;

        }

        count++;

    }

}


const button = document.querySelector(".getRandomCharacter")
button.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("CLICADO")
    const randomNumber = Math.ceil(Math.random() * 50)
    //randomNumber = Number(randomNumber)
    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        .then(response => response.json())
        .then(data => {
            //name=data.name;
            //console.log(data)

            const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url } = data;
            //name1.innerHTML = name;
            export1 = data;
            //console.log(data);
            fillRow1();
            fillRow2();
            //console.log(Object.keys(export1)[1]);
        })
})

