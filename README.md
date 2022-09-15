# Ticket Management App
A full stack ticket management system that allows users to keep track of clients and manage tickets for a variety of 
projects. 
Users 
can view client information, ticket status, update ticket details, and mark tickets as in progress or 
completed.

**Link to project:** https://ticket-mgmt.up.railway.app/

![Ticket management app in action](https://user-images.githubusercontent.com/10656909/190383868-4c00e645-41f4-4542-b0bd-d7f3789f5b18.gif)

## How It's Made:

**Tech used:** Node.js, Express, GraphQL w/ Apollo, React w/ Bootstrap, & MongoDB

[//]: # (Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write *something*. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.)

## Usage

### Install backend dependencies
```
npm install
```

### Install client dependencies
```
cd client
npm install
```

### Add Mongo URI
If you're going to use MongoDB, create a database with Atlas, add it to the **.env.example** file and rename the file to **.env**

### Run backend & frontend
```
npm run dev
cd client
npm start
```

- API URL - http://localhost:5000
- GraphiQL URL - http://localhost:5000/graphql
- React App - http://localhost:3000


## Optimizations


*(insert refactoring / repurposing plans here)*

[//]: # (You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!)

## Lessons Learned:

The purpose of this project was to learn how to build a GraphQL server with Apollo and React. I learned how to use GraphQL with Apollo and how to use React with Apollo. I also learned how to use MongoDB with separate client / server node instances.

## Examples:

[GraphQL Queries & Mutations Gist](https://gist.github.com/thinktapper/63b3896f305b06548b632789c6ee5df0)
