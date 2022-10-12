export const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
    nombre: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
    apellido: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
    direccion:[(value)=> value.length>=1,'La direccion es obligatoria'],
    cedula: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
    celular: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}