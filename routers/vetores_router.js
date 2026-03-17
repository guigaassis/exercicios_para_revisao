import {vetor_ex1} from '../vetores/ex1.js'
import {vetor_ex2} from '../vetores/ex2.js'

import express from 'express'
const router_vetor = express()

router_vetor.get('/vet1', (req,res) => {
    let resp = vetor_ex1()
    res.send(`${resp}`)
})

router_vetor.get('/vet2', (req,res) => {
    let resp = vetor_ex2()
    res.send(`${resp}`)
})

export {router_vetor}