import express from 'express'
import PrismaRoutes from './routes/product.routes'

const app = express()
app.use(express.json())
app.use("/Product", PrismaRoutes)

export default app