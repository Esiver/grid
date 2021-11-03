// // Encounters & Interactions
function clearEncounters(){
    setEncounterImage(unknownImage)
    setEncounterName('...')
}

function encounter(unit){
    setEncounterName(unit.getAttribute('name'))
    setEncounterImage(unit.getAttribute('img'))
    setEncounterDialogue(unit)
    setEncounterControls(unit)
}

const setEncounterImage = (image) => {
    encounterPortrait.setAttribute('style', 'background-image: url("'+image+'");')
}
const setEncounterName = (name) =>{
    encounterName.innerText = name
}
const setEncounterControls = (unit) => {
    
}

const setEncounterDialogue = (unit) => {
    if (unit.getAttribute('mood') < 3){

        //replace shadeInfo with unitInfo
        encounterDialogueBar.innerText = shadeInfo.dialogue.angry[0]
        if (Object.keys(shadeInfo.dialogue.conversations).length > 0){
            Object.keys(shadeInfo.dialogue.conversations).forEach(function(key) {
                let btn = document.createElement('button')
                btn.innerText = key
                btn.addEventListener('click', ()=> {
                    encounterDialogueBar.innerText = shadeInfo.dialogue.conversations[key].answer[0]
                    console.log(shadeInfo.dialogue.conversations[key].answer.length)
                    if (shadeInfo.dialogue.conversations[key].quest){
                        console.log(aQuest.allQuests.SHADE1)
                        
                    }
                })
                encounterDialogueBar.append(btn)
                
                // ...
            });
            
        }

        // console.log(Object.keys(shadeInfo.dialogue.conversations).toString())
    }
}