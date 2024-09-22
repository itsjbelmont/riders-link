# Riders Link

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started (Run In Dev Mode)

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Development Environment

### Env Setup

TODO: Any environment setup goes here

### VSCode Setup

-  [Install VSCode](https://code.visualstudio.com) if needed.

- Install VS Code Extensions
  - ESLint *(Extension ID: dbaeumer.vscode-eslint)*
  - Prettier *(Extension ID: esbenp.prettier-vscode)*

- Configure VSCode's Settings.json 
  ```json
  // Linting & Code Styles
  "[typescriptreact][typescript][javascript][javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    }
  },
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  ```
  

## Code Styles

Code style in this project is enforced by Prettier and ESLint.
If you are using VSCode and installed the Prettier and ESlint extensions propperly in the [VSCode Setup](#vscode-setup) step then VSCode should enforce the code styles automatically on save. 
The code style rules are defined in the [./.prettierrc](./.prettierrc) file.