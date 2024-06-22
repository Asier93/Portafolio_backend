import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies; //bilioteca que convierte las cookies // npm i cookie-parser
  if (!token)
    return res.status(401).json({ message: "no token, authorization" });
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = user; 
    next();
  });
};
