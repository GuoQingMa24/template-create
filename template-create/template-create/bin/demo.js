// #!/usr/bin/env node
// //该文件可以用node去执行
// const { program } = require('commander');//命令行的处理的工具
// const chalk = require('chalk')//命令行的样式工具
// const inquirer = require('inquirer')//命令行的交互工具
// const ora = require('ora')
// const figlet = require('figlet')
//
// const { program } = require('commander');
//
// // 定义程序名称和用法
// program.name('template-create').usage('<command> [option]')
//     .description('A CLI tool for managing templates');
//
// // 定义 `--version` 选项
// program.option('-v, --version', 'tell the template version')
//     .action(() => {
//         console.log('Template version: 1.0.0');
//     });
//
// // 定义 `clone` 命令
// program.command('clone <source> [destination]')
//     .description('Clone a repository into a newly created directory')
//     .action((source, destination) => {
//         console.log('Source:', source);
//         console.log('Destination:', destination);
//     });
//
// // 解析命令行参数
// program.parse(process.argv);
//
// // 获取所有选项
// const options = program.opts();
// console.log(options);
// const chalk = require('chalk')
// //---------------------chalk----------------------
//
// console.log(chalk.red(123));
// //可以用Chalk来控制命令行中命令的颜色
// inquirer
//     .prompt([
//         {
//             type:'input',//选项的类型
//             name:'food',//选项的键名
//             message:'what do you want to eat?',//提示信息
//             default:'Hamburger'//默认值
//         },
//         {
//             type:'confirm',
//             name:'hot',
//             message:'Do you eat spicy food?',
//             default:false
//         },
//     ])
//     .then((answer)=>{
//         console.log(answer)//答应输入
//     })
//     .catch((error)=>{
//         if(error.isTtyError){
//
//             console.log('input error');//提示错误
//         }
//     })
//
// const spinner = ora('Loading...').start()//创建一个开始的实例
// setTimeout(()=>{
//     spinner.text = 'Network loading...';//加载过程的提示
//     spinner.color='red';//加载样式改变
// },2000)
// setTimeout(()=>{
//     spinner.succeed('Success!');//成功
//     spinner.fail('Network error');
//     spinner.color='green';
// },4000)
//
// figlet('Wang shi yi is a beauty!',function(err,data){
//     if(err){
//         console.log('Something went wrong...');
//         console.log(err);
//         return;
//     }
//     console.log(data)
// });