import { useState } from "react"
import './contador.css'


export const Contador = () => {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => {
    setContador(contador + 1);
  }
  return (
    <div className="contador-container">
      <h2 className="contador-title">Contador</h2>
      <div className="contador-value">{contador}</div>
      <button className="contador-button" onClick={incrementarContador}>
        Incrementar</button>
    </div>
  )
}
