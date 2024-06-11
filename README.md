# Brew Hoperator

Welcome to Brew Hoperator, your go-to application for finding breweries, exploring beer guides, and reading beer-related blogs. This project is built with Gatsby and uses the Open Brewery DB API to fetch and display brewery information.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Accessibility](#accessibility)
- [License](#license)

## Features

- **Search Breweries:** Find breweries by city, state, or zip code.
- **Beer Guide:** Explore a comprehensive guide to different types of beers.
- **Brews & Views Blog:** Read blogs about beer and brewery experiences.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Accessible:** Enhanced accessibility for better user experience.

## Installation

1. **Clone the repository:**

```
git clone https://github.com/your-username/brew-hoperator.git
cd brew-hoperator
```

2. **Install dependencies:**

```
npm install
```

3. **Start the development server:**

```
npm run develop
```

## Usage

### Searching for Breweries

On the homepage, you can search for breweries by entering a city, state, or zip code in the search input. The input will trigger the search when you press 'Enter' or click the search button.

### Navigation

The navigation bar at the top allows you to explore different sections of the site:

- **FIND BREWS:** Search for breweries.
- **BEER GUIDE:** Read guides about different beers.
- **BREWS & VIEWS BLOG:** Browse beer-related blogs.

## API Integration

### Open Brewery DB API

This project uses the [Open Brewery DB API](https://www.openbrewerydb.org/) to fetch brewery data. Below are examples of API calls:

- **Search by City:**
```
https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3
```

- **Search by State:**
```
https://api.openbrewerydb.org/v1/breweries?by_state=california&per_page=3
```

- **Search by Zip Code:**
```
https://api.openbrewerydb.org/v1/breweries?by_postal=92101&per_page=3
```

## Accessibility

To ensure the application is accessible to all users, including those with disabilities, the following measures have been implemented:

- **ARIA Labels:** Descriptive labels for input fields and buttons.
- **Keyboard Navigation:** Ensuring all interactive elements are navigable via keyboard.
- **Error Messages:** Clear and concise error messages for invalid inputs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
