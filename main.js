var RE=[
    "Mom","Dad","Me","Brother"
];
var IM=
["https://lh3.googleusercontent.com/proxy/av9Nnta2gxY2q_0Okl-4Q44AvQPL5Ya0FyVF8U3eV9HxKNxOeekUP3LWpI8cfSi50o_Kc1QU7mEEbiuaPDAYT6sp","https://www.pinclipart.com/picdir/middle/581-5812162_line-art-head-male-dad-clipart-png-transparent.png","https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-260nw-1509139481.jpg","https://image.shutterstock.com/z/stock-vector-illustration-of-a-big-brother-giving-his-younger-brother-a-piggyback-ride-156737837.jpg"
];
var i=0;
function N(){
    document.getElementById("I").src= IM[i];
    document.getElementById("reasons").innerHTML= RE[i];
    i++;
}