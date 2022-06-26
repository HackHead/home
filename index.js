import express from "express"
import path from "path";




const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve();

app.use("/js", express.static(path.join(__dirname, '/js')))
app.use("/css", express.static(path.join(__dirname, '/css')))
app.use("/fonts", express.static(path.join(__dirname, '/fonts')))
app.use("/img", express.static(path.join(__dirname, '/img')))

app.get('**', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.listen(PORT, () => {
    console.log(`App is now running on port ${PORT}`)
})