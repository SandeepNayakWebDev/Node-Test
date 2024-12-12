const fs = require ("fs");

function main(filename){
fs.readFile(filename,"utf-8",function(err,data)
{
    let wordCount =0;
    for(let i=0;i<data.length;i++){
        if (data[i]===" "){
             wordCount++;
        }
       
    }
    console.log(wordCount+1);
})
}
main("a.txt");