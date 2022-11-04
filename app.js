const toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    //aici facem legatura cu css    
    document.body.classList.toggle('dark',
    e.target.checked);
})