import express from "express";
import path from 'path';
import upload from "./multerConfig.js";
import { fileURLToPath } from 'url';




const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 5000

app.use(express.static('file-upload'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });


app.post('/profile', upload.single('avatar'), function (req,res,next){
    console.log(req.file)

    try{
        return res.status(200).json({message : 'File uploaded suceessfully'})
}catch (e){
    return res.status(400).json({message : error.message})
}
});

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
    
    if (!req.files || req.files.length === 0) {
        return res.status(400).send('file upload failed');
      }

    return res.status(200).json({ message: 'File uploaded successfully!' });
  });


  app.listen(port, () => {
    console.log(`Example app listening: ${port}`)
  })
