import { arch } from 'node:os'
import {vetor_ex1} from '../vetores/ex1.js'
import {vetor_ex2} from '../vetores/ex2.js'

import express from 'express'
const router_vetor = express()

router_vetor.get('/vet1', (req,res) => {
   let {nomeBuscado} = req.query
   let resposta = {
    resultado: `${vetor_ex1(String(nomeBuscado))}`
   }
   res.json(resposta)
})

router_vetor.post('/vet2/', (req,res) => {
    let {vendas} = req.body
    let resposta = {
        resultado: `${vetor_ex2(vendas)}`
    }
    res.json(resposta)
})

export {router_vetor}