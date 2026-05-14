# Hand-Drawn Tic-Tac-Toe ✏️⭕❌

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)

A fully playable, lightweight Tic-Tac-Toe game featuring a nostalgic, sketchy doodle aesthetic. Everything from the layout to the logic is contained entirely within a **single HTML file**, making it incredibly fast, portable, and easy to run.

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [How to Play](#-how-to-play)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Future Updates / Roadmap](#-future-updates--roadmap)
- [Author](#-author)

---

## 🎯 About the Project

I wanted to build a fun, interactive web game while keeping the architecture as minimalistic as possible. Instead of using complex frameworks or separating files, I challenged myself to build the entire experience in one single `.html` document. 

To make it stand out, I designed a custom user interface that mimics drawing on a piece of paper. The game relies entirely on raw DOM manipulation and Vanilla CSS to achieve its lo-fi, hand-drawn textures.

---

## 🌐 Live Demo

You can play the game directly in your browser without downloading anything!

**Play Here:** [https://dread-in.github.io/Tic-Tac-Toe/](https://dread-in.github.io/Tic-Tac-Toe/)  
**Repository URL:** [https://github.com/dread-in/Tic-Tac-Toe/](https://github.com/dread-in/Tic-Tac-Toe/)

---

## ✨ Features

*   **Single-File Architecture:** Zero clutter. The HTML, CSS, and JavaScript are all bundled into one easily transportable file.
*   **Custom Hand-Drawn UI:** Features a paper-like background and sketchy, imperfect borders for a realistic doodle feel.
*   **Distinct Player Markers:** 
    *   **Player X:** Styled in a distinct reddish sketch color.
    *   **Player O:** Styled in a contrasting blueish sketch color for easy board readability.
*   **Versatile Game Modes:**
    *   👥 **2-Player Mode:** Play locally with a friend sharing the same screen.
    *   🤖 **Bot Mode:** Test your skills against an automated computer opponent.
*   **Responsive Design:** Scales perfectly on desktop, tablet, and mobile browsers.

---

## 🎮 How to Play

1. Open the game.
2. Select your preferred mode (Play vs Friend or Play vs Bot).
3. The first player (X) clicks on any empty square to make a move.
4. Players take turns placing their marks (X and O) in empty squares.
5. The first player to get 3 of their marks in a row (up, down, across, or diagonally) wins!
6. If all 9 squares are full and no player has 3 in a row, the game ends in a tie. Click the restart button to play again.

---

## 🛠️ Tech Stack

This project is built purely with native web technologies. **No dependencies, no libraries, no frameworks.**

*   **HTML5:** Semantic document structure.
*   **CSS3:** Flexbox layouts, responsive design, and custom pseudo-elements to create the hand-drawn visual effects.
*   **Vanilla JavaScript (ES6+):** Event listeners, array manipulations for win-checking, game state tracking, and artificial intelligence for the bot logic.

---

## 🚀 Installation & Setup

Because this project is completely self-contained, getting it running locally takes seconds.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dread-in/Tic-Tac-Toe.git](https://github.com/dread-in/Tic-Tac-Toe.git)
