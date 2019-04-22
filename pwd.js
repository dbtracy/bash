process.stdout.write('prompt > ')

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim()

//   if (cmd === 'pwd') {
//     process.stdout.write(__dirname)
//   }

//   process.stdout.write('\nYou typed: ' + cmd)
//   process.stdout.write('\nprompt > ')
// })







function callback(data){
  const cmd = data.toString().trim()

  if (cmd === 'pwd') {
    process.stdout.write(__dirname)
  }

  process.stdout.write('\nYou typed: ' + cmd)
  process.stdout.write('\nprompt > ')
}



let ourExport = module.exports;

ourExport.callFunc = process.stdin.on('data', callback)

