const frame = document.querySelectorAll('.frame');
frame.forEach(function(box){
    box.addEventListener('click',function(e){
        const b = e.currentTarget.children;
        // const k = e.querySelectorAll("button");
        console.log(e);
        // b.style.display = "none";
    })
})