/**
 * @method filesPayloadExists
 * @category middleware
 * @desc Función que verifica si existen archivos en la carga de la solicitud
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Función para pasar al siguiente middleware
 */
export default function filesPayloadExists(req, res, next) {
    if (!req.files) {
      // Devolver respuesta de error si no se encuentran archivos en la carga de la solicitud
      return res.status(400).json({ status: "error", message: "Missing files" });
    }
  
    // Continuar con el siguiente middleware si se encuentran archivos en la carga de la solicitud
    next();
  }
  
