import express from 'express'
import morgan from 'morgan'
import { PORT } from '../config/serverConfig.js';
import apiRoutes from '../routes/apiRoutes.js'
import connectDB from '../config/dbConfig.js';
// Create a new expressApp/Server object

const app = express();
console.log(import.meta);
app.set('/view engine' , 'ejs');

app.set('views' , import.meta.dirname + '/views');

app.use(morgan('combined'));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded()); 

app.use('/api' , apiRoutes);

app.get('/' , (req , res)=>{
  res.render('home' , {name : 'Krityan Kashyap'});
});

app.get('/ping' , (req , res)=>{
    return res.json({
      message : 'pong'
    });
});

app.all('*' , (req , res)=>{
  return res.status(404).json({
    message : 'not found'
  });
});

app.listen(PORT , ()=>{
    console.log(`server is running in port: ${PORT}`);
    connectDB();

});