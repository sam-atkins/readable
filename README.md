# React Project: Readable

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


## Description
This is the second  project for the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

Readable is an app where users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

The client app is built with React and Redux.

## Table of Contents

- [Getting started](#getting-started)
  - [Installation](#installation)
- [Develop](#develop)
  - [How to run: React App](#how-to-run-react-app)
  - [How to run: API Server](#how-to-run-api-server)
  - [Tests](#tests)
  - [Continuous Integration](#continuous-integration)
  - [Style Guide](#style-guide)
- [Release](#release)
  - [Build](#build)
  - [Deploy](#deploy)
  - [Demo](#demo)
- [Inspiration and Information](#inspiration-and-information)

## Getting started

### Installation

The React app (in directory `/client`) was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). The api-server code is taken from the Udacity project starter repo.

**Dependencies:**

* Yarn package manager
* `create-react-app`
* Editor / IDE

To get started with this repository:

```sh
# git clone the repository e.g. into a <projects> folder
cd <projects>
# git clone with ssh
git clone git@github.com:cubiio/readable.git

# or git clone with HTTPS
git clone https://github.com/cubiio/readable.git

# change directory into the cloned repo
cd readable

# install the dependencies
yarn install
```

Note, this repo uses [Yarn workspaces](https://yarnpkg.com/en/docs/workspaces). This means you only need to run `yarn install` from the workspace root to install the dependencies for the whole project i.e. run the command once and the dependencies for the `api-server` and the `client` will install.

## Develop

### How to run: React App

```sh
cd client/
yarn start
```

### How to run: API Server

To start the API server:

```sh
cd api-server/
node server
```

#### Using The Server

##### Include An Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(
    url,
    {
        headers: { Authorization: 'whatever-you-want' }
    }
)
```

##### Comment Counts
Posts retrieved in a list or individually now contain comment counts in the format `post: { commentCount: 0 }`.  This should make it easier to display the number of comments a post has without having to call the comments endpoint for each post.   This count is updated whenever a comment is added or deleted via the `POST /comments` or `DELETE /comments/:id` endpoints.

##### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |

### Tests

[Jest](https://facebook.github.io/jest/) is used for tests in the React app. To run the test suite, use this command:

```sh
cd client/
yarn test
```

### Continuous Integration

[placeholder]

### Style Guide

This repo uses [ESLint](https://eslint.org/) with [Prettier](https://github.com/prettier/prettier) formatting.

The ESLint config extends from AirBnB, with a few changes. Refer to the `.eslintrc.yml` file in the root of the repo for info on the changes.

## Release

### Build

[placeholder]

### Deploy

[placeholder]

### Demo

[placeholder]


## Inspiration and Information

Links for articles / docs I've found useful:

- [Container Components – Learn React with chantastic – Medium](https://medium.com/@learnreact/container-components-c0e67432e005)

- [Presentational and Container Components – Dan Abramov – Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- [How to Structure Your React Project](https://daveceddia.com/react-project-structure/)
