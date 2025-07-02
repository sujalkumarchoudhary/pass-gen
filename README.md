# Password Generator

A simple and customizable password generator built with React and Vite. Instantly generate secure passwords with options for length, numbers, and special characters.

## Preview

![Password Generator Screenshot](public/Screenshot%202025-07-03%20030552.png)
![Password Generator Screenshot](public/Screenshot%202025-07-03%20030610.png)


## Features

- Adjustable password length (8–100)
- Option to include numbers
- Option to include special characters (`!@#`)
- One-click copy to clipboard
- Responsive and modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pass-gen.git
   cd pass-gen
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

Visit `http://localhost:5173` in your browser to see the app in action.

## Usage

1. Select the desired password length using the slider or input box.
2. Toggle the options to include/exclude numbers and special characters.
3. Click the "Generate Password" button to create a new password.
4. Use the "Copy to Clipboard" button to copy the password for use in other applications.

## Customization

To customize the app, modify the following files:

- `src/components/PasswordGenerator.jsx`: The main component for the password generator.
- `src/styles/tailwind.css`: The Tailwind CSS configuration file.
- `src/App.jsx`: The main application file where components are assembled.

For advanced customization, explore the Vite and React documentation.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them with descriptive messages.
4. Push your branch to your forked repository:
   ```sh
   git push origin my-feature-branch
   ```
5. Create a pull request against the `main` branch of the original repository.

Please ensure your code adheres to the existing style and conventions. Add tests for new features and update documentation as needed.


