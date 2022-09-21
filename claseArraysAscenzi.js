const canillas = [
    {nombre: "Honey", precio: 600,},
    {nombre: "Ipa", precio: 670,},
    {nombre: "Apa", precio: 650,},
    {nombre: "Stout", precio: 620,},
    {nombre: "Scotish", precio: 600,},
    {nombre: "Golden", precio: 550,}
    
];

let seleccion = prompt("Hola, somos Beerload, ¿Desea alquilar alguna de nuestras canillas en barril?");

while (seleccion != "si" && seleccion != "no"){
    alert ("Por favor ingresá si o no")
    seleccion = prompt("Hola, ¿Desea alquilar alguna de nuestras canillas en barril?");
}

if (seleccion == "si"){
    alert ("Estas son nuestras canillas")
    let todaslasCanillas = canillas.map((canilla) => canilla.nombre + " $" + canilla.precio);
    alert (todaslasCanillas.join(" - "));
} else if (seleccion == "no"){
    alert("Le esperamos la proxima! Que tenga un gran dia");
}

while (seleccion != "no"){
    let canilla = prompt ("Estas son nuestras canillas, recuerda puedes elegir varias");
    let precio = 0;
        switch (canilla){
            case "Honey":
                precio = 600;
                resultado += precio
                break;
            case "Ipa":
                precio = 670;
                resultado += precio
                break;
            case "Apa":
                precio = 650;
                resultado += precio
                break;
            case "Stout":
                precio = 620;
                resultado += precio
                break;
            case "Scotish":
                precio = 600;
                resultado += precio
                break;
                        
            default:
                break;
        }
        let canillas = parseInt (prompt ("¿Cuantos barriles desea?"))
        
    }

    seleccion = prompt ("¿Necesita algun barril mas?")

    while (seleccion === "no"){
        alert ("Excelente, veo que eso es todo, este es su total final, muchas gracias por contar con nosotros")
    
        let total = seleccion;
        
        break;
    }
