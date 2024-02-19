const MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '/': ' ', // Space
  };

  const decodeMorse = function(morseCode){
    // Your code here
    // You can use MORSE_CODE[morse]
    let result=[];
    let letter=[];
    let k=0;//count letter for word
    let k1=0;//count word for result
    let countSpace=0;
    morseCode=morseCode.split('');
    for(let i=0;i<morseCode.length;i++){
      if(morseCode[i]!=' '){
        letter.push(morseCode[i]);
        countSpace=0;
        k++;
        if(i==morseCode.length-1){
            result[k1]=MORSE_CODE[letter.join('')];
        }
      }else if(countSpace==0&&k>0){
        countSpace++;
        k=0;
        result[k1]=MORSE_CODE[letter.join('')];
        console.log(result);
        k1++;
        letter.length=0;
        
      }else if(countSpace >=2 && morseCode[i+1]!=undefined){
        result[k1]=" ";
        console.log(result);
        k1++;
        
      }
      else if(k1>0){
        countSpace++;          
      }
    }
    console.log(result.join(''));
    return result.join('');
  
  }
  console.log(decodeMorse('   .... . -.--   '));