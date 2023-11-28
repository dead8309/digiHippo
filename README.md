![Thumbnail](./public/thumbnail.jpg)

# DigiHippo

![GitHub repo size](https://img.shields.io/github/repo-size/dead8309/digiHippo?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/dead8309/digiHippo?style=for-the-badge)
![Typescript](https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Digital MarketPlace web application made using **NEXT.js 14**, **PayloadCMS**, **TailwindCSS**, **Stripe**, **TRPC**, **MongoDB** . It was developed following a [course video by @joshtriedcoding](https://youtu.be/06g6YJ6JCJU?si=fw141nIhO4za2GM5). 

## Table of Contents
- [Demo](#demo)
- [Pages](#pages)
- [New Features](#new-features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)


## Demo

You can view a live demo of the application at: https://dead8309.shop

[Demo Video](https://drive.google.com/file/d/1FJNNZsf90OF-GM89b0qJwn8iNNqO68CY/view?usp=drive_link)


## Pages

- `/`: This is the home page of the web application.
- `/products`: This page lists all the products available on the website.
- `/product/[productId]`: This page displays the details of a specific product.
- `/cart`: This page displays the items in the cart. And allows for checkout through stripe payment gateway. 
- `/thank-you`: This page is displayed after a successful payment where user can download their purchased assets.
- `/sign-in`: This page allows users to sign in to their account.
- `/sign-up`: This page allows users to sign up for a new account.
- `/sell`: This page allows users to sell their digital assets.
- `verify-email`: This page is displayed after a user signs up. It allows users to verify their email address.


## New Features
> The following features were added to the application outside of the course video.

- **Azure Blob Storage**: The application now uses Azure Blob Storage for hosting media files. This provides a scalable and secure solution for storing large amounts of unstructured data.


## Getting Started

To get a local copy up and running, follow these simple steps.

## Installation

Step-by-step guide on setting up the project locally.

Step 1: Clone the repository

```bash
git clone https://github.com/dead8309/digiHippo.git
```

Step 2: Install dependencies

```bash
yarn
```

Step 3: Create a `.env` file in the root directory of the project. Add the following environment variables to the file.

```bash
PAYLOAD_SECRET=
MONGODB_URL=
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
RESEND_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
AZURE_STORAGE_CONNECTION_STRING=
AZURE_STORAGE_CONTAINER_NAME=
AZURE_STORAGE_ALLOW_CONTAINER_CREATE=false
AZURE_STORAGE_ACCOUNT_BASEURL=
```

Step 4: Start the development server

```bash
yarn dev
```

Step 5: Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Contributing

Contributions are always welcome!


## Contact

If you have any questions or want to reach out to me, you can do so at <a href="mailto:hello@dead8309.xyz">My Email Address</a>

## Acknowledgements

- [@joshtriedcoding](https://youtu.be/06g6YJ6JCJU?si=V7_eukWQauuafqts) for the course video.