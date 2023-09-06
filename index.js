// Función asincrónica para obtener y mostrar los datos de usuarios
async function getUsers() {
    // URL de la API de usuarios
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        // Realizar una solicitud GET a la API utilizando fetch() con async/await
        const response = await fetch(apiUrl);

        // Verificar si la respuesta está en formato JSON
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Procesar los datos de la API y mostrar todos los detalles de cada usuario
        const userList = document.getElementById('userList');

        data.forEach(user => {
            const listItem = document.createElement('p');
            listItem.innerHTML = `
          <strong>Nombre:</strong> ${user.name}<br>
          <strong>Nombre de usuario:</strong> ${user.username}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Teléfono:</strong> ${user.phone}<br>
          <strong>Website:</strong> ${user.website}<br>
          <strong>Dirección:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}<br>
          <strong>Compañía:</strong> ${user.company.name}<br>
          <hr>
        `;
            userList.appendChild(listItem);
        });
    } catch (error) {
        // Manejar errores en la solicitud
        console.error("Error en la solicitud:", error);
    }
}

// Llamar a la función getUsers() para obtener y mostrar los usuarios
getUsers();