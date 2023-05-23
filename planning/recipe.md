## Requirements 

- User should be able to interact with the code using Node as a REPL
- Deposits, withdrawl
- Account statement printing (date, amount, balance)
- Data stored only in RAM, persistent storage not necessary

## Acceptance Criteria

>Given a client makes a deposit of 1000 on 10-01-2023

> And a deposit of 2000 on 13-01-2023

>And a withdrawal of 500 on 14-01-2023

>When she prints her bank statement

>Then she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

- Most recent transaction at the top
- deposit == 'credit', withdrawl == 'debit'

### Edge cases

- tried to withdraw more than your balance
- tried to withdraw or deposit a negative number - perhaps not necessary to manage given acceptance criteria
- As per the acceptance criteria, the program only needs to handle integers for input

### Additional considerations:

- To avoid any problems with floating point imprecision, amounts will stored in program in pence, but UI will deal with 2dp floating point numbers (functions will take 3dp fp as arguments)
- I did consider the use of .unshift() to prepend each transaction to the transcations array as they are created, but thought that this could become costly in terms of computation as the array grows in size. 
- the transcations could either be their own classes (Withdrawl, Deposit), or they could be instances of Transaction with a property `type` that is a string of either 'withdrawl' or 'deposit'. They will only have state an not methods so could equally be stored as hashes
- The balance at the time of each transaction could be recorded with that transaction (more use of memory) or it could be calculated starting from the current balance at the time of statement creation and based on the amount and type of each transaction (more use of computation).
- Returning a message that deposit / withdrawl was succesful and the resulting balance was not specified in the brief, but useful as a means of testing functionality, and for the user. If building this program in a real world situation I would clarify whether the product owner wanted this.

Test for code coverage `npx jest --coverage`

## USE CASE 

### Description

- A user creates a new bank account, the balance is 0. They can make withdrawls and deposits and the balance is updated accordingly. The dates of the transactions are recorded. The user can request a statement which will display all of their transactions in reverse chronological order, along with the dates and the balance of the account at that point in time

### Triggers

- User accesses program in node REPL and creates a new account
  
### Actors

- A user
- An account, which has..
> A current balance
> 
> An array of transactions in chronological order
>
> A transcation could be a withdrawl or a deposit
> 

### Preconditions

- User starts with 0 balance
- User can deposit any amount of money (integer values)
- User can withdraw (integer values) at maximum their current balance

### Goals

- To keep track of all transcations and the user's balance
- To be able to create a statement for the user

### Steps of executionn

- a user creates a new bank account => new Account()
- the Account constructor includes this.balance = new Balance ()
- the starting balance is 0 => specified in Balance constructor
- a user makes a deposit, stripulating the amount 1000
- => account.deposit(1000)  
- a deposit object is created with amount = 1000 and date = new Date()
- this.balance.increment(1000) updates the current balance and returns the current balance
- the current balance is stored in the resultingBalance property of the deposit
- the deposit object is stored in the account's transactions array using .push so that the array is in chronological order
- return "deposit succesful, resulting balance is £1000"
- => account.withdraw(1000)
- Account checks if the amount exceeds this.balance.currentBalance. If so, return error message.
- Else, follow similar steps to deposit.
- the user requests to print their statement => account.printStatement()
- a new Statement object is created and .print() is called on it
- .print returns first line:
`date || credit || debit || balance`
- then calls .reverse on transactions array to put it in reverse chronological order
- then iterates over each transaction and....
- > printing the date of the transaction formatted DD/MM/YYYY 
- > printing `||`
- > if it is of type `Deposit`, printing the amount `+ '.00'`
- > else, printing a blank space
- > printing `||`
- > if it is of type `Withdrawl`, printing the amount `+ '.00'`
- > else, printing a blank space
- > printing `||`
- > printing the resultingTransaction property `+ '.00'`
