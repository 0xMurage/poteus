const fs =require('fs/promises');
const path =require('path');

const {dest,src:files}=parseArgs();

const destination = path.join(__dirname,dest);

files.forEach((file)=>{
    fs.cp(path.join(__dirname, file),path.join(destination,path.basename(file)),{recursive:true})
        .then(()=>console.log('File copied'))
        .catch((r)=>console.error('File not copied',r))
})


function parseArgs(){
    const args = process.argv.slice(2);
    let destinationFolder = 'dist';
    const destArgFlags=['--d','-d'];

    const files=[];

    let skip=false;
    args.forEach((arg,index)=>{
        if(skip){
            skip=false;
            return;
        }

      if(destArgFlags.includes(arg) && index+1 !== args.length){
            destinationFolder = args[index+1]
            skip = true;
        }else{
          files.push(arg)
        }
    });

    return {src:files,dest:destinationFolder};
}