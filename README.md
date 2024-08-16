# Marvel Characters App

## Overview

Marvel Characters App is a React Native application that showcases Marvel characters using the Marvel Characters API. It includes features such as character detail views, error handling, language support, and theming.

## Features

- **Home Screen**: Displays a list of Marvel characters with names and thumbnails.
- **Search**: Filter characters by name.
- **Pull to Refresh**: Refresh the character list with a pull gesture.
- **Login Screen**: Simple login interface with username and password fields.
- **Character Detail Screen**: Detailed information about a selected character, including full images, descriptions, and comic appearances.
- **Localization**: Supports English and Arabic.
- **Theming**: Switch between light and dark modes.
- **Image Animation**: Smooth transitions and animations between screens.
- **Error Handling**: User-friendly error messages and feedback.
- **Loading Indicators**: Custom spinners during API calls.
- **State Persistence**: Redux Toolkit and Thunk for maintaining state across app restarts.

## Technologies Used

- **React Native**: Cross-platform mobile application framework.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **Redux Toolkit**: Simplified state management with Redux.
- **Redux Thunk**: Middleware for handling asynchronous logic in Redux.
- **Context API**: Global state management in React.
- **React Navigation**: Flexible navigation solution for React Native apps.
- **Axios**: HTTP client for API requests.
- **i18n-js"**: Internationalization framework for language support.
- **AsyncStorage**: Persistent local storage for user data.
- **react-native-svg**: SVG rendering in React Native.
- **react-native-animatable**: Easy-to-use animations for React Native components.

## Setup and Installation

### Prerequisites

Ensure the following are installed:
- **Node.js**: [Download](https://nodejs.org/en/) (LTS version recommended, version 18 and above)
- **npm**: Comes with Node.js.
- **Watchman** (macOS only): Filesystem watcher.
- **Xcode**: For iOS development.
- **Android Studio**: For Android development.
- **CocoaPods** (iOS): Dependency manager for iOS projects.

### Cloning the Repository

Clone the project repository:

```bash
git clone https://github.com/moramadan94/marvel-characters-app.git
cd marvel-characters-app
```

### Installing Dependencies

Install dependencies with npm:

```bash
npm install
```

### Configuring API Keys

1. **Sign Up for Marvel Developer Account**: Obtain API keys from the [Marvel Developer Portal](https://developer.marvel.com/).

2. **Add API Keys to Constants File**: Edit the `src/utils/constants.ts` file:

   ```typescript
   export const MARVEL_PUBLIC_KEY = 'your_public_key';
   export const MARVEL_PRIVATE_KEY = 'your_private_key';
   ```

**Note:** React Native team recommends:
Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like `react-native-dotenv` and `react-native-config` are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and API keys.

Source: [React Native Security Documentation](https://reactnative.dev/docs/security#storing-sensitive-info)

### Running the App

#### iOS Setup

1. **Install Dependencies**:

   ```bash
   cd ios
   bundle install
   ```

2. **Install iOS Pods**:

   ```bash
   bundle exec pod install
   ```

   - This ensures the specific version of CocoaPods is used as defined in the `Gemfile`.
   - Alternatively, you can run `pod install`, which uses the globally installed version of CocoaPods.

     **When to Use**:

   - Use this command after running `bundle install` to install or update the CocoaPods dependencies in your `ios` directory.
   - It ensures that the version of CocoaPods used is the one specified in the `Gemfile`, which helps maintain consistency across different development environments.

     ```bash
     pod install
     ```

   - This command installs the CocoaPods dependencies for your iOS project using the globally installed version of CocoaPods.

     **When to Use**:

   - Use `pod install` when you want to install CocoaPods dependencies using whatever version of CocoaPods is installed globally on your machine.
   - This command is simpler and quicker, but it does not guarantee that the exact same version of CocoaPods is used as in other environments (e.g., other developers' machines or CI/CD pipelines).

3. **Run the iOS App**:

   ```bash
   npm run ios
   ```

#### Android Setup

1. **Install Android Dependencies**:

   Ensure Android SDKs are installed as per [React Native's setup guide](https://reactnative.dev/docs/environment-setup).

2. **Run the Android App**:

   ```bash
   npm run android
   ```

### Troubleshooting

- For iOS: Re-run `bundle install` and `bundle exec pod install` if issues arise.
- For Android: Ensure environment variables are set correctly and that an emulator or device is connected.

## Project Structure

```bash
/src
├── /assets
├── /components
│   ├── /atoms
│   ├── /molecules
│   ├── /organisms
├── /screens
├── /contexts
├── /locales
├── /hooks
├── /services
├── /navigation
├── /store
├── /styles
├── /theme
└── /utils
```

### Directory Descriptions

- **`/assets`**: Images, fonts, and static resources.
- **`/components`**:
  - **`/atoms`**: UI building blocks (e.g., buttons, text inputs).
  - **`/molecules`**: Groups of atoms working together (e.g., form fields).
  - **`/organisms`**: Complex components made up of molecules and atoms (e.g., headers, character cards).
- **`/screens`**: Individual screens (e.g., Home, Login, Character Detail).
- **`/contexts`**: React context providers/consumers for state management.
- **`/locales`**: Localization files for multi-language support.
- **`/hooks`**: Custom React hooks for reusable logic.
- **`/services`**: API calls and data-fetching utilities.
- **`/navigation`**: React Navigation configuration.
- **`/store`**: Redux slices and global state management files.
- **`/styles`**: Global styling and theming.
- **`/theme`**: Light and dark theme configurations.
- **`/utils`**: Utility functions and helpers.

## Usage

1. **Login Screen**: Enter any username and password to log in.
2. **Home Screen**: Browse a list of Marvel characters.
3. **Character Detail Screen**: View detailed information about selected characters.
4. **Settings Screen**: Access and adjust app settings like themes and language.

### Screenshots
Login Screen
![login](https://github.com/user-attachments/assets/97b980bb-cb17-4866-9431-a7f6ceb39ea2) 
Home Screen
![home1](https://github.com/user-attachments/assets/fd1331ca-8c66-4b53-a8d8-d9c8928137a9)
Details Screen
![details](https://github.com/user-attachments/assets/0fbb0184-6852-49ab-8c1d-3fe8c66e55ed)
setting Screen
![setting](https://github.com/user-attachments/assets/78cc51a4-193c-43c1-9886-bf3bb4ee62a1)
Login Screen (dark)
![dark-login](https://github.com/user-attachments/assets/61c517d4-dc45-4676-914b-a0d7f3cf738d)
Home Screen (dark)
![dark-home](https://github.com/user-attachments/assets/454dbaf6-ef71-4efb-b28b-14f84301e934)


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For significant changes, open an issue to discuss your ideas first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
