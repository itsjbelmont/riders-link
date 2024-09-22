# Riders Link

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

### Run In Dev-Mode

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

## Setup Development Environment

### VSCode

VS Code is the recommended text editor for this project.
Many dev-time features will utilize VS Code functionality (such as extensions) and will be documented as such. 
Use of another text editor may result in some documented dev-time features being unavailable.

-  [Install VSCode](https://code.visualstudio.com) if needed.

### Code Styles & Linting

Code style in this project is enforced by [Prettier](./.prettierrc) and [ESLint](./.eslintrc.js).

#### Manual Linting

- Lint the entire project and list any errors

  ```
  npm run lint
  ```

- Lint the entire project and auto-fix any erros

  ```
  npm run lint -- --fix
  ```

#### VS Code Setup For Code Styles/Linting

- Install ESLint Extension (ID: esbenp.prettier-vscode)
- Install Prettier Extension (ID: esbenp.prettier-vscode)

Add the following to VS Code's `Settings.json` file:
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

### Git strategy

* TODO: pick a git strategy after mvp.

* when merging branches via github pull requests, ensure `squash and merge` is selected as the merge strategy to keep the git history for primary branches clean. read about this strategy [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-commits).

### Configure Env

TODO: Any environment setup goes here