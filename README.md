# TransWeather

**TransWeather** is a React.js application that provides real-time weather information for cities around the world. The app allows users to search for a city and view the current temperature and climate conditions. It also integrates Azure’s translation service to translate weather descriptions into a target language.

## Features

- Search for any city and get current weather information.
- View the temperature in Celsius.
- Display weather descriptions in multiple languages using Azure's text translation service.
- Animated weather icons to represent different weather conditions.
- User-friendly interface with responsive design.

## Technologies Used

- **React.js**: For building the user interface.
- **OpenWeatherMap API**: For fetching weather data.
- **Azure Translator Text API**: For translating weather descriptions.
- **Material-UI**: For UI components.
- **CSS**: For styling and animations.
 
## APIs:
- **OpenWeatherMap API**: Fetches real-time weather data and forecasts.
- **Azure Text Translation API**: Provides support by translating weather information.

**Frontend**:
- **React.js**: Used to create the frontend application and manage UI interactions.
- **Material-UI**: For styling and layout to create a modern and responsive interface.
- **JavaScript (ES6+)**: Core programming language used.

**Backend**:
- **Azure App Service**: Hosting the TransWeather app, providing a scalable and reliable environment for deployment

## Project Demo
- **Project URL**: [TransWeather Live Demo](https://transweather-chbfhfbfeuaegefj.centralindia-01.azurewebsites.net/)
- **Demo Video**: [Watch Video](https://drive.google.com/file/d/124ya0VTk0ZUkfBrYLClVv104bUKniZlx/view?usp=drivesdk)
- **GitHub Repository URL**: [TransWeather on GitHub](https://github.com/Kazizahra321/TransWeather)
- **Sample Search**
  - Sample city: London
## Screenshots

- **Azure Portal with all the resources**
![Screenshot (24)](https://github.com/user-attachments/assets/b72bc90d-dcfa-4712-a924-e6db5b13aff4)

- **Resource group**
![Screenshot (25)](https://github.com/user-attachments/assets/07fc715b-ec35-46aa-b999-c8aca7c897e2)

- **Translator sevice**
![Screenshot (26)](https://github.com/user-attachments/assets/22877824-83d9-4182-a23d-82b11959600a)

- **App sevice**
![Screenshot (27)](https://github.com/user-attachments/assets/31b3a75a-0eb9-4e7c-8fcf-d13ede04a023)

- **Working Demo**
![Screenshot (28)](https://github.com/user-attachments/assets/da2a2d03-8ace-472e-ab77-9fe3a5801851)

## Azure Services Used
**1. Azure App Service**:
- Deployed the front-end React.js application to Azure App Service, ensuring scalability, reliability, and easy deployment.
  
**2. Azure Cognitive Services – Text Translation**:
- Integrated Azure’s translation service to allow weather information to be translated.

## Future Enhancements:

- **Push Notifications**:

Implement push notifications to alert users about sudden weather changes or extreme weather conditions.
Voice Search:

Add support for voice-based city searches using speech recognition to improve user accessibility.
Machine Learning for Predictive Weather Analysis:

Implement predictive analysis to provide future weather predictions based on historical data and patterns.

- **Machine Learning for Predictive Weather Analysis**:

Implement predictive analysis to provide future weather predictions based on historical data and patterns.

## Installation

1. Clone the repository:

   bash
   git clone https://github.com/Kazizahra321/TransWeather.git
Navigate into the project directory:

bash

cd TransWeather
Install the dependencies:

bash

npm install
Create a .env file in the root directory and add your API keys:

env

REACT_APP_TRANSLATOR_TEXT_ENDPOINT=your_text_translation_endpoint
REACT_APP_TRANSLATOR_TEXT_API_KEY=your_text_translation_api_key
REACT_APP_TRANSLATOR_DOC_ENDPOINT=your_document_translation_endpoint
REACT_APP_TRANSLATOR_DOC_API_KEY=your_document_translation_api_key
Start the development server:

bash

npm start
Usage
Enter a city name in the search box and press "Search".
The app will display the current temperature, weather description, and an animated weather icon for the city.
The weather description will be translated into English.
Contributing
Feel free to fork the repository and submit pull requests. Please ensure your changes are well-documented and tested.

License
This project is licensed under the MIT License. See the LICENSE file for details.
