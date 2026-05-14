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
- [🧠 How It Works (Under the Hood)](#-how-it-works-under-the-hood)
- [Installation & Setup](#-installation--setup)
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

---

## 🎮 How to Play

1. Open the game in any web browser.
2. Select your preferred mode (Play vs Friend or Play vs Bot).
3. The first player (X) clicks on any empty square to make a move.
4. Players take turns placing their marks (X and O) in empty squares.
5. The first player to get 3 of their marks in a row (up, down, across, or diagonally) wins!
6. If all 9 squares are full and no player has 3 in a row, the game ends in a tie. Click the restart button to play again.

---

## 🧠 How It Works (Under the Hood)

Because this game is built entirely in a single file without external libraries, the code relies heavily on core web fundamentals. Here is a breakdown of how the game functions behind the scenes:

### 1. HTML (The Structure)
The DOM is extremely lightweight. The core elements include:
*   A **Grid Container** that holds 9 individual `<div class="cell">` elements. Each cell represents a square on the Tic-Tac-Toe board.
*   **UI Menus** for selecting the game mode (Bot vs. 2-Player) and a "Game Over" screen that overlays the board when someone wins or ties.

### 2. CSS (The Hand-Drawn Aesthetic)
The "doodle" look is achieved purely through CSS styling:
*   **Grid Lines:** Instead of perfectly straight borders, the grid uses slightly varied border radiuses and box-shadows to simulate uneven, hand-drawn pencil strokes.
*   **Marker Colors:** Player 'X' and Player 'O' are dynamically assigned different CSS classes when a cell is clicked, which triggers distinct colors (red vs. blue) and custom sketchy fonts to separate them visually from the grid.

### 3. JavaScript (The Game Logic)
All interactivity and game rules are handled by a Vanilla JavaScript `<script>` block at the bottom of the file.

*   **State Management:** The current state of the board is tracked using a simple 9-item Array (e.g., `['X', '', 'O', '', '', '', '', '', '']`). A variable keeps track of the `currentPlayer` (switching between 'X' and 'O' after every valid turn).
*   **Win Detection:** After every single move, the code checks the board array against all **8 possible winning combinations** (3 horizontal, 3 vertical, 2 diagonal). If the current player's marks occupy all three indices of any winning combination, the game triggers a win state.
*   **Draw Detection:** If no win is detected, the code checks if the board array contains any empty slots. If the array is full and there is no winner, a tie is declared.
*   **Bot AI Logic:** When playing against the bot, the logic automatically runs after the human player's turn. It filters the board array to find all remaining empty indices, selects one, places the 'O' marker there, and updates the board array before handing control back to the human player.

---

## 🚀 Installation & Setup

Because this project is completely self-contained, getting it running locally takes seconds.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dread-in/Tic-Tac-Toe.git](https://github.com/dread-in/Tic-Tac-Toe.git)
