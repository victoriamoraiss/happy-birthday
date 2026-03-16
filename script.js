const l = document.getElementById('letter');
const p = document.getElementById('paper');

l.addEventListener("click", function(){
    l.style.display = "none";
    p.style.display = "flex";
})

p.addEventListener("click", function(){
    p.style.display = "none";
    l.style.display = "flex";
})
setTimeout(function(){

    document.getElementById("c1").remove();
    document.getElementById("c2").remove();
    document.getElementByClassName("confettis").remove()
}, 4000);

const g =  document.getElementById('gift');
const f = document.getElementById('flower');
const hb = document.getElementById('hb');
const t = document.getElementById('tl');
const cf1 = document.getElementById('c1');
const cf2 = document.getElementById('c2');


g.addEventListener("click", function(){
    g.style.display = "none";
    f.style.display = "flex";
    hb.style.display = "flex";
    l.style.display = "flex";
    cf1.style.display = "flex";
    cf2.style.display = "flex";
})
