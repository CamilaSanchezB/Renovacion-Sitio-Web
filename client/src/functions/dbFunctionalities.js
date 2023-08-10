const headers = new Headers(); headers.append('pragma', 'no-cache');
headers.append('cache-control', 'no-cache');
/* NOTICIAS */
/**
 * @async
 * @function fetchDataNoticias
 * @category Functions
 * @desc Recupera datos de noticias desde el servidor
 * @returns {Promise} Promesa que se resuelve con los datos de las noticias
 */
export async function fetchDataNoticias() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/noticias`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener las noticias:", error);
  }
}

/**
 * @async
 * @function fetchDataLatestNews
 * @category Functions
 * @desc Recupera los datos de las últimas noticias desde el servidor
 * @returns {Promise} Promesa que se resuelve con los datos de las últimas noticias
 */
export async function fetchDataLatestNews() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/latestNews`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener las últimas noticias:", error);
  }
}

/**
 * @async
 * @function fetchDataNoticiasWMultimedia
 * @category Functions
 * @desc Recupera los datos de noticias con multimedia desde el servidor
 * @returns {Promise} Promesa que se resuelve con los datos de las noticias con multimedia
 */
export async function fetchDataNoticiasWMultimedia() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/noticiasWM`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener las noticias con multimedia:", error);
  }
}

/**
 * @async
 * @function fetchNoticiaById
 * @category Functions
 * @desc Recupera los datos de una noticia por su ID desde el servidor
 * @param {string} id - ID de la noticia a recuperar
 * @returns {Promise} Promesa que se resuelve con los datos de la noticia
 */
export async function fetchNoticiaById(id) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/noticias/${id}`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error al obtener la noticia:", error);
  }
}

/**
 * @async
 * @function crearNoticia
 * @category Functions
 * @desc Crea una nueva noticia en el servidor
 * @param {string} titulo - Título de la noticia
 * @param {string} descripcion - Descripción de la noticia
 * @param {integer} multimediaId - ID de la foto utilizada en la noticia
 * @param {string} link - Enlace a la noticia real
 * @returns {Promise} Promesa que se resuelve con la nueva noticia creada
 */
export async function crearNoticia(titulo, descripcion, multimediaId, link) {
  try {
    const fecha = new Date();
    const response = await fetch(`http://172.15.0.200:8080/noticias/crear`, {
      headers: {
        "Content-Type": "application/json",
        "cache": 'no-cache',
      },
      method: "POST",
      body: JSON.stringify({
        titulo: titulo,
        descripcion: descripcion,
        multimediaId: multimediaId,
        fecha: fecha,
        link: link,
      })
    });
    const newNoticia = await response.json();
    console.log("Noticia creada con éxito");
    console.log(response.status);
    return newNoticia;
  } catch (error) {
    console.log("Error al agregar noticia:", error);
  }
}

/**
 * @async
 * @function borrarNoticia
 * @category Functions
 * @desc Elimina una noticia del servidor por su ID
 * @param {string} id - ID de la noticia a eliminar
 * @returns {Promise} Promesa que se resuelve con el ID de la noticia eliminada
 */
