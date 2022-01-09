c=document.getElementById("c");
ctx=c.getContext("2d");
function b(a,b){
    if(k>=a && k<=b){
        return true;
    }
    return false;
}
function w(t){
    ctx.fillText(t,10,10);
}
window.addEventListener("keydown", key);
function key(e){
    k=e.keyCode;
    console.log(k);
    ctx.clearRect(0,0,1000,100);
    if(b(65,90) || b(97,122)){
        w("Letter");
    }else if(b(48,57)){
        w("Number");
    }else if(b(37,40)){
        w("Arrow Key");
    }else if(k==17 || k==18 || k==27){
        w("Special Key");
    }else{
        w("Other");
    }
}