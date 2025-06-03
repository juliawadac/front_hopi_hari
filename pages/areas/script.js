document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const area = "mistieri";
    const token = localStorage.getItem('token').replaceAll('"', '');
    console.log(token);
    const response = await fetch(`http://localhost:3000/brinquedos/area${area}`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer" + token
        },
        
    });

    const data = await response.json();
    console.log(data);

    for (var brinquedo of data.resultados){
        console.log
    }
});  