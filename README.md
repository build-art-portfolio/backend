# Art Portfolio Backend

**Pitch**

-A centralized hub for artists and creators to display their work in a professional fashion, for potential commissioners and employers.

**MVP**

-Two types of users: Artists and Viewers.
-Any user can view posts by artists.
-Artists can create an account, create posts, view other posts, and update the descriptions of their posts.

-Home Page
-Any user can visit the home page of our application and view posts made by artists.

-Login page
-From the home page, a user has the option to login (or create an account).

-Create Post
-Once a user signs up and becomes an artist, they are able to create a post which includes a photo and description.

-Edit Post
-After an artist has uploaded a post, they have the ability to go back and update the description of their post.

**Deployed at**

- Backend: [https://art-portfolio-be.herokuapp.com/](https://art-portfolio-be.herokuapp.com/)

## Endpoints

- URL: [https://art-portfolio-be.herokuapp.com/](https://art-portfolio-be.herokuapp.com/)

## Authentication

| Method | Endpoint             | Body/Headers Required                                 |
| :----- | :------------------- | :---------------------------------------------------- |
| POST   | `/api/auth/register` | username, password, first name, last name, email, bio |
| POST   | `/api/auth/login`    | username, password                                    |

-POST /api/auth/register body required:

{
"username" : "your username",
"password" : "your password",
"first_name" : "your first name",
"last_name" : "your last name",
"email" : "your email",
"bio" : "your bio"
}

-POST /api/auth/login body required:

{
"username" : "your username",
"password" : "your password"
}

## Images

| Method | Endpoint      | Body/Headers Required |
| :----- | :------------ | :-------------------- |
| GET    | `/api/images` |                       |

-GET /api/images
-Get request to retrieve the list of images available to the users to "post"

## Users

| Method | Endpoint               | Body/Headers Required                       |
| :----- | :--------------------- | :------------------------------------------ |
| GET    | `/api/users`           |                                             |
| GET    | `/api/users/:id/`      |                                             |
| GET    | `/api/users/:id/posts` |                                             |
| POST   | `/api/users/:id/posts` | url, description, token                     |
| PUT    | `/api/users/:id`       | username, first name, last name, bio, token |
| DEL    | `/api/users/:id`       | token                                       |

-GET /api/users
-Returns an array of all of the users.

-GET /api/users/:id
-Returns a specific user by ID.

-GET /api/users/:id/posts
-Returns all of the posts for a specific user.

-POST /api/users/:id/posts
-Creates a post by the user ID.
-Requires header token.
-Body required:

{
"url" : "a photo URL.",
"description" : "a description."
}

-PUT /api/users/:id
-Updates the user information.
-Requires header token.
-Body required:

{
"username" : "new username",
"first_name" : "new first name",
"last_name" : "new last name",
"bio" : "new bio"
}

-DEL /api/users/:id
-Deletes a user by ID.
-Requires header token.

## Posts

| Method | Endpoints        | Body/Headers Required |
| :----- | :--------------- | :-------------------- |
| GET    | `/api/posts/`    |                       |
| GET    | `/api/posts/:id` |                       |
| PUT    | `/api/posts/:id` | description, token    |
| DEL    | `/api/posts/:id` | token                 |

-GET /api/posts/
-Returns an array of all the posts.

-GET /api/posts/:id
-Returns a specific post by post ID.

-PUT /api/posts/:id
-Updates the description of a specific post by ID.
-Requires header token.
-Body Required:

{
"description" : "a new description."
}

-DEL /api/posts/:id
-Deletes a post by the post ID.
-Requires header token.

## Likes

| Method | Endpoints              | Body/Headers Required |
| :----- | :--------------------- | :-------------------- |
| GET    | `/api/likes/posts/:id` |                       |
| POST   | `/api/likes/posts/:id` | userID, postID, token |
| DEL    | `/api/likes/posts/:id` | token                 |

-GET /api/likes/posts/:id
-Returns the number of likes on a post by ID.

-POST /api/likes/posts/:id
-Adds a like to a post by post ID and user ID.

{
"userID" : 1,
"postID" : 1
}

-DEL /api/likes/posts/:id
-Deletes the like on a post.
-Requires header token.

## How to Setup

- [ ] create a forked copy of this project.
- [ ] git clone
- [ ] npm i to install dependencies
- [ ] npm run server (listening on port 5000)

## How to run tests

- [ ] npm run test

## Reset Heroku & Database

First, if changes to table:
npx heroku restart -a art-portfolio-be && npx heroku pg:reset DATABASE --confirm art-portfolio-be -a art-portfolio-be && npx heroku run knex migrate:rollback -a art-portfolio-be

Reset table:
npx heroku restart -a art-portfolio-be && npx heroku pg:reset DATABASE --confirm art-portfolio-be -a art-portfolio-be && npx heroku run knex migrate:latest -a art-portfolio-be
