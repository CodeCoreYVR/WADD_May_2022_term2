import chalk from 'chalk';
console.log(chalk.blue('Hello World'))
console.log(chalk.blue("hello world"));

console.log(chalk.red.bgBlue("hello world"));

console.log(chalk.green.bgRed.bold("hello world"));

console.log(chalk.yellow.bgBlack.bold.underline("hello world"));

console.log(chalk.yellow.bgBlack.bold.underline.italic("hello world"));
