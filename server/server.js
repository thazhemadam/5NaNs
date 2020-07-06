const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.resolve(__dirname,'..','public');
console.log(publicDirectoryPath);
app.use(express.static(publicDirectoryPath));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(publicDirectoryPath, 'index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server is up and running!');
});