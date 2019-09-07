# Project Overview

This is a front-end focused project that I worked on with a team. We created an Amazon clone, called "Shazamazon", which mirrors the look and feel of Amazon's product pages. Our team consisted of 7 people, and we completed this project using an agile workflow on Trello. The project was worked on in two day sprints, with daily stand-up meetings and periodic code shares/reviews. The project took 2.5 weeks to complete.

Each team member had a specific component focus, which they developed individually. They were responsible for the front-end and back-end aspect of their component. Once the component was completed, we combined our components using a microservices architecture, with each component and it's associated database hosted on Amazon EC2/S3 and MongoDB Atlas, respectively. Our components were all brought together on a proxy server hosted on an AWS EC2 server.

## Related Projects

My Proxy Server - https://github.com/shazamazon/proxy-cart
Amazon Link - http://18.217.70.63/

My Components -
1. Price, Fulfillment, Add To Cart, etc.. - https://github.com/shazamazon/module-cart
2. Footer - https://github.com/shazamazon/module-footer

Other Components -
1. Nav & Search Bar - https://github.com/shazamazon/module-nav-search-bar
2. Item Description - https://github.com/shazamazon/module-item-description
3. Related Items Carousel - https://github.com/shazamazon/module-the-best-carousel
4. Browsing History Carousel - https://github.com/shazamazon/module-browsing-history-carousel
5. Photo Gallery - https://github.com/shazamazon/module-photo-gallery
6. Q&A - https://github.com/shazamazon/modules-qa


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Git clone to your local drive
2. From within the root directory:
```sh
npm i 
```
3. From within the root directory:
```sh
npm start
```
4. Navigate to http://localhost:4200 in your browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Axios 0.19.0
- Body-Parser - 1.17.2
- Express 4.15.0
- MongoDB 3.3.2
- Mongoose 5.6.13
- React 16.9.0
- React-DOM 16.9.0

## Development Requirements

- @babel/core 7.6.0
- @babel/preset-env 7.6.0
- @babel/preset-react - 7.0.0
- @babel-loader 8.0.6
- @eslint 6.3.0
- @webpack 4.39.3
- @webpack-cli 3.3.8

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

