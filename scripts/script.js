document.addEventListener("DOMContentLoaded", () => {

fetch('').then(response => response.json())
    .then(data => {

        const cards = document.getElementById('cardName');
        data.projects.forEach(idea => {
            const listItem = document.createElement('div');
            cards.textContent = `${idea.name}, ${idea.description}`;
            .appendChild(cards);
        });
    })
    .catch(error => console.error('Error fetching app ideas:', error));

  
});
