const fs = require('fs');
const path = require('path');
const files = require('../lib/files')
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');

console.log( path.basename(path.dirname(fs.realpathSync(__filename))) );
console.log( path.dirname(fs.realpathSync(__filename)) );
console.log( path.basename(process.cwd()) )
console.log( files.getCurrentDirectoryBase() )

clear();
console.log(
    chalk.yellow(
      figlet.textSync('xcli', { horizontalLayout: 'red' })
    )
);

if(!files.directoryExists('components')){
    fs.mkdirSync('components')
}


var args = require('minimist')(process.argv.slice(2))

console.log( args.mode )

if(!files.fileExists(args.mode+'.js')){
    fs.writeFileSync(args.mode+'.js',`hahahahahahahaha`)
}