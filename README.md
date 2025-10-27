## The Best Team:
#Team Members
Hayden Knight Profile link: https://github.com/haydenknight88  
Zack Nasser Profile link: https://github.com/znasser46.  
John Weatherford Profile link: https://github.com/JohnWeatherford  

## Description and Overview:
Project charlie: Deployed website that creates a collection of all games created in project bravo.

## USER STORY

AS an group of gamers  
We want to create a collect of simple web games  
So that we can easily find them.  

## Validation:
 NU HTML Checker: https://validator.w3.org/nu/?doc=https%3A%2F%2Fznasser46.github.io%2Fproject-charile%2F  
 Wave Report: https://wave.webaim.org/report#/https://znasser46.github.io/project-charile/  


## Code Overview:
This site pulls game website information from a json file to create cards that contain links to each games repo and deployed app.  
Html  
css  
javascript  
            
  ```favoriteButton.addEventListener("click", () => {
                    favoriteButton.classList.toggle("favorited");
                    if (favoriteButton.classList.contains("favorited")) {
                        cardset.prepend(card);
                        favoriteButton.textContent = "⭐ favorited";
                    } else {
                        favoriteButton.textContent = " ✰ favorite";
                    }
                })


