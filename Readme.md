Overview
This document serves as a guide to understand the framework, its usage, and features.

System requirements:
`Node.js 18+`
`Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).`
`MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.`
`Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.`

Installation:
`npm init playwright@latest`

Run the install command and select the following to get started:

Choose between TypeScript or JavaScript (default is TypeScript) -- For this framework JavaScript has been used
Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
Add a GitHub Actions workflow to easily run tests on CI
Install Playwright browsers (default is true). -- Currently tests are being run on chromium browser only. Other browsers can be added from Config file as needed.

Updating Playwright:
`npm install -D @playwright/test@latest`

Check Playwright Version:
`npx playwright --version`

Running the Tests

`npx playwright test` -- Run all tests in headless mode
`npx playwright test --debug` -- Run tests in debug mode
`npx playwright test --headed` -- Run tests in UI mode. By defualt tests run in headless mode.

Test Cases:
westpacKiwisaverCal.spec.js file contains tests to verify the functionality of the Westpac KiwiSaver Calculator under different scenarios. Each test case is designed to validate a specific aspect of the calculator's behavior.

Page Ojbect File:
kiwisaverCalculatorPage file contains the element locators for westpac kiwisaver calculator, actions being perfomed on these elements and assertions being performed

Fixture File:
calculatorTestData file contains array of test data to verify the calculator functionaly acorss 4 different scenarios as highlighted below:

Test Case 1: Verify with Age less than 18
Description: This test verifies the functionality of the KiwiSaver Calculator when the user's age is less than 18 years old.

Test Case 2: Verify with Retirement Home
Description: This test verifies the functionality of the KiwiSaver Calculator in the context of retirement planning.

Test Case 3: Verify with First Home
Description: This test verifies the functionality of the KiwiSaver Calculator for users planning to purchase their first home.

Test Case 4: Verify with Age more than 64
Description: This test verifies the functionality of the KiwiSaver Calculator when the user's age is more than 64 years old.

Config File:
playwright.config file contains all generic config parameters for the project.

Reporting:
Everytime a test run is completed, an html test file is generated showing the results of the test run. The report can be viewed by running following command `npx playwright show-report`
