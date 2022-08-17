# Strider Technical Assessment - Daniel Martins

## 1. Description

The application is a Twitter-like social network where users can write text-only posts and follow other users to interact with their posts.

## 2. Project decisions

* Frontend library: React
* Styled components and icons: Material UI
* Users and posts are read from the testing API [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)
* State-management solution: Zustand
* Your user (the test user) has the id 0 and is the starting state of the store, before fetching all the users from the API

## 3. Getting Started

### Prerequisites

* Have Node.js and yarn installed

### Installing

Run in the project directory:

`yarn install`

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 4. Built With

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Material UI](https://mui.com/)
* [Zustand](https://github.com/pmndrs/zustand)

## 5. Planning

Blank

## 6. Self-critique & scaling

### What I would improve if I had more time

* Overall application styling 
* Logic of feed of all / following pots
* Styling of toggle all / following
* Thread of comments on each post
* Number of likes of each post
* Feature of sharing other user's posts
* Feature of sharing some post to another social media
* Sort posts by date
* Add scroll to user profile page, to show all users posts and not only first three ones
* Url change for feed and user profile page

### Scaling

#### What steps would you take to scale this product?

* **Use suitable infrastructure options for scalability**. Using a PaaS (like Heroku) or an IaaS (like AWS) could be an option because Cloud services take care of many aspects of web app development and maintenance. These aspects include the infrastructure and storage, servers, networking, databases, middleware, and runtime environment.
* **Effectively distribute traffic**, so we can make sure that the load is evenly balanced between servers. It's worth setting up two or three load balancers at a time, to avoid fails.
* **Scale the front-end using cache tiers (Edge caching)**. A CDN would provide a network of geo-distributed servers that would reduce time to load by moving the serving of the content closer to the end user.
* **Efficient database management**. Use DaaS and combine replication (data is handled on multiple databases simultaneously) and sharding (allow you to segment data and not to handle it in one place).
* **Well performing queries.** Case of millions of users: a cache would minimize queries directly to database. The cache could avoid making requests all the time to the database

#### What other types of technology and infrastructure might you need to use?

As mentioned above, we could use services like DaaS, PaaS, IaaS to handle scalability for the application.

## 7. Author

* [Daniel Martins](https://www.linkedin.com/in/daniel-martins-0a7128115/)
