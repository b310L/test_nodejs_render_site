const express = require('express')
var bodyParser = require('body-parser')
const fs=require('fs');
const path =require('path');


const url=require('url');
const app = express()


const port = 5000

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username)
//   })
   
//   // POST /api/users gets JSON bodies
//   app.post('/api/users', jsonParser, function (req, res) {
//     // create user in req.body
//   })



app.get(['/form', '/', ],(req, res) => {
    let filepath=path.join(__dirname,req.url==="/"?"index.html":req.url)
    let extname=path.extname(filepath);
    let ctype="text/html";
    switch (extname) {
        case 'js' :
            ctype="text/javascript"
            break;
        case 'css' :
            ctype="text/css"
            break;
        case 'json' :
            ctype="application/json"
            break;
        case '.png' :
            ctype="image/png"
            break;
    
    }
    if (ctype==='text/html' && extname==='') {
        filepath+='.html'; 
    }

    // let otherpath=`I:\\a_programming\\Web\\Internet Engineer\\React\\my-react-app\\src\\index.js`
    // ctype='text/javascript'
    fs.readFile(filepath,(err,data)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.writeHead(200,{'content-type':ctype});
            res.end(data);
        }
    })
   
    console.log('filepath',filepath);
    console.log(`extname `,extname);
    console.log(`ctype `,ctype);
  
 
})

// app.get('/submit-get',(req, res) => {
//     console.log('submit clicked');
//     // const username = req.body.username
//     var q = url.parse(req.url, true);
//     var qdata = q.query; 
//     console.log(`username is ${qdata.username}`);
    
//     fs.readFile('submitted.html',(err,data)=>{
//         if (err) {
//             console.log(err);
//         }
//         else{
//             console.log('read');
//             res.writeHead(200,{'content-type':'text/html'});
//             res.end(`<Span>${qdata.username}</span>`+data);
//         }
//     })
    
// })




app.post('/submit',urlencodedParser, (req, res) => {
    console.log('submit clicked');
    const name = req.body.name
    const date = req.body.date
    const adress = req.body.adress
    const email = req.body.email
    console.log(name);
    console.log(`<Span>${name} ${date} ${adress} ${email} type=post</span>`);
    console.log('read');
    res.writeHead(200,{'content-type':'text/html'});
    console.log(req.body);
    console.log(`url is ${JSON.stringify(req.body)}`);
    // fs.readFile('I:\\a_programming\\Web\\Internet Engineer\\Node\\testnode1\\submitted.html',(err,data)=>{
    //     if (err) {
    //         console.log(err);
    //     }
    //     else{
    //         console.log('read');
    //         res.writeHead(200,{'content-type':'text/html'});
    //         console.log(req.body);
    //         console.log(`url is ${JSON.stringify(req.body)}`);
    //         // res.end(JSON.stringify(req.body));
    //         // res.status(204).send();
    //     }

    // })
    
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })