export const formValidations = {

    email: [(value) => value.includes('@'), 'Este campo es obligatorio '],
    password: [(value) => value.length >= 6, 'Este campo es obligatorio'],
    password2: [(value) => value.length >= 6, 'Este campo es obligatorio'],
    nombre: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    apellido: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    direccion: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    cedula: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    celular: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    pais: [(value) => !value.includes('Pais'), 'Este campo es obligatorio'],
    provincia: [(value) => !value.includes('Provincia'), 'Este campo es obligatorio'],
    ciudad: [(value) => !value.includes('Ciudad'), 'Este campo es obligatorio'],
    edad: [(value) => !value.includes('Edad'), 'Este campo es obligatorio'],
    curso: [(value) => !value.includes('Cursos'), 'Este campo es obligatorio'],
    entero: [(value) => !value.includes('¿Como se entero?'), 'Este campo es obligatorio'],
    sexo: [(value) => value.length >= 1, 'Este campo es obligatorio'],
    terminos: [(value) => value.length >= 1, 'Este campo es obligatorio']
}