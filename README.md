# Art Portfolio Backend

MVP
-users can view photos by artists
-artists can create posts, read posts, and update posts (descriptions)

-two users (artist and viewer)

-home page: showcase artists posts for any user to see

-login page: artist can login (opt to sign up)

-create post: artist can create a post (pre-selected photos)

-edit post: artist can edit post descriptions

Reset Heroku & Database

npx heroku restart -a art-portfolio-be && npx heroku pg:reset DATABASE --confirm art-portfolio-be -a art-portfolio-be && npx heroku run knex migrate:latest -a art-portfolio-be
