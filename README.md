# Frontend project

## Overview

This project leverages React.ts and Redux Toolkit to enhance skills in fetching, displaying, and searching data from designated API endpoints. It also incorporates advanced features such as multi-page routing and authentication, providing a comprehensive learning experience for building an e-commerce shop.

## Custom Hooks

- **useFetch(productsEndpoint: string): [Product[], boolean, string | null]**: This hook retrieves an array containing product objects, each accompanied by its respective properties. The `productsEndpoint` parameter specifies the API endpoint for fetching products. The hook returns a tuple containing three elements:
  - An array of product objects.
  - A boolean indicating whether the data is currently being fetched (`true` during the fetch operation).
  - A string representing any error that occurred during the fetch operation (`null` if no errors occurred).

This data is employed to render the complete list of products on the UI product page.

## Routes

The project utilizes the latest version of React Router for navigation, comprising the following main pages:

- **Home:** The landing page providing an overview of the application.
- **Products:** Displaying a list of available products for users to explore and purchase.

- **Cart:** Showcasing the selected products added to the shopping cart.

Additionally, there are two private pages:

- **Profile:** A user-specific page displaying personalized information and order history.

- **Admin Pages:** Exclusive pages for administrators to manage product listings and user data.

Furthermore, there is a sub-page for product details:

- **Product Details:** Accessible through the Products page, providing detailed information about a specific product.

Users can navigate between these pages seamlessly using React Router. Ensure to handle any necessary route parameters and implement any logic required for private routes.

## Home Page

- **Default Landing Page:** The Home Page serves as the default landing page of the application, providing users with an initial overview.

- **Beautiful Shopping Page:** The user interface is designed with a visually appealing shopping layout, creating an engaging and immersive experience.

- **Explore Products Button:** Users are encouraged to explore available products through a prominently placed button that redirects them to the Product Page.

- **Newsletter Subscription:** The Home Page includes an input label where users can subscribe to newsletters. Entered email addresses are stored in the application's state, providing a convenient way for users to stay updated on the latest information.

- **Storage in Redux Store:** Newsletter subscriptions are efficiently managed by storing email addresses in the Redux store, ensuring seamless access and retrieval of subscription data.

## Products Page

- **Product Cards:** The page features a grid of product cards, each containing crucial information, including an image, price, name, and a brief description of the product. This layout allows users to quickly scan and evaluate available products.

- **Add to Cart:** Users can easily add products to their shopping carts by clicking the "ADD TO CART" button on each product card. This initiates the process of adding the selected product to the cart for further processing.

- **View Details:** For users seeking more information about a specific product, the "VIEW" button on each card redirects them to a dedicated View Page. Here, users can explore in-depth details, descriptions, and additional images of the product.

- **Flexible Quantity Selection:** On the View Page, users have the flexibility to add the product to the cart in various quantities, allowing for a personalized shopping experience. They can adjust the quantity according to their preferences and needs.

## Categories Page

- **Advanced Search Features:** The Categories Page offers a range of advanced search features, including three distinct search bars. The first allows users to filter products based on categories, providing a streamlined way to find items of interest. The second search bar enables users to search for products by typing their names, facilitating a quick and targeted search experience. The third search bar allows users to sort products based on prices, either in ascending or descending order.

- **Product Cards Display:** The page presents product cards based on the selected search and sorting criteria. This intuitive layout allows users to explore products that match their preferences effortlessly.

- **Favorite Products List:** Users have the option to add products to their favorite products list directly from this page. The list is then saved in their profiles, providing a convenient way for users to curate a personalized collection of preferred items.

- **View Product Details:** Clicking on the "VIEW PRODUCT" button from this page redirects users to the detailed View Page for the selected product. Here, users can access comprehensive information, additional images, and make informed decisions about the product.

## Profile Page

- **Private Access:** The Profile Page is a secure and private section accessible only to logged-in users. This ensures that users can view and manage their profile-related information with confidentiality.

- **Favorite Products List:** The main feature of this page is the display of a user's favorite products. Each product is presented with its essential details, such as image, name, and price, allowing users to quickly identify and revisit their preferred items.

