# TranslateGPT App

TranslateGPT is a React-based application that leverages the power of GPT-3 to provide a chat interface for language translation. The application allows users to input text and receive translations from the GPT-3 model. It also maintains a history of chat conversations that users can revisit or delete as needed.

## Functionality Overview

### Creating a New Chat

Users can start a new chat conversation by clicking the "Add New Chat" button. This action clears the current chat window and prepares the application for a new conversation.

### Inputting Text

Users can input text into a provided input field. The text is then sent to the GPT-3 model for translation when the user presses the Enter key or clicks the submit button (➢). The input field is cleared after the text is sent.

### Receiving Translations

The application sends the user's input to a GPT-3 model via a POST request to a local server. The server then returns the model's translation, which is displayed in the chat window.

### Viewing Chat History

The application maintains a history of chat conversations. Each conversation is associated with a unique title, which is initially the same as the user's first message in that conversation. The titles of all past conversations are displayed in a sidebar, and users can click on a title to view the corresponding conversation.

### Deleting Chat History

Users can delete a specific chat history by clicking the "Delete" button next to the chat's title in the sidebar. This action removes the chat from the history.

## Technical Details

The application uses several key React features, including state and effects. State variables are used to keep track of the user's input, the GPT-3 model's translations, and the chat history. Effects are used to update the chat history whenever a new translation is received.

The application also uses the Fetch API to send HTTP requests to the local server. The server is responsible for communicating with the GPT-3 model and returning the model's translations.

## Starting the App

TranslateGPT is comprised of a frontend and a backend, which need to be started separately.

### Starting the Frontend

To start the frontend of the application, you'll use npm. Navigate to the root directory of the frontend code in your terminal, and then run the following command:

```shell
npm run start:frontend
```

This will start the React application on your local machine.

### Starting the Backend

The backend of TranslateGPT uses Node.js. To start it, navigate to the directory containing the server.js file in your terminal.

Then, run the following command:

```shell
npx nodemon server.js
```

This will start the server on your local machine, which will begin listening for requests from the frontend.

Please ensure both the frontend and backend are running simultaneously for the application to function correctly.

### Conclusion

TranslateGPT is a powerful tool for language translation, harnessing the capabilities of GPT-3 in a user-friendly chat interface. Its ability to maintain and manage chat history allows users to easily revisit past conversations, making it a versatile tool for language learning and practice.
