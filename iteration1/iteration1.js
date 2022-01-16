//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

window.onload = () => {
     
    let button = document.querySelector(".showme")
    console.log(button)
    
//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

     let h1 = document.querySelector("#pillado")
     console.log(h1)
    
//1.3 Usa querySelector para mostrar por consola todos los p

     let p = document.querySelectorAll("p")
     console.log(p)
     
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

     let clasePokemon = document.querySelectorAll(".pokemon")
     console.log(clasePokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

     let test = document.querySelectorAll('[data-function="testMe"]')
     console.log(test)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

     console.log(test[2].innerHTML)
     
}