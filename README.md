# Pulse News

A responsive news app built with React that lets you browse and search the latest articles by topic. Stay updated with a clean, modern interface and smooth search experience.

## Features

- **Live search** — Type in the search bar (e.g. sports, fitness, politics) and results update automatically after a short delay (debounced).
- **Quick filters** — One-click category buttons: Sports, Politics, Entertainment, Health, and Fitness.
- **Responsive layout** — Works on mobile, tablet, and desktop. The nav bar adapts: “All News” and “Trending” move to a centered row on small screens.
- **Card grid** — News articles shown in a responsive grid (about 4 cards per row on large screens) with image, title, short description, and a “Read More” button fixed at the bottom of each card.
- **Modern UI** — Dark nav bar, smooth gradients, and simple hover effects for a professional look.

## Tech Stack

- **React** (with Hooks)
- **Vite** — build tool and dev server
- **News API** — [newsapi.org](https://newsapi.org/) for article data
- **Axios** — HTTP client for API requests
- **CSS** — Custom styles with flexbox and CSS Grid, no UI framework

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- A free [News API](https://newsapi.org/) key

### Installation

1. Clone or download this project and open a terminal in the project folder.

2. Install dependencies:

   ```bash
   npm install
   ```

   If the app uses the News API with axios, ensure axios is installed:

   ```bash
   npm install axios
   ```

3. Add your News API key in the app (e.g. in `src/Components/News.jsx`), or use environment variables for production.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

### Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```
News-App/
├── src/
│   ├── Components/
│   │   ├── Card.jsx    # Renders the grid of news cards
│   │   └── News.jsx    # Main page: nav, search, filters, fetches data
│   ├── App.jsx
│   ├── App.css
│   ├── index.css       # Global and component styles
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── README.md
```

## Usage

- Use the **search bar** to type any topic (e.g. “sports”, “fitness”); results update as you type. Press **Enter** or click **Search** to run the search immediately.
- Click **All News** or **Trending** in the nav for quick navigation (layout only; you can later wire these to filters or routes).
- Click a **category button** (Sports, Politics, etc.) to load news for that topic.
- Click **Read More** on any card to open the full article in a new tab.

## License

This project is for learning and portfolio use. News API usage is subject to [News API terms](https://newsapi.org/terms).
