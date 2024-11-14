# Contact Management Application

A simple Contact Management application built with React, Node.js, Express, and MongoDB. This application allows users to add, view, update, and delete contacts. The project showcases CRUD functionality with a responsive UI using Tailwind CSS and Material UI components.

### Deployment
You can view the live demo of this project at:

**Frontend** : https://contact-management-application-uytl.vercel.app/
**Backend** : https://contact-management-application-five.vercel.app/

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements-that-can-be-done)
- [License](#license)

---

## Features
- **Add Contact**: Capture essential contact information (e.g., name, email, phone, company, job title).
- **View Contacts**: Display all contacts.
- **Edit Contact**: Update details for a specific contact.
- **Delete Contact**: Remove unnecessary or outdated contact entries.
- **Responsive UI**: Built with Tailwind CSS and Material UI for a clean, accessible interface.

## Technologies Used
- **Frontend**: React, Material UI, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Vercel for the backend and frontend both
- **Tools**: Postman,GitHub

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm
- MongoDB

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone "https://github.com/surajyadav1975/contact-management-application.git"
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Run the frontend development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Run the backend server using Nodemon:
   ```bash
   npx nodemon
   ```

## API Endpoints

| Method | Endpoint                  | Description                        |
|--------|----------------------------|------------------------------------|
| POST   | `/contacts/add`            | Adds a new contact                 |
| PUT    | `/contacts/:postId`        | Updates a specific contact         |
| DELETE | `/contacts/delete/:postId` | Deletes a specific contact         |
| GET    | `/contacts/getallcontacts` | Retrieves all contacts             |


## Challenges and Solutions

1. **IP Configuration Issue in MongoDB**: During setup, encountered issues with MongoDB IP access. Resolved by allowing IP access from specific locations in MongoDB settings.
2. **Other Challenges**: There weren't many challenges faced due to my previous experiences and working on more complex projects, which helped in tacking issues effectively.

## Future Improvements That Can Be Done
- **User Authentication**: Add login and registration to secure contact information.
- **Authorization**: Allow users to manage only their contacts.
- **Enhanced Filtering and Sorting**: Add advanced options for sorting and filtering by attributes like company and job title.

## License
This project is licensed under the MIT License.

