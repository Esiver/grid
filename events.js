// night event
const eventNight = () => {
    // chance for every tile to spawn monster
    Array.from(tiles).forEach(tile => {

        if( Math.random() >.95  && tile.childElementCount < 1) {
            let unit = new Unit('monster', 'evil')
            let unitDOM = document.createElement('unit')
            unitDOM.classList = 'unit shade'
            unitDOM.setAttribute('img','shade.png')
            unitDOM.setAttribute('name','Mysterious Shade')
            unitDOM.setAttribute('mood',2)
            allUnits.push(unitDOM)
            tile.append(unitDOM)
        }
    });
    
}

const eventDay = () => {
    allUnits.forEach(unit=>{
        // need a list of units to remove
        if (unit.classList='unit shade'){
            unit.remove()
        }
    })
    console.log(allUnits)
}



const aQuest = {
    "allQuests": {
        "quest1": {
            "started": true,
            "startedTime": 6,
            "finished": false,
            "minCounter": 0,
            "maxCounter": 10,
            "currentCounter": 0,
            "dialogue": {
                "start": "vil du redde prinsesesn?",
                "end": "tak fordi du reddede prinsen kammerat",
                "fail":"wtf hvad fanden laver du, prinsessen er død"
            }

        },
        "quest2": {
            "started": false,
            "startedTime": "5",
            "finished": false
        },
        "SHADE1" : {
            "started": false,
            "startedTime": "5",
            "finished": false
        }
    }
}