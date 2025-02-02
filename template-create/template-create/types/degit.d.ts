
declare module 'degit'{
    interface DegitOptions{
        cache?: boolean;
        force?: boolean;
    }//定义degit的配置选项


    interface DegitEmitter{
    clone(destination:string):Promise<void>;
    on(event:string,callback:(message:string)=>void):void;
    }//定义degit返回的对象和clone和on方法的定义

    function degit(repo:string,options?:DegitOptions):DegitEmitter;//定义degit函数的类型

    export  = degit;//使用CJS的方法进行导出
}