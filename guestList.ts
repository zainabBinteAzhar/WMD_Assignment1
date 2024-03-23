//question# 14
let myPeople=["Mama","maryam","hadia"];
console.log(myPeople[0]+" Any dinner without you, isn't a dinner.It's good to have you around, u care too much about me")
console.log(myPeople[1]+" I wish i had visited you and talked to you about your life. I was and still am very curious about your life. Dinner will be a good option to have some gupp shupp")
console.log(myPeople[2]+" Let's meet someday. I know we have so much to share with each other and laugh like idiots")

myPeople.push("Baek yi jin");
console.log(myPeople[3]+" You were an awesome character, having dinner with you would be FANTASTIC")

console.log("Number of people: "+myPeople.length);

////question# 15
console.log(myPeople[1]+" won''t be able to make it to dinner so let's invite someone else");
myPeople[1]="Ayesha";

console.log(myPeople[0]+" Any dinner without you, isn't a dinner.It's good to have you around, u care too much about me")
console.log(myPeople[1]+" I wish i had visited you and talked to you about your life. I was and still am very curious about your life. Dinner will be a good option to have some gupp shupp")
console.log(myPeople[2]+" Let's meet someday. I know we have so much to share with each other and laugh like idiots")

console.log("Number of people: "+myPeople.length);

//question #16
console.log("How nice I have found more space, ley's envite some others too");

myPeople.unshift("Huzaifa");//add element in start
myPeople.splice(3,0,"shahab");//add element in mid at position 3, and move the previous one without removing
myPeople.push("Abdullah");// add element at the end of array

console.log("My new invited people are:");
myPeople.forEach(myPeople=>(console.log(myPeople)));

console.log("Number of people: "+myPeople.length);

//question #17
console.log("No more space remain avaiable so have to shrink the invite list");


let range=myPeople.length;
let removedOnes=(myPeople.length)-2;

for(let i=0;i<range;i++)
{
    if(i<removedOnes)
    {
        console.log(myPeople[0]+" we are sorry! you aren't invited anymore");
        myPeople.shift();//remove from start
    }
    
    else
    {
        myPeople.forEach(myPeople=>(console.log(myPeople+" YEAAH! you are still invited")));
    }
}

console.log("Now removing left ones too from the list")
for(let i=0;i<=myPeople.length;i++)
{
    myPeople.pop();//remove from last
    myPeople.forEach(myPeople=>(console.log("left ones: "+ myPeople)));
}
console.log("Number of people: "+myPeople.length);

//question #19: is with every questionrom 14 to question 17
