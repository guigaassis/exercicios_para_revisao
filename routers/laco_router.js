import { lac_ex1 } from '../laços/ex1.js'
import { lac_ex2 } from '../laços/ex2.js'
import { lac_ex3 } from '../laços/ex3.js'
import { lac_ex4 } from '../laços/ex4.js'
import { lac_ex5 } from '../laços/ex5.js'

import express from 'express'
const router_laco = express()

router_laco.get('/lac1', (req,res) => {
    let resp = lac_ex1()
    res.send(`${resp}`)
})
router_laco.get('/lac2', (req,res) => {
    let resp = lac_ex2()
    res.send(`${resp}`)
})
router_laco.get('/lac3', (req,res) => {
    let resp = lac_ex3()
    res.send(`${resp}`)
})
router_laco.get('/lac4', (req,res) => {
    let resp = lac_ex4()
    res.send(`${resp}`)
})
router_laco.get('/lac5', (req,res) => {
    let resp = lac_ex5()
    res.send(`${resp}`)
})

export {router_laco}
