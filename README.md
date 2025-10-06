# Rock Paper Scissors Game 🎮

[Live Demo](https://pillowarian.github.io/Rock-Paper_Scissors_Game/)

A simple browser-based Rock, Paper, Scissors game built with HTML, CSS, and JavaScript.  
Click on Rock, Paper, or Scissors to play against the computer. The score updates, and you get feedback on wins, losses, and draws.

---

## 📂 Project Structure
```
├─ index.html
├─ style.css
├─ App.js
├─ images/
│ ├─ rock.png
│ ├─ paper.png
│ └─ scissors.png
└─ README.md
```


- `index.html` — the main HTML page  
- `style.css` — styling rules for layout, colors, responsiveness  
- `App.js` — JavaScript logic for game interactions  
- `images/` — the icons for rock, paper, scissors  

---

## 🧩 How It Works

1. The user clicks one of the three options (rock, paper, or scissors).  
2. The app randomly selects a choice for the computer.  
3. It compares both choices, determines a winner (or draw), updates scores, and displays a message.  
4. The UI updates dynamically (score, message background color, etc.).

### Key Functions in `App.js`

- `genCompChoice()` — randomly picks “rock”, “paper”, or “scissors”  
- `playGame(userChoice)` — core logic, compares user vs. computer, handles draw or win/lose  
- `showWinner(...)` — handles updating scores and showing the appropriate message  
- `drawGame()` — handles the “draw” case  
- Event listeners on each choice element trigger `playGame(...)`

---

## 📐 Responsive Design

The CSS uses flexible units (like `vmin`) and media queries so that the game adapts to different screen sizes. On smaller screens:

- Choices stack or shrink  
- Font sizes adjust  
- The layout remains centered and usable  

---

## 🚀 Deployment

This project is hosted on **GitHub Pages**. To deploy:

1. Push the project files to a GitHub repo (e.g. `Rock-Paper_Scissors_Game`)  
2. Enable GitHub Pages (set branch to `main` or `gh-pages`)  
3. Make sure file names (e.g. `App.js`) match exactly (case-sensitive)  
4. Visit the published URL (as above)  

> **Tip**: If changes don't show up immediately on mobile, try clearing the browser cache or doing a hard reload.

---

## 🛠️ Future Improvements

- Add animations or transitions (e.g. shake effect on defeat)  
- Add sound effects for win/lose  
- Allow the user to choose “best of N” rounds  
- Add a “reset game” or “play again” button  
- Enhance accessibility (keyboard support, ARIA labels)  
- Keep score between sessions using `localStorage`  

---

## 🎓 What I Learned / Challenges

- Handling **DOM interaction** (querySelectors, event listeners).  
- Writing clean game logic that handles all win/lose/draw cases.  
- Ensuring the UI adapts gracefully on mobile devices.  
- Dealing with deployment pitfalls (e.g. file naming, caching)  

---

## 📄 License & Usage

You are free to use, modify, and distribute this project. If you build on it or adapt it, I’d appreciate attribution or a shout-out.  

---

If you like, I can also generate a version of the README that includes screenshots, badges, or a “how to run locally” section. Would you like me to provide that?
::contentReference[oaicite:0]{index=0}
