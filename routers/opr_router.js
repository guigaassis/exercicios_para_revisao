import { opr1 } from '../op_relacionais/ex1.js'
import { opr2 } from '../op_relacionais/ex2.js'
import { opr3 } from '../op_relacionais/ex3.js'
import { opr4 } from '../op_relacionais/ex4.js'
import { opr5 } from '../op_relacionais/ex5.js'
import { opr6 } from '../op_relacionais/ex6.js'

import express from 'express'
const router_opr = express()

router_opr.get('/opr1/:idade', (req,res) => {
   let {idade} = req.params
   let resposta = {
    resultado: `${opr1(Number(idade))}`
   }
   res.json(resposta)
})
router_opr.get('/opr2/:temperatura', (req,res) => {
    let {temperatura} = req.params
    let resposta = {
     resultado: `${opr2(Number(temperatura))}`
    }
    res.json(resposta)
})
router_opr.get('/opr3/:nota', (req,res) => {
   let {nota} = req.params
   let resposta = {
    resultado: `${opr3(Number(nota))}`
   }
   res.json(resposta)
})
router_opr.get('/opr4/:idade', (req,res) => {
    let {idade} = req.params
   let resposta = {
    resultado: `${opr4(Number(idade))}`
   }
   res.json(resposta)
})
router_opr.get('/opr5/:senha', (req,res) => {
    let {senha} = req.params
    let resposta = {
     resultado: `${opr5(String(senha))}`
    }
    res.json(resposta)
})
router_opr.get('/opr6/:numero', (req,res) => {
    let {numero} = req.params
   let resposta = {
    resultado: `${opr6(Number(numero))}`
   }
   res.json(resposta)
})

export {router_opr}