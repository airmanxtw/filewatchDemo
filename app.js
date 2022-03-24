const fs = require('fs'); 
  
fs.watch("text.txt", (eventType, filename) => { 
  console.log("\nThe file", filename, "was modified!"); 
  console.log("The type of change was:", eventType); 
  if(eventType == 'change')
  {
    var today=new Date();
    var newfile=`${today.getFullYear().toString()}${today.getMonth().toString()}${today.getDay().toString()}-${today.getHours().toString()}${today.getMinutes().toString()}${today.getMinutes().toString()}.txt`;
    fs.copyFile(filename,`d://${newfile}`,(err)=>{
        if(err)
            console.log(`發生錯誤:${err}`);
        else
            console.log(`備份成功:${newfile}`);
    });
  }
}); 