export async function borrarNoticia(id) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/noticias/borrar/${id}`, {headers},{
      method: "DELETE",
    });
    console.log("Noticia eliminada correctamente");
    console.log(response.status);
    return id;
  } catch (error) {
    console.log("Error al eliminar noticia:", error);
  }
}

/**
 * @async
 * @function actualizarNoticia
 * @category Functions
 * @desc Actualiza una noticia en el servidor por su ID
 * @param {string} id - ID de la noticia a actualizar
 * @param {string} titulo - Título actualizado de la noticia
 * @param {string} descripcion - Descripción actualizada de la noticia
 * @param {integer} multimediaId - ID actualizado de la foto utilizada en la noticia
 * @param {string} link - Enlace actualizado a la noticia real
 * @returns {Promise} Promesa que se resuelve con la respuesta de la actualización
 */
export async function actualizarNoticia(id, titulo, descripcion, multimediaId, link) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/noticias/actualizar/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "cache": "no-cache"
      },
      method: "PUT",
      body: JSON.stringify({
        titulo: titulo,
        descripcion: descripcion,
        multimediaId: multimediaId,
        link: link
      })
    });
    console.log("Noticia actualizada correctamente");
    console.log(response.status);
    return response;
  } catch (error) {
    console.log("Error al actualizar noticia:", error);
  }
}
 

/* MULTIMEDIA */
/**
 * @async
 * @function sendFiles
 * @category Functions
 * @desc Envía archivos al servidor
 * @param {FileList} archivos - Lista de archivos a enviar
 * @returns {Promise} Promesa que se resuelve con la respuesta del servidor
 */
export async function sendFiles(archivos) {
  const formData = new FormData();
  Object.keys(archivos).forEach((key) => {
    formData.append(archivos.item(key).name, archivos.item(key));
  });
  const response = await fetch('http://172.15.0.200:8080/upload', {headers},{
    method: 'POST',
    body: formData
  });
  const json = await response.json();
  console.log(json);
}

/**
 * @async
 * @function fetchDataMultimedia
 * @category Functions
 * @desc Recupera los datos de multimedia desde el servidor
 * @returns {Promise} Promesa que se resuelve con los datos de multimedia
 */
export async function fetchDataMultimedia() {
  try {
    const response = await fetch('http://172.15.0.200:8080/multimedia', {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los datos de multimedia:', error);
  }
}

/**
 * @async
 * @function fetchDataMultimediaWeb
 * @category Functions
 * @desc Recupera los datos de multimedia para la web desde el servidor
 * @returns {Promise} Promesa que se resuelve con los datos de multimedia para la web
 */
export async function fetchDataMultimediaWeb() {
  try {
    const response = await fetch('http://172.15.0.200:8080/multimediaisw', {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los datos de multimedia para la web:', error);
  }
}

/**
 * @async
 * @function fetchMultimediaById
 * @category Functions
 * @desc Recupera los datos de un elemento de multimedia por su ID desde el servidor
 * @param {string} id - ID del elemento de multimedia a recuperar
 * @returns {Promise} Promesa que se resuelve con los datos del elemento de multimedia
 */
export async function fetchMultimediaById(id) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/multimedia/${id}`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener el elemento de multimedia:', error);
  }
}

/**
 * @async
 * @function borrarMultimedia
 * @category Functions
 * @desc Elimina un elemento de multimedia del servidor por su ID
 * @param {string} id - ID del elemento de multimedia a eliminar
 * @param {string} nombre - Nombre del archivo de multimedia
 * @param {string} tabla - Nombre de la tabla en la que se encuentra el archivo
 * @returns {Promise} Promesa que se resuelve con el ID del elemento de multimedia eliminado
 */
export async function borrarMultimedia(id, nombre, tabla) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/multimedia/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      method: 'DELETE',
      body: JSON.stringify({
        nombre: nombre,
        tabla: tabla
      })
    });
    console.log('Archivo eliminado correctamente');
    console.log(response.status);
    return id;
  } catch (error) {
    console.log('Error al eliminar el archivo de multimedia:', error);
  }
}

/**
 * @async
 * @function getRuta
 * @category Functions
 * @desc Recupera la ruta de un archivo de multimedia por su nombre desde el servidor
 * @param {string} nombre - Nombre del archivo de multimedia
 * @returns {Promise} Promesa que se resuelve con la ruta del archivo de multimedia
 */

export async function getRuta(nombre) {
  try {
    return '../../assets/'+nombre;
  } catch (error) {
    console.log('Error al obtener la ruta del archivo de multimedia:', error);
  }
}

/*CONTACTO*/
/**
 * @async
 * @function enviarMailContacto
 * @category Functions
 * @desc Envía un formulario de contacto al servidor por correo electrónico
 * @param {Object} formData - Datos del formulario de contacto
 * @returns {Promise} Promesa que se resuelve con el resultado del envío
 */
export async function enviarMailContacto(formData) {
  try {
    const result = await fetch('http://172.15.0.200:8080/contacto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache':'no-cache'
      },
      body: JSON.stringify(formData),
    });
    return result;
  } catch (error) {
    console.log('Error al enviar el formulario de contacto:', error.message);
  }
}


/*ROADMAP*/
/**
 * @async
 * @function agregarAnioRoadmap
 * @category Functions
 * @desc Agrega un año al roadmap mediante una solicitud POST al servidor
 * @returns {Promise} Promesa que se resuelve con la respuesta de la solicitud
 */
export async function agregarAnioRoadmap() {
  try {
    const response = fetch('http://172.15.0.200:8080/roadmap/agregar/anio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
    });
    return response;
  } catch (error) {
    console.log('Error al agregar año al roadmap:', error.message);
  }
}

/**
 * @async
 * @function editarCantAnios
 * @category Functions
 * @desc Edita la cantidad de años en el roadmap según la diferencia entre la cantidad original y la nueva
 * @param {integer} cantAniosOg - Cantidad original de años en el roadmap
 * @param {integer} cantAniosNuevo - Nueva cantidad de años en el roadmap
 */
