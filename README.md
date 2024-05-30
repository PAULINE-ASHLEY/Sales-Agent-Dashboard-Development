# Sales Agent Dashboard Development

## Objective:

Development of a responsive sales agent dashboard that facilitates the management of school accounts, invoicing, and collections, including data visualization for targets and sign-ups. The README file has three main parts which are setup instructions, project overview, and key design decisions.

# 1. Setup Instructions

## Prerequiste

    1. Ensure you have `node` version >=14 installed. To find out about this, Open a command prompt or terminal and type `node -v`
    2. You have cloned the repo from github
    3. You have a text editor (preferably vscode) installed on your computer

## Steps

    1. Open the project folder with your desire code editor
    2. Open a built in terminal without included with your text editor
    3. To install all dependencies used in the project, type in `npm install` into the open terminal and click enter on your keyboard
    4. Finally, to start the development server, `npm run dev`

At this Point, you should see the application running on a broswer window/tab at [http://localhost:3000]

## Contributing Rules

1. Clone repository
2. Checkout an "all-time" branch using the following format <_your name_>-development (e.g git checkout -b pauline-development)

NOTE: All push and pull requests should be made toward the main branch.

## Making a Commit

Ensure to follow these steps when committing

1. git add .
2. git commit -m <_message here_>
3. git pull origin main
4. git push

## Opening a Pull request

1. Go to github
2. open a new Pull Request to main

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# 2. Project Overview

### Project Structure

`/components` contains global components and atomic or modular components.

components
├── layout
│ └── NavBar
│ ├── components
│ │ ├── NavItem.js
│ │ └── NavSection.js
│ └── index.js

# 3. Key Design Decisions
