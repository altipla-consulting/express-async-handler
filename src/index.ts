
import type { NextFunction, Request, Response } from 'express'

export function asyncHandler<T>(handler: (req: Request, resp: Response, next: NextFunction) => Promise<T> | T) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(handler(req, res, next))
      .then(result => {
        if (result) {
          res.send(result)
        }
      })
      .catch(next)
  }
}
