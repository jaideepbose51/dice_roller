function dice()
{
    let a=Math.floor(Math.random() * 6) + 1;
    console.log("jaideep");
    if (a==1)
    {
        document.getElementById("img1").setAttribute("src", "./dice1.png");
    }
    if (a==2)
    {
        document.getElementById("img1").setAttribute("src", "./dice2.png");
    }
    if (a==3)
    {
        document.getElementById("img1").setAttribute("src", "./dice3.png");
    }
    if (a==4)
    {
        document.getElementById("img1").setAttribute("src", "./dice4.png");
    }
    if (a==5)
    {
        document.getElementById("img1").setAttribute("src", "./dice5.png");
    }
    if (a==6)
    {
        document.getElementById("img1").setAttribute("src", "./dice6.png");
    }
}

