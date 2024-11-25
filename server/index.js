import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const port = 3000;

const server = app.listen(port, ()=>{
    console.log("server is listening....");
});

const wss = new WebSocketServer({ server });

wss.on('connection',(msg)=>{
    msg.on('message', (data)=>{
        console.log("data form client : ", data);
        msg.send("hay buddy, response from server");
    });
});

