import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies; //bilioteca que conviert las cookies // npm i cookie-parser
  if (!token)
    return res.status(401).json({ message: "no token, authorization" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = user; // almacenar información del usuario autenticado durante el procesamiento de una solicitud HTTP.
    next();
  });
};


//TOKEN_SECRET es una única clave secreta utilizada para firmar y verificar los tokens JWT en una aplicación o sistema
// req: almacena la información del usuario decodificado en el objeto de solicitud req, 