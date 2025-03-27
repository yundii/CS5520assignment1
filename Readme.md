# Number Guessing Game

A React Native mobile application that combines user registration with an engaging number guessing game. Built with Expo framework.

## Features

- User registration with input validation
  - Name validation
  - Email validation
  - Phone number validation
- Terms and conditions agreement
- Interactive number guessing game
  - Dynamic number generation based on phone number
  - Timer countdown (60 seconds)
  - Limited attempts (4)
  - Hint system
  - Visual feedback for correct/incorrect guesses
- Responsive UI with gradient backgrounds
- Game statistics tracking

## Prerequisites

- Node.js
- npm or yarn
- Expo CLI
- iOS/Android simulator or physical device for testing

## Installation

1. Clone the repository
2. Install dependencies:
```

## Running the Application

1. Start the Expo development server:
```bash
npm start
```

2. Choose your platform:
- Press `a` for Android
- Press `i` for iOS
- Press `w` for web

## Game Rules

1. Register with valid credentials:
   - Name (non-numeric, >1 character)
   - Valid email address
   - 10-digit phone number (last digit cannot be 0 or 1)

2. Gameplay:
   - Guess a number between 1 and 100
   - Number must be a multiple of the last digit of your phone number
   - You have 4 attempts to guess correctly
   - Complete the game within 60 seconds
   - One hint available per game (shows ±10 range)

## Technologies Used

- React Native
- Expo
- expo-linear-gradient
- expo-blur
- React Native Core Components

## Project Structure

```
├── App.js                 # Main application entry
├── screens/               # Screen components
│   ├── Start.js          # Registration screen
│   └── Game.js           # Game screen
├── CardComponents/        # Card UI components
├── CommonComponents/      # Shared UI components
└── assets/               # Images and resources
```

## Color Scheme

The application uses a consistent color scheme defined in `Colors.js`:
- Primary: #1976d2
- Text Primary: #512da8
- Card Background: #f0f0f0
- Gradient: lightblue to #8573C7

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.