// // // setup
const heroSheet = document.getElementById('hero-sheet')
const encounterBar = document.getElementById('encounter-bar')
const encounterPortrait = document.getElementById('encounter-portrait')
const encounterName = document.getElementById('encounter-name')
const encounterDialogueBar = document.getElementById('encounter-dialogue')

const unknownImage = 'none.png'
const map = document.getElementById('map')
const tiles = document.getElementsByClassName('tile')

// // map
const TILES_W = 10
const TILES_H = 10

// tile generation
for (let x = 0; x < TILES_W; x++) {
    let x_tile = document.createElement('tile')
    x_tile.setAttribute('x', x )
    x_tile.classList = 'tile'
    // x_tile.classList.add(rollTerrain())
    x_tile.setAttribute('y', 0)
    for (let y = 0; y < TILES_H; y++) {
        
        let y_tile = document.createElement('tile')
        
        y_tile.setAttribute('x', x)
        y_tile.setAttribute('y', y)
        y_tile.classList = 'tile'
        x_tile.append(y_tile)
        
    }
    map.append(x_tile)
}

// terrain
function rollTerrain(){
    return 'plains'
}

// terrain objects
const worldTree = document.createElement('terrain')
worldTree.setAttribute('size', 10)
worldTree.classList = 'tree'
getTile(7,7)[0].append(worldTree)

// // commands


// end day
const endDayButton = document.getElementById('end_turn')
endDayButton.addEventListener('click', ()=> {endTurn()})

function endTurn () {
    if (document.getElementById('time').innerText == 'day') {
        document.body.classList.toggle('night')
        document.getElementById('map').classList.toggle('night')
        hero.setAttribute('stamina', 5)
        document.getElementById('time').innerText = 'night'

        // start night event
        eventNight()
    }
    else {
        document.body.classList.toggle('night')
        document.getElementById('map').classList.toggle('night')
        document.getElementById('time').innerText = 'day'
        setDay(1)
        hero.setAttribute('stamina', 15)
        eventDay()
    }   
}



function setDay(days) {
    var currentDay = document.getElementById('day-count').innerText
    document.getElementById('day-count').innerText = parseInt(document.getElementById('day-count').innerText) + days
}