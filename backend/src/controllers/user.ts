import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";
import { UserInterface } from "../interfaces/user";
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(username, password);
    const user = await User.findOne({ where: { username: username } })
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }
    try {
        await User.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            msg: 'Usuario creado'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Ups a ocurrido un error'
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user: any = await User.findOne({ where: { username: username } })
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username}`
        })
    }
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Contraseña Incorrecta'
        })
    }
    const token = jwt.sign({
        username: username
    },process.env.SECRET_KEY || 'WY54I8BnC*WfENnQ');
    //aqui lo tenia entre llaves
    res.json(token);
}
//process.env.SECRET_KEY || 'WY54I8BnC*WfENnQ', expiresIn:'10000');