# Breakdown of the task



General Requirements:
---------------------
Develop a movies listing app with Node.js backend APIs.

Frontend: a react admin app lies in `/frontend` directory
---------
1. User Facing App
2. Movie List management App for Admin

Backend: a NestJS app using typeORM lies in `/backend` directory
-------
REST API service 

### Each directory of `/frontend` & `/backend` contains README.md file with detailed instructions for their respective app.

User Journey
-------------
1. Home Page:
	- Access Home Page:
	- User opens the app
	- User sees the Home tab selected by default.
	- Home page displays all movies as thumbnails.
	- User clicks on a movie thumbnail.
	- User is navigated to the movie detail screen.
	
2. Movie details Page:
	- User can view: Movie name, Description, Running time, Release year
	- User can view Comments section
	- User types a comment in the comment box.
	- User clicks the "Add Comment" button.
	- Comment is displayed under the movie details.
	- Mark/unmark Movie as Favorite:

1. Favorites Page:
	- User clicks on the Favorites tab in the navbar.
	- User sees a list of all movies marked as favorites.
	
Admin Journey
--------------
1. Login
2. UI for Movie CRUD
3. UI for Viewing Comments

What is done so far 
-----------------------

# Frontend
1. Project setup
2. Home page - displays all movies as thumbnails

# Backend
1. Project setup
2. CRUD for Movies
3. CRUD for Users
