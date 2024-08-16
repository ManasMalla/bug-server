# Bug Server

A sample server that runs on Express that connects with a PostgreSQL database to provide authentication, posts and authors to the [`Disinfect the Bug`](https://github.com/ManasMalla/disinfect-the-bug) web app.

# API routes

1. `/`: a sample endpoint to test the server

request: `GET`

2. `/signup`: an API endpoint to sign up the user to generate an `apiKey`

request: `POST`

*params*:

email: the email address of the user

name: the name of the user

password: the secret password

3. `/login`: a API endpoint to login the user to fetch the credentials along with `apiKey`

request: `POST`

*params*:

email: the email address of the user

password: the secret password

4. `/get-all-posts`: an API endpoint to fetch all the list of posts on successful authentication

request: `POST`

*params*:

apiKey: the apiKey retrived on successful authentication with `login` or `signup` APIs

5. `create-post`: an API endpoint to create a post with an author and content

request: `POST`

*params*:

authorId: the id of the author

title: the title of the post article

image: the header image of the article

content: the actual article content

link: the link to the article when using slug

6. `create-author`: an API endpoint to create an author`create-post`: an API endpoint to create a post with an author and content

request: `POST`

*params*:

authorId: the id of the author

name: the name of the author

image: the header image of the author

twitter: the twitter handle link of the author
