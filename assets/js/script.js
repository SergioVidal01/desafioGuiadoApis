(async function() {
    try {
        // Petición a la API de Random User para obtener 10 usuarios
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        const users = data.results; // Accedemos a los resultados

        // Selecciona el contenedor donde se insertarán los resultados
        const userContainer = document.getElementById('user-container');

        // Inicializa una variable para acumular el HTML
        let htmlContent = '';

        // Recorre los usuarios y genera el HTML
        users.forEach(user => {
            // Crea el contenido HTML para cada usuario
            htmlContent += `
                <div class="user">
                    <p>
                        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
                        <span class="user-name">${user.name.first} ${user.name.last}</span>
                    </p>
                    <p>Correo: ${user.email}</p>
                    <p>Teléfono: ${user.phone}</p>
                </div>
            `;
        });

        // Asigna el contenido HTML al contenedor
        userContainer.innerHTML = htmlContent;

    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
})();