# Meme Central Web Application

## Overview

Meme Central is a web application that allows users to view and interact with a collection of funny internet memes. The application provides features such as meme search, meme details, and user authentication.

## Technologies Used

- **Node.js:** The server-side JavaScript runtime used to build the backend.
- **Express.js:** A web application framework for Node.js, used to build the server and handle routing.
- **EJS:** Templating language for generating HTML markup.
- **Bootstrap:** A front-end framework (version 5.2.3) for building responsive and visually appealing web pages.
- **Passport.js:** An authentication middleware for Node.js, used for user authentication.
- **jQuery:** A fast, small, and feature-rich JavaScript library for DOM manipulation and event handling.

## Installation

1. **Clone the Repository:**
    ```
    git clone https://github.com/noroff-backend-1/aug23ft-jss-ca-andreaskolltveit.git
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Set Environment Variables:
    Create a `.env` file in the root directory and set the following variables:
    ```
    PORT=3000
    API_URL=http://jss.restapi.co.za/memes
    SESSION_SECRET=hard_to_swallow_pills
    ```

4. Run the application:
    ```
    npm start
    ```

This should start the application at http://localhost:3000/

## Usage

### Home Page (Memes Overview):

- Access http://localhost:3000/memes to view a table of memes.
- Use the search functionality to filter memes by name.
- Click on the "View Details" button to see more information about a meme.

### Individual Meme Page:

- Access http://localhost:3000/meme/:memeId to view details about a specific meme.

### Login:

- Access http://localhost:3000/login to log in and unlock additional features.
- Guest users can still view memes but won't have access to certain details.