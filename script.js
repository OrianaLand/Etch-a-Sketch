const container = document.querySelector("div");

const button = document.createElement("button");
button.textContent = "Modify the Grid";
button.id = "button";
document.body.insertBefore(button, container);


function createSquares(num = 16) {
    let squareSize = 400 / num; // Calculates the squares size based on the user's input

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const item = document.createElement("div");
            item.className = "item";

            item.setAttribute("data-hover", 0);
            item.setAttribute("data-r", 255);
            item.setAttribute("data-b", 255);
            item.setAttribute("data-g", 255);
            //Data attributes to store RGB color and hover counter

            item.style.width = `${squareSize}px`;
            item.style.height = `${squareSize}px`;
            container.appendChild(item);
        }

    }
}

createSquares();

function changeBgColor(element, a = 0.10) {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    // Update the dataset atributes correctly
    element.dataset.r = r;
    element.dataset.b = b;
    element.dataset.g = g;

    // Aply random generated color 
    element.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

}

container.addEventListener("mouseover", (e) => {
    let hoverCounter = parseInt(e.target.dataset.hover); // Store the current hover count
    hoverCounter++; // Increase the count
    e.target.dataset.hover = hoverCounter; //Store the updated count back in the dataset

    let r = e.target.dataset.r;
    let b = e.target.dataset.b;
    let g = e.target.dataset.g;
    let itemOpacity = 0;


    if (hoverCounter === 1) {
        itemOpacity = hoverCounter * 0.1; // calculate the opacity based on the hover counter
        itemOpacity = parseFloat(itemOpacity.toFixed(1)); // Ensures only 1 decimal place

        changeBgColor(e.target, itemOpacity);

        r = e.target.dataset.r;
        b = e.target.dataset.b;
        g = e.target.dataset.g;
        //Store current RGB values

    }

    if (hoverCounter > 1 && hoverCounter <= 10) {
        e.target.dataset.hover = hoverCounter;
        itemOpacity = hoverCounter * 0.1;
        itemOpacity = parseFloat(itemOpacity.toFixed(1));

        //darken effect on the backgorund color using itemOpacity as alpha value
        e.target.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',' + itemOpacity + ')';
        //
    }

});

button.addEventListener("click", () => {
    let num = 0;

    while (true) {
        num = prompt("How many squares per side do you want for the new grid");
        if (num <= 100 && num) {
            break;
        }
    }

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createSquares(num);
});
