

# Heads up for Developers

### Directory Summary 
1. All the types are in `src/@types`
2. All the API service are in `src/services`
3. All the images and styles are in `src/assets`
4. Reusable UI Components are in `src/components/ui`
5. Main Layout is in `src/components/layouts`
6. Private, Protected & Public route components are in `src/components/route`
7. Shared components used in the Layouts are in `src/components/template`
8. All the pages or views are in `src/views`
9. All the shared components used by the views are in `src/components/shared`
10. Navigation configs are in `src/configs/navigation.config`
11. Route configs are in `src/configs/routes.config`
12. All the constants are in `src/constants`
13. All the route names(URL path) are in `src/routes`
14. Shared app state and store details are in `src/store`
15. All the utility functions are in `src/utils`
16. All the views are in `src/views`

### Add a new Menu item
1. Add an unique nav key in `src/constants/navigation.keys.constant.ts`
2. Add a path constant in `src/constants/navigation.paths.constant.ts`
3. Add an item in `src/configs/navigation.config` to include nav key and path constant
4. Add an icon for the menu item in `src/configs/navigation-icon.config.tsx` if needed
5. Add the `subMenu` recursively if needed

### Add a new route to navigate using menu
1. Find the respective array to add new item or add a new array in `src/configs/routes.config` of type `Routes`
2. Use the nav key and path constant created in the previous menu item creation step
3. Create a component in `src/views` and use [lazy imports](https://react.dev/reference/react/lazy) in `src/configs/routes.config`



# Project Details

We are using the followings:

-   React
-   React Redux
-   Redux Toolkit
-   Formik
-   Yup
-   Tailwind v3
-   Framer Motion
-   Create React App v5
-   React Router v6
-   Redux Thunk
-   React Icons
-   React Table
-   Google Map React
-   Apex Charts
-   Full Calendar
-   Draft JS
-   Vite


# Installation
1. Clone the repository:
```git clone https://github.com/mushfiqweb/super-movie```
2. Navigate to the project directory: `cd movie-api/frontend`

3. Install dependencies: `npm install`

# Running the Application

**Please note, you have to use `npm` as package manager.**

In the project directory, you can run:

### `npm install`

Installs all the dev dependencies.<br>

### `npm start`

Runs the app in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to
view it in the browser.

The page will reload if you make edits.<br> You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br> See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles React in production
mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.


# Editor Setup

Visual Studio Code is recommended. If you are using it, we recommend installing the following
extensions:

-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
-   [Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)
-   [Tailwind Documentation](https://marketplace.visualstudio.com/items?itemName=alfredbirk.tailwind-documentation)

We use [Husky](https://github.com/typicode/husky) as a pre-commit hook for Git and
[Prettier](https://prettier.io/) for code formatting.
