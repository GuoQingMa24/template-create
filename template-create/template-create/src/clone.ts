import degit  = require('degit');

export default async function  clone (){

    const repoUrlName = 'repoUrl';
    const DestinationPath = '123';

    const emitter = degit(repoUrlName,{
        cache:true,
        force:true,
    });//1.clone的仓库地址2.参数的配置

    emitter.on('info',(message)=>{
       console.log('Info',message);
   })
    emitter.on('warn',(message)=>{
        console.log('Warning',message);
    })

    try {
        await emitter.clone(DestinationPath);
        return true;
    } catch (error) {
        console.error('Error:', error);
        return false; // 或者根据需求处理错误
    }
}




