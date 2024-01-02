const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
 const validator = require('validator')
 const vali = validator.isEmail('anilfth2001@gmail.com')
 console.log(vali ? chalk.green.inverse(vali) : chalk.red.inverse(vali));