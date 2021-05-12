# ![bull](https://user-images.githubusercontent.com/11829883/117929085-02a7b900-b31a-11eb-8354-62fe877897a2.png) Bulls `n` Cows ![cow](https://user-images.githubusercontent.com/11829883/117929095-04717c80-b31a-11eb-86a8-9d98747a176b.png)

#### Using ReactJS (hooks and context api), CSS3, SVG and neumorphic design

<img width="1680" alt="dark" src="https://user-images.githubusercontent.com/11829883/117929673-b446ea00-b31a-11eb-8136-3eb6c26285c9.png">
<img width="1680" alt="light" src="https://user-images.githubusercontent.com/11829883/117929676-b4df8080-b31a-11eb-8753-d88ce5151179.png">

originally forked from [vetrivelcsamy's repo](https://github.com/vetrivelcsamy/reactjs-hangman "vetrivelcsamy")
Logo made by [freepik/flaticon](https://www.freepik.com "Flaticon")

### Features

- Dark/Light mode
- Two Words source

  - Programming Language
  - Database

- Keyboard support
- Neumorphic design (experimental)
- SVG manipulation for Hangman graphic

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
