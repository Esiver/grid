// *  Encounters & Interactions

function clearEncounters(){
    setEncounterImage(unknownImage)
    setEncounterName('...')
    
    clearEncounterDialogue()
}
function clearEncounterDialogue(){
    encounterDialogueBar.innerText = null
}

function encounter(unit){
    setEncounterName(unit.getAttribute('name'))
    setEncounterImage(unit.getAttribute('img'))
    setEncounterDialogue(unit, getUnitJSON(unit.getAttribute('JSON')))
    setEncounterControls(unit)
}

function getUnitJSON(reference){
    return unitsInfo[reference]
}

const setEncounterImage = (image) => {
    encounterPortrait.setAttribute('style', 'background-image: url("'+image+'");')
}
const setEncounterName = (name) =>{
    encounterName.innerText = name
}
const setEncounterControls = (unit) => {
    
}


const setEncounterDialogue = (unit, unitJSON) => {
    console.log( unitJSON)
        //encounterDialogueBar.innerText = unitJSON.dialogue.angry[0]
        if (Object.keys(unitJSON.dialogue.talk).length > 0){
            for (dia in unitJSON.dialogue.talk.dialogue){
                let key = Object.keys(unitJSON.dialogue.talk.dialogue[dia])
                let inner = unitJSON.dialogue.talk.dialogue[dia][key]

                let dialogBtn = document.createElement('button')
                dialogBtn.innerText = key // Btn tekst er JSON key 
                
                dialogBtn.addEventListener('click', ()=> {
                    encounterDialogueBar.innerText = inner
                })
                
                encounterDialogueBar.append(dialogBtn)
            }
            for (let q = 0 ; q < unitJSON.dialogue.talk.quests.length ; q++ ) { // gå igennem alle quests i units, 
                    // checker lige om vi har startet missionen eller ej...
                if (aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].started == false){ 
                    // derefter match med questens navn i missions registret. 
                    let startQBtn = document.createElement("BUTTON")
                    startQBtn.innerText = aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].dialogue.int
                    encounterDialogueBar.append(startQBtn)

                    startQBtn.addEventListener("click", ()=> {
                        encounterDialogueBar.innerText = aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].dialogue.description 
                        let acceptQBtn = document.createElement("BUTTON")
                        acceptQBtn.innerText = aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].dialogue.accept
                        encounterDialogueBar.append(acceptQBtn)

                        acceptQBtn.addEventListener("click" , ()=> {
                            //aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].started = true
                            startQuest(aQuest.allQuests[unitJSON.dialogue.talk.quests[q]])
                            encounterDialogueBar.innerText = aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].dialogue.start
                        })
                    })
                }
                

                //console.log(aQuest.allQuests[unitJSON.dialogue.talk.quests[q]].dialogue.start)
                
            }
            
        }
}