export async function editarCantAnios(cantAniosOg, cantAniosNuevo) {
  let diferencia = cantAniosNuevo - cantAniosOg;
  if (diferencia > 0) {
    for (let i = 0; i < diferencia; i++) {
      console.log(i);
      try {
        await fetch(`http://172.15.0.200:8080/roadmap/agregar/anio`, {
          headers: {
            'Content-Type': 'application/json',
            'cache': 'no-cache'
          },
          method: 'POST',
        });
      } catch (error) {
        console.log('Error al agregar año al roadmap:', error.message);
      }
    }
  } else if (diferencia < 0) {
    diferencia *= -1;
    for (let i = 0; i < diferencia; i++) {
      console.log(i);
      try {
        await fetch(`http://172.15.0.200:8080/roadmap/borrar/anio`, {
          headers: {
            'Content-Type': 'application/json',
            'cache': 'no-cache'
          },
          method: 'DELETE',
        });
      } catch (error) {
        console.log('Error al borrar año del roadmap:', error.message);
      }
    }
  }
}

/**
 * @async
 * @function editarAnioInicio
 * @category Functions
 * @desc Edita el año de inicio y el contenido en el roadmap
 * @param {integer} nuevoAnio - Nuevo año de inicio
 * @param {integer} viejoAnio - Año de inicio original
 * @param {integer} cantAnios - Cantidad de años en el roadmap
 * @param {string[]} contenido - Array con el contenido de cada año en el roadmap
 */
export async function editarAnioInicio(nuevoAnio, viejoAnio, cantAnios, contenido) {
  const anios = [];
  for (let i = viejoAnio; i < viejoAnio + cantAnios; i++) {
    anios.push(i);
  }
  for (let i = 0; i < anios.length; i++) {
    try {
      let diferencia = nuevoAnio - anios[0];
      let anioActual = anios[i];
      let anioNuevo = anioActual + diferencia;

      let contenidoActual = contenido[i];
      await fetch(`http://172.15.0.200:8080/roadmap/actualizar/`, {
        headers: {
          'Content-Type': 'application/json',
          'cache': 'no-cache',
        },
        method: 'PUT',
        body: JSON.stringify({
          anio: anioActual,
          anioNuevo: anioNuevo,
          contenido: contenidoActual,
        }),
      });
    } catch (error) {
      console.log('Error al editar año en el roadmap:', error.message);
    }
  }
}

/**
 * @async
 * @function editarContenido
 * @category Functions
 * @desc Edita el contenido y la imagen de un año específico en el roadmap
 * @param {integer} anio - Año a editar
 * @param {string} contenido - Nuevo contenido del año
 * @param {string} img - Nueva imagen del año
 * @returns {integer} Estado de la respuesta de la solicitud
 */
export async function editarContenido(anio, contenido, img) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/roadmap/actualizar/anio/${anio}`, {
      headers: {
        'Content-Type': 'application/json',
        'cache' : 'no-cache',
      },
      method: 'PUT',
      body: JSON.stringify({
        contenido: contenido,
        img: img,
      }),
    });

    return response.status;
  } catch (error) {
    console.log('Error al editar contenido del roadmap:', error.message);
  }
}

/**
 * @async
 * @function getAnioInicio
 * @category Functions
 * @desc Obtiene el año de inicio del roadmap
 * @returns {integer} Año de inicio del roadmap
 */
export async function getAnioInicio() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/roadmap`, {headers});
    const data = await response.json();
    return data.inicio;
  } catch (error) {
    console.log('Error al obtener el año de inicio del roadmap:', error.message);
  }
}

/**
 * @async
 * @function getCantAnios
 * @category Functions
 * @desc Obtiene la cantidad de años en el roadmap
 * @returns {integer} Cantidad de años en el roadmap
 */
export async function getCantAnios() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/roadmap/cantidad`, {headers});
    const data = await response.json();
    return data.cantidad;
  } catch (error) {
    console.log('Error al obtener la cantidad de años en el roadmap:', error.message);
  }
}

/**
 * @async
 * @function getContenidoRoadmap
 * @category Functions
 * @desc Obtiene el contenido completo del roadmap
 * @returns {Object[]} Array de objetos que representan el contenido de cada año en el roadmap
 */
export async function getContenidoRoadmap() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/roadmap/contenido`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener el contenido del roadmap:', error.message);
  }
}

/**
 * @async
 * @function getRoadmap
 * @category Functions
 * @desc Obtiene el roadmap completo con datos y multimedia
 * @returns {Object[]} Array de objetos que representan el roadmap completo
 */
