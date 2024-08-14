const bodyEL = document.querySelector('body')

bodyEL.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEL = document.createElement("span");
    spanEL.style.left = xPos + 'px';
    spanEL.style.top = yPos + 'px';
    bodyEL.appendChild(spanEL);
    const size = Math.random() * 100;
    spanEL.style.width = size + 'px';
    spanEL.style.height = size + 'px';
    setTimeout(() => {
        spanEL.remove();
    }, 3000);
})