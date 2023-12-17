document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('contactme').addEventListener('submit', function (event) {
            event.preventDefault(); 
    
            alert('Form submitted!'); 
        });
    });