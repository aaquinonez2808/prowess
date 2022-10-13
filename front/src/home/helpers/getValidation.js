export const formValidations = {
    email: [ (value) => value.includes('@'), 'Este campo es obligatorio.'],
    password: [ (value) => value.length >= 6, 'Este campo es obligatorio'],
    password2: [ (value) => value.length >= 6, 'Este campo es obligatorio'],
    nombre: [ (value) => value.length >= 1, 'Este campo es obligatorio'],
    apellido: [ (value) => value.length >= 1, 'Este campo es obligatorio'],
    direccion:[(value)=> value.length>=1,'Este campo es obligatorio'],
    cedula: [ (value) => value.length >= 1, 'Este campo es obligatorio'],
    celular: [ (value) => value.length >= 1, 'Este campo es obligatorio'],
}