
var sb = document.getElementById("share-btn");
var cn = document.getElementById("cancel-nav");
var c = document.getElementById("cancel");
cn.style.top = "-900px";
c.style.backgroundColor ="#ccc";
sb.onclick= c.onclick = function(){
    if(cn.style.top == "-900px" ){
        cn.style.top = "0";
        cn.style.alignContent= "center";
        cn.style.marginLeft = "100px";
        cn.style.textAlign ="center";
        cn.style.justifyContent = "space-between";
        sb.style.display ="none";
        c.style.position ="relative";
        c.style.top ="0";
        c.style.right ="345px";
        c.style.position ="absolute";
        c.style.left ="110px";
        c.style.top ="35px";
        c.style.width ="55px";
        c.style.borderRadius ="50%";
        c.style.backgroundColor ="yellow";
        pb.style.display = "none";
        
        
         
        
    }else{
        cn.style.top = "-900px";
        sb.style.display ="inline";
        c.style.backgroundColor ="#ccc";
        pb.style.display = "inline";
    }
 
} 

var pb = document.getElementById("phone-btn");
var pn = document.getElementById("phone-nav");
var cl = document.getElementById("cancel-phone");
pn.style.top = "-900px";
cl.style.backgroundColor ="#ccc";
pb.onclick =cl.onclick = function(){
    if(pn.style.top == "-900px"){
        pn.style.top = "0";
        pn.style.color = "white";
        pn.style.fontSize = "24px";
        pn.style.alignContent= "center";
        pn.style.marginLeft = "100px";
        pn.style.textAlign ="center";
        pn.style.justifyContent = "space-between";
        pb.style.display ="none";
        cl.style.position ="relative";
        cl.style.top ="-245px";
        cl.style.right ="250px";
        cl.style.width ="55px";
        cl.style.borderRadius ="50%";
        cl.style.backgroundColor ="#ccc";
        sb.style.display ="none";
        cl.style.backgroundColor ="yellow";
        
        
    }else{
        pn.style.top = "-900px";
        pb.style.display ="inline";
        sb.style.display ="inline";
        cl.style.backgroundColor ="#ccc";
    }
}
var mi = document.getElementById("mune-img");
var mn = document.getElementById("mune-nav");
var cmm = document.getElementById("cancel-mune");

mn.style.top = "-900px" ;
cmm.style.background= "#ccc";
cmm.onclick = mi.onclick = function(h){
    if(mn.style.top == "-900px"){
        mn.style.top = "0";
        mn.style.right = "0";
        mn.style.bottom = "0";
        mn.style.left = "0";
        mn.style.width = "100%";
        mn.style.float = "left";
        mn.style.alignItems = "center";
        mn.style.backgroundColor = "black";
        cmm.style.backgroundColor = "#ccc"
        cmm.style.position = "relative";
        cmm.style.left = "1200px";
        cmm.style.top = "25px";
        cmm.style.backgroundColor ="yellow";
        cmm.style.width ="55px";
        mi.style.display ="none";
        
        
    }else{
        mn.style.top = "-900px";
        mn.style.right = "-600px";
        mn.style.bottom = "-900px";
        mn.style.left = "-1400px";
        mi.style.display = "inline";
        
    }
}
var ta = document.getElementById("twasal-about");
var tm = document.getElementById("twasal-mune");
var ctm = document.getElementById("canceltwasalmune");
tm.style.display = "inline-block";
ta.onclick= ctm.onclick = function(){
    if(ta.style.fontWeight ="400"){
      tm.style.bottom = "0";
      tm.style.right ="0";
      tm.style.top ="440px";  
      tm.style.width ="100%";
      tm.style.backgroundColor ="#9e6f6f"; 
      ctm.style.cursor ="pointer"; 
      ctm.style.position ="relative";
      ctm.style.left ="-600px";
    }else{
       
        tm.style.bottom = "-900px";
      tm.style.right ="-900px";
    }
}
