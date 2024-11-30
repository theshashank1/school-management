

# School Management API

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** for managing schools. It supports functionalities like adding new schools and retrieving them based on proximity using geospatial data.

---

## Features

- Add schools with name, address, latitude, and longitude.
- List schools sorted by proximity to given latitude and longitude.
- Haversine formula for distance calculation.
- Input validation with **Joi**.
- CORS support for frontend integration.
- Cloud MySQL database hosted on **freesqldatabase.com**.

---

## Technologies

- **Node.js** | **Express.js** | **MySQL**
- **dotenv** | **Joi** | **CORS**

---

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create `.env` file:

```env
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
```

- You can get your MySQL database details by signing up on [freesqldatabase.com](https://www.freesqldatabase.com/), which provides a free cloud-hosted MySQL database.

### 4. Start the server:

```bash
npm start
```

API will be running on `http://localhost:3000`.

---

## API Endpoints

### **POST /api/addSchool**
Adds a new school.

**Request Body**:
```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 37.7749,
  "longitude": -122.4194
}
```

**Response**:
```json
{
  "message": "School added successfully",
  "schoolId": 1
}
```

### **GET /api/listSchools**
Lists schools sorted by proximity to given coordinates.

**Query Parameters**: `latitude`, `longitude`

Example:
```
/api/listSchools?latitude=37.7749&longitude=-122.4194
```

**Response**:
```json
[
  {
    "id": 1,
    "name": "School Name",
    "address": "School Address",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "distance": 0.0
  }
]
```

---

## Postman Collection

You can test the API using the [Postman collection](https://www.postman.com/flight-geologist-95162013/school-management). It includes pre-configured requests for adding schools and listing them based on proximity.

---

## Vercel Endpoints

The API is deployed on Vercel. You can test the API using the following endpoints:

- **GET**: [https://school-management-api-rose.vercel.app/api/listSchools?latitude=37.7749&longitude=-122.4194](https://school-management-api-rose.vercel.app/api/listSchools?latitude=37.7749&longitude=-122.4194)
  
- **POST**: [https://school-management-api-rose.vercel.app/api/addschool](https://school-management-api-rose.vercel.app/api/addschool)

---

## Deployment

Deploy to platforms like **Heroku**, **Vercel**, or **AWS**. Ensure that the `.env` variables are configured in your platform's environment settings.


---

## Contact

For questions or issues, open an issue or contact at `shashankgundas1@gmail.com`.
