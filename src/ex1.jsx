function phrase(name) {
  const randnum = Math.floor(Math.random() * 5);
  if (randnum == 4) {
    return console.log(name + " got number 4");
  } else if (randnum == 3) {
    return console.log(name + " got number 3");
  } else if (randnum == 2) {
    return console.log(name + " got number 2");
  } else if (randnum == 1) {
    return console.log(name + " got number 1");
  } else if (randnum == 0) {
    return console.log(name + " got number 0");
  }
}

console.log(phrase("Alejandro"));
