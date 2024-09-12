// Crear una promesa básica
let miPromesa = new Promise(function(resolve, reject) {
    // Simular una operación asíncrona como una solicitud de datos
    let exito = true; // Cambia esto a 'false' para simular un rechazo

    setTimeout(function() {
        if (exito) {
            resolve("Operación completada exitosamente"); // Resolver la promesa
        } else {
            reject("Error: Operación fallida"); // Rechazar la promesa
        }
    }, 2000); // Simular un retraso de 2 segundos
});

// Manejar el resultado de la promesa con .then() y .catch()
miPromesa
    .then(function(resultado) {
        console.log(resultado); // Se ejecuta si la promesa se cumple
    })
    .catch(function(error) {
        console.error(error); // Se ejecuta si la promesa se rechaza
    });
