const camelCase = function(input) {
    // Your code here
    // for (i = 0; i < input.length; i++) {
    // let arrayString = [""] ;
    // let concateString  =  arrayString.join("");
    //   }

    return input.split(' ').map(function(p,a) {
        if (a === 0) {
            return p.toLowerCase();
        }
        return p.charAt(0).toUpperCase() + p.slice(1);
    }).join('')
  };



  console.log(camelCase("this is a string"));
  console.log(camelCase("holy heck"));
  console.log(camelCase("supercalifragalisticexpialidocious"));

// thisIsAString
// holyHeck
// supercalifragalisticexpialidocious