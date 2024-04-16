import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; //npm i bcryptjs
import {createAccesToken} from "../libs/jwt.js"
import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from '../config.js'

export const register = async (req, res) => {
    const { email, password, username } = req.body; //abstraer
    try {
      const userFound = await User.findOne({ email });//validacion del usuario
      if (userFound)
        return res.status(400).json(["the email already exists"]);
      const passwordHash = await bcrypt.hash(password, 10); // string aleatorio
      const newUser = new User({
        username,
        email,
        password: passwordHash, // la contraseña va tener como valor
      });
      const userSaved = await newUser.save(); //guardas al usuario
      const token = await createAccesToken({ id: userSaved._id }); // le paso el valor qu quiero guardar
      res.cookie("token", token); // guardo en una cookie
      res.json({
        //respondo al frontend
        id: userSaved._id,
        username: userSaved.username,
        password: userSaved.password,
        email: userSaved.email,
        createdAt: userSaved.email,
        updatedAt: userSaved.updatedAt,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const login = async (req, res) => {
    const { email, password } = req.body; //comparar la contraseña
    try {
      const userFound = await User.findOne({ email });
      if (!userFound) return res.status(400).json({ message: "user not found" }); //si no se encontre el user en db
      
      const isMatch = await bcrypt.compare(password, userFound.password); // compare devuelve true o false
      if (!isMatch)
        return res.status(400).json({ message: "Incorrect password" });
  
      const token = await createAccesToken({ id: userFound._id }); // del usuario encontrado va a tomar su id y vas a crear un token con ese id
      res.cookie("token", token); // guardo en una cookie
      res.json({
        //respondo al frontend
        id: userFound._id,
        username: userFound.username,
        password: userFound.password,
        email: userFound.email,
        createdAt: userFound.email,
        updatedAt: userFound.updatedAt,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const logout = (req, res) => {
    res.cookie("token", "", {
      // el valor va estar resetado a 0
      expires: new Date(0),
    });
    return res.sendStatus(200);
  };
  export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "user not found" });
  
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  };
  export const verifyToken = async (req, res) => {
    const {token} = req.cookies
    if(!token) return res.status(401).json({message:"Unauthorized"});
    jwt.verify(token, TOKEN_SECRET, async (err, user)=>{
      if (err) return res.status(401).json({message:"Unauthorized"});
  
      const userFound = await User.findById(user.id) // verifica si el usuario existye esta peticion se haca cadavez q la pagina carga por primera vez
      if(!userFound) return res.status(401).json({message:"Unauthorized"});
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
  };
