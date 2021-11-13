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
            unitDOM.setAttribute('JSON','shadeInfo')
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

const logQuest = (command, quest) => {
    if(command == 'start') {
        let questItem = document.createElement('LI')
        questItem.classList.add('quest-item')
        questItem.innerHTML = `
        <summary>
        `+quest.title+`
        <details>`+quest.description+`
        <br> Progress: `+ quest.currentCounter + `/`+ quest.maxCounter +`
        </details>
        `
        document.getElementById('quest-log').append(questItem)
    }
    if(command == 'progress'){
        // * TODO: naar der logQuest'es gaar vi igennem hele quest JSON, og kompilerer vores questlog
        //         alt efter hvordan vores aQuest JSON object serud.
        //         det kommer nok til at vaere noget med aQuest.forEach((quest)=>{ if (quest.started == true){ goer noget her.}})
    }
    if (command == 'complete'){
        console.log('completed quest', quest)
    }
 
}
const startQuest = (quest) => {
    quest.started = true
    //console.log(quest)
    logQuest('start', quest)

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
            "title":"The Summoning",
            "description": "Take the princess to the world tree. Sacrifice her to The Old Gods",
            "started": false,
            "startedTime": 6,
            "finished": false,
            "minCounter": 0,
            "maxCounter": 1,
            "currentCounter": 0,
            "dialogue": {
                "int": "I've heard the summons",
                "description": "You know what you must do. Get the girl.",
                "accept" :"I will see you at the world tree.",
                "start" : "splendid",
//                "end": "tak fordi du reddede prinsen kammerat",
                "fail":"wtf hvad fanden laver du, prinsessen er død"
            }
            

        }
    }
}