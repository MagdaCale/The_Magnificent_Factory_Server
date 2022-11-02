import './config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { encrypt } from './middleware/encryptMiddleware.js'
import { userLoginController } from './controller/userLoginController.js'
import { verifyBearer } from './controller/authController.js'
import { checkToken } from './middleware/verifyMiddleware.js'
import { getAllFreeWorkersController } from './controller/workerController.js'


// Falls ihr multer oder den express validator nutzt, importiert diese einfach auch
const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.get('/', (req,res) => {
    res.status(200).send('Alles OKAY')
})

app.post('/api/login', encrypt, userLoginController )
app.get('/api/verify', verifyBearer)
app.get('/admin/home', checkToken, getAllFreeWorkersController )


app.listen(PORT, () => console.log('Server runs on Port:', PORT))