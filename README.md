
# express-async-handler

Transform async handlers to use them in Express v4.


## Install

```sh
npm install @altipla/express-async-handler
```


## Usage

```ts
import express from 'express'
import type { Request, Response } from 'express'
import { asyncHandler } from '@altipla/express-async-handler'

async function exampleHandler(req: Request, res: Response) {
  await (...)
  return 'ok'
}

let app = express()
app.use('/example', asyncHandler(exampleHandler))
```

