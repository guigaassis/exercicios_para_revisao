import express from 'express'     

//variaveis
import { router_variaveis } from './routers/variaveis_router.js'
//estrutura condicional
import { router_estc } from './routers/estc_router.js'

//laços
import { router_laco } from './routers/laco_router.js'
//opa
import { router_opa } from './routers/opa_router.js'
//switch
import { router_sw } from './routers/sw_router.js'
//operadores logicos
import { router_op } from './routers/oplog_router.js'
//vetores
import { router_vetor } from './routers/vetores_router.js'
//json
import { router_json } from './routers/json_router.js'
//opr
import { router_opr } from './routers/opr_router.js'

const app = express()
app.use(express.Router())
app.use(express.json());

//variaveis
app.use('/', router_variaveis) 
//estrutura condicional
app.use('/', router_estc)
//laços
app.use('/', router_laco)
//operadores aritmeticos
app.use('/', router_opa)
//switch
app.use('/', router_sw)
//operadores logicos
app.use('/', router_op)
//vetores
app.use('/', router_vetor)
//json 
app.use('/', router_json)
//opr
app.use('/',router_opr)


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})