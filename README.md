# NewsWave

NewsWave is a responsive news application built with React JS and Bootstrap, offering dynamic content loading and a modern user interface for an enhanced news browsing experience.

## Features

- Responsive design for various devices
- Dynamic content loading
- Modern and intuitive user interface
- Built with React JS and Bootstrap

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- A News API key (https://newsapi.org/)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/newswave.git
   cd newswave
   ```

2. Install dependencies in the root folder
   ```
   npm install
   ```

3. Navigate to the `news-api-proxy` folder and enter your News API key in the `.env` file
   ```
   cd news-api-proxy
   echo "NEWS_API_KEY=your_api_key" > .env
   ```

4. Start the server in the `news-api-proxy` folder
   ```
   node server.js
   ```

5. Return to the root folder and start the development server
   ```
   cd ..
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal)

## Project Structure

```
newswave/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── news-api-proxy/
│   ├── server.js
│   ├── .env (to be created)
│   └── other files...
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Bootstrap](https://getbootstrap.com/) - For responsive design

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

