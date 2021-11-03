//containers
const allUnits = []

// // unit
// hero
const hero = document.createElement('unit')
hero.classList = 'unit'
hero.setAttribute('stamina', 10)
hero.innerText = 'hero'
var startTile = getTile(2,2)[0]
startTile.append(hero)

//callback kigger efter ændringer til hero
const heroListener = function(mutationList, observer){
    for (const mutation of mutationList) {
        if (mutation.type == 'attributes') { //kigges efter attribtue ændringer som stamina, hp, atk osv.
            setHeroStatBar(mutation.attributeName, hero.getAttribute(mutation.attributeName))
        }
    }
}
const heroObserver = new MutationObserver(heroListener);
const heroWatchList = { attributes: true, childList: true} //which mutations to observe
heroObserver.observe(hero, heroWatchList)

// hero display commands

// enemy
const Bo = document.createElement('unit')
Bo.classList = 'unit monster'
Bo.setAttribute('img','bo.jpg')
Bo.setAttribute('name', 'Bo')
Bo.setAttribute('race', 'human')
Bo.setAttribute('mood', 5)
getTile(4,2)[0].append(Bo)


// generer generisk monster eller whatever

class Unit {
    constructor(race, faction) {
        this.race = race
        this.faction = faction
        this.name = 'Jens'
        this.health = 10
        this.attack = 1
        this.mood = 5
    }
}

const shadeInfo = {
    "portraits" : [
        {1 : "shade.png"},
        {2 : "shade.png"}
    ],
    "dialogue" : {
            "normal": 
            [
                "default1",
                "default2"
            ],
            "angry": 
            [
                "The damned stand ready...",
                "angry 2"
            ],
            "happy":
            [
                "All I see is blackness. Oh, my hood's down."
            ],
            "conversations": {
                "Where did you come from?": {
                    "answer" : ["bobba1"]
                },
                "Who are you?": {
                    "answer" : ["bobba2"]
                },
                "Do you have any tasks for me?" : {
                    "answer" : ["give me salt"],
                    "quest" : ["SHADE1"]
                }
            }
                
    }
}



console.log(shadeInfo)
