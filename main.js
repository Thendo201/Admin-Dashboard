const chart = document.querySelector('#chart').getContext('container');


//new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 23545, 32655, 25465, 35562, 53222, 54136, 21454, 22411, 54751, 67484, 25245],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [52156, 52131, 26541, 55413, 51452, 26132, 35416, 25456, 32355, 35665, 54161, 52335],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

const menuBtn = document.querySelector('#menu_btn');
const closeBtn = document.querySelector('#close_btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'inline-block';
});

closeBtn.addEventListener("click", () => {
    sidebar.style.display = 'none';
});


const themeBtn = document.querySelector('.theme_btn');
themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');
})
