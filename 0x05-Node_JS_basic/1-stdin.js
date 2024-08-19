const message = 'Welcome to Holberton School, what is your name?';
console.log(message);

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  // process.exit()
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