- **Interactive Management:** Users have the ability to interact with their favorite products directly from this page. Common actions include removing a product from the favorites list or navigating to the detailed View Page for more information.

- **Personalized Experience:** The Profile Page contributes to a personalized user experience, enabling individuals to curate and revisit a collection of products that align with their preferences.

## Admin Page

- **Exclusive Admin Access:** The Admin Page is a restricted area accessible only to users with admin privileges. This ensures that only authorized individuals can perform management actions related to products.

- **Product Management:** Admins have the authority to perform various management tasks on products. Currently, the primary action available is the deletion of selected products. This capability allows admins to maintain an updated and organized product catalog.

- **Intuitive Deletion:** The interface provides an intuitive way for admins to delete selected products. This involves a dedicated "Delete" button for removal items.

## Cart Page

- **Product Details:** The Cart Page presents a detailed view of each product in the cart, including the product name, price, quantity, subtotal, and the total amount for all products in the cart. This ensures users have a clear understanding of their selected items and associated costs.

- **User-Friendly Controls:** Users have easy-to-use buttons to manipulate the cart contents. They can add or remove items by one unit or choose to delete the entire quantity of a particular product from the cart.

- **Navigation Options:** Two prominent buttons are available to guide users through their shopping journey. The first button redirects users to the Product Page, allowing them to continue exploring and adding products to their cart. The second button, labeled "Checkout," signals the finalization of the purchasing phase.

- **Checkout Process:** To maintain a smooth and secure checkout process, certain conditions are in place. If the cart is empty, users receive a message indicating the need to add products to the cart. Additionally, users who are not logged in are prompted to log in before proceeding with the checkout process.

- **User-Specific Messages:** Depending on the user's actions, specific messages are displayed. For instance, attempting to checkout with an empty cart results in a message encouraging users to add items. If the user is not logged in, they are prompted to log in before finalizing their purchase.

## Changing Theme

- **Dynamic Theme Options:** Users have the flexibility to personalize their shopping experience by changing the background color theme of the e-commerce shop. This dynamic feature enhances user engagement and allows individuals to tailor the visual aesthetics based on their preferences.

- **Theme Switch Button:** A dedicated "Change Theme" button is prominently displayed, enabling users to toggle between dark and light modes effortlessly. The button serves as an intuitive entry point for users to explore different visual themes.

- **Seamless Transition:** Upon clicking the "Change Theme" button, the background color seamlessly transitions between dark and light modes. This smooth experience enhances the overall user interface and contributes to a visually appealing browsing environment.

- **User Preference:** The chosen theme is stored locally or associated with the user's profile, ensuring that the selected background color persists across sessions. This personalized touch provides a consistent and tailored visual experience for returning users.

## Styling

Material UI components are utilized alongside custom CSS styling to design and refine the appearance of the React components across the application.

## Features

- React.ts and Redux Toolkit: Utilizing TypeScript with React and Redux Toolkit for a robust and type-safe application structure.
- Data Fetching: Demonstrates proficiency in fetching data from specified API endpoints, enhancing the ability to work with external data sources.

- Data Display: Focuses on effective data presentation, honing skills in creating responsive and visually appealing user interfaces.

- Search Functionality: Implements search functionality to enable users to efficiently find relevant information within the application.

- Multi-page Routing: Incorporates multi-page navigation to create a seamless and intuitive user experience.

- Authentication: Implements authentication mechanisms tailored for an e-commerce shop, ensuring secure access and personalized user interactions.

## Technologies Used

- **React.js:** A widely adopted JavaScript library for building user interfaces. React.js utilizes a declarative approach, making it efficient to create interactive components. Its component-based architecture enhances code reusability and maintainability.

- **TypeScript:** This statically-typed superset of JavaScript adds a layer of static analysis to the code, catching potential errors during development. TypeScript improves code quality, enhances developer productivity, and provides better documentation through type annotations.

- **Redux Toolkit:** A comprehensive set of utilities for managing the state of a React application. Redux Toolkit simplifies the process of handling complex state logic, offering a predictable state container. This ensures a centralized and organized approach to managing application data, leading to more maintainable code.
<!--

## Deploy

Please see my E-Commerece project form here: "https://aliattar1362.github.io/e-commerce-shop/" -->
