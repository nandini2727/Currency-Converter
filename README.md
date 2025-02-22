# Currency Converter

## Overview

This is a simple currency converter application that allows users to convert between different currencies using real-time exchange rates.

## Features

- Convert between multiple currencies
- Fetch real-time exchange rates from an API
- User-friendly interface
- Supports basic and accurate calculations

## Technologies Used

- HTML, CSS, JavaScript (Frontend)
- Fetch API for real-time exchange rates
- Bootstrap for styling (optional)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nandini2727/currency-converter.git
   ```
2. Open the project folder.
3. Open `index.html` in your web browser.

## Usage

1. Select the base currency.
2. Select the target currency.
3. Enter the amount to convert.
4. Click the "Convert" button to get the converted amount.

## API Integration

This project fetches real-time exchange rates from [ExchangeRate-API](https://www.exchangerate-api.com/) (or any other chosen API). Ensure you have an API key and update the script accordingly.

## Example API Usage

```javascript
fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`)
  .then(response => response.json())
  .then(data => console.log(data.conversion_rates));
```
