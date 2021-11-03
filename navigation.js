// navigation tools
function getTile(x, y){
    var tile = document.querySelectorAll("[x='"+x+"'] [y='"+y+"']");
    return tile
}

function moveUnit(unit,x,y){
    getTile(x,y)[0].append(unit)
}

function getUnitTile(unit){
    return unit.closest('.tile')
}
function moveCommand(unit, x1, y1){
    // first check distance to goal
    var x0 = parseInt(getUnitTile(unit).getAttribute('x'))
    var y0 = parseInt(getUnitTile(unit).getAttribute('y'))
    var total_steps = Math.floor(Math.sqrt((x1 - x0)*(x1-x0) + (y1-y0)*(y1-y0)))
    // then get stamina

    // if stamina is enough
}

function movePath(unit, x1, y1 ){
    var x0 = parseInt(getUnitTile(unit).getAttribute('x'))
    var y0 = parseInt(getUnitTile(unit).getAttribute('y'))
    var moveArray = [0,0]

    var total_steps = Math.floor(Math.sqrt((x1 - x0)*(x1-x0) + (y1-y0)*(y1-y0)))

    for (let step = 0; step < total_steps; step++) {
        moveArray[0] = 0
        moveArray[1] = 0
        if (x0 == x1 && y0==y1) {
            return
        }
        x0 = parseInt(getUnitTile(unit).getAttribute('x'))
        y0 = parseInt(getUnitTile(unit).getAttribute('y'))
        if (x0 != x1) {
            
            if( x1 > x0) {
                moveArray[0] = 1
            }
            else if( x1 < x0){
                moveArray[0] = -1
            }
            else if ( x1 == x0) {
                moveArray[0] = 0
            }
        }
        
        if (y0 != y1) {
            if (y1 > y0) {
                moveArray[1] = 1
            }
            else if (y1 < y0) {
                moveArray[1] = -1
            }
            else if ( y1 == y0) {
                moveArray[1] = 0
            }
        }
        //check if unit stamina enough
        // todo: check movement penalty of ground
        let stamina = unit.getAttribute('stamina')
        //check if anything in the way
        if (getTile(x0+moveArray[0],y0+moveArray[1])[0].childElementCount > 0) {
            if (getTile(x0+moveArray[0],y0+moveArray[1])[0].childNodes[0]) {
                //check if there's terrain in the way
                if (Array.from(getTile( x0+moveArray[0],y0+moveArray[1])[0].childNodes).filter((element)=> element.tagName == 'TERRAIN') ) {
                    console.log('Found Terrain') 
                }
                
                if (Array.from(getTile( x0+moveArray[0],y0+moveArray[1])[0].childNodes).filter((element)=> element.tagName == 'UNIT') ) {
                    Array.from(getTile( x0+moveArray[0],y0+moveArray[1])[0].childNodes).forEach(
                        (unit)=> {if(unit.tagName == 'UNIT') { // make sure its a unit
                            encounter(unit)
                            
                            }
                            
                        }
                        
                    )
                    return 0; // and exit function if UNIT is the case
                }
            }
            //if nothing in the way, see if enough stamina
        } else if (stamina > 0) {
            moveUnit(unit, x0+moveArray[0], y0+moveArray[1])    
            unit.setAttribute('stamina', stamina-1)
        } else { console.log('not enough stamina')}
    }
}

// click to  move
document.addEventListener('click',(e)=>{
    clearEncounters()

    if(e.target.classList == 'tile'){
        var target = e.target   
        movePath(hero,target.getAttribute('x'),target.getAttribute('y'))
    }
    if (e.target.classList.contains('unit')) {
        var target = e.target   
        movePath(hero , target.parentElement.getAttribute('x'), target.parentElement.getAttribute('y'))
        // movePath(hero, target.getAttribute('x'),target.getAttribute('y'))
        return 0;
    }
})