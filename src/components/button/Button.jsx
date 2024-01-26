import style from "./style.module.css"
export default function Button (){
  return(
    <button 
      className={style.button}
      type="button"
    >
      <img         
        className={style.img}
        src="/researchIcon.svg" 
        alt="research-icon"
      />
      FIND A DRIVER</button>
  )
}