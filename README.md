# rn-assignment4-11116940

# Kwesi Ahenkorah Gyamenah

# Job App

Job App is a mobile application built with React Native that allows users to search and view job listings. The app displays featured and popular jobs and allows users to filter jobs based on their search criteria.

## Components

### LoginScreen
- **Description**: The initial screen where users enter their name and email to log in.
- **Usage**: Captures user details and navigates to the HomeScreen.
- **Props**: 
  - `navigation`: Used to navigate to the HomeScreen after login.

### HomeScreen
- **Description**: The main screen of the app where users can see the featured and popular job listings.
- **Props**: 
  - `name`: The user's name passed from the login screen.
  - `email`: The user's email passed from the login screen.

### Header
- **Description**: Displays the user's name, email, and profile image at the top of the HomeScreen.
- **Props**:
  - `name`: The user's name.
  - `email`: The user's email.
  - `profileImage`: The user's profile image.

### JobCard
- **Description**: A card component used to display job details. It adjusts its layout based on whether it's a featured job or a popular job.
- **Props**:
  - `cardDetails`: Object containing job details (`id`, `title`, `company`, `location`, `salary`, `logo`).
  - `isFeatured`: Boolean to indicate if the job is a featured job.

### SearchBar
- **Description**: A search bar component used to filter job listings based on the user's input.
- **Props**:
  - `value`: The current search query.
  - `onChangeText`: Function to handle changes in the search input.

## Screenshots

### Login Screen
![photo_1_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/c8c3fb22-1764-4a57-980c-6447095cbea6)


### Home Screen
![photo_3_2024-06-19_19-11-15](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/a553ad68-65bc-47b4-bd07-87f3d0ea8da6)


### Featured Jobs
![photo_3_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/26834754-ea68-44b0-99ec-c5282d51ce86)
![photo_6_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/65f0d9cc-d62e-415a-b1d4-67f2e35db268)
![photo_5_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/1a9ce3db-9cfb-4be3-9ee8-7c0dd1c2ffbc)
![photo_2_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/0106d478-d717-4846-a260-2e23a04a102e)
![photo_4_2024-06-19_21-11-43](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/79f8c031-ada7-4a89-85db-a4d251b9ade8)


### Popular Jobs
![photo_1_2024-06-19_19-11-15](https://github.com/kwesiahenkorahg/rn-assignment4-11116940/assets/170183906/f9964c87-1072-4093-ba2e-6ddbe0346369)


## Getting Started

### Prerequisites
- Node.js
- Expo CLI

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/kwesiahenkorahg/rn-assignment4-11116940
   ```
2. Navigate to the project directory:
   ```sh
   cd JobApp
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the App
1. Start the Expo development server:
   ```sh
   npx expo start
   ```
2. Use the Expo Go app on your mobile device to scan the QR code and run the app.

## Usage

1. **Login**: Enter your name and email on the login screen.
2. **Home Screen**: View featured and popular jobs. Use the search bar to filter jobs.
