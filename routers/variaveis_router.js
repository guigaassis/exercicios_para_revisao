import {var_ex1} from '../dec_variaveis/ex1.js'
import {var_ex2} from '../dec_variaveis/ex2.js'
import {var_ex3} from '../dec_variaveis/ex3.js'

import express from 'express'
const router_variaveis = express()

//variaveis

router_variaveis.get('/var1', (req,res) => {
    let resp = var_ex1()
    res.send(`Os dados do estudante é:${resp}`)
})
router_variaveis.get('/var2', (req,res) => {
    let resp = var_ex2()
    res.send(`a soma dos dois números informado é:${resp}`)
})
router_variaveis.get('/var3', (req,res) => {
    let resp = var_ex3()
    res.send(`A área do círculo é:${resp}`)
})

export {router_variaveis}