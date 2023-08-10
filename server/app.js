import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import path from "path";
import filesPayloadExists from './middleware/filesPayloadExists.js'
import fileExtLimiter from './middleware/fileExtLimiter.js'
import fileSizeLimiter from './middleware/fileSizeLimiter.js'
import { unlink } from 'node:fs/promises';
import nodemailer from "nodemailer";
import * as http from 'http';
import cors from 'cors';
import CryptoJS from "crypto-js";
import axios from "axios";

//importa consultas de la base de datos
import {
    getAll,
    createNoticia,
    deleteRegister,
    getRegisterById,
    actualizarNoticia,
    createMultimedia,
    getMails,
    getRutaByNombre,
    getLatestNews,
    getNoticiasWMultimedia,
    getNoticiaById,
    getAnioInicio,
    getCant,
    getContenidoRoadmap,
    getIdByAnio,
    agregarAnio,
    actualizarRoadmap,
    getFin,
    borrarAnio,
    actualizarContenido,
    getIdByUserName,
    agregarContador,
    borrarContador,
    actualizarContador,
    createEditor,
    actualizarEditorPermiso,
    actualizarUsuarioEditor,
    actualizarContrasenaEditor,
    getImgByAnio,
    roadmapWMultimedia,
} from "./database.js";


/**
 * Instancia de la aplicación Express
 */
const app = express();
/**
 * Clave utilizada para encriptación/desencriptación
 */
const key = process.env.CRYPTO_KEY;

/**
 * Configuración para el uso del formato JSON en la aplicación
 */
app.use(express.json());
app.use(cookieParser())
/**
 * Configuración para permitir CORS (Cross-Origin Resource Sharing)
 */

app.use(cors(
  {origin: true,
  credentials: true,}
));
axios.defaults.withCredentials = true



// Endpoints


/**
 * @function /noticias/
 * @inner
 * @category app.js - Noticias 
 * @subcategory GET
 * @desc GET - Obtiene todos los registros de la tabla noticias
 * @returns {Array} Registros de noticias
 */
app.get("/noticias/", async (req, res) => {
  const noticias = await getAll("noticias");
  res.status(200).send(noticias);
});

/**
 * @function /noticiasWM/
 * @category app.js - Noticias
 * @subcategory GET
 * @desc GET - Obtiene todos los registros de la tabla noticias con los respectivos campos de multimedia
 * @returns {Array} Registros de noticias con campos de multimedia
 */
app.get("/noticiasWM/", async (req, res) => {
  const noticias = await getNoticiasWMultimedia();
  res.status(200).send(noticias);
});

/**
 * @function /latestNews/
 * @category app.js - Noticias
 * @subcategory GET
 * @desc GET - Obtiene los últimos 5 registros de la tabla noticias con los respectivos campos de multimedia
 * @returns {Array} Últimas noticias con campos de multimedia
 */
app.get("/latestNews/", async (req, res) => {
  const news = await getLatestNews();
  res.status(200).send(news);
});

/**
 * @function /noticias/:id
 * @category app.js - Noticias
 * @subcategory GET
 * @desc GET - Obtiene una noticia por su ID junto con los atributos de la multimedia correspondiente
 * @param {integer} id - ID de la noticia
 * @returns {Object} Noticia con campos de multimedia
 */
app.get("/noticias/:id", async (req, res) => {
  const noticia = await getNoticiaById(req.params.id);
  res.status(200).send(noticia);
});

/**
 * @function /noticias/crear
 * @category app.js - Noticias
 * @subcategory POST
 * @desc POST - Crea una nueva noticia en la tabla noticias
 * @param {string} titulo - Título de la noticia
 * @param {string} descripcion - Descripción de la noticia
 * @param {integer} multimediaId - ID de la foto utilizada en la noticia
 * @param {Date} fecha - Fecha de creación de la noticia
 * @param {string} link - Enlace a la noticia real
 * @returns {Object} Noticia creada
 */
