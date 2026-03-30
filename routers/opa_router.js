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
        resultado: `${opa1(Number(saldo), Number(gasto))}`
    }
    res.json(resposta)
})
router_opa.get('/opa3', (req,res) => {
    let resp = opa3()
    res.send(`${resp}`)
})
router_opa.get('/opa4', (req,res) => {
    let resp = opa4()
    res.send(`${resp}`)
})
router_opa.get('/opa5', (req,res) => {
    let resp = opa5()
    res.send(`${resp}`)
})
router_opa.get('/opa6', (req,res) => {
    let resp = opa6()
    res.send(`${resp}`)
})
router_opa.get('/opa7', (req,res) => {
    let resp = opa7()
    res.send(`${resp}`)
})


export {router_opa}