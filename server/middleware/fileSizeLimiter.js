

/**
 * @method fileSizeLimiter
 * @category middleware
 * @desc Función que limita el tamaño de archivo permitido
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 * @param {Function} next - Función para pasar al siguiente middleware
 */
export default function fileSizeLimiter(req, res, next) {
    const MB = 15; // Tamaño máximo en MB
    const FILE_SIZE_LIMIT = MB * 1024 * 1024;
    const files = req.files;
  
    const filesOverLimit = [];
    // ¿Qué archivos están por encima del límite?
    Object.keys(files).forEach((key) => {
      if (files[key].size > FILE_SIZE_LIMIT) {
        filesOverLimit.push(files[key].name);
      }
    });
  
    if (filesOverLimit.length) {
      const properVerb = filesOverLimit.length > 1 ? "are" : "is";
  
      const sentence = `Upload failed. ${filesOverLimit.toString()} ${properVerb} over the file size limit of ${MB} MB.`;
  
      const message =
        filesOverLimit.length < 3
          ? sentence.replace(",", " and")
          : sentence.replace(/,(?=[^,]*$)/, " and");
  
      // Devolver respuesta de error si los archivos exceden el tamaño permitido
      return res.status(413).json({ status: "error", message });
    }
  
    // Continuar con el siguiente middleware si los archivos están dentro del tamaño permitido
    next();
  }
  