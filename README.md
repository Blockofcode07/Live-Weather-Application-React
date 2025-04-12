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

## 🧩 Connect the InputCity Component in the Application

In this task, you will use the `InputCity` component and handle user input by managing state in the React application. Follow the steps below carefully to complete this part.

### ✅ Step-by-Step Instructions:

## 1. Import `useState` from React
At the top of your `App.js` file, make sure to import the `useState` hook:
```js
import { useState } from "react";
```

---

## 2. Add a State Property
Declare a new state variable to store the city name entered by the user:
```js
const [inputCity, setInputCity] = useState("Seattle");
```
This will initialize the city state with "Seattle" by default.

---

## 3. Create the Input Handler Method
Define a method to handle input changes and update the `inputCity` state when the user types:
```js
const inputHandler = (event) => {
  setInputCity(event.target.value);
};
```

---

## 4. Create the Submit Handler Method
Define the method that handles the form submission (such as pressing the submit button). This will be used to call the API with the city name:
```js
const submitHandler = (event) => {
  event.preventDefault(); 
};
```

---

## 5. Use the `InputCity` Component
Inside your `App.js` file, add the `InputCity` component and pass the required props: `city`, `onInputHandler`, and `onSubmitHandler`:
```jsx
<InputCity 
  city={inputCity} 
  onInputHandler={inputHandler} 
  onSubmitHandler={submitHandler} 
/>
```
The `InputCity` component will now receive the state, input handler, and submit handler from the parent `App` component.

---

## 6. Final Notes on Props
- **Props** are used to pass data and methods between components. In this case, you are passing the `city` state, `onInputHandler`, and `onSubmitHandler` functions to the `InputCity` component.
- Make sure you use the passed props properly within the `InputCity` component for the application to work as expected.

---

Now you have successfully set up the `InputCity` component to handle user input and API submission in your React application!

## 🧩 Create ShowWeather Component

In this task, you will create a layout component that shares a common header and footer across multiple pages. This component will display weather data and will be located in the `/usercode/application/src/Components/ShowWeather.js` file. Follow the steps below to complete this task:

### 1. **Create the Layout Component:**

- Navigate to `/usercode/application/src/Components/ShowWeather.js`.
- This component will handle the layout for displaying weather information.
  
### 2. **Add Dummy Data for Weather:**

- For now, use some dummy weather data to display in the layout. You will later replace this with real data from the API.
  
### 3. **Include Header and Footer:**

- The layout should include a standard header at the top and a footer at the bottom, which will be shared across multiple pages.

> 💡 Remember: This layout will eventually be updated to fetch and display real data from the weather API.

---

This layout will serve as the foundation for displaying weather data in your app, and it will help in maintaining a consistent structure across different pages.

## 🧩 Use the API to Fetch Data

In this task, you will use the API that you have created in openWeather platform. Use the following URL to access the API:

```
https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={{api_key_weather_app}}
```

Follow these steps to use the API to fetch data:

* Assign the API URL to a variable.
* Create a function to fetch data from the URL.
* Pass the data to the component to show data.

## 🧩 Use Weather Data

After passing some dummy data in the layout, pass the data from the `/usercode/application/src/App.js` file, receive it in the `/usercode/application/src/Components/ShowWeather.js` file, and display those values.

The OpenWeather API returns an object `data` that contains various properties. You'll use some properties from the `data` object and display them in the `/usercode/application/src/Components/ShowWeather.js` file. To do so, add the following variables in the `ShowWeather` components:

* `city`: To store the city name.
* `country`: To store the country name.
* `temperature`: To store the temperature in that city.
* `pressure`: To store the wind pressure in that city.
* `visibility`: To store the visibility in that city.
* `humidity`: To store the humidity in that city.
* `clouds`: To store the cloud state in that city.

## 🧩 Add Dynamic Background

In this task, create the dynamic background on the base of the temperature received by the API.

Let's create a simple method that returns the color code with the temperature range. You can follow these ranges:

* If the temperature is less than 10 degrees Celsius then return a blue color.
* If the temperature is between 10 and 30 degrees Celsius then return the green color.
* If the temperature is greater than 30 degrees Celsius then return a red color.