import { est_ex1 } from '../est_condicional/ex1.js'
import { est_ex2 } from '../est_condicional/ex2.js'
import { est_ex3 } from '../est_condicional/ex3.js'
import { est_ex4 } from '../est_condicional/ex4.js'

import express from 'express'
const router_estc = express()

//estrutura condicional
router_estc.get('/est1', (req,res) => {
    let resp = est_ex1()
    res.send(`O Indivíduo tem ${resp}`)
})

router_estc.get('/est2', (req,res) => {
    let resp = est_ex2()
    res.send(`${resp}`)
})


router_estc.get('/est3', (req,res) => {
    let resp = est_ex3()
    res.send(`${resp}`)
})

router_estc.get('/est4', (req,res) => {
    let resp = est_ex4()
    res.send(`${resp}`)
})

export {router_estc}