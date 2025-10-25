document.addEventListener("DOMContentLoaded", () => {


    
fetch('https://znasser46.github.io/project-charile/gameInfo.json').then(response => response.json())
    .then(data => {
        
        const cardset = document.getElementById('cardset');
        data.games.forEach(game => {
            console.log(game);
            const card = document.createElement('div');
            card.className = "cards";
            const cardName = document.createElement('h1');
            cardName.textContent = `${game.name}`;
            card.appendChild(cardName);

            const repoLink = document.createElement('a');
            repoLink.className = "repoLinks";
            repoLink.href = `${game.repo}`;
            repoLink.textContent = "Repo Link";
            repoLink.target = "_blank";
            card.appendChild(repoLink);

            const gameLink = document.createElement('a');
            gameLink.className = "gameLinks";
            gameLink.href = `${game.app}`;
            gameLink.textContent = "Game Link";
            gameLink.target = "_blank";
            card.appendChild(gameLink);

            const gameImg = document.createElement('img');
            gameImg.className = "gameImg";
            gameImg.src = `${game.img}`;
            gameImg.alt = "game image";
            card.appendChild(gameImg);


            // card.textContent = ` ${game.repo}, ${game.app}, ${game.img}`;
            
            cardset.appendChild(card);

            
        });
       
    })
    .catch(error => console.error('Error fetching app ideas:', error));

  
});
