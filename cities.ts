//Question # 38
function describe_city(city:string,country="Pakistan")
{
    console.log(city,"is in",country);
}
describe_city("Islamabad");
describe_city("lahore");
describe_city("Delhi","India");

//Question # 39
function city_country(city:string,country:string)
{
    console.log("\""+city+", "+country+"\"");
}
city_country("Islamabad","Pakistan");
city_country("Lahore","Pakistan");
city_country("Rawalpindi","Pakistan");