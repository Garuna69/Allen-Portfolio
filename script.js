// Example: Make your name in the header 'wobble' slightly on hover
const headerName = document.querySelector('header h1');

headerName.addEventListener('mouseover', () => {
    headerName.style.animation = 'wobble 0.5s'; 
});

headerName.addEventListener('animationend', () => {
    headerName.style.animation = ''; 
});

// ... more JavaScript for animations, form validation, etc. ...
