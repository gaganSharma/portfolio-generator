# Portfolio Generator

A Node.js application that generates a professional developer portfolio webpage using the Gemini API. Users provide their name, email, skills, and projects, and the app returns ready-to-use HTML/CSS code for a portfolio.

## Features

- Generates custom HTML/CSS portfolio pages using AI
- Simple REST API endpoint for portfolio generation
- Serves a static `index.html` at the root route

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Setup Guide

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/portfolio-generator.git
   cd portfolio-generator
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a `.env` file in the project root:**

   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5173
   ```

   Replace `your_gemini_api_key_here` with your actual Gemini API key.

4. **Ensure you have an `index.html` file in the project root.**

## How to Run

Start the server with:

```sh
node script.js
```

OR

```sh
npm run start
```

The server will run on [http://localhost:5173](http://localhost:5173) (or the port you set in `.env`).

## Usage

- Open your browser and go to [http://localhost:5173](http://localhost:5173).
- Use the UI (or send a POST request to `/generate-portfolio`) with your details.
- Receive a generated HTML/CSS portfolio page in the response.

## API Endpoint

**POST** `/generate-portfolio`

**Body:**

```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "skills": "JavaScript, Node.js, React",
  "projects": "Project1, Project2"
}
```

**Response:**

```json
{
  "portfolio": "<!DOCTYPE html>..."
}
```

## License

MIT

Copyright (c) 2025 Gagan

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the “Software”), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.
