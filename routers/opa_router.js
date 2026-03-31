import { opa1 } from '../op_aritméticos/ex1.js'
import { opa2 } from '../op_aritméticos/ex2.js'
import { opa3 } from '../op_aritméticos/ex3.js'
import { opa4 } from '../op_aritméticos/ex4.js'
import { opa5 } from '../op_aritméticos/ex5.js'
import { opa6 } from '../op_aritméticos/ex6.js'
import { opa7 } from '../op_aritméticos/ex7.js'

import express from 'express'
const router_opa = express()

router_opa.get('/opa1/:produto1/:produto2', (req,res) => {
    let {produto1, produto2} = req.params
    let resposta = {
        resultado: `${opa1(Number(produto1), Number(produto2))}`
    }
    res.json(resposta)
})
router_opa.get('/opa2/:saldo/:gasto', (req,res) => {
    let {saldo, gasto} = req.params
    let resposta = {
        resultado: `${opa2(Number(saldo), Number(gasto))}`
    }
    res.json(resposta)
})
router_opa.get('/opa3/:preco/:quantidade', (req,res) => {
    let {preco, quantidade} = req.params
    let resposta = {
        resultado: `${opa3(Number(preco), (Number(quantidade)))}`
    }
    res.json(resposta)
})
router_opa.get('/opa4/', (req,res) => {
    let {conta, pessoas} = req.query
    let resposta = {
        resultado: `${opa4 (Number(conta), Number(pessoas))}`
    }
    res.json(resposta)
})
router_opa.get('/opa5/:numero', (req,res) => {
   let {numero} = req.params
   let resposta = {
    resultado: `${opa5(Number(numero))}`
   }
   res.json(resposta)
})
router_opa.get('/opa6/:base/:expoente', (req,res) => {
   let {base, expoente} = req.params
   let resposta = {
    resultado: `${opa6(Number(base), Number(expoente))}`
   }
   res.json(resposta)
})
router_opa.get('/opa7/:numero', (req,res) => {
    let {numero} = req.params
    let resposta = {
     resultado: `${opa7(Number(numero))}`
    }
    res.json(resposta)
})


export {router_opa}