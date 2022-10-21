# Social Network API
![badge](https://img.shields.io/badge/License-MIT-yellow)

## Description
API for a social network web application where you can add users and they can share their thoughts, react to friends’ thoughts, and create a friend list. Developed using MongoDB, one of the most popular choice due to its speed with large amounts of data and flexibility with unstructured data.

## Table of Content
* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video)
* [Techs](#techs)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation

  To install the necessary dependencies, run the following command on your CLI:
```bash
npm i
```
Now you can start your server:
```bash
    npm server.js
```
`MongoDB` is required **


## Usage

Open Insomnia and you can start trying the routes:

For Users:

* Get all users: `GET` http://localhost:3001/api/users
* Get user by ID: `GET` http://localhost:3001/api/users/:userID
* Create a new user: `POST` http://localhost:3001/api/users
```json
    //example data
    {
        "username": "Tere",
        "email": "tere@mail.com"
    }
```
* Update a user: `UPDATE` http://localhost:3001/api/users/:userID
* Delete a user: `DELETE` http://localhost:3001/api/users/:userID

For friends:
* Add a friend to user's friend list: `POST` http://localhost:3001/api/users/:userID/friends/:friendID
* Delete a friend from a user's friend list: `DELETE` http://localhost:3001/api/users/:userID/friends/:friendID

For Thoughts:

* Get all thoughts: `GET` http://localhost:3001/api/thoughts
* Get thought by ID: `GET` http://localhost:3001/api/thoughts/:thoughtID
* Create a new thought: `POST` http://localhost:3001/api/thoughts
```json
    //example data
    {
        "thoughtText": "I love ice cream",
        "username": "Tere",
        "userId": "5edff358a0fcb779aa7b118b"
    }
```
* Update a thought: `UPDATE` http://localhost:3001/api/thoughts/:thoughtID
* Delete a thought: `DELETE` http://localhost:3001/api/thoughts/:thoughtID

For reactions:
* Add a reaction to thought's list: `POST` http://localhost:3001/api/thoughts/:thoughtID/reactions
```json
    //example data
{
	"reactionBody": "Strawberry please!",
	"username": "amiko"
}
```
* Delete a reaction from thought's list: `DELETE` http://localhost:3001/api/thoughts/:thoughtID/reactions/:reactionID

## Walkthrough Video
[Link to the video](https://)

## Techs
* Javascript
* Node.js
* Node Packages:
    * express
    * mongoose
* MongoDB
* Insomnia


## License
 Licensed under the [MIT](https://opensource.org/licenses/MIT)
 license.

## Contributing 
 The open source community is a great place to inspire and learn thanks to contributions, feel free to make yours!
    If you have a suggestion that would make this better, please fork the repo and create a pull request.

## Questions
  You can see more of my work on [qgtere](https://github.com/qgtere).

  If you have any additional questions please don't hesitate to reach me on qg.tere@gmail.com.  