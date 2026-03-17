import { opr1 } from '../op_relacionais/ex1.js'
import { opr2 } from '../op_relacionais/ex2.js'
import { opr3 } from '../op_relacionais/ex3.js'
import { opr4 } from '../op_relacionais/ex4.js'
import { opr5 } from '../op_relacionais/ex5.js'
import { opr6 } from '../op_relacionais/ex6.js'

import express from 'express'
const router_opr = express()

router_opr.get('/opr1', (req,res) => {
    let resp = opr1()
    res.send(`${resp}`)
})
router_opr.get('/opr2', (req,res) => {
    let resp = opr2()
    res.send(`${resp}`)
})
router_opr.get('/opr3', (req,res) => {
    let resp = opr3()
    res.send(`${resp}`)
})
router_opr.get('/opr4', (req,res) => {
    let resp = opr4()
    res.send(`${resp}`)
})
router_opr.get('/opr5', (req,res) => {
    let resp = opr5()
    res.send(`${resp}`)
})
router_opr.get('/opr6', (req,res) => {
    let resp = opr6()
    res.send(`${resp}`)
})

export {router_opr}