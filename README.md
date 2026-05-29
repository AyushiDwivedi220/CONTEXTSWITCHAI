# ContextSwitchAI

## Overview

ContextSwitchAI is an AI-powered workflow continuity platform designed to help users seamlessly resume work after interruptions. The system reconstructs context from previous work sessions, summarizes progress, identifies pending tasks, and provides intelligent recommendations to help users regain focus quickly.

The goal is to reduce productivity loss caused by context switching and enable users to continue their work with minimal friction.

---

## Problem Statement

Interruptions are a common part of modern work. Whether caused by meetings, multitasking, notifications, or shifting priorities, these interruptions often lead to context loss.

When users return to a task, they spend valuable time trying to remember:

* What they were working on
* What decisions were made
* What remains to be completed
* What should be done next

ContextSwitchAI addresses this challenge by automatically reconstructing workflow context and providing a clear path forward.

---

## Features

### Workflow Continuity

Maintains awareness of user activities and generates contextual summaries that help users quickly resume their work.

### Session Memory Reconstruction

Analyzes previous sessions and reconstructs:

* Completed work
* Key decisions
* Current progress
* Pending tasks

### Intelligent Planning Engine

Generates actionable recommendations and prioritizes next steps based on workflow state and user activity.

### Documentation Generation

Automatically creates structured documentation from work sessions, helping users maintain records of progress and decisions.

### Productivity Dashboard

Provides a centralized interface for:

* Active tasks
* Completed work
* AI-generated insights
* Workflow recommendations

---

## System Architecture

```text
User Activity
      │
      ▼
Session Tracking
      │
      ▼
Context Processing Engine
      │
      ▼
AI Analysis Layer
      │
      ▼
Context Reconstruction
      │
      ▼
Recommendations & Dashboard
```

---

## Technology Stack

### Frontend

* React
* Tailwind CSS
* Framer Motion

### Backend

* Django
* Django REST Framework

### Database

* PostgreSQL

### AI Services

* OpenAI API

---

## Project Structure

```text
ContextSwitchAI/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   └── store/
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── serializers/
│   ├── views/
│   └── services/
│
├── database/
│
└── README.md
```

---

## Installation

### Prerequisites

* Node.js
* Python 3.10+
* PostgreSQL
* OpenAI API Key

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

### Backend Setup

```bash
cd backend

python -m venv venv
```

Activate the environment:

Linux/macOS:

```bash
source venv/bin/activate
```

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Run the server:

```bash
python manage.py runserver
```

Backend runs at:

```text
http://localhost:8000
```

---

## Environment Variables

Create a `.env` file and configure:

```env
OPENAI_API_KEY=your_openai_api_key

DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

---

## Future Enhancements

* Multi-device synchronization
* Browser activity tracking
* Calendar integration
* Team collaboration support
* Advanced workflow analytics
* Voice-based context recovery
* Personalized productivity insights
* Context-aware task recommendations

---

## Use Cases

### Students

Resume assignments, projects, and study sessions without losing track of progress.

### Developers

Recover coding context after interruptions and continue development efficiently.

### Researchers

Maintain continuity across research sessions and preserve important findings.

### Professionals

Track ongoing work, decisions, and priorities across multiple projects.

---

## Vision

To create an intelligent productivity platform that eliminates context loss and enables uninterrupted progress across tasks, projects, and work sessions.

---

## Authors

Siddharth Kumar and Ayushi Dwivedi

B.Tech Computer Science and Engineering

Full-Stack Development | Artificial Intelligence | Productivity Systems