export async function getRoadmap() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/data/roadmap/all`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener el roadmap:', error.message);
  }
}

/**
 * @async
 * @function getImgByAnio
 * @category Functions
 * @desc Obtiene la ruta de la imagen correspondiente a un año específico en el roadmap
 * @param {integer} anio - Año para el que se desea obtener la imagen
 * @returns {string} Ruta de la imagen del año en el roadmap
 */
export async function getImgByAnio(anio) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/roadmap/img/${anio}`, {headers});
    const data = await response.json();
    return data.ruta;
  } catch (error) {
    console.log('Error al obtener la imagen del año en el roadmap:', error.message);
  }
}

/*CONTADOR */
/**
 * @async
 * @function getContadores
 * @category Functions
 * @desc Obtiene los contadores mediante una solicitud GET al servidor
 * @returns {Promise} Promesa que se resuelve con los datos de los contadores
 */
export async function getContadores() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/contador`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los contadores:', error.message);
  }
}

/**
 * @async
 * @function editarCantidadContadores
 * @category Functions
 * @desc Edita la cantidad de contadores según la diferencia entre la cantidad actual y la nueva cantidad
 * @param {integer} nuevaCantidad - Nueva cantidad de contadores
 */
export async function editarCantidadContadores(nuevaCantidad) {
  const response = await fetch(`http://172.15.0.200:8080/contador/cantidad`);
  const data = await response.json();
  let diferencia = nuevaCantidad - data.cantidad;
  console.log(diferencia);
  if (diferencia > 0) {
    for (let i = 0; i < diferencia; i++) {
      console.log('i' + i);
      try {
        await fetch(`http://172.15.0.200:8080/contador/agregar`, {
          headers: {
            'Content-Type': 'application/json',
            'cache' : 'no-cache'
          },
          method: 'POST',
        });
      } catch (error) {
        console.log('Error al agregar contador:', error.message);
      }
    }
  } else if (diferencia < 0) {
    diferencia *= -1;
    for (let i = 0; i < diferencia; i++) {
      try {
        await fetch(`http://172.15.0.200:8080/contador/borrar`, {
          headers: {
            'Content-Type': 'application/json',
            'cache': 'no-cache'
          },
          method: 'DELETE',
        });
      } catch (error) {
        console.log('Error al borrar contador:', error.message);
      }
    }
  }
}

/**
 * @async
 * @function editarContenidoContadores
 * @category Functions
 * @desc Edita el contenido de un contador específico
 * @param {string} id - ID del contador a editar
 * @param {integer} cantidad - Nueva cantidad del contador
 * @param {string} moneda - Nueva moneda del contador
 * @param {string} texto - Nuevo texto del contador
 * @returns {integer} Estado de la respuesta de la solicitud
 */
export async function editarContenidoContadores(id, cantidad, moneda, texto) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/contador/actualizar/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      method: 'PUT',
      body: JSON.stringify({
        cantidad: cantidad,
        moneda: moneda,
        texto: texto,
      }),
    });

    return response.status;
  } catch (error) {
    console.log('Error al editar contenido del contador:', error.message);
  }
}

/**
 * @async
 * @function eliminarContador
 * @category Functions
 * @desc Elimina un contador específico
 * @param {string} id - ID del contador a eliminar
 * @returns {Object} Objeto que representa la respuesta de la solicitud
 */
export async function eliminarContador(id) {
  const response = await fetch(`http://172.15.0.200:8080/contador/borrar/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'cache': 'no-cache'
    },
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

/**
 * @async
 * @function getSuscriptores
 * @category Functions
 * @desc Obtiene la lista de suscriptores del newsletter mediante una solicitud GET al servidor
 * @returns {Object[]} Array de objetos que representan los suscriptores del newsletter
 */
export async function getSuscriptores() {
  try {
    const response = await fetch(`http://172.15.0.200:8080/newsletter`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los suscriptores del newsletter:', error.message);
  }
}


/*LOGIN */

/**
 * @async
 * @function encriptar
 * @category Functions
 * @desc Encripta un texto mediante una solicitud POST al servidor
 * @param {string} texto - Texto a encriptar
 * @returns {Promise} Promesa que se resuelve con los datos encriptados
 */