app.post("/noticias/crear", async (req,res) =>{
    const {titulo, descripcion, multimediaId, fecha, link} = req.body;
    const creacion = await createNoticia(titulo, descripcion, multimediaId, fecha, link);

    // Envío de correo a los suscriptores
    const Mails = await getMails();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pasanteinnovaspace@gmail.com',
          pass: 'hfjikvfxtrhdbamp'
        }
      });
      let multimedia = await getRegisterById("multimedia",multimediaId);
      
      for (let i = 0; i < Mails.length; i++) {  
        let mailActual = Mails[i].emailSus; 
        let texto = descripcion + '<br />' + link
        let multimedia = await getRegisterById("multimedia",multimediaId);
        const mailOptions = {
          from: 'pasanteinnovaspace@gmail.com',
          to: mailActual,
          subject: titulo,
          text: texto,
          html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width,initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]><style type="text/css">a{text-decoration:none}</style><![endif]--><!--[if gte mso 9]><style>sup{font-size:100%!important}</style><![endif]--><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng></o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><!--<![endif]--></head><body><div class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#000000"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-position:center top"><tbody><tr><td class="esd-email-paddings" valign="top"><table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe es-m-p15r es-m-p15l" align="center" esd-custom-block-id="466827"><table class="es-header-body" width="640" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody><tr><td class="esd-structure es-p25t es-p25b es-p40r es-p40l es-m-p30t es-m-p20b es-m-p20r es-m-p20l" align="left" bgcolor="#000" style="background-color:#000;border-radius:20px"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="https://qchlqk.stripocdn.email/content/guids/videoImgGuid/images/logo_zzU.png" alt style="display:block" width="560"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p30t es-p40r es-p40l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer" height="15"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe es-m-p15r es-m-p15l" align="center" esd-custom-block-id="466831"><table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color:transparent"><tbody><tr><td class="esd-structure es-p40 es-m-p30t es-m-p30b es-m-p20r es-m-p20l" align="left" bgcolor="#ffffff" style="background-color:#fff;border-radius:20px 20px 0 0" esd-custom-block-id="468138"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" align="left" class="esd-container-frame"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text es-m-txt-l"><h1 style="text-transform:uppercase;line-height:120%">tenemos novedades</h1></td></tr><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img class="adapt-img" src="cid:unique@multimedia${multimediaId}.ee" alt="${titulo}" style="display:block" width="351"></a></td></tr><tr><td align="left" class="esd-block-text es-p15t"><p>We open a new project for the production of electronic goods.</p><p><br></p><p>As a result, you will receive a commensurate reward in the end!<br>It will be a good investment.</p></td></tr><tr><td align="center" class="esd-block-button es-p30t"><!--[if mso]><a href="https://viewstripo.email/" target="_blank" hidden><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevvmlbutton href="https://viewstripo.email/" style="height:52px;v-text-anchor:middle;width:198px" arcsize="50%" strokecolor="#ffdda9" strokeweight="2px" fillcolor="#03b6e8"><w:anchorlock></w:anchorlock><center style='color:#000;font-family:"Exo 2",sans-serif;font-size:20px;font-weight:400;line-height:20px;mso-text-raise:1px'>More Details</center></v:roundrect></a><![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="background:#03b6e8"><a href="${link}" class="es-button" target="_blank" style="background:#03b6e8;mso-border-alt:10px solid #03b6e8">More Details</a></span><!--<![endif]--></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p30t es-p40r es-p40l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer" height="15"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p40t es-p40b es-m-p30t es-m-p30b" align="left" bgcolor="#ffffff" style="background-color:#fff;border-radius:20px" esd-custom-block-id="644699"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="640" class="esd-container-frame es-p40r es-p40l es-m-p20l es-m-p20r" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text"><h1>Descarga nuestra app</h1></td></tr><tr><td align="center" class="esd-block-social es-p40t" style="font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"><tbody><tr><td align="center" valign="top" class="es-p30r es-m-p10b" esd-tmp-icon-type="appstore"><a target="_blank" href="https://viewstripo.email/"><img title="AppStore" src="https://qchlqk.stripocdn.email/content/guids/CABINET_2b317663e817a90f786fc8c89a5d00a7/images/appstore.png" alt="AppStore" height="48"></a></td><td align="center" valign="top" class="es-p30r es-m-p10b" esd-tmp-icon-type="windowsstore"><a target="_blank" href="https://viewstripo.email/"><img title="Windows Store" src="https://qchlqk.stripocdn.email/content/guids/CABINET_2b317663e817a90f786fc8c89a5d00a7/images/windowsstore.png" alt="Windows Store" height="48"></a></td><td align="center" valign="top" esd-tmp-icon-type="googleplay"><a target="_blank" href="https://viewstripo.email/"><img title="Google Play" src="https://qchlqk.stripocdn.email/content/guids/CABINET_2b317663e817a90f786fc8c89a5d00a7/images/googleplay.png" alt="Google Play" height="48"></a></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-text es-p15t"><p>We noticed that you are not using the application, download the application to know where our stores are located, it's convenient! Try it and we will give you a nice bonus.</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p30t es-p40r es-p40l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer" height="15"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center"><tbody><tr><td class="esd-stripe es-m-p15r es-m-p15l" align="center" esd-custom-block-id="468142"><table class="es-footer-body" width="640" cellspacing="0" cellpadding="0" align="center" style="background-color:transparent"><tbody><tr><td class="esd-structure es-p40 es-m-p30t es-m-p30b es-m-p20r es-m-p20l" align="left" bgcolor="#ffffff" style="background-color:#fff;border-radius:20px"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="560" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-social es-p20t es-m-txt-l" style="font-size:0"><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"><tbody><tr><td align="center" valign="top" class="es-p15r"><a target="_blank" href><img title="Facebook" src="https://qchlqk.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32" height="32"></a></td><td align="center" valign="top" class="es-p15r"><a target="_blank" href><img title="Twitter" src="https://qchlqk.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32" height="32"></a></td><td align="center" valign="top" class="es-p15r"><a target="_blank" href><img title="Instagram" src="https://qchlqk.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32" height="32"></a></td><td align="center" valign="top"><a target="_blank" href><img title="Youtube" src="https://qchlqk.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32" height="32"></a></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-text es-p15t es-m-txt-l"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></td></tr><tr><td align="center" class="esd-block-text es-p10t es-m-txt-l"><p><a target="_blank">Unsubscribe</a></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>`,
         attachments: [{
            filename: multimedia[0].nombre,
            path: `../client/public/assets/${multimedia[0].nombre}`,
            cid: `unique@multimedia${multimediaId}.ee` //same cid value as in the html img src
        }]
        };
        return res.status(200).send(transporter.sendMail(mailOptions));
      }
    
    res.status(200).send(creacion);
});
/**
 * @function /noticias/borrar/:id
 * @category app.js - Noticias
 * @subcategory DELETE
 * @desc DELETE - Elimina un registro de noticia en la tabla noticias
 * @param {string} id - ID del registro de la noticia a eliminar
 * @returns {Object} Estado de la operación de eliminación
 */
