import { coinSolverDefinitelyAdvanced } from './improvedCoinSolver';

describe('coinSolverDefinitelyAdvancedTests', () => {
  test('coinSolverDefinitelyAdvanced, given 3 pennies, should contain three pennies ', () => {
    let result = coinSolverDefinitelyAdvanced(3);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(3);
  });

  test('coinSolverDefinitelyAdvanced, given 5 cents, should contain one nickel ', () => {
    let result = coinSolverDefinitelyAdvanced(5);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);
  });

  test('coinSolverDefinitelyAdvanced, given 8 cents, should contain one nickel and three pennies', () => {
    let result = coinSolverDefinitelyAdvanced(8);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(3);
  });

  test('coinSolverDefinitelyAdvanced, given 10 cents, should contain one dime ', () => {
    let result = coinSolverDefinitelyAdvanced(10);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(1);
  });

  test('coinSolverDefinitelyAdvanced, given 15 cents, should contain one dime and one nickel ', () => {
    let result = coinSolverDefinitelyAdvanced(15);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(1);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);
  });

  test('coinSolverDefinitelyAdvanced, given 20 cents, should contain only two dimes ', () => {
    let result = coinSolverDefinitelyAdvanced(20);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(2);
  });

  test('coinSolverDefinitelyAdvanced, given 23 cents, should contain two dimes and three pennies ', () => {
    let result = coinSolverDefinitelyAdvanced(23);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(2);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(3);
  });

  test('coinSolverDefinitelyAdvanced, given 25 cents, should contain one quarter ', () => {
    let result = coinSolverDefinitelyAdvanced(25);

    expect(result['quarter']).toBeTruthy();
    expect(result['quarter']).toBe(1);
  });

  test('coinSolverDefinitelyAdvanced, given 42 cents, should contain one quarter, one dime, one nickel, and two pennies', () => {
    let result = coinSolverDefinitelyAdvanced(42);

    expect(result['quarter']).toBeTruthy();
    expect(result['quarter']).toBe(1);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(1);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(2);
  });


  test('coinSolverDefinitelyAdvanced, given 50 cents, should contain one half-dollar ', () => {
    let result = coinSolverDefinitelyAdvanced(50);

    expect(result['half-dollar']).toBeTruthy();
    expect(result['half-dollar']).toBe(1);
  });

  test('coinSolverDefinitelyAdvanced, given 62 cents, should contain one half-dollar, one dime, and two pennies', () => {
    let result = coinSolverDefinitelyAdvanced(62);

    expect(result['half-dollar']).toBeTruthy();
    expect(result['half-dollar']).toBe(1);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(1);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(2);
  });

  test('coinSolverDefinitelyAdvanced, given 94 cents, should contain one half-dollar, one quarter, one dimes, one nickel, and two pennies', () => {
    let result = coinSolverDefinitelyAdvanced(92);
      
    expect(result['half-dollar']).toBeTruthy();
    expect(result['half-dollar']).toBe(1);

    expect(result['quarter']).toBeTruthy();
    expect(result['quarter']).toBe(1);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(1);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(2);
  });

  test('coinSolverDefinitelyAdvanced, given 122 cents, should contain two half-dollars, two dimes, and two pennies', () => {
    let result = coinSolverDefinitelyAdvanced(122);
      
    expect(result['half-dollar']).toBeTruthy();
    expect(result['half-dollar']).toBe(2);

    expect(result['dime']).toBeTruthy();
    expect(result['dime']).toBe(2);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(2);
  });

  test('coinSolverDefinitelyAdvanced, given 233 cents, should contain four half-dollars, one quarter, no dimes, one nickel, and two pennies', () => {
    let result = coinSolverDefinitelyAdvanced(233);
      
    expect(result['half-dollar']).toBeTruthy();
    expect(result['half-dollar']).toBe(4);

    expect(result['quarter']).toBeTruthy();
    expect(result['quarter']).toBe(1);

    expect(result['nickel']).toBeTruthy();
    expect(result['nickel']).toBe(1);

    expect(result['penny']).toBeTruthy();
    expect(result['penny']).toBe(3);
  });
});