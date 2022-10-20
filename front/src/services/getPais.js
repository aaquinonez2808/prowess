import axios from 'axios';

//usar get con header de authenticacion
export const getAuthentication = async () => {
    const url = `https://www.universal-tutorial.com/api/getaccesstoken`;
    const token = "3bEY6t5apwA6IdQUGYoYc2-gcOIfoJ5OG6X99EKtCE_0XrZpPMH5C-O2MM10JulH6Dc";
    const config = {
        headers: {
            "Accept": "application/json",
            "api-token": token,
            "user-email": "programmer12211@gmail.com"
        }
    };
    const response = await axios.get(url, config);
    return response.data.auth_token;
}

//ussar get con el token obtenido de la funcion anterior
export const getPais = async () => {
    const url = `https://www.universal-tutorial.com/api/countries/`;
    const token = await getAuthentication();
    const config = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };
    const response = await axios.get(url, config);
    return response.data;
}

//usar get para la provincia con el token obtenido de la funcion anterior
export const getProvincia = async (pais) => {
    const url = `https://www.universal-tutorial.com/api/states/${pais}`;
    const token = await getAuthentication();
    const config = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };
    const response = await axios.get(url, config);
    return response.data;
}

//usar get para la ciudad con el token obtenido de la funcion anterior
export const getCiudad = async ( provincia) => {
    const url = `https://www.universal-tutorial.com/api/cities/${provincia}`;
    const token = await getAuthentication();
    const config = {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };
    const response = await axios.get(url, config);
    return response.data;
}