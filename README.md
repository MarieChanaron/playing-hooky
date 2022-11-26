# Playing Hooky

## Link to the Project
[mariechanaron.github.io/playing-hooky](http://mariechanaron.github.io/playing-hooky)

## Summary
This project is implementing a light/dark theme feature in a Todo list React application using a custom hook.
The custom hook has two features:
1. it toggles the theme (on clicking on the button on the top right),
2. it returns the current theme (to change the button text).

## How it works
We are using the 'data-theme' custom data attribute to save our theme state in the DOM when the page loads.
In index.css we are using the data-theme attribute to change the styling of our page when the value is set to 'dark'.
The data-theme attribute is set in the effect callback of the useTheme custom hook, with the following code:
document.documentElement.setAttribute('data-theme', theme);

## Technology
React Version 18.2.0