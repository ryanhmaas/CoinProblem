import { getChangeInitial } from './coinSolver';

describe('getChangeInitialTests', () => {
  // tests to validate naive implementation
  test('getChangeInitial, given 1 penny, should contain one penny ', () => {
    let result = getChangeInitial(1);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(1);
  });

  test('getChangeInitial, given 3 pennies, should contain three pennies ', () => {
    let result = getChangeInitial(3);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(3);
  });


  test('getChangeInitial, given 5 cents, should contain one nickel ', () => {
    let result = getChangeInitial(5);

    expect(result.find(s => s.name === "nickels")).toBeTruthy();
    expect(result.find(s => s.name === "nickels").count).toBe(1);
  });

  test('getChangeInitial, given 8 cents, should contain one nickel and three pennies', () => {
    let result = getChangeInitial(8);

    expect(result.find(s => s.name === "nickels")).toBeTruthy();
    expect(result.find(s => s.name === "nickels").count).toBe(1);
    
    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(3);
  });

  test('getChangeInitial, given 10 cents, should contain one dime ', () => {
    let result = getChangeInitial(10);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(1);
  });

  test('getChangeInitial, given 15 cents, should contain one dime and one nickel ', () => {
    let result = getChangeInitial(15);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(1);

    expect(result.find(s => s.name === "nickels")).toBeTruthy();
    expect(result.find(s => s.name === "nickels").count).toBe(1);
  });

  test('getChangeInitial, given 20 cents, should contain only two dimes ', () => {
    let result = getChangeInitial(20);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(2);

    expect(result.find(s => s.name === "nickels")).toBeFalsy();
  });

  test('getChangeInitial, given 23 cents, should contain two dimes and three pennies ', () => {
    let result = getChangeInitial(23);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(2);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(3);  
  });


  test('getChangeInitial, given 25 cents, should contain one quarter ', () => {
    let result = getChangeInitial(25);

    expect(result.find(s => s.name === "quarters")).toBeTruthy();
    expect(result.find(s => s.name === "quarters").count).toBe(1);
  });

  test('getChangeInitial, given 42 cents, should contain one quarter, one dime, one nickel, and two pennies', () => {
    let result = getChangeInitial(42);

    expect(result.find(s => s.name === "quarters")).toBeTruthy();
    expect(result.find(s => s.name === "quarters").count).toBe(1);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(1);

    expect(result.find(s => s.name === "nickels")).toBeTruthy();
    expect(result.find(s => s.name === "nickels").count).toBe(1);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(2);
  });


  test('getChangeInitial, given 50 cents, should contain one half-dollar ', () => {
    let result = getChangeInitial(50);

    expect(result.find(s => s.name === "half-dollars")).toBeTruthy();
    expect(result.find(s => s.name === "half-dollars").count).toBe(1);
  });

  test('getChangeInitial, given 62 cents, should contain one half-dollar, one dime, and two pennies', () => {
    let result = getChangeInitial(62);

    expect(result.find(s => s.name === "half-dollars")).toBeTruthy();
    expect(result.find(s => s.name === "half-dollars").count).toBe(1);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(1);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(2);
  });

  test('getChangeInitial, given 94 cents, should contain one half-dollar, one quarter, one dimes, one nickel, and two pennies', () => {
    let result = getChangeInitial(92);

    expect(result.find(s => s.name === "half-dollars")).toBeTruthy();
    expect(result.find(s => s.name === "half-dollars").count).toBe(1);

    expect(result.find(s => s.name === "quarters")).toBeTruthy();
    expect(result.find(s => s.name === "quarters").count).toBe(1);

    expect(result.find(s => s.name === "dimes")).toBeTruthy();
    expect(result.find(s => s.name === "dimes").count).toBe(1);

    expect(result.find(s => s.name === "nickels")).toBeTruthy();
    expect(result.find(s => s.name === "nickels").count).toBe(1);

    expect(result.find(s => s.name === "pennies")).toBeTruthy();
    expect(result.find(s => s.name === "pennies").count).toBe(2);
  });
});