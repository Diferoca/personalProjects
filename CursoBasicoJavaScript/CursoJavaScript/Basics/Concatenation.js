function concatenation(noun, adjetive, verb, adverb){
  let result = '';
    // result += 'The ' + adjetive + ' ' + noun  + ' ' + verb  + ' ' + 'to the hause' + ' ' + adverb;
//* the best way to do the same thing is through 
    result += `The ${adjetive} ${noun} ${verb} to the house ${adverb}`;
  return result;
}

console.log(concatenation('dog', 'big', 'ran', 'quicky'));
