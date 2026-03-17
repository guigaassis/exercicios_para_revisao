import { sw } from '../switch/ex1.js'

import express from 'express'
const router_sw = express()

router_sw.get('/sw', (req,res) => {
    let resp = sw()
    res.send(`${resp}`)
})

export {router_sw}