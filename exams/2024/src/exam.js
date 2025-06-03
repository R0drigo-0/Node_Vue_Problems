import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3001;
const __dirname = path.resolve();
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

const Shop = function (id, timeOut) {
  let ordered = 0

  this.toPlainObject = () => ({ id: id, ordered: ordered })

  this.offer = (units) => new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random()
      if (random >= 0.6) {
        ordered = Math.floor(units * random)
        resolve(ordered)
      } else {
        ordered = 0
        reject()
      }
    }, timeOut)
  })

}


const wholeSaleModule = (() => {
  //wholeSaleModule begin
  
  let shops = [new Shop("Shop1", 1000), new Shop("Shop2", 700), new Shop("Shop3", 200)]  
  //const getDetails = ...
  
  //If iterative solution:  
  //const stockUpdater = .....

  

  //const wholeSale = ....
  //resolves to: {remainingStock:XX, details:[{id:"Shop1",ordered:XX},...]}
  
  //return ...
  
  //wholeSaleModule end
  })()







app.get('/wholesale/:units', (req, res) => {
  if (typeof wholeSaleModule != "undefined") {
    //req.params.units
    //promise
      //.then(result => res.json(result))
      // .catch(() => res.status(500).send())
      // .finally(() => {res.end()})    
  } else {
    //dummy response
    setTimeout(()=>{
      res.json({
        remainingStock: 1,
        details: [
          { name: 'shop1', ordered: 8 },
          { name: 'shop2', ordered: 0 },
          { name: 'shop3', ordered: 1 }]
      });
      res.end()
    }, 2000)    
  }
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
