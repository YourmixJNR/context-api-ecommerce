# Context API E-Commerce App

## Overview

This is a simple React e-commerce application that allows users to browse products, add them to a cart, and proceed to checkout. The application utilizes the Context API for state management, providing a seamless user experience. JSON Server is used as a mock backend for data storage, and Bootstrap is employed for styling.

## Features

- **Product Listing:** Display a variety of products with images, descriptions, and prices.
- **Add to Cart:** Users can add products to their shopping cart.
- **Cart Management:** View and manage items in the cart, including updating quantities and removing items.
- **Checkout:** Seamless checkout process for users to review their items and proceed to a mock payment.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/context-api-ecommerce.git
```
2. Navigate to the project directory:
```bash
cd context-api-ecommerce
```
3. Install dependencies using npm:
```bash
npm install
```
4. Start JSON Server for the mock backend:
```bash
json-server --watch db.json --port 5000
```
### Running the App

Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser to view the app.

## Usage

- Visit the homepage to browse products.
- Click on a product to view details and add it to the cart.
- Navigate to the cart page to review and remove items.
- Proceed to the checkout page to complete the purchase.

## Project Structure

- **`src/components`:** Contains reusable components for the application.
- **`src/context`:** Manages the global state using the Context API.
- **`src/pages`:** Defines the main pages of the application.

## Technologies Used

- **React Context API:** Manages global state for the application.
- **JSON Server:** Mock backend for data storage and API simulation.
- **Bootstrap:** Used for styling and enhancing the overall visual appeal of the application.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Your input is highly appreciated!

License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

[YourmixJNR](https://github.com/YourmixJNR)

