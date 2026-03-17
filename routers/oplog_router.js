import { op_e } from '../op_logicos/ex1.js'
import { op_ou } from '../op_logicos/ex2.js'
import { op_not } from '../op_logicos/ex3.js'

import express from 'express'
const router_op = express()




router_op.get('/op1', (req,res) => {
    let resp = op_e()
    res.send(`${resp}`)
})

router_op.get('/op2', (req,res) => {
    let resp = op_ou()
    res.send(`${resp}`)
})

router_op.get('/op3', (req,res) => {
    let resp = op_not()
    res.send(`${resp}`)
})

export {router_op}