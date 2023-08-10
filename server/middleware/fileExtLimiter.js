import path from "path";
/**
 * @method fileExtLimiter
 * @category middleware
 * @desc Función que limita las extensiones de archivo permitidas
 * @param {string[]} allowedExtArray - Array de extensiones de archivo permitidas
 * @returns {Function} Middleware para limitar las extensiones de archivo permitidas
 */
export default function fileExtLimiter(allowedExtArray) {
    return (req, res, next) => {
      const files = req.files;
  
      const fileExtensions = [];
      Object.keys(files).forEach((key) => {
        fileExtensions.push(path.extname(files[key].name));
      });
  
      // Verificar si la extensión de archivo está permitida
      const allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext));
  
      if (!allowed) {
        const message = `Upload failed. Only ${allowedExtArray
          .toString()
          .replaceAll(",", ", ")} files allowed.`;
  
        // Devolver respuesta de error si la extensión de archivo no está permitida
        return res.status(422).json({ status: "error", message });
      }
  
      // Continuar con el siguiente middleware si la extensión de archivo está permitida
      next();
    };
  }
  