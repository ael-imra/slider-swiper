window.onload = ()=>{
    let container = document.querySelector('.container');
    let width = (document.querySelectorAll('.slide').length * 320) + 20;
    let translate = 0;
    let oldX = 0;
    container.addEventListener('mousedown',(event)=>{
        oldX = event.clientX;
        let mousemove = true;
        window.addEventListener('mousemove',(event)=>{
            if (mousemove === true)
            {
                console.log(width+ event.clientX - oldX - translate);
                if (event.clientX - oldX < 0 && width + event.clientX - oldX - translate >= window.innerHeight)
                {
                    translate = event.clientX - oldX - translate;
                    container.style = `width:${width}px;transform:translateX(${translate}px);`;
                }
                else if (event.clientX - oldX > 0 && translate + event.clientX - oldX <= 0)
                {
                    translate += event.clientX - oldX;
                    container.style = `width:${width}px;transform:translateX(${translate}px);`;
                }
            }
        });
        window.addEventListener('mouseup',()=>{
            mousemove = false;
        });
    });
};