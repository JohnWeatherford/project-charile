document.addEventListener("DOMContentLoaded", () => {


    //Accesses the json file to create cards for each set of game information provided
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
                
                //creates an anchor element for each repo link and appends it to a card
                const repoLink = document.createElement('a');
                repoLink.className = "repoLinks";
                repoLink.href = `${game.repo}`;
                repoLink.textContent = "Repo Link";
                repoLink.target = "_blank";
                card.appendChild(repoLink);

                //creates an anchor element for each game link and appends it to a card
                const gameLink = document.createElement('a');
                gameLink.className = "gameLinks";
                gameLink.href = `${game.app}`;
                gameLink.textContent = "Game Link";
                gameLink.target = "_blank";
                card.appendChild(gameLink);

                // creates an image element and appends it to a card
                const gameImg = document.createElement('img');
                gameImg.className = "gameImg";
                gameImg.src = `${game.img}`;
                gameImg.alt = "game image";
                card.appendChild(gameImg);

                // creates the favorite button and appends it to a card
                const favoriteButton = document.createElement('button');
                favoriteButton.className = "favoriteButton";
                favoriteButton.textContent = " ✰ favorite"
                card.appendChild(favoriteButton);
               
                //event listener that toggles the card as a favorite and appends it to the top of the page
                favoriteButton.addEventListener("click", () => {
                    favoriteButton.classList.toggle("favorited");
                    if (favoriteButton.classList.contains("favorited")) {
                        cardset.prepend(card);
                        favoriteButton.textContent = "⭐ favorited";
                    } else {
                        favoriteButton.textContent = " ✰ favorite";
                    }
                })
                cardset.appendChild(card);
            });

        })
        .catch(error => console.error('Error fetching game cards:', error));
});
