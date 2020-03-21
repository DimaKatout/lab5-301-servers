'use strict'
const express = require ('express');
const server = express();
//express is a function 
//hour opening to get to our server (the port we are listning to)
//ma3naha use what Herubo gives you or use 3000
const PORT= process.env.PORT|| 3000;
//hala2 bedi a3mel statrt la server ta3i and make it start to things


server.use(express.static('./public'));


//hala2 create a Route esmo test
//and when this rote is called we will run a function
server.get('/test', (request,response) => {
    //the request is for the test
    //and the response
    response.send('your test worked');
    
    });

    server.get('/data',(request,response)=>{
        let family=[
            {name:a},
            {name:b},
            {name:c},
            {name:d}
        ];

       // turn family into a json and send it to the browser
        response.json(family)
    })

//one of the method we are going to have
//hay almethod ma3naha we are going to listen to a port and start running a function
server.listen(PORT,() => console.log('listining on port ' , PORT));

//hala2 be alconsole bedi a5ali alserver yesma3 
//npm start on my terminal


