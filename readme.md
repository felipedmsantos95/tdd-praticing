# TDD Praticing


Developing simple service functionality using TDD (Test Driven Development) and SOLID principles.

**S**ingle Responsability Principle

**O**pen Closed Principle

**L**iskov Substituition Principle

**I**nterface Segregation Principle

**D**ependency Invertion Principle


## Functionality Explanation

Application must verifiy date from now and check if an event is in one of these status: active, in review or done.


<p align="center">
   <img src="https://github.com/felipedmsantos95/tdd-praticing/blob/main/img/data.png"/>
 </p>


## Used Technologies

-   [Node.js](https://nodejs.org/en/)
-   Tests were written through [Jest](https://jestjs.io/pt-BR/) framework

## Requirements

-   [Yarn](https://yarnpkg.com/) 1.22.5 or later
-   [Node](https://nodejs.org/en/) 12.22 or later


## Running Project

#### Clonning Project

```bash
 git clone https://github.com/felipedmsantos95/tdd-praticing
 cd tdd-praticing
```

#### Installing Dependencies

```bash
 yarn install
```

#### Running Tests

```bash
 yarn test
```


These are the tests cases:

##### Data
Event ID

##### Main Flow

1. Obtain data from last event group (end date and review duration)
2. Return "active" status if event hasn't done yet

##### Alternative Flow: Event is on closure limit
1. Return "active" status

##### Alternative Flow: Event done, but is inside on event review period
1. Return "inReview" status

##### Alternative Flow: Event and event review period done
1. Return "done" status

##### Alternative Flow: Group hasn't any event appointed
1. Return "done" status




