# Applications-app
A a system for managing students applications on Angular.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, make sure your have Node.js and an npm package manager installed.

### Node.js

Angular requires Node.js version 10.9.0 or later.
You can check your version by running 
```
node -v 
```
in a terminal/console window.

Go to https://nodejs.org to get Node.js.

### npm package manager

Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

To check that you have the npm client installed, run 
```
npm -v in a terminal/console window.
```

### Running the project

#### Step 1: Get a copy of the project

1. On GitHub, navigate to the main page of the repository.

2. Under the repository name, click Clone or download.

3. To clone the repository using HTTPS, under "Clone with HTTPS", click . To clone the repository via SSH, click Use SSH, then click .


#### Step 2: Installing the npm
Install the dependencies in the local node_modules folder.

In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

By default, npm install will install all modules listed as dependencies in package.json.

To install the npm, open a terminal/console window and enter the following command:
```
npm install 
```
If you're using Linux and have a permission error, run:
```
sudo npm install 
```

#### Step 3: Run the application

The Angular CLI includes a server, so that you can easily build and serve your app locally.

1. Go to the workspace folder.

2. Launch the server by using the CLI command 
```
ng serve --open
```
The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

You can open it manually by typing http://localhost:4200/ in your browser.

To change the port, run
```
ng serve --port 3000
```
