const n = 11111111111

const isPrimeNumber = (number) => {
    let divisores = 0;
    
    for(let i = 1; i < number; i++){
      if(divisores > 2) break;
      if(number % i === 0) divisores++ ;
    }

    if(divisores > 2) console.log(number, 'Não é primo');
    else console.log(number, 'É primo');
}

isPrimeNumber(n) 