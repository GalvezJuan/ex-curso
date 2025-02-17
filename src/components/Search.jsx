import { useEffect, useRef } from "react"



export const Search = () => {
    const inputRef = useRef()

    let obtenerPais = async (valor) => {
        let response = await fetch("https://restcountries.com/v3.1/name/" + valor)
        let data = await response.json()
        console.log(data)

    }
    // useEffect(() => {
    //     ObtenerPais()

    // }, [inputRef])

    return <>
        <input onChange={() => { obtenerPais(inputRef.current.value) }} ref={inputRef} type="text" placeholder="Escribí aquí" />
    </>
}