# CineMatch 

[![Main](https://github.com/mdaveijk/S3-IP-CineMatch-Frontend/actions/workflows/main.yml/badge.svg)](https://github.com/mdaveijk/S3-IP-CineMatch-Frontend/actions/workflows/main.yml) <br>
[![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white)](https://www.alpinelinux.org/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Materialize](https://img.shields.io/badge/materialize-%23EC407A.svg?style=for-the-badge&logo=materialize&logoColor=white)](https://materializecss.com/)

CineMatch is a movie match-making software project that allows users to enter their preferences to watch a certain movie or movie genre, their availability, location, and preferred distance. The system will look for potential matches with other users. Once a match has been made, users can communicate through the application to decide on further details and leave a review about their overall experience afterward.

This repository is responsible for the frontend source files of CineMatch.

## Table of Contents
- [Running the CineMatch Frontend](#running-the-cinematch-frontend)
  - [With Node Package Manager (NPM)](#with-node-package-manager-npm)
    - [Prerequisites](#prerequisites)
    - [Setting API URL](#setting-api-url)
    - [Installing Dependencies](#installing-dependencies)
    - [Starting up the Frontend](#starting-up-the-frontend)
    - [Shutting Down the Frontend](#shutting-down-the-frontend)
  - [With Docker](#with-docker)
    - [Prerequisites](#prerequisites)
    - [Starting up the Frontend](#starting-up-the-frontend)
    - [Shutting Down the Services](#shutting-down-the-services)

## Running the CineMatch Frontend

### With Node Package Manager (NPM)

#### Prerequisites

To run the CineMatch frontend, make sure you have the following applications installed on your system:

- Node
- Node Package Manager (NPM)

#### Setting API URL

To run the software correctly on your system, you must supply the URL of the API backend api-gateway. In the project root directory, you'll find a `.env.example` file. Rename this file to `.env` and enter your API URL as shown in the example below:

```
REACT_APP_API_URL="http://example:8080"
```

Save the file.

#### Installing Dependencies 

Navigate to the root directory of the project in your terminal emulator and run the following command:

```
npm install
```

NPM will now download and install all the dependencies needed to run the frontend application. You will generally only have to do this once. When it is finished, proceed to the next step.

#### Starting up the Frontend

Navigate to the root directory of the project in your terminal emulator and run the following command:

```
npm start
```

NPM will run the script to start the frontend application and open it in your default web browser.

#### Shutting Down the Frontend

To shut down the frontend, terminate the script running in your terminal emulator by pressing `Ctrl + C`. The script will ask you to confirm by entering `Y` and then pressing return.

### With Docker

Use Docker to quickly set up the CineMatch frontend on your local machine or self-hosted server.  
[Read more about Docker here.](https://docs.docker.com/) 🐳

Before running the project, make sure you have Docker Desktop installed or configured.

Alternatively, you can run the docker-compose.yaml file with separate components like Docker Engine (provides the core components), Docker CLI (interface which allows you to interact with Docker and manage containers and images), and Docker Compose (necessary for the management of multi-container applications). However, for a more convenient and user-friendly experience, I would recommend using Docker Desktop, which provides all the necessary tools and features. It even includes a great UI to work with.

Make sure these prerequisites are properly installed and set up on your system before proceeding with the setup.

#### Starting up the Frontend

Open your terminal emulator and run the following command:

```
docker run -e REACT_APP_API_URL="http://example:8080" -p 3000:3000 --name some-name --rm -d mschippers/cinematch-front:main
```

Docker will start pulling the main CineMatch image from Docker Hub and launch it when the process is completed.

#### Shutting Down the Services

To shut down the CineMatch frontend application and the associated container, run the following command in your terminal emulator:


```
docker stop some-name
```
