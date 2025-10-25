USER STORY

AS an group of gamers
We want to create a collect of simple web games
So that we can easily find them.



            
            card.textContent = `${game.name}, ${game.description}`;
            cards.appendChild(card);
        });
       
    })
    .catch(error => console.error('Error fetching app ideas:', error));
