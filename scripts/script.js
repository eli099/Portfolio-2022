console.log('DOM Content Loaded...')

function init() {

  // Project Four Thumbnail
  const four = document.querySelector('#four')
  // Project Two Thumbnail
  const two = document.querySelector('#two')

  const three = document.querySelector('#three')

  const one = document.querySelector('#one')

  // Project Four Popup
  const projectFour = document.querySelector('#project-4')

  const projectThree = document.querySelector('#project-3')
  // Project Two Popup
  const projectTwo = document.querySelector('#project-2')

  const projectOne = document.querySelector('#project-1')


  // Project Container
  const projectContainer = document.querySelector('#popup-container')

  // Generic Popup element
  const popup = document.querySelector('.popup')



  // ! Functions

  // Show project Four Details
  function handleProjectFour(e) {
    console.log('project four clicked')
    projectFour.style.visibility = 'visible'
    projectFour.style.transform = 'scaleX(1) scaleY(1)'
    projectFour.style.opacity = '1'
    projectContainer.style.visibility = 'visible'
    projectContainer.style.opacity = '1'
    projectContainer.style.zIndex = '2'
  }

  // Show project Three Details
  function handleProjectThree(e) {
    console.log('project three clicked')
    projectThree.style.visibility = 'visible'
    projectThree.style.transform = 'scaleX(1) scaleY(1)'
    projectThree.style.opacity = '1'
    projectContainer.style.visibility = 'visible'
    projectContainer.style.opacity = '1'
    projectContainer.style.zIndex = '2'
  }

  // Show project Two Details
  function handleProjectTwo(e) {
    console.log('project two clicked')
    projectTwo.style.visibility = 'visible'
    projectTwo.style.transform = 'scaleX(1) scaleY(1)'
    projectTwo.style.opacity = '1'
    projectContainer.style.visibility = 'visible'
    projectContainer.style.opacity = '1'
    projectContainer.style.zIndex = '2'
  }

  // Show project One Details
  function handleProjectOne(e) {
    console.log('project one clicked')
    projectOne.style.visibility = 'visible'
    projectOne.style.transform = 'scaleX(1) scaleY(1)'
    projectOne.style.opacity = '1'
    projectContainer.style.visibility = 'visible'
    projectContainer.style.opacity = '1'
    projectContainer.style.zIndex = '2'
  }

  // projectContainer.style.
  // function handleProjectPopup(e) {
  //   console.log('project clicked')
  //   console.log('id ->', e.target.id)
    
  //   if (e.target.id === 'four') {
  //     projectFour.style.visibility = 'visible'
  //     projectContainer.style.visibility = 'visible'
  //     projectFour.style.transform = 'scaleX(1) scaleY(1)'
  //     projectFour.style.opacity = '1'
  //     projectContainer.style.opacity = '1'
  //   } else if (e.target.id === 'three') {
  //     projectThree.style.visibility = 'visible'
  //     projectContainer.style.visibility = 'visible'
  //     projectThree.style.transform = 'scaleX(1) scaleY(1)'
  //     projectThree.style.opacity = '1'
  //     projectContainer.style.opacity = '1'
  //   } else if (e.target.id === 'two') {
  //     projectTwo.style.visibility = 'visible'
  //     projectContainer.style.visibility = 'visible'
  //     projectTwo.style.transform = 'scaleX(1) scaleY(1)'
  //     projectTwo.style.opacity = '1'
  //     projectContainer.style.opacity = '1'
  //   } else if (e.target.id === 'one') {
  //     projectOne.style.visibility = 'visible'
  //     projectContainer.style.visibility = 'visible'
  //     projectOne.style.transform = 'scaleX(1) scaleY(1)'
  //     projectOne.style.opacity = '1'
  //     projectContainer.style.opacity = '1'
  //   } else {
  //     console.log('error')
  //   }
  // }

  // Exit Project Four
  function handlePopupExit() {
    // console.log('exit')
    // console.log('project clicked')
    // console.log('id ->', e.target.id)
    
    popup.style.visibility = 'hidden'
    projectContainer.style.visibility = 'hidden'
    popup.style.transform = 'scaleX(0.8) scaleY(0.8)'
    popup.style.opacity = '0'
    projectContainer.style.opacity = '0'
    
    projectOne.style.visibility = 'hidden'
    projectTwo.style.visibility = 'hidden'
    projectThree.style.visibility = 'hidden'
    projectFour.style.visibility = 'hidden'
  }

  // ! Scrollbar disappear

  let scrollPos = window.scrollY

  window.onscroll = function () {
    console.log('scroll postition ->', scrollPos)
    let currentScroll = window.scrollY
    if (scrollPos > currentScroll) {
      document.querySelector('nav').style.top = '0'
    } else {
      document.querySelector('nav').style.top = '-100px'
    }
    scrollPos = currentScroll
  }

  // ! Events

  // Open project four
  four.addEventListener('click', handleProjectFour)
  
  // Open project three
  three.addEventListener('click', handleProjectThree)
  
  // Open project two
  two.addEventListener('click', handleProjectTwo)

  // Open project one
  one.addEventListener('click', handleProjectOne)

  projectContainer.addEventListener('click', handlePopupExit)



}

window.addEventListener('DOMContentLoaded', init)