app.delete("/noticias/borrar/:id", async (req, res) => {
    const eliminado = await deleteRegister("noticias", req.params.id);
    res.status(200).send(eliminado);
  });
  
  /**
   * @function /noticias/actualizar/:id

   * @category app.js - Noticias
   * @subcategory PUT
   * @desc PUT - Actualiza un registro de noticia en la tabla noticias
   * @param {string} id - ID del registro de la noticia a actualizar
   * @param {string} titulo - Nuevo título de la noticia
   * @param {string} descripcion - Nueva descripción de la noticia
   * @param {integer} multimediaId - Nuevo ID de la foto utilizada en la noticia
   * @param {string} link - Nuevo enlace a la noticia real
   * @returns {Object} Estado de la operación de actualización
   */
  app.put("/noticias/actualizar/:id", async (req, res) => {
    const { titulo, descripcion, multimediaId, link } = req.body;
    const actualizado = await actualizarNoticia(
      req.params.id,
      titulo,
      descripcion,
      multimediaId,
      link
    );
    res.status(200).send(actualizado);
  });
  
/**
 * MULTIMEDIA
 */

  /**
   * @function /multimedia
ia
   * @category app.js - Multimedia
   * @subcategory GET
   * @desc GET - Obtiene todos los registros de multimedia en la tabla multimedia
   * @returns {Object} Registros de multimedia
   */
  app.get("/multimedia", async (req, res) => {
    const multimedia = await getAll("multimedia");
    res.status(200).send(multimedia);
  });
  
  /**
   * @function /multimedia/:id
   * @category app.js - Multimedia
   * @subcategory GET
   * @desc GET - Obtiene un registro de multimedia por su ID en la tabla multimedia
   * @param {string} id - ID del registro de multimedia a obtener
   * @returns {Object} Registro de multimedia
   */
  app.get("/multimedia/:id", async (req, res) => {
    const multimedia = await getRegisterById("multimedia", req.params.id);
    res.status(200).send(multimedia);
  });
  
  /**
   * @function /multimedia/upload/:tabla
   * @category app.js - Multimedia
   * @subcategory POST
   * @desc POST - Sube un archivo multimedia a la carpeta de activos y crea un registro en la tabla multimedia
   * @param {string} tabla - Tabla donde se creará el registro de multimedia
   * @returns {Object} Estado de la operación de carga y creación de registro
   */
  app.post(
    "/multimedia/upload/:tabla",
    fileUpload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter([".png", ".jpg", ".jpeg", ".mp4", ".webp", ".glb", ".gltf"]),
    fileSizeLimiter,
    async (req, res) => {
      const files = req.files;
      let ruta = "",
        nombre = "";
      Object.keys(files).forEach((key) => {
        const filepath = path.join("../client/public/", "assets", files[key].name);
        files[key].mv(filepath, (err) => {
          if (err) return res.status(500).json({ status: "error", message: err });
        });
        ruta = "../../assets/" + files[key].name;
        nombre = files[key].name;
      });
      await createMultimedia(ruta, nombre, req.params.tabla);
      return res.json({ status: "success", message: Object.keys(files).toString() });
    }
  );
  
  /**
   * @function /multimediaisw/:tabla/:nombre
   * @category app.js - Multimedia
   * @subcategory GET
   * @desc GET - Obtiene la ruta de un archivo multimedia por su nombre y tabla en la base de datos
   * @param {string} tabla - Tabla donde se encuentra el registro de multimedia
   * @param {string} nombre - Nombre del archivo multimedia
   * @returns {Object} Ruta del archivo multimedia
   */
  app.get("/multimediaisw/:tabla/:nombre", async (req, res) => {
    const ruta = await getRutaByNombre(req.params.tabla, req.params.nombre);
    return res.status(200).send(ruta);
  });
  
  /**
   * @function /multimediaisw/
   * @category app.js - Multimedia
   * @subcategory GET
   * @desc GET - Obtiene todos los registros de multimedia en la tabla multimediainnovaweb
   * @returns {Object} Registros de multimedia
   */
  app.get("/multimediaisw/", async (req, res) => {
    const data = await getAll("multimediainnovaweb");
    return res.status(200).send(data);
  });
  
  /**
   * @function /multimedia/delete/:id
   * @category app.js - Multimedia
   * @subcategory DELETE
   * @desc DELETE - Elimina un registro de multimedia por su ID en la tabla especificada y elimina el archivo correspondiente
   * @param {string} id - ID del registro de multimedia a eliminar
   * @param {string} nombre - Nombre del archivo multimedia a eliminar
   * @param {string} tabla - Tabla donde se encuentra el registro de multimedia
   * @returns {Object} Estado de la operación de eliminación
   */
  app.delete("/multimedia/delete/:id", async (req, res) => {
    const { nombre, tabla } = req.body;
    const eliminado = await deleteRegister(tabla, req.params.id);
    await unlink(`../client/public/assets/${nombre}`);
    return res.status(200).send(eliminado);
  });
  
