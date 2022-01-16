window.onload= () => {

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div')
div$$.classList.add('divNuevo')
document.body.appendChild(div$$)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP$$ = document.createElement('div')
divP$$.classList.add('divP')
divP$$.innerHTML = '<p class="texto">Texto dinámico</p>'
document.body.appendChild(divP$$)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divPLoop$$ = document.createElement('div')
divPLoop$$.classList.add('div6P')
for(let i = 0; i < 6; i++) {
     let p = document.createElement('p')
     p.innerText = i
     divPLoop$$.appendChild(p)  
}
document.body.appendChild(divPLoop$$)

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const divPD$$ = document.createElement('div')
divPD$$.classList.add('divP')
divPD$$.innerHTML = '<p class="texto">Soy dinámico</p>'
document.body.appendChild(divPD$$)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2$$ = document.querySelector("h2.fn-insert-here")
let textH2$$ = document.createTextNode('Wubba Lubba dub dub')
h2$$.append(textH2$$)

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul")
    apps.forEach((item) => {
        let li$$ = document.createElement("li")
        li$$.innerText = item
        ul$$.appendChild(li$$)
    })
    document.body.append(ul$$)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let eliminarNodo = document.querySelectorAll('.fn-remove-me')
    eliminarNodo.forEach((value) => {
        value.remove()
    })

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

let divMedio$$ = document.querySelectorAll("div")
let p$$ = document.createElement("p")
p$$.innerText = 'Voy en medio'
document.body.insertBefore(p$$, divMedio$$[1])

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const p2$$ = document.querySelectorAll("div.fn-insert-here")
    
    p2$$.forEach((item) => {
        let p = document.createElement("p")
        p.innerText = 'Voy dentro!'
        item.appendChild(p)
    })
}