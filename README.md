# Music Generation AI Platform

This project is a free, web-based platform that blends AI capabilities with human control over the music creation process. It allows users to create music by selecting or changing various characteristics such as song duration, tempo, genre, style, chord progressions, instruments, and more.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** (https://nodejs.org/) - JavaScript runtime environment
- **Python 3.8+** (https://www.python.org/) - Programming language for backend
- **Git** (https://git-scm.com/) - Version control system
- **VS Code** (optional but recommended) - Code editor

### Installation

#### 1. Clone the Repository
git clone https://github.com/hkustfun/musicGeneration

#### 2. Navigate to the Project Directory
cd musicGeneration

#### 3. Install Node.js Dependencies
npm install

#### 4. Set Up Python Virtual Environment
##### On Windows:
python -m venv venv
venv\Scripts\activate

##### On macOS/Linux:
python3 -m venv venv
source venv/bin/activate

#### 5. Install Python Dependencies
pip install django djangorestframework

#### 6. Set Up the Database
Since can't install PostgreSQL, we'll use SQLite (a lightweight database that comes with Django)

#### 7. Apply Migrations
cd src/backend
python manage.py makemigrations
python manage.py migrate

#### 8. Create a Superuser (for Admin Access)
python manage.py createsuperuser

### Running the Application

#### 1. Start the Django Backend Server
From src/backend directory:
python manage.py runserver
This will start the server at http://127.0.0.1:8000/

#### 2. Start the Node.js Server
Open a new terminal window, navigate to the project directory, and run:
node src/backend.js
This will start the Node.js server on port 8001.

#### 3. Serve the Frontend Files
Since we're using static files for the frontend, you can open public/index.html directly in your browser, or use a simple HTTP server.

To use Python's simple HTTP server:
From the public directory, run:
For Python 3:
python -m http.server 8080
Now, open your browser and navigate to http://localhost:8080/

### Project Structure
musicGeneration/
├── public/           # Frontend files
│   ├── index.html
│   ├── music-creation.html
│   ├── css/
│   ├── js/
│   ├── img/
│   └── music/
├── src/              # Backend files
│   ├── backend.js
│   ├── backend/      # Django project
│   ├── api/          # Django app
│   ├── services/
│   └── config/
├── package.json
├── database.json
├── README.md
└── .env