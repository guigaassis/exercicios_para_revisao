import {var_ex1} from '../dec_variaveis/ex1.js'
import {var_ex2} from '../dec_variaveis/ex2.js'
import {var_ex3} from '../dec_variaveis/ex3.js'

import express from 'express'
const router_variaveis = express()

//variaveis

router_variaveis.post('/var1', (req,res) => {
    let {nome, idade, estudante} = req.body;
    
    let resposta = {
        resultado: var_ex1(String(nome), Number(idade), Boolean(estudante))
    }

    res.json(resposta)
})
router_variaveis.get('/var2/:numero1/:numero2', (req,res) => {
    let {numero1,numero2} = req.params

    let resposta ={
        resultado:var_ex2(Number(numero1), Number(numero2))
    }

    res.json(resposta)
})
router_variaveis.get('/var3', (req,res) => {
    let {raio} = req.query;

    let resposta = {
        resultado: var_ex3(Number(raio))
    }

    res.json(resposta)
})

export {router_variaveis}