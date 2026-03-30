import { lac_ex1 } from '../laços/ex1.js'
import { lac_ex2 } from '../laços/ex2.js'
import { lac_ex3 } from '../laços/ex3.js'
import { lac_ex4 } from '../laços/ex4.js'
import { lac_ex5 } from '../laços/ex5.js'

import express from 'express'
const router_laco = express()

router_laco.get('/lac1/:num', (req,res) => {
    let {num} = req.params
    let resposta = {
        resultado: `A máquina contou até ${lac_ex1(Number(num))}`
    }
    res.json(resposta)
})
router_laco.get('/lac2/:num', (req,res) => {
    let {num} = req.params
    let resposta = {
        resultado: `${lac_ex2(Number(num))}`
    }
    res.json(resposta)
})
router_laco.get('/lac3/:numero', (req,res) => {
    let {numero} = req.params
    let resposta = {
        resultado: `Mostrando a tabudada do número informado... ${lac_ex3(Number(numero))}`
    }
    res.json(resposta)
})
router_laco.post('/lac4', (req,res) => {
    let {produtos} = req.body;
    let resposta = {
        resultado: `mostrando produtos... ${lac_ex4(Array(produtos))}`
    }
    res.json(resposta)
})
router_laco.post('/lac5', (req,res) => {
    let {precos} = req.body;
    let resposta = {
        resultado: `aplicando desconto de 10% nos preços... ${lac_ex5(precos)}`
    }
    res.json(resposta)
})

export {router_laco}
