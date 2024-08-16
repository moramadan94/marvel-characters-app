# Marvel Characters App

## Overview

Marvel Characters App is a React Native application that displays a list of Marvel characters using the Marvel Characters API. It features character details, error handling, and support for multiple languages and themes.

## Features

- **Home Screen**: Displays a list of Marvel characters with their names and thumbnail images.
- **Search**: Users can search for specific characters using the search functionality.
- **Pull to Refresh**: Users can refresh the list of characters by pulling down on the screen.
- **Login Screen**: Simple login screen with username and password fields.
- **Character Detail Screen**: Displays detailed information about a selected character, including their full image, description, and a list of comics they appear in.
- **Localization**: Supports both English and Arabic languages.
- **Theming**: Light and dark themes are available.
- **Image Animation**: Smooth image animations when navigating to the Character Detail screen.
- **Error Handling**: Graceful handling of API errors with user feedback.
- **Loading Indicators**: Custom loading indicators are displayed during API calls to enhance user experience.
- **State Persistence**: Redux Toolkit and Thunk are used for state management and to persist user data across app restarts.

## Technologies Used

- **React Native**: A framework for building native mobile applications using React. It allows you to use JavaScript and React to create apps that work on both iOS and Android platforms.

- **TypeScript**: A superset of JavaScript that adds static typing to the language. It helps catch type-related errors at compile time and improves code quality and maintainability.

- **Redux Toolkit**: A powerful toolset for writing Redux logic. It simplifies Redux state management and makes it easier to maintain.

- **Redux Thunk**: Middleware that allows you to write action creators that return a function instead of an action, used for handling asynchronous logic in Redux.

- **Context API**: A React feature used for managing global state. It provides a way to pass data through the component tree without having to pass props down manually at every level.

- **React Navigation**: A library for routing and navigation in React Native apps. It provides a customizable and extensible solution for handling navigation between screens in your application.

- **Axios**: A promise-based HTTP client for making API requests. It simplifies making requests and handling responses, as well as providing features like interceptors for request/response handling.

- **i18next**: A popular internationalization (i18n) framework that provides support for translating your application into different languages. It is used here for managing translations and localization.

- **AsyncStorage**: A simple, asynchronous storage system for persisting key-value pairs locally on the device. It is used for storing user preferences and settings.

- **react-native-svg**: A library for rendering SVG (Scalable Vector Graphics) images in React Native. It allows for the use of SVGs for icons and other vector-based graphics.

- **react-native-animatable**: A library for creating animations in React Native using a simple API. It allows you to animate components with predefined animations or custom animations.

## Setup and Installation

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Yarn**: Package manager. [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)
- **Android Studio** or **Xcode**: For Android and iOS development, respectively.

### Cloning the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/moramadan94/marvel-characters-app.git
cd marvel-characters-app
```

### Installing Dependencies

Install the project dependencies using Yarn:

```bash
npm install
```

### Configuring API Keys

1. **Sign Up for Marvel Developer Account**: Obtain your API keys from the [Marvel Developer Portal](https://developer.marvel.com/).

2. **Add API Keys to Constants File**: In the project, locate the file where API keys are configured (e.g., `src/utils/constants.ts`) and add the following:

   ```typescript
   export const MARVEL_PUBLIC_KEY = 'your_public_key';
   export const MARVEL_PRIVATE_KEY = 'your_private_key';
   ```

```

**Note:** React Native team recommends:

> Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like `react-native-dotenv` and `react-native-config` are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys.
> Source: [React Native Security Documentation](https://reactnative.dev/docs/security#storing-sensitive-info)

```

### Running the App

#### For iOS

1. Install CocoaPods dependencies:

   ```bash
   cd ios
   pod install
   cd ..
   ```

````

2. Start the development server:

   ```bash
   yarn start
   ```

3. Run the app on an iOS simulator or connected device:

   ```bash
   yarn ios
   ```

#### For Android

1. Start the development server:

   ```bash
   yarn start
   ```

2. Run the app on an Android emulator or connected device:

   ```bash
   yarn android
   ```

## Usage

1. **Login Screen**: Enter any username and password to log in.

2. **Home Screen**: Displays a list of Marvel characters. Tap on a character to view more details.

3. **Character Detail Screen**: Shows detailed information about a character, including their full image, description, and a list of comics they appear in.

4. **Settings Screen**: Allows users to change settings such as themes and language. Accessible from login , home and Character Detail Screens.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. For major changes, please open an issue to discuss the changes first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
````
