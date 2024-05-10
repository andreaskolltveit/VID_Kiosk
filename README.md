# Campus Kiosk Web Application

## Project Description

The Campus Kiosk Web Application is a user-friendly touch-enabled kiosk designed to enhance the overall campus experience. It provides students with easy access to essential information, ticket submission, and room booking. The application utilizes various technologies to deliver a dynamic and responsive interface.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime for backend development.
- **Express.js:** Web application framework for Node.js, handling server logic and routing.
- **EJS:** Templating language for generating HTML markup.
- **Bootstrap (v5.3.2):** Front-end framework for building responsive and visually appealing web pages.
- **Axios:** HTTP client for making requests to external APIs.

## Middleware
- **GoogleSMTP:** SMTP service for sending emails via Google Mail service.
- **PureService:** API service for accessing PureService functionalities.

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/andreaskolltveit/VID_Kiosk.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set Environment Variables:
    Create a `.env` file in the root directory and set the following variables:
    ```env
EMAIL_USER=
EMAIL_PASS=

API_KEY=
    ```

4. Run the application:
    ```bash
    npm start
    ```

## Usage

Kiosk based interface with buttons. Each button represents a function for getting help. It is divided by 1. line departments, IT support, Bibliotek, Studentservice. Booking rooms and listing for TimeEdit, Contactform via PureService and visiting registration via Phonero.

## Author

Andreas Kolltveit