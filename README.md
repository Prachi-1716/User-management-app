# 👤 Simple User Management App

A basic user management application built using **Node.js**, **Express.js**, **Faker.js**, and **SQL**. This project was created to practice and demonstrate RESTful API development, form handling, and basic CRUD functionality without using any frontend frameworks.

---

## 🏠 Home Page

- Displays the **total number of users** in the database.
- Two main options:
  - **Show Users** – View the complete list of users.
  - **Join Us** – Add a new user via form input.

---

## ✨ Features

- ✅ View all users (ID, name, email)
- ➕ Add new users (via form or using Faker-generated data)
- ✏️ Edit a user's name (with password verification)
- ❌ Delete a user
- 🧩 Built using RESTful API principles
- 🧾 UI created with basic HTML forms and anchor tags (no frontend libraries)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** SQL (tested with MySQL)
- **Other Libraries:** Faker.js
- **Templating/Views:** HTML and Embedded JS (EJS or plain HTML)
- **Testing Tool:** Hoppscotch (for API testing)

---

## 📁 Project Structure

user-management-app/

├── app.js # Main Express app <br>
├── routes/ # Route handlers  <br>
│ ├── users.js # All user-related routes <br>
├── views/ # HTML templates or EJS files <br>
│ ├── home.ejs <br>
│ ├── users.ejs <br>
│ ├── userDetails.ejs <br>
│ ├── editUser.ejs <br>
| ├── delete.ejs <br>
├── public/ # Static files (CSS, images, etc.) <br>
├── db/ # SQL setup scripts and DB connection <br>
│ └── db.js <br>
├── package.json <br>
└── README.md <br>


---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/Prachi-1716/user-management-app.git
cd user-management-app

# 2. Install Dependencies

npm install

# 3. Set Up the Database
Use MySQL or any other SQL database.

Create a users table with fields: id, name, email, password.

Run the SQL schema file (if provided) or create it manually.

# 4. Configure Environment Variables (optional)
If using .env for DB credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=userdb

# 5. Run the Application

node app.js



🙋‍♀️ About Me
Developed by Prachi Thorat as part of learning full-stack development and backend APIs.


# 6. Open in Browser
Go to http://localhost:3000 to use the app.



