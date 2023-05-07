# Dictionary App With React and Typescript
This is a simple dictionary app to process big data on the front end (React and Typescript).

### Requirements
1.When the user opens the dictionary application, they must see a scrollable list of English
words.

2.Users must be able to filter the list of English words using text field.

2.1 When a user filters by some string then we must show a list of words that starts with that string.
   
2.2 Users must have the ability to use at least 1 wildcard (“*” symbol that means any character). For example, when a user filters by “c*t” then we must show words that starts with “c”, followed by
any other character and the 3rd character is “t”. In this case users should get words like “cat”,
“cotton”, “catch” and others.

3.When the user filters the list and refreshes the browser, then we must show the same result as
it was before the refresh e.g., maintain state between browser refreshes.

*** Above requirements are captured in the Cucumber feature file "dictionary-app.feature" in the `/cypress/e2e` folder. ***

### Technical Requirements
1. The word list has to be stored in a separate json file on a server (local machine) together with
the application. Copy the file from https://github.com/dwyl/english-words/blob/master/words_dictionary.json. Import to your application.

2. Use React with Typescript to implement the Dictionary App. No other specific requirements for the technology stack. 

### Design Requirements
No specific design requirement. For the component system, I have selected Material UI which I have not used much before to try, along with a sprinkle of Tailwind CSS.

### Installation
1. prerequisite: you need to have nodejs already installed on your machine. *Tested environment: Ubuntu, node version V18.12.1. 
2. Clone this repository.
3. In your terminal, run `npm run install`

### How to run this app in development (your local machne)
In the root folder of this repository, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing
For this project, I have experimented with BDD testing with Cypress and Cucumber for both application (e2e) and component tests.
To run tests:
1. Start the application locally by "npm run start".
2. Run tests either by running "npm run test:e2e" for application tests or "npm run test:comp" for component tests.

### Production Build
`npm run build` will build the app for production to the `build` folder.

### Demo
You can visit the deployed version of this app at https://dictionary-app-fe.vercel.app.

### Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

