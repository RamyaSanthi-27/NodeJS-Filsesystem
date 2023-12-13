const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const date = new Date().toString().replace( / [ - : ] /g , ' '); // Format: YYYYMMDDTHHmmss;
//Create the Folder timestamp
const folderName = '/Guvi/NodeJs-TASK/timestamp';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}  
 
//Create date-time.txt file in timestamp folder and add current date in the file           
fs.writeFileSync('./timestamp/date-time.txt', `${date}`);

//join the txt file to folder
const filePath = path.join('/timestamp/','date-time.txt')

// API endpoint to get the timestamp
app.get('/', (req, res) => {
    res.send((`The date and time will display in this folder and file : ${filePath}`));
  });
app.get('/timestamp/date-time.txt', (req,res) => {
  res.send(`The current date and time is ${date}`);
})
  app.listen(3000);

  


