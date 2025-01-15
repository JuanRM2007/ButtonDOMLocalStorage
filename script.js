const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');

//variable clickCount is used to store and display the number of times the button is clicked, the add.EventListener function allows for this to occur. 
let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

//Update display on load
clickCountDisplay.textContent = clickCount;
        updateUI();

//Event listener function allows the function to be called whenever the user does a specific task, in this case it is clicking a button. The function calls another function(clickCount), increasing its stored value by 1 each click.
button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//Function updateUI changes the color and text of the button. Colors and text are each held in seperate arrays inside the updateUI function.
function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
                ];
        const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }

