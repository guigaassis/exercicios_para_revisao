import { sw } from '../switch/ex1.js'

import express from 'express'
const router_sw = express()

router_sw.get('/sw/:opcao', (req,res) => {
    let {opcao} = req.params
    let resposta = {
        resultado: `${sw(Number(opcao))}`
    }
    res.json(resposta)
})

export {router_sw}