/*CONTACTO */
 /**
    *@function /contacto
    *@category app.js - Contacto
    *@subcategory POST
    *@desc POST - Envía un correo electrónico de contacto utilizando la información proporcionada en la solicitud
    *@param {string} email - Dirección de correo electrónico del remitente
    *@param {string} subject - Asunto del correo electrónico
    *@param {string} html - Contenido HTML del correo electrónico
    *@returns {Object} Estado de la operación de envío del correo electrónico
*/
app.post('/contacto', async (req, res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pasanteinnovaspace@gmail.com',
          pass: 'hfjikvfxtrhdbamp'
        }
      });
    
      const mailOptions = {
        from: req.body.email,
        to: 'pasanteinnovaspace@gmail.com',
        subject: `Mensaje de ${req.body.email}: ${req.body.subject}`,
        html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial,'helvetica neue',helvetica,sans-serif"><head><meta charset="UTF-8"><meta content="width=device-width,initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>Contact</title><!--[if (mso 16)]><style type="text/css">a{text-decoration:none}</style><![endif]--><!--[if gte mso 9]><style>sup{font-size:100%!important}</style><![endif]--><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng></o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Imprima&display=swap" rel="stylesheet"><!--<![endif]--><style type="text/css">#outlook a{padding:0}.es-button{mso-style-priority:100!important;text-decoration:none!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.es-desk-hidden{display:none;float:left;overflow:hidden;width:0;max-height:0;line-height:0;mso-hide:all}@media only screen and (max-width:600px){a,ol li,p,ul li{line-height:150%!important}h1,h1 a,h2,h2 a,h3,h3 a{line-height:120%}h1{font-size:30px!important;text-align:left}h2{font-size:24px!important;text-align:left}h3{font-size:20px!important;text-align:left}.es-content-body h1 a,.es-footer-body h1 a,.es-header-body h1 a{font-size:30px!important;text-align:left}.es-content-body h2 a,.es-footer-body h2 a,.es-header-body h2 a{font-size:24px!important;text-align:left}.es-content-body h3 a,.es-footer-body h3 a,.es-header-body h3 a{font-size:20px!important;text-align:left}.es-menu td a{font-size:14px!important}.es-header-body a,.es-header-body ol li,.es-header-body p,.es-header-body ul li{font-size:14px!important}.es-content-body a,.es-content-body ol li,.es-content-body p,.es-content-body ul li{font-size:14px!important}.es-footer-body a,.es-footer-body ol li,.es-footer-body p,.es-footer-body ul li{font-size:14px!important}.es-infoblock a,.es-infoblock ol li,.es-infoblock p,.es-infoblock ul li{font-size:12px!important}[class=gmail-fix]{display:none!important}.es-m-txt-c,.es-m-txt-c h1,.es-m-txt-c h2,.es-m-txt-c h3{text-align:center!important}.es-m-txt-r,.es-m-txt-r h1,.es-m-txt-r h2,.es-m-txt-r h3{text-align:right!important}.es-m-txt-l,.es-m-txt-l h1,.es-m-txt-l h2,.es-m-txt-l h3{text-align:left!important}.es-m-txt-c img,.es-m-txt-l img,.es-m-txt-r img{display:inline!important}.es-button-border{display:block!important}a.es-button,button.es-button{font-size:18px!important;display:block!important;border-right-width:0!important;border-left-width:0!important;border-top-width:15px!important;border-bottom-width:15px!important}.es-adaptive table,.es-left,.es-right{width:100%!important}.es-content,.es-content table,.es-footer,.es-footer table,.es-header,.es-header table{width:100%!important;max-width:600px!important}.es-adapt-td{display:block!important;width:100%!important}.adapt-img{width:100%!important;height:auto!important}.es-m-p0{padding:0!important}.es-m-p0r{padding-right:0!important}.es-m-p0l{padding-left:0!important}.es-m-p0t{padding-top:0!important}.es-m-p0b{padding-bottom:0!important}.es-m-p20b{padding-bottom:20px!important}.es-hidden,.es-mobile-hidden{display:none!important}table.es-desk-hidden,td.es-desk-hidden,tr.es-desk-hidden{width:auto!important;overflow:visible!important;float:none!important;max-height:inherit!important;line-height:inherit!important}tr.es-desk-hidden{display:table-row!important}table.es-desk-hidden{display:table!important}td.es-desk-menu-hidden{display:table-cell!important}.es-menu td{width:1%!important}.esd-block-html table,table.es-table-not-adapt{width:auto!important}table.es-social{display:inline-block!important}table.es-social td{display:inline-block!important}.es-desk-hidden{display:table-row!important;width:auto!important;overflow:visible!important;max-height:inherit!important}}</style></head><body style="width:100%;font-family:arial,'helvetica neue',helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><div class="es-wrapper-color" style="background-color:transparent"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="transparent" origin="0.5, 0" position="0.5, 0"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:transparent"><tr><td valign="top" style="padding:0;Margin:0"><table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"><tr><td align="center" style="padding:0;Margin:0"><table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#bcb8b1" align="center" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#fff;width:600px"><tr><td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px;background-color:#333" bgcolor="#333333" align="left"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td valign="top" align="center" style="padding:0;Margin:0;width:520px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td style="padding:0;Margin:0;font-size:0" align="center"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#2d3142;font-size:14px"><img src="https://xfqxtr.stripocdn.email/content/guids/CABINET_8fbf7439e9e0e40182a7e26d95da8b01c8644c9fdecc3edb905ed7e96dff4a7b/images/image.png" alt="Logo" style="display:block;border:0;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic" title="Logo" height="60"></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%"><tr><td align="center" style="padding:0;Margin:0"><table class="es-content-body" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#efefef;border-radius:20px 20px 0 0;width:600px" cellspacing="0" cellpadding="0" bgcolor="#efefef" align="center"><tr><td style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px;background-color:#000" bgcolor="#000000" align="left"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td valign="top" align="center" style="padding:0;Margin:0;width:520px"><table style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:separate;border-spacing:0;background-color:#fafafa;border-radius:10px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#fafafa" role="presentation"><tr><td align="left" style="padding:20px;Margin:0"><h3 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:Imprima,Arial,sans-serif;font-size:28px;font-style:normal;font-weight:700;color:#2d3142">Hola!</h3><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Imprima,Arial,sans-serif;line-height:27px;color:#2d3142;font-size:18px"><br>${req.body.firstName} ${req.body.surname} de ${req.body.nationality} nos ha enviado el siguiente mensaje:<br type="_moz"></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Imprima,Arial,sans-serif;line-height:27px;color:#2d3142;font-size:18px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Imprima,Arial,sans-serif;line-height:27px;color:#2d3142;font-size:18px"><em>"</em>${req.body.message}<em>"</em><br type="_moz"></p></td></tr></table></td></tr></table></td></tr></table></td></tr></table><table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%"><tr><td align="center" style="padding:0;Margin:0"><table class="es-content-body" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0;background-color:#efefef;border-radius:0 0 20px 20px;width:600px" cellspacing="0" cellpadding="0" bgcolor="#efefef" align="center"><tr><td style="Margin:0;padding-top:30px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-color:#000" bgcolor="#000000" align="left"><table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td valign="top" align="center" style="padding:0;Margin:0;width:520px"><table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-collapse:collapse;border-spacing:0"><tr><td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="mailto:${req.body.email}?subject=Re%3A${req.body.subject}" target="_blank" hidden><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevvmlbutton href="mailto:${req.body.email}?subject=Re%3A${req.body.subject}" style="height:56px;v-text-anchor:middle;width:520px" arcsize="50%" stroke="f" fillcolor="#ffffff"><w:anchorlock></w:anchorlock><center style="color:#2d3142;font-family:Imprima,Arial,sans-serif;font-size:22px;font-weight:700;line-height:22px;mso-text-raise:1px">Responder</center></v:roundrect></a><![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-style:solid;border-color:#2cb543;background:#fff;border-width:0;display:block;border-radius:30px;width:auto;mso-hide:all"><a href="mailto:${req.body.email}?subject=Re%3A${req.body.subject}" class="es-button msohide" target="_blank" style="mso-style-priority:100!important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#2d3142;font-size:22px;padding:15px 20px 15px 20px;display:block;background:#fff;border-radius:30px;font-family:Imprima,Arial,sans-serif;font-weight:700;font-style:normal;line-height:26px;width:auto;text-align:center;mso-padding-alt:0;mso-border-alt:10px solid #4114f7;mso-hide:all;padding-left:5px;padding-right:5px">Responder</a></span><!--<![endif]--></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table></div></body></html>`,
      };
      return res.status(200).send(transporter.sendMail(mailOptions));
})

