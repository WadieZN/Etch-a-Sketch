const container = document.querySelector('.container');
const num = document.querySelector('#num');
const apply = document.querySelector('#apply');
const ereaser = document.querySelector('#ereaser');
const pen = document.querySelector('#pen');
const rainbow = document.querySelector('#random');
const reset = document.querySelector('#reset');
const grid = document.createElement('div');

function sketch(size) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const grids = size * size;

    for (let i = 1; i <= grids; i++) {
        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid');
        container.appendChild(grid);
        container.style.cssText = `grid-template-rows: repeat(${size}, 1fr);`
        container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`

        pen.addEventListener('click', () => {
            pen.style.cssText = 'background: #b9b9b9; color: #181b30;';
            ereaser.style.cssText = 'background: #181b30; color: #b9b9b9;';
            rainbow.style.cssText = 'background: #181b30; color: #b9b9b9;';
            grid.addEventListener('mouseover', () => {
                grid.style.background = '#b9b9b9';
            });
        });

        ereaser.addEventListener('click', () => {
            ereaser.style.cssText = 'background: #b9b9b9; color: #181b30;';
            pen.style.cssText = 'background: #181b30; color: #b9b9b9;';
            rainbow.style.cssText = 'background: #181b30; color: #b9b9b9;';
            grid.addEventListener('mouseover', () => {
                grid.style.background = '#181b30';
            });
        });

        rainbow.addEventListener('click', () => {
            const rgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            rainbow.style.cssText = 'background: #b9b9b9; color: #181b30;';
            ereaser.style.cssText = 'background: #181b30; color: #b9b9b9;';
            pen.style.cssText = 'background: #181b30; color: #b9b9b9;';
            grid.addEventListener('mouseover', () => {
                grid.style.background = rgb;
            });
        });

        reset.addEventListener('click', () => {
            grid.style.background = '#181b30';
        });
    }
}

apply.addEventListener('click', () => {
    pen.style.cssText = 'background: #181b30; color: #b9b9b9;';
    ereaser.style.cssText = 'background: #181b30; color: #b9b9b9;';
    rainbow.style.cssText = 'background: #181b30; color: #b9b9b9;';
    let amount = num.value;
    if (amount > 1 && !isNaN(amount) && amount <= 50) {
        sketch(amount);
    } else {
        alert('Enter a valid value! (from 2 to 50)');
    }
});

sketch(22);
