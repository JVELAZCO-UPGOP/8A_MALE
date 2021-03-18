module.exports = {
    mascotas:[
        {tipo: "Perro" , nombre: "Bobby0", dueno: "Mario"},
        {tipo: "Perro" , nombre: "Bobby1", dueno: "Mario"},
        {tipo: "Perro" , nombre: "Bobby2", dueno: "Mario"},
        {tipo: "Perro" , nombre: "Bobby3", dueno: "Mario"},
    ],
    veterinarias:[
        {nombre: "Alejandra" , apellido: "Perez" , documento: "1234567890"},
        {nombre: "Alexander" , apellido: "Gómez" , documento: "4234569999"},
        {nombre: "Julian" , apellido: "Madrid" , documento: "555666777"},
        {nombre: "Naryie" , apellido: "Vasquez" , documento: "100666777"},
    ],
    duenos:[
        {nombre: "Alejandra" , apellido: "Ramirez" , documento: "1233367890"},
        {nombre: "Alexandra" , apellido: "Fernandez" , documento: "4234135569"},
        {nombre: "Julio" , apellido: "Tamayo" , documento: "456666777"},
        {nombre: "Natalia" , apellido: "Gonzales" , documento: "9000666777"},
    ],
    consultas:[
        {
            mascota: 0 , 
            veterinaria: 0,
            fechaCreacion: new Date(), 
            fechaEdicion: new Date(), 
            historia: '',
            diagnostico: '',
        },
    ],
};