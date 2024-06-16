const {
spawn
} = require('child_process')
const path = require('path')
const chalk = require('chalk')
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

function start() {
   let args = [path.join(__dirname, 'MAIN.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
