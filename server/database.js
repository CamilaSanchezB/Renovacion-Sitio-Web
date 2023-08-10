import mysql from 'mysql2';
import dotenv from 'dotenv';

/**
 * Configuración para cargar variables de entorno desde el archivo .env
 */
dotenv.config();

/**
 * Pool de conexiones a la base de datos MySQL
 */
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();


/* CONSULTAS GENERALIZADAS */
/**
* @async
* @category DB
* @function getAll
* @desc SELECT - Obtiene una lista con todos los registros de una tabla
* @param {string} tabla Nombre de la tabla
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function getAll(tabla){
    try{
        const [result] = await pool.query(`SELECT * FROM ${tabla}`);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB
* @function getRegisterById
* @desc SELECT - Obtiene un registro de una tabla
* @param {string} tabla Nombre de la tabla
* @param {integer} id Id del registro
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function getRegisterById(tabla,id){
    try{
        const [result] = await pool.query(`SELECT * FROM ${tabla} WHERE id = ?`,[id]);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB
* @function deleteRegister
* @desc DELETE - Borra un registro de una tabla
* @param {string} tabla Nombre de la tabla
* @param {integer} id Id del registro
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function deleteRegister(tabla, id){
    try{
        const [result] = await pool.query(`DELETE FROM ${tabla} WHERE id=?`, [id]);
        return result;
    }catch(e){
        console.error(e.message);
    }  
}

/**
* @async
* @category DB
* @function getFin
* @desc SELECT - Obtiene el valor maximo de un campo de una tabla dada
* @param {string} parametro Nombre del parametro a buscar
* @param {string} tabla Nombre de la tabla
* @returns {JSON} fin
* @throws {Error} Detalle del error
*/
export async function getFin(parametro, tabla){
    try{
        const [result] = await pool.query(`SELECT MAX(${parametro}) as fin FROM ${tabla}`);
        return result[0];
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB
* @function getCant
* @desc SELECT - Obtiene el conteo de un campo de una tabla dada
* @param {string} parametro Nombre del parametro a buscar
* @param {string} tabla Nombre de la tabla
* @returns {JSON} fin
* @throws {Error} Detalle del error
*/
export async function getCant(parametro, tabla){
    try{
        const [result] = await pool.query(`SELECT COUNT(?) as cantidad FROM ${tabla};`,[parametro]);
        return result[0];
    }catch(e){
        console.log(e.message);
    }
}


/* CONSULTAS ESPECIFICAS DE NOTICIAS */

/**
* @async
* @category DB - Noticias
* @function getNoticiaById
* @desc SELECT - Obtiene una noticia por Id junto con los atributos de la multimedia correspondiente
* @param {integer} id Id del registro
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function getNoticiaById(id){
    try{
        const [row] = await pool.query('SELECT noticias.id, noticias.titulo, noticias.descripcion, noticias.fecha, noticias.link, noticias.multimediaId, multimedia.ruta, multimedia.nombre FROM noticias INNER JOIN multimedia ON noticias.multimediaId = multimedia.id WHERE noticias.id = ?',[id]);
        return row;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Noticias
* @function actualizarNoticia
* @desc UPDATE - Actualiza valores de un registro en la tabla noticias
* @param {integer} id Id del registro
* @param {string} titulo Nuevo valor para el campo "Título"
* @param {string} descripcion Nuevo valor para el campo "Descripción"
* @param {integer} multimediaId Nuevo valor para el campo "MultimediaId"
* @param {string} link Nuevo valor para el campo "Link"
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function actualizarNoticia(id, titulo, descripcion, multimediaId, link){
    try {
        const [row] = await pool.query(
            `UPDATE noticias
            SET titulo=?, descripcion=?, multimediaId=?, link=?
            WHERE id=?`,
            [titulo.tostring(), descripcion.tostring(), multimediaId, link.tostring(), id]
        );
        return row;
    } catch(e){
        console.log(e.message);
    }
}   
/**
* @async
* @category DB - Noticias
* @function createNoticia
* @desc INSERT - Inserta un nuevo registro en la tabla noticias
* @param {string} titulo Titulo de la noticia
* @param {string} descripcion Breve descripcion de la noticia
* @param {integer} multimediaId Id de la foto que utiliza la noticia
* @param {Date} fecha Fecha de creacion
* @param {string} link Link a la noticia real
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function createNoticia(titulo, descripcion, multimediaId, fecha, link) {
    try{
        const [row] = await pool.query(`INSERT INTO noticias 
    (titulo, descripcion, multimediaId, fecha, link)
    VALUES (?,?,?,?,?)
    `, [ titulo, descripcion, multimediaId, fecha, link]);
    return (row);
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Noticias
* @function getLatestNews
* @desc SELECT - Obtiene los ultimos 5 registros de la tabla noticias con los respectivos campos de multimedia
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function getLatestNews(){
    try{
        const [row] = await pool.query("SELECT noticias.id, noticias.titulo, noticias.descripcion, noticias.fecha, noticias.link, noticias.multimediaId, multimedia.ruta, multimedia.nombre FROM noticias INNER JOIN multimedia ON noticias.multimediaId = multimedia.id ORDER BY `noticias`.`fecha` DESC LIMIT 5")
        return(row)
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Noticias
* @function getNoticiasWMultimedia
* @desc SELECT - Obtiene todos registros de la tabla noticias con los respectivos campos de multimedia
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function getNoticiasWMultimedia(){
    try{
        const [row] = await pool.query('SELECT noticias.id, noticias.titulo, noticias.descripcion, noticias.fecha, noticias.link, multimedia.ruta, multimedia.nombre FROM noticias INNER JOIN multimedia ON noticias.multimediaId = multimedia.id;')
        return (row);
    }catch(e){
        console.log(e.message);
    }
}
/* CONSULTAS ESPECIFICAS DE MULTIMEDIA */

/**
* @async
* @category DB - Multimedia
* @function createMultimedia
* @desc INSERT - Inserta un nuevo registro en la tabla multimedia
* @param {string} ruta Ruta de la multimedia
* @param {string} nombre Nombre de la multimedia
* @param {string} tabla Nombre de la tabla
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function createMultimedia(ruta, nombre, tabla) {
    try{
        const [row] = await pool.query(`INSERT INTO ${tabla} 
    (ruta, nombre)
    VALUES (?,?)
    `, [ruta, nombre]);
    return (row);
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Multimedia
* @function getRutaByNombre
* @desc SELECT - Obtiene la ruta de una multimedia por su nombre
* @param {string} tabla Nombre de la tabla
* @param {string} nombre Nombre del archivo multimedia
* @returns {Array} Registro
* @throws {Error} Detalle del error
*/
export async function getRutaByNombre(tabla, nombre){
    try{
        const [result] = await pool.query(`SELECT ruta FROM ${tabla} WHERE nombre = ?`,[nombre]);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/* CONSULTAS ESPECIFICAS DE MAILS */

/**
* @async
* @category DB - Mails
* @function getMails
* @desc SELECT - Obtiene todos los correos electrónicos de la tabla suscriptores
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function getMails(){
    try{
        const [result] = await pool.query(`SELECT emailSus FROM suscriptores`);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/* CONSULTAS ESPECIFICAS DE ROADMAP */

/**
* @async
* @category DB - Roadmap
* @function getAnioInicio
* @desc SELECT - Obtiene el año de inicio: el año mínimo de la tabla roadmap
* @returns {JSON} inicio
* @throws {Error} Detalle del error
*/
export async function getAnioInicio(){
    try{
        const [result] = await pool.query(`SELECT MIN(anio) as inicio FROM roadmap`);
        return result[0];
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function getContenidoRoadmap
* @desc SELECT - Obtiene el contenido de la tabla roadmap ordenado según el año
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function getContenidoRoadmap(){
    try{
        const [result] = await pool.query(`SELECT contenido FROM roadmap ORDER BY anio ASC;`);
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function getIdByAnio
* @desc SELECT - Obtiene la ID de un año en la tabla roadmap
* @param {integer} anio Año a buscar
* @returns {JSON} ID
* @throws {Error} Detalle del error
*/
export async function getIdByAnio(anio){
    try{
        const [result] = await pool.query(`SELECT id FROM roadmap WHERE anio = ?`,[anio]);
        return result[0];
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function getImgByAnio
* @desc SELECT - Obtiene la ruta de la imagen de un registro en la tabla roadmap a partir de un año 
* @param {integer} anio Año a buscar
* @returns {JSON} Ruta de la imagen
* @throws {Error} Detalle del error
*/
export async function getImgByAnio(anio){
    try{
        const [result] = await pool.query(`SELECT multimedia.ruta FROM roadmap RIGHT JOIN multimedia ON idMultimedia = multimedia.id WHERE anio = ?;`,[anio]);
        return result[0];
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function actualizarRoadmap
* @desc UPDATE - Actualiza los valores de un registro en la tabla roadmap
* @param {integer} anio Año del registro a actualizar
* @param {integer} anioNuevo Nuevo valor para el campo "anio"
* @param {string} contenido Nuevo valor para el campo "contenido"
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarRoadmap(anio, anioNuevo, contenido){
    try {
        const value = await getIdByAnio(anio);
        const [row] = await pool.query(
            `UPDATE roadmap
            SET contenido=?, anio=?
            WHERE id=?`,
            [contenido, anioNuevo, value.id]
        );
        return row;
    } catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function actualizarContenido
* @desc UPDATE - Actualiza el contenido y la imagen de un registro en la tabla roadmap
* @param {integer} anio Año del registro a actualizar
* @param {string} contenido Nuevo valor para el campo "contenido"
* @param {integer} img Nuevo valor para el campo "idMultimedia"
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarContenido(anio, contenido, img){
    try {
        const value = await getIdByAnio(anio);
        const [row] = await pool.query(
            `UPDATE roadmap
            SET contenido=?, idMultimedia=?
            WHERE id=?`,
            [contenido, img, value.id]
        );
        return row;
    } catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function agregarAnio
* @desc INSERT - Agrega un nuevo año a la tabla roadmap
* @returns {Array} Registro del nuevo año agregado
* @throws {Error} Detalle del error
*/
export async function agregarAnio(){
    try{
        const value1 = await getAnioInicio();
        const value2 = await getCant('anios', 'roadmap');
        const [row] = await pool.query(`INSERT INTO roadmap 
        (idMultimedia, anio, contenido)
        VALUES (?,?,?)
        `, [27, value1.inicio + value2.cantidad, null]);
        return (row);
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function borrarAnio
* @desc DELETE - Borra el último año de la tabla roadmap
* @returns {Array} Resultado de la eliminación
* @throws {Error} Detalle del error
*/
export async function borrarAnio(){
    try{
        const anio = await getFin('anio', 'roadmap');
        const value = await getIdByAnio(anio.fin);
        const response = await deleteRegister('roadmap', value.id);
        return response;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Roadmap
* @function roadmapWMultimedia
* @desc SELECT - Obtiene todos los registros de la tabla roadmap con los respectivos campos de multimedia
* @returns {Array} Registros
* @throws {Error} Detalle del error
*/
export async function roadmapWMultimedia(){
    try{
        const [result] = await pool.query('SELECT ROW_NUMBER() OVER (ORDER BY roadmap.anio) AS id, roadmap.anio AS title, roadmap.contenido AS description, multimedia.ruta AS image FROM roadmap INNER JOIN multimedia ON roadmap.idMultimedia = multimedia.id ORDER BY roadmap.anio;');
        return result;
    }catch(e){
        console.log(e.message);
    }
}

/* CONSULTAS ESPECIFICAS DE LOGIN */

/**
* @async
* @category DB - Login
* @function getIdByUserName
* @desc SELECT - Obtiene la ID de un usuario por su nombre de usuario
* @param {string} username Nombre de usuario
* @returns {JSON} ID del usuario
* @throws {Error} Detalle del error
*/
export async function getIdByUserName(username){
    try{
        const id = await pool.query(`SELECT * FROM editores WHERE usuario = ?`,[username]);
        return id[0];
    }catch(e){
        console.log(e.message);
    }
}

/* CONSULTAS ESPECIFICAS DE CONTADOR */

/**
* @async
* @category DB - Contador
* @function agregarContador
* @desc INSERT - Agrega un nuevo contador a la tabla contador
* @returns {Array} Registro del nuevo contador agregado
* @throws {Error} Detalle del error
*/
export async function agregarContador(){
    try{
        const [row] = await pool.query(`INSERT INTO contador 
        (cantContador, moneda, textoContador)
        VALUES (?,?,?)
        `, [0, null, " "]);
        return (row);
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Contador
* @function borrarContador
* @desc DELETE - Borra el último contador de la tabla contador
* @returns {Array} Resultado de la eliminación
* @throws {Error} Detalle del error
*/
export async function borrarContador(){
    try{
        const last = await getFin('id', 'contador');
        const response = await deleteRegister('contador', last.fin);
        return response;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Contador
* @function actualizarContador
* @desc UPDATE - Actualiza los valores de un contador en la tabla contador
* @param {integer} id ID del contador a actualizar
* @param {integer} cantidad Nueva cantidad
* @param {string} moneda Nueva moneda
* @param {string} texto Nuevo texto
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarContador(id, cantidad, moneda, texto){
    try {
        const [row] = await pool.query(
            `UPDATE contador
            SET cantContador=?, moneda=?, textoContador=?
            WHERE id=?`,
            [cantidad, moneda, texto, id]
        );
        return row;
    } catch(e){
        console.log(e.message);
    }
}

/* CONSULTAS ESPECIFICAS DE EDITORES */

/**
* @async
* @category DB - Editores
* @function createEditor
* @desc INSERT - Crea un nuevo editor en la tabla editores
* @param {string} usuario Nombre de usuario
* @param {string} contrasena Contraseña
* @param {string} accessToken Token de acceso
* @param {integer} superUsuario Superusuario (1 si es superusuario, 0 si no lo es)
* @returns {Array} Registro del nuevo editor agregado
* @throws {Error} Detalle del error
*/
export async function createEditor(usuario, contrasena, accessToken, superUsuario) {
    try{
        const [row] = await pool.query(`INSERT INTO editores 
    (usuario, contrasena, accessToken, superUsuario)
    VALUES (?,?,?,?)
    `, [ usuario, contrasena, accessToken, superUsuario]);
    return (row);
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Editores
* @function actualizarEditorPermiso
* @desc UPDATE - Actualiza los permisos de un editor en la tabla editores
* @param {integer} id ID del editor a actualizar
* @param {integer} superUsuario Superusuario (1 si es superusuario, 0 si no lo es)
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarEditorPermiso(id, superUsuario){
    try{
        const [row] = await pool.query(
            `UPDATE editores
            SET superUsuario=?
            WHERE id=?`,
            [superUsuario, id]
        );
        return row;
    }catch(e){
        console.log(e.message);
    }
}

/**
* @async
* @category DB - Editores
* @function actualizarUsuarioEditor
* @desc UPDATE - Actualiza el nombre de usuario de un editor en la tabla editores
* @param {integer} id ID del editor a actualizar
* @param {string} usuario Nuevo nombre de usuario
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarUsuarioEditor(id, usuario){
    try{
        const [row] = await pool.query(
            `UPDATE editores
            SET usuario=?
            WHERE id=?`,
            [usuario, id]
        );
        return row;
    }catch(e){
        console.log(e.message + 'db');
    }
}

/**
* @async
* @category DB - Editores
* @function actualizarContrasenaEditor
* @desc UPDATE - Actualiza la contraseña de un editor en la tabla editores
* @param {integer} id ID del editor a actualizar
* @param {string} contrasena Nueva contraseña
* @returns {Array} Registro actualizado
* @throws {Error} Detalle del error
*/
export async function actualizarContrasenaEditor(id, contrasena){
    try{
        const [row] = await pool.query(
            `UPDATE editores
            SET contrasena=?
            WHERE id=?`,
            [contrasena, id]
        );
        return row;
    }catch(e){
        console.log(e.message);
    }
}