# To-Do App

A simple and responsive to-do list application built using React and CSS. This app allows users to add, delete, and prioritize tasks. It also supports persistent storage using `localStorage`.

## Features

- Add tasks with three priority levels: High, Medium, Low  
- Delete tasks  
- Task cards are color-coded based on priority  
- Responsive design for mobile and desktop  
- Tasks are saved in localStorage  

## Folder Structure

```
to-do-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── README.md
├── index.html
├── package.json
├── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js  
- npm  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/ksshreya/to-do-app.git
   cd to-do-app
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

4. Open in browser:  
   ```
   http://localhost:5173
   ```

## Tech Stack

- React  
- CSS (for styling and responsiveness)  
- Vite (for development and bundling)

## License

This project is open-source and available under the [MIT License](LICENSE).