export async function encriptar(texto) {
  try {
    const response = await fetch('http://172.15.0.200:8080/encriptar/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      body: JSON.stringify({
        contenido: texto,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al encriptar el texto:', error.message);
  }
}

/**
 * @async
 * @function autenticar
 * @category Functions
 * @desc Autentica un usuario mediante una solicitud POST al servidor
 * @param {string} usuario - Nombre de usuario
 * @param {string} contra - Contraseña del usuario
 * @returns {Promise} Promesa que se resuelve con los datos de autenticación
 */
export async function autenticar(usuario, contra) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/autenticacion/${usuario}/${contra}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      mode: "cors",
      withCredntials: true,
      credentials: 'include',
      
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

/**
 * @async
 * @function isSuper
 * @category Functions
 * @desc Verifica si un usuario es superusuario mediante una solicitud GET al servidor
 * @param {string} username - Nombre de usuario
 * @returns {boolean} Valor booleano que indica si el usuario es superusuario o no
 */
export async function isSuper(username) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/validar/superUsuario/${username}`, {headers});
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error.message;
  }
}

/**
 * @async
 * @function getEditores
 * @category Functions
 * @desc Obtiene la lista de editores mediante una solicitud GET al servidor
 * @returns {Promise} Promesa que se resuelve con los datos de los editores
 */
export async function getEditores() {
  try {
    
    const response = await fetch(`http://172.15.0.200:8080/editores`, {headers});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al obtener los editores:', error.message);
  }
}

/**
 * @async
 * @function crearUsuario
 * @category Functions
 * @desc Crea un nuevo usuario mediante una solicitud POST al servidor
 * @param {string} usuario - Nombre de usuario
 * @param {string} contrasena - Contraseña del usuario
 * @param {boolean} superUsuario - Indicador de si el usuario es superusuario o no
 * @param {string} email - Correo electrónico del usuario
 * @returns {Promise} Promesa que se resuelve con los datos del nuevo usuario creado
 */
export async function crearUsuario(usuario, contrasena, superUsuario, email) {
  try {
    const response = await fetch('http://172.15.0.200:8080/editores/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      body: JSON.stringify({
        usuario: usuario,
        contrasena: contrasena,
        superUsuario: superUsuario,
        email: email,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al crear el usuario:', error.message);
  }
}

/**
 * @async
 * @function actualizarPermisos
 * @category Functions
 * @desc Actualiza los permisos de un usuario mediante una solicitud PUT al servidor
 * @param {string} id - ID del usuario a actualizar
 * @param {boolean} superUsuario - Indicador de si el usuario es superusuario o no
 * @returns {Promise} Promesa que se resuelve con los datos actualizados del usuario
 */
export async function actualizarPermisos(id, superUsuario) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/editores/actualizarPermiso/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      body: JSON.stringify({
        superUsuario: superUsuario,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al actualizar los permisos del usuario:', error.message);
  }
}

/**
 * @async
 * @function actualizarUsuarios
 * @category Functions
 * @desc Actualiza el nombre de usuario de un usuario mediante una solicitud PUT al servidor
 * @param {string} usuarioOG - Nombre de usuario original
 * @param {string} usuarioNuevo - Nuevo nombre de usuario
 * @returns {Promise} Promesa que se resuelve con los datos actualizados del usuario
 */
export async function actualizarUsuarios(usuarioOG, usuarioNuevo) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/editores/actualizarUsuario/${usuarioOG}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      body: JSON.stringify({
        nuevoUsuario: usuarioNuevo,
      }),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Error al actualizar el nombre de usuario:', error.message);
  }
}

/**
 * @async
 * @function actualizarContrasena
 * @category Functions
 * @desc Actualiza la contraseña de un usuario mediante una solicitud PUT al servidor
 * @param {string} username - Nombre de usuario
 * @param {string} contrasenaActual - Contraseña actual del usuario
 * @param {string} contrasenaNueva - Nueva contraseña del usuario
 * @returns {Promise} Promesa que se resuelve con los datos actualizados del usuario
 */
export async function actualizarContrasena(username, contrasenaActual, contrasenaNueva) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/editores/actualizarContrasena/${username}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
      body: JSON.stringify({
        contrasenaActual: contrasenaActual,
        contrasenaNueva: contrasenaNueva,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al actualizar la contraseña:', error.message);
  }
}

/**
 * @async
 * @function borrarEditor
 * @category Functions
 * @desc Elimina un editor mediante una solicitud DELETE al servidor
 * @param {string} id - ID del editor a eliminar
 * @returns {Promise} Promesa que se resuelve con los datos de eliminación del editor
 */
export async function borrarEditor(id) {
  try {
    const response = await fetch(`http://172.15.0.200:8080/editores/borrar/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'cache': 'no-cache'
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error al eliminar el editor:', error.message);
  }
}