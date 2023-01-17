const sentence = "hello there from lighthouse labs\n";
let count = 0;
for (const char of sentence) {
  count += 50;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, (1000 + count)); // <= 1s delay to make it noticeable. Can dial it down later.
}
// console.log('\n');