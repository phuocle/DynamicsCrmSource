
function on(o) {
    with (o.rows[0].cells[1]) {
        firstChild.style.color = "#aa0000";
        firstChild.style.borderBottomColor = "#440000";
        children[1].style.color = "#440000"
    }
}

function off(o) {
    with (o.rows[0].cells[1]) {
        firstChild.style.color = "#466094";
        firstChild.style.borderBottomColor = "#DCDFE5";
        children[1].style.color = "#000000"
    }
}