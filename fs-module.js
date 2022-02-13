var fs = require('fs')

//read a file using file system
fs.readFile('nodejs.txt','utf8',function(err,data){
    console.log(data)
})

//write a file using file system
fs.writeFile('happy_note.txt',"Be happy forever...",function(err){
    console.log("I had successfully saved the data.")
})


//Append content to a existing file
fs.appendFile('happy_note.txt',"Heyy Angayar, You will succeed one day my dear",function(err){
    console.log("I had successfully saved the data.")
})

//delete a file using unlink()
fs.unlink('file to be deleted.txt',function(err){
    // console.log('file deleted successfully');
})

