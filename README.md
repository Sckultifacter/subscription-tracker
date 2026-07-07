# Subscription Tracker API

A backend application that helps users manage recurring subscriptions, track renewal dates, and receive automated email reminders before payments are due.

## Features

- JWT Authentication (Signup, Signin, Protected Routes)
- Subscription Management (Create, View, Update, Cancel)
- Automated Renewal Reminders
- Email Notifications with Nodemailer
- Workflow Scheduling using Upstash Workflow
- MongoDB Database Integration
- Arcjet Rate Limiting and Bot Protection
- Centralized Error Handling

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Nodemailer
- Upstash Workflow
- Arcjet
- Day.js

## API Endpoints

### Authentication

```http
POST /api/v1/auth/signup
POST /api/v1/auth/signin
POST /api/v1/auth/signout
```

### Subscriptions

```http
POST   /api/v1/subscriptions
GET    /api/v1/subscriptions/:id
GET    /api/v1/subscriptions/user/:id
PUT    /api/v1/subscriptions/:id
DELETE /api/v1/subscriptions/:id
PUT    /api/v1/subscriptions/:id/cancel
```

## Example Subscription

```json
{
  "name": "Netflix",
  "price": 139,
  "currency": "USD",
  "frequency": "monthly",
  "category": "entertainment",
  "startDate": "2026-06-08T00:00:00.000Z",
  "paymentmethod": "Credit Card"
}
```

## How It Works

1. User authenticates using JWT.
2. Subscription is created and stored in MongoDB.
3. Renewal date is calculated automatically.
4. Upstash Workflow schedules reminder jobs.
5. Email notifications are sent before renewal.

## Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
JWT_EXPIRES_IN=
EMAIL_PASSWORD=
QSTASH_TOKEN=
QSTASH_URL=
ARCJET_KEY=
SERVER_URL=
```

## Installation

```bash
git clone https://github.com/Sckultifacter/subscription-tracker.git
cd subscription-tracker
npm install
npm run dev
```

## Future Improvements

- SMS Notifications
- Analytics Dashboard
- Multi-Currency Support
- Subscription Spending Reports
- Frontend Dashboard

## Author

Deeksha Sudheer
