let openClose = () => {
    let d = document.getElementById('left-navbar').style
    console.log(d.left)
    if (d.left == "" || d.left == "-100%") {
        document.getElementById('left-navbar').style.left = "-0%"
    } else {
        document.getElementById('left-navbar').style.left = "-100%"
    }
}

function loodDisplayNone() {
    document.getElementById("load").style.display = "none";
}

function looadDisplayBlock() {
    document.getElementById("maqol").innerHTML = Maqol[rand(Maqol.length - 1)];
    setTimeout(loodDisplayNone, 500);
}

function rand(max) {
    return Math.floor(Math.random() * max) + 1;
}

let Maqol = [
    "Avval bil, keyin qil. ",
    "Avval o'rgan, keyin o'rgat. ",
    "Aql ko'pga yetkazar, Hunar — ko'kka.",
    "Bilim baxt keltirar. ",
    "Bilim — aql chirog'i. ",
    "Bilmagan ayb emas, Bilishga tirishmagan ayb.",
    "Bilmagandan bilgan yaxshi, To'g'ri ishni qilgan yaxshi.",
    "Bilmaganning bilagi tolmas. ",
    "Bir yigitga yetmish hunar oz.",
    "Go'zallik — ilm-u ma'rifatda.",
    "Ilm baxt keltirar, Bilim taxt keltirar."
]