/*ROADMAP*/

/**
 * @function /roadmap/
 * @category app.js - Roadmap
 * @subcategory GET
 * @desc GET - Obtiene el año de inicio del roadmap
 * @returns {Object} Año de inicio del roadmap
 */
app.get("/roadmap/", async (req, res) => {
    const roadmap = await getAnioInicio();
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/fin
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene el año de fin del roadmap
   * @returns {Object} Año de fin del roadmap
   */
  app.get("/roadmap/fin", async (req, res) => {
    const roadmap = await getFin("anio", "roadmap");
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/cantidad
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene la cantidad de años en el roadmap
   * @returns {Object} Cantidad de años en el roadmap
   */
  app.get("/roadmap/cantidad", async (req, res) => {
    const roadmap = await getCant("anios", "roadmap");
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/contenido
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene el contenido del roadmap
   * @returns {Object} Contenido del roadmap
   */
  app.get("/roadmap/contenido", async (req, res) => {
    const roadmap = await getContenidoRoadmap();
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/agregar/anio
   * @category app.js - Roadmap
   * @subcategory POST
   * @desc POST - Agrega un nuevo año al roadmap
   * @returns {Object} Estado de la operación de agregación de año
   */
  app.post("/roadmap/agregar/anio", async (req, res) => {
    const roadmap = await agregarAnio();
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/borrar/anio
   * @category app.js - Roadmap
   * @subcategory DELETE
   * @desc DELETE - Elimina el último año del roadmap
   * @returns {Object} Estado de la operación de eliminación de año
   */
  app.delete("/roadmap/borrar/anio", async (req, res) => {
    const roadmap = await borrarAnio();
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/:anio
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene el ID de un año en el roadmap por su número de año
   * @param {string} anio - Número de año en el roadmap
   * @returns {Object} ID del año en el roadmap
   */
  app.get("/roadmap/:anio", async (req, res) => {
    const roadmap = await getIdByAnio(req.params.anio);
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/img/:anio
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene la imagen del roadmap por su número de año
   * @param {string} anio - Número de año en el roadmap
   * @returns {Object} Imagen del año en el roadmap
   */
  app.get("/roadmap/img/:anio", async (req, res) => {
    const roadmap = await getImgByAnio(req.params.anio);
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/actualizar
   * @category app.js - Roadmap
   * @subcategory PUT
   * @desc PUT - Actualiza un año en el roadmap
   * @param {string} anio - Número de año a actualizar
   * @param {string} anioNuevo - Nuevo número de año
   * @param {string} contenido - Contenido actualizado del año
   * @returns {Object} Estado de la operación de actualización del año
   */
  app.put("/roadmap/actualizar", async (req, res) => {
    const { anio, anioNuevo, contenido } = req.body;
    const roadmap = await actualizarRoadmap(anio, anioNuevo, contenido);
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /roadmap/actualizar/anio/:anio
   * @category app.js - Roadmap
   * @subcategory PUT
   * @desc PUT - Actualiza el contenido de un año en el roadmap
   * @param {string} anio - Número de año a actualizar
   * @param {string} contenido - Contenido actualizado del año
   * @param {string} img - Imagen actualizada del año
   * @returns {Object} Estado de la operación de actualización del contenido del año
   */
  app.put("/roadmap/actualizar/anio/:anio", async (req, res) => {
    const { contenido, img } = req.body;
    const roadmap = await actualizarContenido(req.params.anio, contenido, img);
    res.status(200).send(roadmap);
  });
  
  /**
   * @function /data/roadmap/all
   * @category app.js - Roadmap
   * @subcategory GET
   * @desc GET - Obtiene el roadmap con información multimedia
   * @returns {Object} Roadmap con información multimedia
   */
  app.get("/data/roadmap/all", async (req, res) => {
    const roadmap = await roadmapWMultimedia();
    res.status(200).send(roadmap);
  });

  
/*NEWSLETTER*/
/**
 * @function /newsletter
 * @category app.js - Newsletter
 * @subcategory GET
 * @desc GET - Obtiene los correos electrónicos del newsletter
 * @returns {Object} Correos electrónicos del newsletter
 */
app.get("/newsletter", async (req, res) => {
    const newsletter = await getMails();
    res.status(200).send(newsletter);
  });

/*LOGIN */
/**
 * @function /login/id/:id
 * @category app.js - Login
 * @subcategory GET
 * @desc GET - Obtiene un registro de inicio de sesión por su ID de usuario
 * @param {string} id - ID de usuario
 * @returns {Object} Registro de inicio de sesión
 */
app.get('/login/id/:id', async (req, res) => {
    const login = await getIdByUserName(req.params.id);
    res.status(200).send(login);
  });
  
  /**
   * @function /encriptar
   * @category app.js - Login
   * @subcategory POST
   * @desc POST - Encripta un contenido utilizando una clave
   * @param {string} contenido - Contenido a encriptar
   * @returns {Object} Texto encriptado
   */
  app.post('/encriptar', async (req, res) => {
    const { contenido } = req.body;
    const encryptedText = CryptoJS.AES.encrypt(contenido, key).toString();
    res.send({
      textoEncriptado: encryptedText
    });
  });
  
  /**
   * @function /desencriptar
   * @category app.js - Login
   * @subcategory POST
   * @desc POST - Desencripta un contenido utilizando una clave
   * @param {string} contenido - Contenido a desencriptar
   * @returns {Object} Texto desencriptado
   */
  app.post('/desencriptar', (req, res) => {
    const { contenido } = req.body;
    const bytes = CryptoJS.AES.decrypt(contenido.toString(), key);
    const textoDesencriptado = bytes.toString(CryptoJS.enc.Utf8);
    res.send({
      textoDesencriptado: textoDesencriptado
    });
  });

  /**
   * @function generateRandomToken
   * @category app.js - Login
   * @desc Genera un token aleatorio de la longitud especificada
   * @param {number} length - Longitud del token
   * @returns {string} Token aleatorio generado
   */
  function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
  }

  /**
   * @function /autenticacion/:username/:password
   * @category app.js - Login
   * @subcategory GET
   * @desc GET - Realiza la autenticación de un usuario
   * @param {string} username - Nombre de usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Object} Estado de la autenticación y token de acceso
   */
  
  app.get('/autenticacion/:username/:password', async (req, res) => {
    //const { username, password } = req.body;
    const username = req.params.username;
    const password = req.params.password;
    const requestBodyPass = {
      contenido: password
    };
    try {
      const [login] = await getIdByUserName(username);
      console.log(login);
      if (!login) {
        throw new Error('Usuario no válido');
      }
      const requestBodyPassLogin = {
        contenido: login.contrasena
      };
      let responsePass;
      try {
        responsePass = await axios.post('http://localhost:8080/desencriptar', requestBodyPass);
      } catch (error) {
        throw new Error('Error al obtener datos');
      }
      let responsePassLogin;
      try {
        responsePassLogin = await axios.post('http://localhost:8080/desencriptar', requestBodyPassLogin);
      } catch (error) {
        throw new Error('Error al obtener datos');
      }
      const requestBodyToken = {
        contenido: login.accessToken
      };
      let token;
      if (responsePass.data.textoDesencriptado !== responsePassLogin.data.textoDesencriptado) {
        throw new Error('Contraseña incorrecta');
      } else {
        try {
          
          token = await axios.post('http://localhost:8080/desencriptar', requestBodyToken);
        } catch (error) {
          throw new Error('Error al obtener datos');
        }
      }

      res.status(200).send({ token: login.accessToken, user: username });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  /**
   * @function /validar/superUsuario/:username
   * @category app.js - Login
   * @subcategory GET
   * @desc GET - Obtiene el estado de superusuario de un usuario
   * @param {string} username - Nombre de usuario
   * @returns {Object} Estado de superusuario
   */
  app.get('/validar/superUsuario/:username', async (req, res) => {
    try {
      const response = await getIdByUserName(req.params.username);
      return res.status(200).send({ data: response[0].superUsuario });
    } catch (e) {
      console.log(e.message);
    }
  });
  
  /**
   * @function /editores
   * @category app.js - Editores
   * @subcategory GET
   * @desc GET - Obtiene todos los editores
   * @returns {Object} Editores
   */
  app.get('/editores', async (req, res) => {
    try {
      const response = await getAll('editores');
      return res.status(200).send(response);
    } catch (e) {
      console.log(e.message);
    }
  });
  
  /**
   * @function /editores/crear' 
   * @category app.js - Editores
   * @subcategory POST
   * @desc POST - Crea un nuevo editor
   * @param {string} usuario - Nombre de usuario del editor
   * @param {string} contrasena - Contraseña del editor
   * @param {boolean} superUsuario - Estado de superusuario del editor
   * @param {string} email - Correo electrónico del editor
   * @returns {Object} Estado de la creación del editor
   */
  app.post('/editores/crear', async (req, res) => {
    try {
      const { usuario, contrasena, superUsuario, email } = req.body;
      let tokenEncriptado = await axios.post('http://localhost:8080/encriptar', { contenido: generateRandomToken(8) });
      const responseCreation = await createEditor(usuario, contrasena, tokenEncriptado.data.textoEncriptado, superUsuario);
      if (!responseCreation) {
        throw new Error('Error al crear usuario');
      } else {
        try {
          let contrasenaDesencriptada = await axios.post('http://localhost:8080/desencriptar', { contenido: contrasena });
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'pasanteinnovaspace@gmail.com',
              pass: 'hfjikvfxtrhdbamp'
            }
          });
          let texto = 'Usuario: ' + usuario + ' --------------------- Contraseña: ' + contrasenaDesencriptada.data.textoDesencriptado;
          const mailOptions = {
            from: 'pasanteinnovaspace@gmail.com',
            to: email,
            subject: 'Datos de inicio de sesión. Editor Innova Space',
            text: texto,
          };
          transporter.sendMail(mailOptions);
        } catch (e) {
          throw new Error('Error al enviar correo electrónico');
        }
      }
      res.status(200).send({ data: 'Usuario creado con éxito' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
  /**
   * @function /editores/actualizarPermiso/:id
   * @category app.js - Editores
   * @subcategory PUT
   * @desc PUT - Actualiza el estado de superusuario de un editor
   * @param {string} id - ID del editor
   * @param {boolean} superUsuario - Nuevo estado de superusuario
   * @returns {Object} Estado de la actualización del permiso del editor
   */
  app.put('/editores/actualizarPermiso/:id', async (req, res) => {
    try {
      const { superUsuario } = req.body;
      const response = await actualizarEditorPermiso(req.params.id, superUsuario);
      return res.status(200).send(response);
    } catch (e) {
      console.log(e.message);
    }
  });
  
  /**
   * @function /editores/actualizarUsuario/:usuario
   * @category app.js - Editores
   * @subcategory PUT
   * @desc PUT - Actualiza el nombre de usuario de un editor
   * @param {string} usuario - Nombre de usuario actual
   * @param {string} nuevoUsuario - Nuevo nombre de usuario
   * @returns {Object} Nuevo nombre de usuario del editor
   */
  app.put('/editores/actualizarUsuario/:usuario', async (req, res) => {
    try {
      const [data] = await getIdByUserName(req.params.usuario);
      const { nuevoUsuario } = req.body;
      const response = await actualizarUsuarioEditor(data.id, nuevoUsuario);
      const [responseData] = await getRegisterById('editores', data.id);
  
      return res.status(200).send({ data: responseData.usuario });
    } catch (e) {
      console.log(e.message);
    }
  });
  
  /**
   * @function /editores/actualizarContrasena/:usuario
   * @category app.js - Editores
   * @subcategory PUT
   * @desc PUT - Actualiza la contraseña de un editor
   * @param {string} usuario - Nombre de usuario del editor
   * @param {string} contrasenaActual - Contraseña actual del editor
   * @param {string} contrasenaNueva - Nueva contraseña del editor
   * @returns {Object} Estado de la actualización de la contraseña del editor
   */
  app.put('/editores/actualizarContrasena/:usuario', async (req, res) => {
    try {
      const { contrasenaActual, contrasenaNueva } = req.body;
      const [data] = await getIdByUserName(req.params.usuario);
      const contrasenaDesencriptada = await axios.post('http://localhost:8080/desencriptar', { contenido: data.contrasena });
      if (contrasenaActual !== contrasenaDesencriptada.data.textoDesencriptado) {
        throw new Error('La contraseña actual no es correcta.');
      }
      const contrasenaEncriptada = await axios.post('http://localhost:8080/encriptar', { contenido: contrasenaNueva });
      const response = await actualizarContrasenaEditor(data.id, contrasenaEncriptada.data.textoEncriptado);
      res.status(200).send(response);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  
  /**
   * @function /editores/borrar/:id
   * @category app.js - Editores
   * @subcategory DELETE
   * @desc DELETE - Elimina un editor por su ID
   * @param {string} id - ID del editor
   * @returns {Object} Estado de la eliminación del editor
   */
  app.delete('/editores/borrar/:id', async (req, res) => {
    try {
      const response = await deleteRegister('editores', req.params.id);
      return res.status(200).send(response);
    } catch (e) {
      console.log(e.message);
    }
  });

/*CONTADOR */
/**
 * @function /contador/
 * @category app.js - Contador
 * @subcategory GET
 * @desc GET - Obtiene todos los registros del contador
 * @returns {Object} Registros del contador
 */
app.get("/contador/", async (req, res) => {
    const contador = await getAll("contador");
    res.status(200).send(contador);
  });
  
  /**
   * @function /contador/cantidad
   * @category app.js - Contador
   * @subcategory GET
   * @desc GET - Obtiene la cantidad de registros en el contador
   * @returns {Object} Cantidad de registros en el contador
   */
  app.get("/contador/cantidad", async (req, res) => {
    const contador = await getCant("cantContador", "contador");
    res.status(200).send(contador);
  });
  
  /**
   * @function /contador/agregar/
   * @category app.js - Contador
   * @subcategory POST
   * @desc POST - Agrega un nuevo registro al contador
   * @returns {Object} Estado de la operación de agregación
   */
  app.post("/contador/agregar/", async (req, res) => {
    const contador = await agregarContador();
    res.status(200).send(contador);
  });
  
  /**
   * @function /contador/borrar
   * @category app.js - Contador
   * @subcategory DELETE
   * @desc DELETE - Borra todos los registros del contador
   * @returns {Object} Estado de la operación de borrado
   */
  app.delete("/contador/borrar", async (req, res) => {
    const contador = await borrarContador();
    res.status(200).send(contador);
  });
  
  /**
   * @function /contador/borrar/:id
   * @category app.js - Contador
   * @subcategory DELETE
   * @desc DELETE - Borra un registro del contador por su ID
   * @param {string} id - ID del registro a borrar
   * @returns {Object} Estado de la operación de borrado del registro
   */
  app.delete("/contador/borrar/:id", async (req, res) => {
    const contador = await deleteRegister("contador", req.params.id);
    res.status(200).send(contador);
  });
  
  /**
   * @function /contador/actualizar/:id
   * @category app.js - Contador
   * @subcategory PUT
   * @desc PUT - Actualiza un registro del contador por su ID
   * @param {string} id - ID del registro a actualizar
   * @param {number} cantidad - Nueva cantidad del registro
   * @param {string} moneda - Nueva moneda del registro
   * @param {string} texto - Nuevo texto del registro
   * @returns {Object} Estado de la operación de actualización del registro
   */
  app.put("/contador/actualizar/:id", async (req, res) => {
    const { cantidad, moneda, texto } = req.body;
    const contador = await actualizarContador(req.params.id, cantidad, moneda, texto);
    res.status(200).send(contador);
  });

  /**
   * Crea el servidor HTTP y lo pone en escucha en el puerto 8080
   */
  http.createServer(app).listen(8080, () => {
    console.log("Server running on port 8080 (HTTP)");
  });