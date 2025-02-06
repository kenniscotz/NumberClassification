# Stage 1 Backend - Number Classification API

This project is a backend API that takes a number as input and returns interesting mathematical properties about it, along with a fun fact. The API is built using JavaScript (ES6 modules) and is deployed to a publicly accessible endpoint.

## Table of Contents
- [Resources](#resources)
- [Task Description](#task-description)
- [Requirements](#requirements)
- [API Specification](#api-specification)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)


---


---

## Task Description
Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

---

## Requirements

### Technology Stack
- Use *JavaScript* and *ES6 modules*.
- Must be deployed to a *publicly accessible endpoint*.
- Must handle *CORS (Cross-Origin Resource Sharing)*.
- Must return responses in *JSON format*.


---

## API Specification

### Endpoint

GET /api/classify-number?number=<number>


### Required JSON Response Format (200 OK)
json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}


### Required JSON Response Format (400 Bad Request)
json
{
  "number": "alphabet",
  "error": true
}


---

## Acceptance Criteria

### Functionality
- Accepts *GET requests* with a number parameter.
- Returns JSON in the specified format.
- Accepts all valid integers as input.
- Provides appropriate HTTP status codes.


---

## Installation

1. Clone the repository:
   bash
   git clone https://github.com/<your-username>/<repository-name>.git
   

2. Navigate to the project directory:
   bash
   cd <repository-name>
   

3. Install dependencies:
   bash
   npm install
   

4. Start the server:
   bash
   npm start
   

---

## Usage

### Example Request

GET /api/classify-number?number=371


### Example Response
json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}


---

## Deployment

The API is deployed to a publicly accessible endpoint. You can access it at:

https://<your-deployed-domain>/api/classify-number?number=<number>


---

