# Staking-Dashboard

### Prerequisites

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

### Using Docker

```
- docker build --tag frontend .
- docker run -p 8080:80 frontend   // now open localhost:8080 in your browser
```

### Stacking Mechanism

- Before Stacking can be initiated for a token holder, the delegator needs to be granted permission to Stack on behalf of the account owner. The permission is restricted to the maximum amount the delegator is allowed to Stack. The maximum amount is not limited by the available funds and can be set much higher. An account can only be associated with one single delegator

- The account has to define the delegation relationship. They can optionally restrict the Bitcoin reward address that must be used for payouts, and the expiration burn block height for the permission, thus limiting the time a delegator has permission to Stack

- Delegators have to lock Stacks from different accounts ("pooling phase") until they reach the minimum amount of Stacks required to participate in Stacking

- Once a delegator locks enough STX tokens, they can finalize and commit their participation in the next reward cycle(s)

- Certain delegation relationships may allow the STX holder to receive the payout directly from the miner (step 5/6)

- The termination of the delegation relationship can either happen automatically based on set expiration rules or by actively revoking delegation rights

### LICENSE

This project is GNU Public licenced.

### Architecture overview

- Framework: Create-React-App
- Libraries ( some of them )
  - react-router-dom for naviation
  - axios for network calls
  - @stacks/blockchain-api-client
  - chart.js
  - joi
  - stxcalculator
- State Management: Redux
