
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 o "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react"

export default function Item({props,sumarCarrito}) {
let {id,producto,stock} = props
let {nombre,descripcion} = producto

const [stateStock, setStock] = useState(stock)

function restarStock(){
  setStock(stateStock - 1)
  sumarCarrito()
}

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion} </p>
      <h5>En stock: <span className={stateStock <= 0 ? "agotado" : ""}>{stateStock <= 0 ? "agotado" : stateStock}</span></h5>
      <button disabled={stateStock <= 0 ? true : false} onClick={restarStock}> {stateStock <= 0 ? "SIN STOCK" : "COMPRAR"}</button>
    </div>
  )
}
