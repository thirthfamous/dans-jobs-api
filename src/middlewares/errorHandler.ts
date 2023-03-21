import { ErrorRequestHandler } from "express"
import { MODE } from "../config"

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        error: MODE === 'production' ? 'Something went wrong!' : err.message || 'Something went wrong!'
    })
    next(err)
}