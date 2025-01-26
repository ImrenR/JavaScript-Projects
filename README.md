# JavaScript-Projects

## Watch The Videos

## 1- Dice Roller Project 

https://github.com/user-attachments/assets/395b4b94-94e7-4ccb-ba44-2d6d7faeebd9

## 2- Digital Clock Program 

https://github.com/user-attachments/assets/b744ff19-3bd4-4e24-9293-1d84222c4100

## 3- Calculator Program 

https://github.com/user-attachments/assets/3bdb951f-b50a-4014-a4db-751e76e19be9

## 4- Rock-Paper-Scissors Game

https://github.com/user-attachments/assets/992950f4-dd34-4902-88e6-a2534ac1fdbf

## 5- Weather App Program

https://github.com/user-attachments/assets/d463a482-e385-4c3c-8b4c-1f57f4651b1c

# 1) Dice Roller Project 

## Project Overview
Dice Roller is a simple web-based application that simulates rolling dice. Users can select the number of dice they want to roll, click a button, and see both the numeric results and corresponding dice images.
## Features
### Dynamic Dice Rolling:

Allows users to roll a customizable number of dice.
Displays the results numerically and visually (as dice images).

### Interactive Design:

Intuitive input and button interaction.
Styled with modern aesthetics using CSS.


# 2) Digital Clock Program 

This project displays a dynamic digital clock in a web browser. The clock updates in real time and features an attractive background image with responsive styling.

## Files and Structure

### - HTML File (index.html):

Contains the basic structure of the webpage.

The clock functionality is implemented with a script embedded directly within the div tag for demonstration purposes.

### - CSS File (style.css):

Styles the webpage with a visually appealing background image.

Centers the clock both horizontally and vertically.

Ensures the clock is easy to read with large, bold text and a semi-transparent background.

### - JavaScript File (index.js):

Handles the dynamic updating of the clock by retrieving the current time and formatting it in a readable format.

## Features

### Real-Time Clock: Displays the current time, updating every second.

### Responsive Styling: The clock is centered on any screen size and features a modern, aesthetic design.

### Customizable Background: The background image (porto.jpg) can be replaced with any image of your choice for personalization.

# 3) Calculator Program 

This project is a simple calculator built with HTML, CSS, and JavaScript. The calculator provides basic arithmetic operations and a user-friendly interface.

## Features

### Basic Arithmetic: Perform addition, subtraction, multiplication, and division.
### Clear Function: Reset the display with a single click.
### Responsive Design: Works seamlessly on various screen sizes.
### Error Handling: Displays "Error" for invalid inputs.

## Files
###  index.html: The structure of the calculator.
###  style.css: The styling for the calculator.
###  index.js: The JavaScript logic for functionality.

## Code Overview

### HTML
Contains a grid layout for buttons inside a #keys div.
Includes an input field (#display) to show the current calculation or result.
### CSS
Utilizes flexbox for centering the calculator on the page.
Aesthetic enhancements include rounded buttons, hover effects, and a dark mode theme.
### JavaScript
appendToDisplay(input): Adds input to the display.
clearDisplay(): Clears the display value.
calculate(): Evaluates the entered expression and updates the display.


# 4) Rock-Paper-Scissors Game
This is a simple implementation of the classic "Rock-Paper-Scissors" game using HTML, CSS, and JavaScript. Players can interact with the game by selecting one of the three options (Rock, Paper, or Scissors), and the computer will make a random choice. The winner is determined based on the traditional rules of the game.

## Features

User-friendly interface with buttons representing Rock, Paper, and Scissors.

Displays the player’s choice, the computer’s choice, and the game result.

Responsive design and interactive hover effects for a better user experience.

Simple, clean code structure for easy understanding and customization.

## File Structure 

### 1. index.html

The main HTML file for the game. Contains:

Title: Rock-Paper-Scissors

Buttons for selecting choices.

Display sections for the player’s choice, the computer’s choice, and the result.

### 2. style.css

The CSS file for styling the game interface. Includes:

Styling for fonts, buttons, and layout.

Hover effects for buttons.

### 3. index.js

The JavaScript file contains the game logic:

Generates a random choice for the computer.

Compares the player’s choice and the computer’s choice to determine the result.

Updates the game display based on the results.

## How to Use

Open the index.html file in your browser.

Click one of the buttons (👊 for Rock, 🤚 for Paper, or ✌️ for Scissors) to make your choice.

The computer’s choice and the result will be displayed.


# 5) Weather App Program

This project is a simple weather application that fetches weather data for a given city using the OpenWeatherMap API and displays it in a styled card format.

## Features

Users can enter the name of a city to retrieve current weather information.

Weather data includes:

  - City name
  - Temperature (in Fahrenheit)
  - Humidity percentage
  - Weather description
  - Weather icon (emoji) based on conditions

Error handling for invalid city names or other issues.

Responsive and clean design.

## Technologies Used

HTML

CSS

JavaScript

OpenWeatherMap API

## Setup Instructions

Clone the repository or download the files.

Navigate to the project directory.

Replace the apiKey variable in index.js with your OpenWeatherMap API key.

Open index.html in your browser to run the application.

## File Structure

. index.html: The main HTML structure of the application.

. style.css: Contains all the styles for the application.

. index.js: Handles API calls and dynamic content updates.

## How It Works

1- Enter the city name in the input field and click the "Get Weather" button.
2- The app fetches weather data from OpenWeatherMap API based on the city name.
3- Weather details are displayed in a card, including:

  - City name
  - Temperature (converted from Kelvin to Fahrenheit)
  - Humidity level
  - Weather description
  - Weather condition emoji

4- If an error occurs (e.g., invalid city name), an error message is displayed in the card.

## Key Functions

getWeatherData(city): Fetches weather data from OpenWeatherMap API for the provided city.

displayWeatherInfo(data): Dynamically creates and displays weather details in the card.

getWeatherEmoji(weatherId): Returns an emoji representing the current weather condition based on weather ID.

displayError(message): Displays an error message in the card.

## Styling Highlights

Responsive design using flexbox.

Styled form and card with gradients, rounded corners, and shadows.

Large, readable fonts for better user experience.

Hover effect for the submit button.

## API Used

OpenWeatherMap API

Endpoint: https://api.openweathermap.org/data/2.5/weather

Required Parameters:

 - q: City name

 - appid: Your API key



