# NightwatchJS Code Challenge

## Setup

1. Install NodeJS version 14 or higher
1. Install project dependencies

        npm install

1. Copy file `.env.sample` to a new file `.env`
1. Download Google Chromedriver. Make sure it matches your Google Chrome version
1. Edit file `.env` and set `CHROMEDRIVER_PATH` to the absolute path of your `chromedriver`

## Run

1. Run tests

        npm test

## Challenges

### Do Addition

1. Navigate to <https://sample-calculator-app-v2.netlify.app/>
1. Enter `1` for **Number 1**
1. Enter `2` for **Number 2**
1. Select `+` for **Operation**
1. Click **Submit**
1. Assert that **Result** equals `3`

### Required Field

1. Navigate to <https://sample-calculator-app-v2.netlify.app/>
1. Clear **Number 1**
1. Click **Submit**
1. Assert that the error message **Number 1 is required** displays
