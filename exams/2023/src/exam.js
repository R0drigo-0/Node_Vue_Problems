import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3001;
const __dirname = path.resolve();
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

const bookBikeModule = function(){
  //optional
  let buildTimeOut = (bikeId)=>{
    return {
      state: 0, //0: off  1: on
      startTimeOut: function(){
        //TODO
        this.state = 1;
        setTimeout(() => {
          if (this.state === 1 && bookingPromises[bikeId]) {
            bookingPromises[bikeId].resolve('booked');
            this.state = 0;
            bookingPromises[bikeId] = null;
          }
        }, 5000);  
      }
    }
  }

  //optional
  let bikesTimeouts = [buildTimeOut(1), buildTimeOut(2), buildTimeOut(3), buildTimeOut(4), buildTimeOut(5)]

  //TODO
  let bookingPromises = {};

  const bookBike = function(bikeId, slotId) {
    return new Promise((resolve, reject) => {
      if (bikeId === slotId) {
        return reject('rejected');
      }
      
      if (bookingPromises[bikeId]) {
        bookingPromises[bikeId].reject('rejected');
      }
      
      bookingPromises[bikeId] = { resolve, reject };
      
      if (bikesTimeouts[bikeId-1].state === 0) {
        bikesTimeouts[bikeId-1].startTimeOut();
      }
    });
  };

  return {
    bookBike: bookBike
  };
}()

app.get('/book', function(req, res) {
    if (typeof bookBikeModule != "undefined") {
      //req.query.bikeId
      //req.query.slotId
      //res.write('booked');
      //res.write('rejected');
      //hint: promise.then((value)=>{}).catch((err)=>{}).finally(()=>res.end())
      const bikeId = parseInt(req.query.bikeId);
      const slotId = parseInt(req.query.slotId);

      bookBikeModule.bookBike(bikeId, slotId)
        .then((value) => {
          res.write(value); // 'booked'
        })
        .catch((err) => {
          res.write(err); // 'rejected'
        })
        .finally(() => res.end());
      
    } else {
        // hardcoded response for when bookBike function is not implemented
        const randomBoolean = Math.random() < 0.5;
        setTimeout(()=>{
          res.write(randomBoolean ? 'booked' : 'rejected');
          res.end();
        }, 1000)
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));