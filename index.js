let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalize(element) {
  let newElement = element.split(" ");
  let emptySentence = [];
  let emptyString = [];
  for(let word of newElement) {
    let newWord = word[0].toUpperCase() + word.slice(1,word.length);
    emptyString.push(newWord);
  }
  let newString = emptyString.join(" ");
  emptySentence.push(newString);
  const result = emptySentence.join(" ")
  return result;
  }


const titleCased = () => {
  tutorials = tutorials.map(capitalize)
  return tutorials;
}
