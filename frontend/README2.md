Original Assignment
--------------------
Create a production-grade app for the following requirements:
Develop a movies listing app with working Nodejs backend APIs. The App should have a bottom
main navbar containing two tabs - Home & Favorites. The Home page should show all movies
shown as thumbnails. Users will land on the movie detail screen (with basic details like Name,
description, running time etc) by clicking on any movie thumbnail. Add a comment system on
the movie detail page where the user can add comments. Users can also mark any movie as a
favourite. The favourite tab will show all the movies that the user has marked as a favourite.
Users can also unmark any movie from their favourite list.
Add admin view as well to add and remove movies and comments
Notes: This is supposed to be a very simple app hence the user's location information or city etc
is not needed anywhere.
Evaluation will be based on code quality on both frontend & backend along with the database
design. Make sure to include the db migration file within the code
This will be a web application and you can use open source APIs.
-----------------------------------------------------------------





### User Journeys

**General Requirements:**

- Develop a movies listing app with Node.js backend APIs.
- App should have a bottom main navbar with two tabs:
  - **Home**
  - **Favorites**

#### User Journey: Home Page

1. **Access Home Page:**
   - User opens the app.
   - User sees the Home tab selected by default.
   - Home page displays all movies as thumbnails.

2. **View Movie Details:**
   - User clicks on a movie thumbnail.
   - User is navigated to the movie detail screen.
   - Movie detail screen shows:
     - Movie name
     - Description
     - Running time
     - Comments section

3. **Add Comment:**
   - User types a comment in the comment box.
   - User clicks the "Add Comment" button.
   - Comment is displayed under the movie details.

4. **Mark Movie as Favorite:**
   - User clicks the "Favorite" button on the movie detail screen.
   - Movie is added to the Favorites list.

#### User Journey: Favorites Tab

1. **Access Favorites Page:**
   - User clicks on the Favorites tab in the navbar.
   - User sees a list of all movies marked as favorites.

2. **Unmark Favorite Movie:**
   - User clicks the "Unfavorite" button on a movie in the Favorites list.
   - Movie is removed from the Favorites list.

#### Admin Journey: Manage Movies and Comments

1. **Access Admin View:**
   - Admin logs into the app.
   - Admin sees an additional tab for admin functions (e.g., "Admin").

2. **Add a Movie:**
   - Admin clicks the "Add Movie" button.
   - Admin fills out the movie details form (name, description, running time, etc.).
   - Admin clicks the "Submit" button.
   - New movie is added to the Home page list.

3. **Remove a Movie:**
   - Admin clicks the "Delete" button next to a movie in the Admin view.
   - Movie is removed from the Home page and Favorites list.

4. **Manage Comments:**
   - Admin navigates to the movie detail screen.
   - Admin clicks the "Delete Comment" button next to a comment.
   - Comment is removed from the movie detail page.

**Notes:**

- No need for user location or city information.
- Evaluation criteria:
  - Code quality (frontend and backend)
  - Database design
  - Include a database migration file
- This is a web application using open-source APIs.