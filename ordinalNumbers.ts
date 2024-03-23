//Question # 33
var ordinalNumber=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<ordinalNumber.length;i++)
{
    if(ordinalNumber[i]==1)
    {
        console.log(ordinalNumber[i]+"st");
    }
    else if(ordinalNumber[i]==2)
    {
        console.log(ordinalNumber[i]+"nd");
    }
    else if(ordinalNumber[i]==3)
    {
        console.log(ordinalNumber[i]+"rd");
    }
    else if(ordinalNumber[i]>2&&ordinalNumber[i]<=9)
    {
        console.log(ordinalNumber[i]+"th");
    }
    else
    {
        console.log("it is not in the range of 1-9 ordinal numbers");
    }
}
