document.addEventListener("DOMContentLoaded", () => {


    
fetch('https://znasser46.github.io/project-charile/gameInfo.json').then(response => response.json())
    .then(data => {
        
        const cards = document.getElementById('cardName');
        data.games.forEach(game => {
            console.log(game);
            const card = document.createElement('div');
            card.className = "cards";
            
            card.textContent = `${game.name}, ${game.description}`;
            cards.appendChild(card);
        });
       
    })
    .catch(error => console.error('Error fetching app ideas:', error));

  
});
