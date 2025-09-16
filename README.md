# features and working of the project
Made with React.js (with vite) , TypeScript  and Tailwind CSS

the main file( ContactDataRenderer.tsx ) is in src folder wiht Chips.tsx as a component used for props
src/ContactDataRenderer.tsx

# APPROACH
taken an input form with name,email,contactNumber with "User" as an interface and used useState hook to manage state changes in the field value 
-as the user types the contact (state variable) (with useState hook used) fields the setContact field is updated and using handleSubmit function the state of the contact is passed to the user and then it is updated in the user array wiht the help of useState hook (setUser function)
-FOR searching 
i have used array.filter method and used toLowerCase in case of case mismatching 
FOR searching i have used handleSearch funciton which returns an array containning the filtered part according to the query
-FOR mapping out the user i have used array.map with value and index for displaying the user

FOR displaying the contacts
i have used a component name (Chips.tsx) and passed contact details as props and mapped the user array

# Assumptions
i have made some assumptions like the number field can be of any length and the name and email field are string values with any name,email

# for running the project locally
install tailwind using documentation (although it is installed as a dependency so may not need it)
npm run dev 



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
