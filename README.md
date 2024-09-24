# Job Board Project

## Description
This Job Board project is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a platform for employers to post job listings and for job seekers to search and apply for jobs.

## Features
- User authentication (signup, login, logout) for both employers and job seekers
- Job posting functionality for employers
- Job search and filtering for job seekers
- Application submission system
- User profiles and dashboard
- Responsive design for mobile and desktop

## Technologies Used
- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend library
- Node.js: Runtime environment
- Redux: State management
- JWT: Authentication
- Bcrypt: Password hashing
- Mongoose: ODM (Object Data Modeling)
- Axios: HTTP client
- React Router: Routing

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (version 14.x or later)
- MongoDB installed and running
- npm or yarn package manager

## Installation and Setup
1. Clone the repository:
   ```
      https://github.com/saurabh007007/Job-Borad.git
   ```

2. Navigate to the project directory:
   ```
   cd Job-Borad
   ```

3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

5. Create a `.env` file in the backend directory and add your MongoDB URI and JWT secret:
   ```
   PORT=YOUR-PORT
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

6. Start the backend server:
   ```
   cd ../backend
   npm run dev
   ```

7. In a new terminal, start the frontend development server:
   ```
   cd ../frontend
   npm run dev
   ```

## Usage
After starting both the backend and frontend servers, you can access the application at `http://localhost:3000` in your web browser.

1. Sign up as an employer or job seeker
2. Log in to your account
3. Employers can post new job listings from their dashboard
4. Job seekers can search for jobs and submit applications

## Contributing
Contributions to the Job Board project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or feedback, please contact [Your Name] at [your.email@example.com].
