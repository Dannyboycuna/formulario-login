function ShowLoading() {
    var div = document.createElement("div")
    div.classList.add("loading")
    div.innerText = "Loading"
    document.body.appendChild(div)
    setTimeout(HideLoading, 2000)
}

function HideLoading() {
    var removeclasslist = document.getElementsByClassName("loading")
    if (removeclasslist.length) {
        removeclasslist[0].remove()
    }
}











/*function ShowLoading() {
    var div = document.createElement("div")
    div.classList.add("loading")
    //div.innerText = "Loading"

    var label = document.createElement("label")
    label.innerText = "Loading..."
    div.appendChild(label)
    document.body.appendChild(div)

setTimeout(HideLoading, 2000)
}

function HideLoading() {
    var removediv = document.getElementsByClassName("loading")
    if (removediv.length) {
        removediv[0].remove()
    }
}
*/