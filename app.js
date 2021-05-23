const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')
let currentShooterIndex = 67
let width = 9
let direction = 1
let invadersId
let goingRight = true
let aliensRemoved = []
let results = 0



for (let i = 0; i < 81; i++) {
  const square = document.createElement('div')
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
]

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if(!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader')
    }
  }
}

draw()

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader')
  }
}

squares[currentShooterIndex].classList.add("shooter")



function moveShooter(e) { 
  console.log(e.key);
  squares[currentShooterIndex].classList.remove('shooter')
  squares[currentShooterIndex].classList.remove('ste-l')
  squares[currentShooterIndex].classList.remove('ste-xl')

  switch(e.key) {
   
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -=1
      break
    case 'ArrowRight' :
      if (currentShooterIndex % width < width -1) currentShooterIndex +=1
      break
  }


  switch (results) {
    case 0: 
    squares[currentShooterIndex].classList.add('shooter')
      
      break;

      case 1:
        squares[currentShooterIndex].classList.add('shooter')
        break;
        case 2: 
        squares[currentShooterIndex].classList.add('shooter')
        break;
        case 3:
          squares[currentShooterIndex].classList.add('ste-l')
          break;
          case 4:
            squares[currentShooterIndex].classList.add('ste-l')
            break;
            case 5:
              squares[currentShooterIndex].classList.add('ste-xl')
              break;
              case 6:
                squares[currentShooterIndex].classList.add('ste-xl') 

  
    default:
      break;
  }
  
}
document.addEventListener('keydown', moveShooter)

document.getElementById("left-arrow").addEventListener("click", function(e) {
  squares[currentShooterIndex].classList.remove('shooter')
  squares[currentShooterIndex].classList.remove('ste-l')
  squares[currentShooterIndex].classList.remove('ste-xl')
  if (currentShooterIndex % width !== 0){currentShooterIndex -=1} 
  switch (results) {
    case 0: 
    squares[currentShooterIndex].classList.add('shooter')
      
      break;

      case 1:
        squares[currentShooterIndex].classList.add('shooter')
        break;
        case 2: 
        squares[currentShooterIndex].classList.add('ste-l')
        break;
        case 3:
          squares[currentShooterIndex].classList.add('ste-xl')
          break;
          case 4:
            squares[currentShooterIndex].classList.add('ste-xl')
            break;
            case 5:
              squares[currentShooterIndex].classList.add('ste-xl')
              break;
              case 6:
                squares[currentShooterIndex].classList.add('ste-xl') 

  
    default:
      break;
  }

});
document.getElementById("right-arrow").addEventListener("click", function(e) {
  squares[currentShooterIndex].classList.remove('shooter')
  squares[currentShooterIndex].classList.remove('ste-l')
  squares[currentShooterIndex].classList.remove('ste-xl')
  if (currentShooterIndex % width < width -1){currentShooterIndex +=1} 
  switch (results) {
    case 0: 
    squares[currentShooterIndex].classList.add('shooter')
      
      break;

      case 1:
        squares[currentShooterIndex].classList.add('shooter')
        break;
        case 2: 
        squares[currentShooterIndex].classList.add('ste-l')
        break;
        case 3:
          squares[currentShooterIndex].classList.add('ste-xl')
          break;
          case 4:
            squares[currentShooterIndex].classList.add('ste-xl')
            break;
            case 5:
              squares[currentShooterIndex].classList.add('ste-xl')
              break;
              case 6:
                squares[currentShooterIndex].classList.add('ste-xl') 

  
    default:
      break;
  }

});

const shootButtons = document.querySelectorAll("#shoot-button")
shootButtons.forEach(item=>{item.addEventListener("click", function(e) {
  let laserId
  let currentLaserIndex = currentShooterIndex
  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser')
    currentLaserIndex -= width
    squares[currentLaserIndex].classList.add('laser')
    switch (results) {
      case 0: 
      squares[currentShooterIndex].classList.add('shooter')
        
        break;
  
        case 1:
          squares[currentShooterIndex].classList.add('shooter')
          break;
          case 2: 
          squares[currentShooterIndex].classList.add('ste-l')
          break;
          case 3:
            squares[currentShooterIndex].classList.add('ste-xl')
            break;
            case 4:
              squares[currentShooterIndex].classList.add('ste-xl')
              break;
              case 5:
                squares[currentShooterIndex].classList.add('ste-xl')
                break;
                case 6:
                  squares[currentShooterIndex].classList.add('ste-xl') 
  
    
      default:
        break;
    }

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser')
      squares[currentLaserIndex].classList.remove('invader')
      squares[currentLaserIndex].classList.add('boom')

      setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
      clearInterval(laserId)

      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
      results++
      resultsDisplay.innerHTML = results
    setTimeout(()=>{if(results===5){
      document.querySelector(".controls").classList.add("controls-none")
      document.querySelector(".game-container").classList.add("game-none")
      document.querySelector(".video-container").classList.add("video-flex")
      const video = document.querySelector(".video")
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
     
      
      }},1000)
      
      console.log(aliensRemoved)

    }

  }
 
      laserId = setInterval(moveLaser, 300)
  


})});

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width -1
  remove()

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width +1
      direction = -1
      goingRight = false
    }
  }

  if(leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width -1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    alienInvaders[i] += direction
  }

  draw()

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    resultsDisplay.innerHTML = 'GAME OVER'
    clearInterval(invadersId)
  }

  for (let i = 0; i < alienInvaders.length; i++) {
    if(alienInvaders[i] > (squares.length)) {
      resultsDisplay.innerHTML = 'GAME OVER'
      clearInterval(invadersId)
    }
  }
  if (aliensRemoved.length === 5) {
    resultsDisplay.innerHTML = 'YOU WIN'
    clearInterval(invadersId)
  }
}
invadersId = setInterval(moveInvaders, 900)

function shoot(e) {
  let laserId
  let currentLaserIndex = currentShooterIndex
  function moveLaser() {
    
    
    squares[currentLaserIndex].classList.remove('laser')
  
    currentLaserIndex -= width
    
    squares[currentLaserIndex].classList.add('laser')
    
    
    
    
    

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser')
      
      squares[currentLaserIndex].classList.remove('invader')
      squares[currentLaserIndex].classList.add('boom')

      setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 300)
      clearInterval(laserId)

      const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
      aliensRemoved.push(alienRemoved)
      results++
      resultsDisplay.innerHTML = results
    
      console.log(aliensRemoved)

    }

  }
  switch(e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 300)
  }
}

document.addEventListener('keydown', shoot)
