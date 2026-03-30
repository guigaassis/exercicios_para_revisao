import { est_ex1 } from '../est_condicional/ex1.js'
import { est_ex2 } from '../est_condicional/ex2.js'
import { est_ex3 } from '../est_condicional/ex3.js'
import { est_ex4 } from '../est_condicional/ex4.js'

import express from 'express'
const router_estc = express()

//estrutura condicional
router_estc.get('/est1/:idade', (req,res) => {
    let {idade} = req.params
    let resposta = {
        resultado: est_ex1(Number(idade))
    }
    res.json(resposta)
})

router_estc.get('/est2/', (req,res) => {
    let {nota} = req.query
    let resposta = {
        resultado: est_ex2(Number(nota))
    }
    res.json(resposta)
})


router_estc.get('/est3', (req,res) => {
    let {nota} = req.query
    let resposta = {
        resultado: est_ex3(Number(nota))
    }
    res.json(resposta)
})

router_estc.get('/est4/:numero', (req,res) => {
    let {numero} = req.params
    let resposta = {
        resultado: est_ex4(Number(numero))
    }
    res.json(resposta)
})

export {router_estc}