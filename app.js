document.addEventListener('DOMContentLoaded', () => {
    const animalNamesList = document.getElementById('animal-names-list');
    const animalDetails = document.getElementById('animal-details');

    // Fetch and display animal names
    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const listItem = document.createElement('li');
                listItem.className = 'nav-item';
                const anchor = document.createElement('a');
                anchor.className = 'nav-link';
                anchor.href = '#';
                anchor.textContent = character.name;
                anchor.addEventListener('click', () => showAnimalDetails(character));
                listItem.appendChild(anchor);
                animalNamesList.appendChild(listItem);
            });
        });

    // Display selected animal details
    function showAnimalDetails(character) {
        animalDetails.innerHTML = `
            <div class="card col-4">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Votes: <span id="votes">${character.votes}</span></p>
                    <button type="button" class="btn btn-info" id="vote-button">Vote</button>
                </div>
            </div>
        `;
        document.getElementById('vote-button').addEventListener('click', () => {
            character.votes += 1;
            document.getElementById('votes').textContent = character.votes;
        });
    }
});

