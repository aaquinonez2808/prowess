
import instance from "./config";

//Obtener todos
export const getPais = async () => {
    const url = `/countries`;
    const response = await instance.get(url);
    return response;
}


//Obtener las provincias de un pais
export const getProvincia = async (pais) => {
    const url = `countries/${pais}/states`;
    const response = await instance.get(url);
    console.log(response);
    return response.data;
}


//Obtener las ciudades en base a la provincia
export const getCiudad = async ( pais,provincia) => {
    console.log(pais,provincia)
    const url = `countries/${pais}/states/${provincia}/cities`;
    const response = await instance.get(url);
    return response.data;
}


