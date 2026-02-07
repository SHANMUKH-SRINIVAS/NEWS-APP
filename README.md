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
