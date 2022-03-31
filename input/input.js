function r(){
    var right = document.getElementById('right')
    var r_width = window.getComputedStyle(right,null).width.replace(/px/,"")
    return r_width
}
function cont(){
    var first = document.getElementsByClassName('content')[0]
    var second = document.getElementsByClassName('content')[1]
    var third = document.getElementsByClassName('content')[2]
    var dic = {
        first:first,
        second:second,
        third:third
    }
    return dic
}
//右部分板块移动
function f_e (a){
    right.scrollLeft = 0
    cont().first.style.color = "#fd891d"
    cont().third.style.color = "white"
    cont().second.style.color = "white"
}
function f_s (a){
    var r_width = Number(r())
    right.scrollLeft = r_width
    cont().second.style.color = "#fd891d"
    cont().third.style.color = "white"
    cont().first.style.color = "white"
}
function f_g (a){
    var r_width = Number(r())
    right.scrollLeft = r_width*2
    cont().third.style.color = "#fd891d"
    cont().first.style.color = "white"
    cont().second.style.color = "white"
}

console.log(+0 === -0)