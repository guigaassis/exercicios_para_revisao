import { produtos } from '../produtos/verProdutos.js'

import express from 'express'
const router_json = express()

router_json.get('/json', (req, res) =>{
    res.json(produtos())
  })


  export {router_json}

