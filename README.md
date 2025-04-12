# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# Live Weather App Project - OpenWeather API

**API** stands for **Application Programming Interface**, which allows two applications to communicate with each other.

In this project, you will use the **OpenWeather platform’s free API** to fetch weather information. The API provides **detailed weather data** for a given city.

> **Note:** To get the API key for OpenWeather, click [here](https://openweathermap.org/api).

## 🔑 How to Get Your OpenWeather API Key

Follow the steps below to generate your free API key from OpenWeather:

1. **Go to** [OpenWeather API Page](https://openweathermap.org/api) and click on the **“Sign in”** button at the top-right corner.

2. If you **already have an account**, log in using your credentials.  
   If not, click on **“Create an Account”** and fill in your **username**, **email**, and **password** to register.

3. After creating your account and logging in, you will be redirected back to the OpenWeather site.

4. You may be asked a few questions about your **company** and your **purpose** for using the API — you can **skip or ignore** this if you prefer.

5. Now, click on your **username** in the top-right corner of the page. From the dropdown menu, select **“My API keys.”**

6. You will see your **default API key** listed there. Click to **copy** the key — you’ll use this in your project to access weather data.

> 💡 Keep your API key safe and do not expose it publicly in frontend code or GitHub repositories.

## 🧩 Create the Header Component

Create a `Header` component to show the name of the app at the top.

1. In the `src/components` folder, create a file called `Header.js`.

2. Inside `Header.js`, add a heading with the text:  
   **"Live Weather Application using React"**

3. Add a class called `heading` to the heading for styling.

4. In `App.js`, import the `Header` component and add `<Header />` to display it.

5. Add styles for the `.heading` class in your CSS file.


## 🧩 Create the InputCity Component

The `InputCity` component will allow users to enter the name of a city and initiate an API call to fetch weather data.

### Follow these steps:

1. In the `src/components` folder, create a new file called `InputCity.js`.

2. Inside `InputCity.js`, create a functional React component.

3. Add an **input field** where users can type the city name. Set the value of this input to the `city` state.

4. Use the `onInputHandler` function to handle the **onChange** event and update the `city` state whenever the user types something.

5. After the input field, add a **Submit button**. When clicked, it should trigger an API call using the city name entered by the user.

6. Make sure the component takes two attributes:
    - `city`: Retains the city name provided by the user.
    - `onInputHandler`: This function handles changes in the input value.

7. Finally, in `App.js`, import the `InputCity` component and render it on the page.

8. Added necessary styles in the CSS file to match the UI changes.

> ✅ The component now includes styling that reflects the new input field and button design.

### Example:
- The input field will capture the city name.
- The Submit button will trigger the API call to fetch weather data for the entered city.

