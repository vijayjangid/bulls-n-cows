# ![bull](https://user-images.githubusercontent.com/11829883/117833395-efeaa100-b293-11eb-8949-f1d867efc926.png) ![cow](https://user-images.githubusercontent.com/11829883/117833426-f547eb80-b293-11eb-9b24-669e0cb9465d.png) Bulls `n` Cows

#### Using ReactJS (hooks and context api), CSS3, SVG and neumorphic design

Logo made by [freepik/flaticon](https://www.freepik.com "Flaticon")

### Features

- Dark/Light mode
- Select #digits (3 to 10)
- Keyboard support
- Neumorphic design (experimental)
- Game stats

### Folder structure

```
src
├── App.js
├── components
│   ├── footer
│   │   ├── index.js
│   │   └── style.css
│   ├── guessword
│   │   ├── index.js
│   │   └── style.css
│   ├── header
│   │   ├── index.js
│   │   └── style.css
│   ├── index.js        <--- exports all the components from here
│   ├── keyboard
│   │   ├── index.js
│   │   └── style.css
│   ├── keyboard-button
│   │   ├── index.js
│   │   └── style.css
│   ├── result
│   │   ├── index.js
│   │   └── style.css
│   ├── stage
│   │   ├── index.js
│   │   └── style.css
│   └── theme-toggle
│       ├── index.js
│       └── style.css
├── constants
│   └── index.js
├── containers
│   ├── hangman.js     <--- main container that use context and also hosts other components
│   └── style.css
├── hooks
│   ├── index.js
│   ├── use-theme-hook.js       <--- react hook for exposing theme (dark mode) context
│   └── use-word-source-hook.js <--- react hook for exposing word source & guess word context
├── index.css
├── index.js
└── state
    ├── theme-context.js        <--- Theme context (to manage dark mode)
    └── wordsource-context.js.  <--- Wordsource & guessword
```

### Dependencies

- Node: [http://nodejs.org/](http://nodejs.org/)
- ReactJS: [https://reactjs.org](https://reactjs.org)

If you'd like to contribute, help me close issues.

### Initial Set Up

1. Clone the repository
2. `npm install`
3. `npm start` app start on localhost
