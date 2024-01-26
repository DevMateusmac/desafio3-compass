import { useState } from "react"
import  style  from "./style.module.css"
// eslint-disable-next-line react/prop-types
export default function FieldData({label, id}){
  const [clearInput, setClearInput] = useState("")

  return (
    <div className={style.container}>
        <input 
          value={clearInput}
          onChange={(ev) => setClearInput(ev.target.value)}
          className={style.input} 
          type="text" 
          id={id}/>
        <label className={style.label} htmlFor={id}>{label}</label>
        <img 
          onClick={() => setClearInput("")}
          className={style.icon} 
          src="/closeIcon.svg" 
          alt="close-icon" />
    </div>
  )
}