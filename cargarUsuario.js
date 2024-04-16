async function cargarUsuario() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const usuario = await response.json();
    console.log(usuario);
  } catch (error) {
    console.error('Error al cargar usuario:', error);
  }
}

cargarUsuario();
