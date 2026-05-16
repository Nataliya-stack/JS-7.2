let clasificaciones = [
    { name: 'Ana', img: './img/anna.jpg' },
    { name: 'Oswaldo', img: './img/oswaldo.jpg' },
    { name: 'Raúl', img: './img/raul.jpg' },
    { name: 'Celia', img: './img/celia.jpg' },
    { name: 'María', img: './img/maria.jpg' },
    { name: 'Antonio', img: './img/antonio.jpg' }
];

function renderParticipants() {
    const leftCol = document.getElementById('left-column');
    const rightCol = document.getElementById('right-column');
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';

    clasificaciones.forEach((user, index) => {
        const html = `
            <div class="user-card" style="display: flex; align-items: center; gap: 15px;">
                <!-- Путь берется из объекта участника -->
                <img src="${user.img}" 
                     alt="${user.name}" 
                     style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
                
                <div>
                    <small>participiant ${index + 1}</small>
                    <h3 style="margin: 0;">${user.name}</h3>
                </div>
            </div>
        `;
        
        if (index % 2 === 0) leftCol.innerHTML += html;
        else rightCol.innerHTML += html;
    });
}

function concursar() {
    const raulIndex = clasificaciones.findIndex(u => u.name === 'Raúl');
    const celiaIndex = clasificaciones.findIndex(u => u.name === 'Celia');
    if (celiaIndex > raulIndex) {
        [clasificaciones[raulIndex], clasificaciones[celiaIndex]] = [clasificaciones[celiaIndex], clasificaciones[raulIndex]];
    }

    const anaIndex = clasificaciones.findIndex(u => u.name === 'Ana');
    if (!clasificaciones.some(u => u.name === 'Roberto')) {
        clasificaciones.splice(anaIndex + 1, 0, 
            { name: 'Roberto', img: './img/roberto.jpg' }, 
            { name: 'Amaya', img: './img/amaya.jpg' }
        );
    }

    if (!clasificaciones.some(u => u.name === 'Marta')) {
        clasificaciones.unshift({ name: 'Marta', img: './img/marta.jpg' });
    }

    document.getElementById('responda').innerText = "Clasficacion actualizada!";
    renderParticipants();
}

renderParticipants();

