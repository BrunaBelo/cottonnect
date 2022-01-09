export function nextStep(currentDiv: number): void {
  document.getElementById(`${currentDiv}`)!.style.transform = "translateX(-100%)"
  document.getElementById(`${currentDiv+1}`)!.style.display = "flex"  
  setTimeout(function() {
    document.getElementById(`${currentDiv+1}`)!.style.transform = "translateX(0%)"
    document.getElementById(`${currentDiv}`)!.style.display = "none"
  }, 250);
}

export function backStep(currentDiv: number): void {
  document.getElementById(`${currentDiv}`)!.style.transform = "translateX(100%)"
    document.getElementById(`${currentDiv-1}`)!.style.display = "flex"  
    setTimeout(function() {
      document.getElementById(`${currentDiv-1}`)!.style.transform = "translateX(0%)"
      document.getElementById(`${currentDiv}`)!.style.display = "none"
    }, 250);
}

