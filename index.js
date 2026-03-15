import express from 'express'
//variaveis
import {var_ex1} from './dec_variaveis/ex1.js'
import {var_ex2} from './dec_variaveis/ex2.js'
import {var_ex3} from './dec_variaveis/ex3.js'
//estrutua condicional
import { est_ex1 } from './est_condicional/ex1.js'
import { est_ex2 } from './est_condicional/ex2.js'
import { est_ex3 } from './est_condicional/ex3.js'
import { est_ex4 } from './est_condicional/ex4.js'
//laços
import { lac_ex1 } from './laços/ex1.js'
import { lac_ex2 } from './laços/ex2.js'
import { lac_ex3 } from './laços/ex3.js'
import { lac_ex4 } from './laços/ex4.js'
import { lac_ex5 } from './laços/ex5.js'
//opa
import { opa1 } from './op_aritméticos/ex1.js'
import { opa2 } from './op_aritméticos/ex2.js'
import { opa3 } from './op_aritméticos/ex3.js'
import { opa4 } from './op_aritméticos/ex4.js'
import { opa5 } from './op_aritméticos/ex5.js'
import { opa6 } from './op_aritméticos/ex6.js'
import { opa7 } from './op_aritméticos/ex7.js'
//switch
import { sw } from './switch/ex1.js'
//operadores logicos
import { op_e } from './op_logicos/ex1.js'
import { op_ou } from './op_logicos/ex2.js'
import { op_not } from './op_logicos/ex3.js'
//vetores
import {vetor_ex1} from './vetores/ex1.js'
import {vetor_ex2} from './vetores/ex2.js'
//json
import { verProdutos } from './produtos/verProdutos.js'
//opr
import { opr1 } from './op_relacionais/ex1.js'
import { opr2 } from './op_relacionais/ex2.js'
import { opr3 } from './op_relacionais/ex3.js'
import { opr4 } from './op_relacionais/ex4.js'
import { opr5 } from './op_relacionais/ex5.js'
import { opr6 } from './op_relacionais/ex6.js'

const app = express()

//variaveis
app.get('/var1', (req,res) => {
    let resp = var_ex1()
    res.send(`Os dados do estudante é:${resp}`)
})
app.get('/var2', (req,res) => {
    let resp = var_ex2()
    res.send(`a soma dos dois números informado é:${resp}`)
})
app.get('/var3', (req,res) => {
    let resp = var_ex3()
    res.send(`A área do círculo é:${resp}`)
})

//estrutura condicional
app.get('/est1', (req,res) => {
    let resp = est_ex1()
    res.send(`O Indivíduo tem ${resp}`)
})

app.get('/est2', (req,res) => {
    let resp = est_ex2()
    res.send(`${resp}`)
})


app.get('/est3', (req,res) => {
    let resp = est_ex3()
    res.send(`${resp}`)
})

app.get('/est4', (req,res) => {
    let resp = est_ex4()
    res.send(`${resp}`)
})
//laços
app.get('/lac1', (req,res) => {
    let resp = lac_ex1()
    res.send(`${resp}`)
})
app.get('/lac2', (req,res) => {
    let resp = lac_ex2()
    res.send(`${resp}`)
})
app.get('/lac3', (req,res) => {
    let resp = lac_ex3()
    res.send(`${resp}`)
})
app.get('/lac4', (req,res) => {
    let resp = lac_ex4()
    res.send(`${resp}`)
})
app.get('/lac5', (req,res) => {
    let resp = lac_ex5()
    res.send(`${resp}`)
})

//operadores aritmeticos
app.get('/opa1', (req,res) => {
    let resp = opa1()
    res.send(`${resp}`)
})
app.get('/opa2', (req,res) => {
    let resp = opa2()
    res.send(`${resp}`)
})
app.get('/opa3', (req,res) => {
    let resp = opa3()
    res.send(`${resp}`)
})
app.get('/opa4', (req,res) => {
    let resp = opa4()
    res.send(`${resp}`)
})
app.get('/opa5', (req,res) => {
    let resp = opa5()
    res.send(`${resp}`)
})
app.get('/opa6', (req,res) => {
    let resp = opa6()
    res.send(`${resp}`)
})
app.get('/opa7', (req,res) => {
    let resp = opa7()
    res.send(`${resp}`)
})
//switch
app.get('/sw', (req,res) => {
    let resp = sw()
    res.send(`${resp}`)
})
//operadores logicos
app.get('/op1', (req,res) => {
    let resp = op_e()
    res.send(`${resp}`)
})

app.get('/op2', (req,res) => {
    let resp = op_ou()
    res.send(`${resp}`)
})

app.get('/op3', (req,res) => {
    let resp = op_not()
    res.send(`${resp}`)
})
//vetores
app.get('/vet1', (req,res) => {
    let resp = vetor_ex1()
    res.send(`${resp}`)
})

app.get('/vet2', (req,res) => {
    let resp = vetor_ex2()
    res.send(`${resp}`)
})
//json 
app.get("/produtos", verProdutos);
//opr
app.get('/opr1', (req,res) => {
    let resp = opr1()
    res.send(`${resp}`)
})
app.get('/opr2', (req,res) => {
    let resp = opr2()
    res.send(`${resp}`)
})
app.get('/opr3', (req,res) => {
    let resp = opr3()
    res.send(`${resp}`)
})
app.get('/opr4', (req,res) => {
    let resp = opr4()
    res.send(`${resp}`)
})
app.get('/opr5', (req,res) => {
    let resp = opr5()
    res.send(`${resp}`)
})
app.get('/opr6', (req,res) => {
    let resp = opr6()
    res.send(`${resp}`)
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})