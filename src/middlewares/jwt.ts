import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";
import { SECRET_KEY } from "../config";


export const jwtAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
 
    if (!token) {
      throw new Error();
    }
 
    const decoded = verify(token, SECRET_KEY);

    if (!decoded) {
      throw new Error('Unauthorized')
    }
     
    next();
  } catch (err) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }
}