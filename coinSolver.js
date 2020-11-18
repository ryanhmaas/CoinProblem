import { coinValues } from './constants'

// our initial implementation (plus added constants)
export function getChangeInitial(totalMoneyGivenInCents){
  const coinsActuallyReturned = [];

  function getChange(totalMoneyGivenInCents){
    if (totalMoneyGivenInCents === 0){
      return 0;
    }
    else if (totalMoneyGivenInCents === 1){
      if (coinsActuallyReturned.find(s => s.name === "pennies")){
        coinsActuallyReturned.find(s => s.name === "pennies").value++;
      }
      else{             
        coinsActuallyReturned.push({
          count: 1,
          name: 'pennies'
        });
      }
      return 1;
    }

    if (totalMoneyGivenInCents > 1 && totalMoneyGivenInCents <= 4){
      let numberOfPennies = totalMoneyGivenInCents * coinValues.find(s => s.name === 'penny').value;
      
      coinsActuallyReturned.push({
        count: numberOfPennies,
        name: 'pennies'
      });
    }
    else if(totalMoneyGivenInCents >= 5 && totalMoneyGivenInCents <= 9){
      let numberOfNickels = 1;
      let remainingValue = totalMoneyGivenInCents - (numberOfNickels * (coinValues.find(s => s.name ==='nickel').value));
      
      coinsActuallyReturned.push({
        count: numberOfNickels,
        name: 'nickels'
      });
      
      return numberOfNickels + getChange(remainingValue);
    }
    else if(totalMoneyGivenInCents >= 10 && totalMoneyGivenInCents < 25){
      let numberOfDimes = Math.floor(totalMoneyGivenInCents/10);
      
      let remainingValue = totalMoneyGivenInCents - (numberOfDimes * coinValues.find(s => s.name === 'dime').value);
      
      coinsActuallyReturned.push({
        count: numberOfDimes,
        name: 'dimes'
      });    
      
      return numberOfDimes + getChange(remainingValue);
    }
    else if(totalMoneyGivenInCents >= 25 && totalMoneyGivenInCents <= 49){
      let numberOfQuarters = Math.floor(totalMoneyGivenInCents/25);
      
      let remainingValue = totalMoneyGivenInCents - (numberOfQuarters * coinValues.find(s => s.name === 'quarter').value);
      
      coinsActuallyReturned.push({
        count: numberOfQuarters,
        name: 'quarters'
      });
      
      return numberOfQuarters + getChange(remainingValue);
    }
    else if(totalMoneyGivenInCents >= 50){
        let numberOfHalfDollars = Math.floor(totalMoneyGivenInCents/50);
        coinsActuallyReturned.push({
          count: numberOfHalfDollars,
          name: 'half-dollars'
        });
        
      let remainingValue = totalMoneyGivenInCents - (numberOfHalfDollars * coinValues.find(s => s.name === 'half-dollar').value);
      
      return numberOfHalfDollars + getChange(remainingValue);
    }
  }

  getChange(totalMoneyGivenInCents);

  return coinsActuallyReturned;
}