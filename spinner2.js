//process.stdout.write('hello from spinner1.js... \rheyyy\n');


const arr = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\rJ '];
let start = 100;
for (const char of arr) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, start); // <= 1s delay to make it noticeable. Can dial it down later.
    start += 200;
}


/*
setTimeout(() => {
  process.stdout.write('\r| ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\ '); 
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r| '); 
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/ '); 
}, 1100);*/