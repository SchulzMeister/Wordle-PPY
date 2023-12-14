let diccionario = [
    "APLEE",
    "HOUSE",
    "MOUSE",
    "YOUTH",
    "FIFTH",
    "DANCE",
];

let palabra = getWord()
let intentos = 6;

/*//para mi posterior api *verificar 
const endpoint = "api"
fetch(endpoint).then("response") => {
    Response.json().then((data)=> {
        console.log(data[0])
        palabra = data[0].toUpperCase()
    });
}*/

function getWord(){
    
    let min = 0;
    let max = diccionario.length;
    let i= Math.floor(Math.random() * (max-min)) + min;
    return diccionario [i]        
}

const grid = document.getElementById("grid")

const boton = document.getElementById("guess-button")

boton.addEventListener("click", ()=>{
    
    const intento = leerIntento()
    console.clear();

    const row = document.createElement("div");
    row.className = "row";

    for (const i in palabra) {
        const span =document.createElement("span");
        span.className = "letter";
        span.innerHTML = intento[i];

        if(palabra[i] == intento[i]){
            span.style.backgroundColor = "#79b851";
            
        }
        else if(palabra.includes(intento[i])){
            span.style.backgroundColor = "#f3c237";
        }
        else{
            span.style.backgroundColor = "#a4aec4";
        }
       
        row.appendChild(span)
        
    }

    grid.appendChild(row)

    intentos--
    
    if(palabra == intento){
        terminar("GANASTE!☝️​​🤓​​")
        return;
    }
    
    if(!intentos){
        terminar("PERDISTE!​💀​")
        return
    }
});

function terminar(mensaje){
    const resultado = document.getElementById("guesses");
    resultado.innerHTML = `<h1>${mensaje}</h1>`;
    boton.disabled = true
}

function leerIntento(){
    const input = document.getElementById("guess-input")
    return input.value.toUpperCase()
}

console.log(palabra)






























































/*let palabra = "APPLE"
let intento = 6;

const boton = document.getElementById("guess-button")
window.addEventListener('load', init)
boton.addEventListener("click", ()=>{
    const intento = leerIntento()
    //console.log(intento)
    if(!intento){
        console.log("Perdiste")
        terminar("<h1>PERDISTE!😖</h1>")
        return
    }
    for (const i in palabra) {
        if(palabra[i] == intento[i]){
            console.log(intento[i], "verde")
        }
        else if(palabra.includes(intento[i])){
            console.log(intento[i], "amarillo")
        }
        else{
            console.log(intento[i], "gris")
        }
        intento--}
    if(palabra == intento){
        console.log("Ganaste")
        terminar("<h1>GANASTE!😀</h1>")
        return
        
    }
})

function leerIntento(){
    const input = document.getElementById("guess-input")
    return input.value.toUpperCase()
}


function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

function leerIntento(){

    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}*/

