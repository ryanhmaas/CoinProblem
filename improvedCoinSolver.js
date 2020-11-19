import { coinValues } from './constants'

// new implementation - don't need so many conditions
export function coinSolverDefinitelyAdvanced(moneyGivenInCents){
  const coinsActuallyReturned = {};

  // in case someone moves the constant around, force the sort order
  let coinsInOrder = coinValues.sort((coinOne,coinTwo) => coinTwo.value - coinOne.value);

  let currentIndex = 0;
  while (moneyGivenInCents > 0 && currentIndex < coinsInOrder.length){
    // start with maximum value coin (since we sorted the array)
    const currentCoin = coinsInOrder[currentIndex];

    // get the number of coins for our value
    const numberOfCoins = Math.floor(moneyGivenInCents / currentCoin.value);

    // set this as a prop to be returned
    coinsActuallyReturned[currentCoin.name] = numberOfCoins;

    // get remainder and run through loop again using the remaining number of cents
    // decrement since we need to subtract the value of the current # of coins chosen
    moneyGivenInCents -= numberOfCoins * currentCoin.value;
    currentIndex++;
  }

  return coinsActuallyReturned;
}