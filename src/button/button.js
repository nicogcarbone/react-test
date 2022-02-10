const button =({label='boton', backgroundColor='black', colorText='black', handleClick}) => {


    return ( <button onClick={handleClick}>{label}</button>   )
}
export default button