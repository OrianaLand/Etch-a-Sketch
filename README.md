# Etch-a-Sketch

A browser-based sketchpad/Etch-A-Sketch hybrid that allows users to create pixel art by hovering over a customizable grid.

## Features

- Interactive grid-based drawing interface
- Progressive darkening effect that darkens each square with repeated interactions
- Customizable grid size (up to 100×100)
- Random color generation for each square
- Responsive design

## How It Works

1. Hover your mouse over the grid to start drawing
2. Each hover interaction darkens the square by 10%
3. After 10 interactions, the square reaches its maximum color intensity
4. Click the "Modify the Grid" button to change the grid dimensions

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (DOM manipulation)

## Implementation Details

- Grid squares are dynamically created using JavaScript
- Flexbox is used to arrange the squares in a grid layout
- Data attributes store RGB values and interaction counts for each square
- Event delegation provides efficient event handling

## Learning Outcomes

This project demonstrates:
- DOM manipulation
- Event handling
- CSS layout with Flexbox
- Dynamic styling with JavaScript
- State tracking for element properties

## Setup and Installation

1. Clone the repository
2. Open `index.html` in your web browser
3. Start drawing!
