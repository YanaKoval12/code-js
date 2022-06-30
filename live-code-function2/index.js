function getPrimes (num){

    for(let number = 2; number  <=  num;  number +=1 ){
        let isPrime = true;

        for(let index = 2; index < number; index += 1){
            if(number % index === 0){
                isPrime = false;
            }
        }
        if(isPrime){
            console.log(number);
        }
    }
    }

getPrimes(10);