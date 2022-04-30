var oUl = document.getElementById("m-box2");
var aLi = oUl.getElementsByTagName("li");
oUl.addEventListener("click", function(e) {
    if (e.target && e.target.id == "p1") {
        document.getElementById("p1").style.color = "red";
    }
    if (e.target && e.target.id == "p2") {
        var today = new Date();
        document.getElementById("h1").innerHTML = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    }
    if (e.target && e.target.id == "p3") {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].classList.add("fn-active");
        }
    }
    if (e.target && e.target.id == "p4") {
        var x = document.getElementById("p8");
        x.parentNode.removeChild(x);
    }
    if (e.target && e.target.id == "p5") {
        window.open("https://www.taobao.com/");
    }
    if (e.target && e.target.id == "p6") {
        var li = document.createElement("li");
        li.innerHTML = "p9";
        oUl.appendChild(li);
    }
    if (e.target && e.target.id == "p7") {
        var x = document.getElementById("m-box1");
        x.style.width = screen.availWidth;
    }
    if (e.target) {
        for (var i = 0; i < aLi.length; i++) {
            if (e.target == aLi[i]) {
                alert(i + 1);
            }
        }
    }
});