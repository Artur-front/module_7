for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j < 5; j++) {
      if ((i + j) % 2 === 0) {
        line += "x ";
      } else {
        line += "o ";
      }
    }
    console.log(line.trim());
  }