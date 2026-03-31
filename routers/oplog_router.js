import { blob } from 'node:stream/consumers'
import { op_e } from '../op_logicos/ex1.js'
import { op_ou } from '../op_logicos/ex2.js'
import { op_not } from '../op_logicos/ex3.js'

import express from 'express'
const router_op = express()




router_op.get('/op1/', (req,res) => {
    let {idade, temCarteira} = req.query
    let resposta = {
        resultado: `${op_e(Number(idade), (Boolean(temCarteira)))}`
    }
    res.json(resposta)
})

router_op.get('/op2', (req,res) => {
    let {temDesconto, clienteVIP} = req.query
    let resposta = {
        resultado: `${op_ou(Boolean(temDesconto), (Boolean(clienteVIP)))}`
    }
    res.json(resposta)
})

router_op.get('/op3', (req,res) => {
    let {chuva} = req.query
    let resposta = {
        resultado: `${op_not(Boolean(chuva))}`
    }
    res.json(resposta)
})

export {router_op}