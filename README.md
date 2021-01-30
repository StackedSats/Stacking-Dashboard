# Staking-Dashboard

### Prerequistics

- Volta installed <a href="https://docs.volta.sh/guide/">Link</a>

OR

- node > 12.0 <a href="https://nodejs.org/en/download/" target="_blank">Link</a>
- npm > 6.0 <a href="https://nodejs.org/en/download/" target="_blank">Link</a>

### Installation

```
- Clone the repo
- npm install
- Spin up the server. By default it would point to localhost, port 4500.
- Rename config.dev.js -> config.js and .env.dev -> .env and fill in the required fields.
```

### Usage

> make sure you have the server running before this step.

```
- npm start
```

### Build

```
- npm run build
```

### LICENCE

This project is GNU Public licenced.

### Architectre overview

- Framework: Create-React-App
- Libraries ( some of them )
  - react-router-dom for naviation
  - axios for network calls
  - @stacks/blockchain-api-client
  - chart.js
  - joi
  - stxcalculator
- State Management: Redux
