# Basic Paytm like Web Application

This is a simple Paytm-like payment web application where users can sign up, sign in, search for other users, and transfer money to them from their wallet. The application utilizes a dummy wallet, eliminating the need to input real bank details. Upon signing up, each user is allocated a random amount of money between 200 and 10,000.

Additionally, users have the ability to update their details such as password, first name, and last name. The application implements user authentication using JSON Web Tokens (JWT) for secure access, and input validation is performed using Zod. Passwords are hashed before being stored in the database, ensuring data security.

## Features

- User authentication using JWT
- Sign up and sign in functionalities
- Search functionality to find other users
- Wallet functionality for transferring money between users
- Update user details (password, first name, last name)
- Dummy wallet system (no real bank details required)
- Input validation using Zod
- Password hashing for data security

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: React, Tailwind CSS

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Habeel-Shamsudeen/Paytm-Lite.git`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies:
   - For backend: `cd backend && npm install`
   - For frontend: `cd frontend && npm install`
4. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Define the following environment variables:
     - `DB_URL`: MongoDB connection URI
     - `JWT_SECRET`: Secret key for JWT
5. Start the backend server: `npm start` or `npm run dev` for development mode
6. Start the frontend development server: `npm start`

## TODO Features/Improvements

1. Better backend exception handling.
2. Setup a signout function which will delete the token in local Storage.
3. Setup a delete route where the user can delete his account.
4. Protected react routes. Do not allow access to dashboard for unauthenticated users.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/<feature-name>`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/<feature-name>`
5. Submit a pull request

Please ensure your code follows the project's coding conventions and includes appropriate documentation and tests.

## License

This project is licensed under the [MIT License](LICENSE).

