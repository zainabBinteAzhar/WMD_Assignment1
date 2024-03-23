//Question #25

var alienColor="green";
if(alienColor=="green")
{
    console.log("CONGRATS! player just earned 5 points");
}

alienColor="red";
if(alienColor=="green")
{
    console.log("CONGRATS! player just earned 5 points");
}
//OR
console.log("2nd method!");

var alienColors=["green","yellow","green","red"];
for(let i=0;i<alienColors.length;i++)
{
    if(alienColors[i]=="green")
    {
        console.log("CONGRATS! player just earned 5 points");
    }
}


//Question # 26
console.log("question 26!");
for(let i=0;i<alienColors.length;i++)
{
    if(alienColors[i]=="green")
    {
        console.log("CONGRATS! player just earned 5 points");
    }
    else{
        console.log("YEEAH! player just earned 10 points");
    }
}

//Question # 27
console.log("question 27!");
for(let i=0;i<alienColors.length;i++)
{
    if(alienColors[i]=="green")
    {
        console.log("CONGRATS! player just earned 5 points");
    }
    else if(alienColors[i]=="yellow"){
        console.log("YEEAH! player just earned 10 points");
    }
    else if(alienColors[i]=="red"){
        console.log("HURRAH! player just earned 15 points");
    }
}
