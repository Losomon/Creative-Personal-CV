import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(helmet())
app.use(cors({ origin: true }))
app.use(express.json({ limit: '1mb' }))

app.get('/health', (req, res) => {
  res.json({ ok: true, name: 'solomon-cv-backend' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' })
})

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`)
})

