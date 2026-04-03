# Master API Documentation & Workflow Guide (v3.0)

This document provides a deep dive into the logic, validation, and security for every endpoint in the API suite.

---

## 1. System Overview
- **Base URL:** `http://127.0.0.1:8000/api`
- **Format:** JSON (UTF-8)
- **Security:** JWT (HS256) for Admin, UUID for Email Verification.

---

## 2. Public API Endpoints (User-Facing)

### A. Subscribe to Newsletter
- **Endpoint:** `POST /subscribe`
- **Logic:**
  1. Checks if the email already exists in the `Subscriber` table.
  2. If new, creates a record with `is_verified: false` and generates a unique `verification_token`.
  3. Triggers an asynchronous HTML email to the user with a clickable "Verify" button.
- **Payload:**
  ```json
  { "email": "string (valid email format required)" }
  ```
- **Responses:**
  - `200 OK`: `{"message": "Subscription successful. Please check your email..."}`
  - `400 Bad Request`: `{"detail": "Email already subscribed"}`

### B. Email Verification
- **Endpoint:** `GET /verify/{token}`
- **Logic:**
  1. Searches the database for the provided `token`.
  2. If found, updates the user's status to `is_verified: true`.
  3. Once verified, the user is eligible to receive Admin Newsletters.
- **Workflow:** This is triggered when a user clicks the button in their email.
- **Responses:**
  - `200 OK`: `{"message": "Email verified successfully!"}`
  - `404 Not Found`: `{"detail": "Invalid or expired token"}`

### C. Contact Us Submission
- **Endpoint:** `POST /contact`
- **Logic:** Validates input and saves the message to the `Message` table for Admin review.
- **Payload:**
  ```json
  {
    "name": "string",
    "email": "string (valid email)",
    "subject": "string",
    "content": "string (min 1 character)"
  }
  ```
- **Response:** `200 OK` (Returns the saved object with `id` and `created_at`).

### D. User Feedback
- **Endpoint:** `POST /feedback`
- **Logic:** Records a user rating and comment.
- **Payload:**
  ```json
  {
    "email": "string (optional)",
    "rating": "integer (1 to 5)",
    "comments": "string"
  }
  ```
- **Response:** `200 OK` (Returns the saved feedback object).

---

## 3. Admin API Endpoints (Dashboard-Facing)

### A. Admin Authentication (Login)
- **Endpoint:** `POST /admin/login`
- **Logic:** 
  1. Verifies `username` against the database.
  2. Compares the provided `password` with the hashed version using Bcrypt.
  3. If valid, returns a JWT token signed with your `SECRET_KEY`.
- **Payload (Form-Data):** `username`, `password`
- **Response:** `{"access_token": "...", "token_type": "bearer"}`

### B. Subscriber Management
- **Endpoint:** `GET /admin/subscribers`
- **Security:** Requires `Authorization: Bearer <token>`
- **Logic:** Retrieves all emails from the database, showing their verification status.

### C. Message & Feedback Review
- **Endpoints:** `GET /admin/messages` and `GET /admin/feedback`
- **Security:** Requires `Authorization: Bearer <token>`
- **Logic:** Pulls all stored user submissions for the Admin dashboard view.

### D. Broadcast Newsletter
- **Endpoint:** `POST /admin/newsletter`
- **Security:** Requires `Authorization: Bearer <token>`
- **Logic:**
  1. Filters the database for all users where `is_verified == true`.
  2. Formats the provided `subject` and `content` into an HTML template.
  3. Sends the email to the entire list of verified recipients.
- **Payload (Query Params):** `subject`, `content`
- **Response:** `{"message": "Newsletter sent to X verified subscribers."}`

---

## 4. Error Codes & Validation Rules
- **401 Unauthorized:** JWT token is missing or has expired.
- **422 Unprocessable Entity:** 
  - Email format is invalid (missing `@` or `.`).
  - Rating is outside the 1-5 range.
  - Required fields are empty.
- **500 Internal Server Error:** Usually indicates an SMTP configuration issue (check `.env` credentials).

---

## 5. Security & Reliability Workflow
1. **Encryption:** All passwords are hashed using **Bcrypt**.
2. **Injection Protection:** SQLModel prevents SQL Injection via parameterized queries.
3. **Email Throttling:** The system uses asynchronous tasks to prevent the API from slowing down during email sending.
4. **Data Integrity:** PostgreSQL ensures that duplicate emails cannot be registered twice.

---
**Created by akshmat243 - Ready for Frontend Integration.**
