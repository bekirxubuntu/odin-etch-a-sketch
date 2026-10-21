# Etch-a-Sketch

A dynamic grid-based drawing web application built with JavaScript, CSS Flexbox, and DOM manipulation as part of The Odin Project (Foundations Curriculum).

---

## 🚀 Features

* Dynamic Grid Layout: Generates a custom grid based on user input using a flexible Flexbox structure.
* Input Validation: Restricts grid size up to a maximum of 100x100 squares and handles invalid inputs using a while loop and prompt().
* Progressive Opacity (Shading Effect): Increases opacity by 10% (0.1) on each mouseover pass, creating a realistic pencil/shading effect.
* Performant Event Delegation: Listens for mouse events on the parent #container rather than attaching individual listeners to hundreds of grid squares.

---

## 🛠️ Tech Stack

* HTML5: Semantic layout and structural elements.
* CSS3: Flexbox architecture (flex: 1), box-sizing resets, and dynamic style properties.
* JavaScript (ES6+):
  * DOM Manipulation (createElement, appendChild, classList)
  * Event Handling & Event Delegation (mouseover)
  * Type Casting & Parsing (parseInt, parseFloat)

---

## 💻 Getting Started

1. Clone the repository:
   git clone https://github.com/bekirxubuntu/odin-etch-a-sketch.git

2. Navigate into the project directory:
   cd etch-a-sketch

3. Open index.html in your browser (or use the VS Code Live Server extension).

---

## 💡 Key Takeaways & What I Learned

* DOM Node Behaviors: Learned that appendChild moves existing nodes rather than cloning them, and mastered creating matrix structures using nested for loops.
* Event Delegation: Optimized memory usage by delegating events to parent elements instead of adding event listeners to every individual grid cell.

---
This project was developed as part of The Odin Project Foundations Curriculum.