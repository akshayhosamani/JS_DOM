 var data=[{"id":1,"first_name":"Marga","last_name":"Gallaway","email":"mgallaway0@ibm.com","gender":"Male"},
{"id":2,"first_name":"Ninetta","last_name":"Notti","email":"nnotti1@fema.gov","gender":"Female"},
{"id":3,"first_name":"Carmel","last_name":"Burnet","email":"cburnet2@un.org","gender":"Female"},
{"id":4,"first_name":"Anderea","last_name":"Pickover","email":"apickover3@prlog.org","gender":"Male"},
{"id":5,"first_name":"Lindsey","last_name":"Dupoy","email":"ldupoy4@bloglovin.com","gender":"Male"},
{"id":6,"first_name":"Arv","last_name":"Norcliffe","email":"anorcliffe5@angelfire.com","gender":"Female"},
{"id":7,"first_name":"Valentine","last_name":"Tremmil","email":"vtremmil6@wordpress.com","gender":"Male"},
{"id":8,"first_name":"Stefanie","last_name":"Van de Vlies","email":"svandevlies7@weather.com","gender":"Male"},
{"id":9,"first_name":"Helga","last_name":"Lerego","email":"hlerego8@dagondesign.com","gender":"Male"},
{"id":10,"first_name":"Lory","last_name":"Sweeny","email":"lsweeny9@techcrunch.com","gender":"Male"}]
// let genderFilter = data.filter(gend=>gend.gender == "Male");
// console.log(genderFilter)
const companies= [
      {name: "Company One", category: "Finance", start: 1981, end: 2004},
      {name: "Company Two", category: "Retail", start: 1992, end: 2008},
      {name: "Company Three", category: "Auto", start: 1999, end: 2007},
      {name: "Company Four", category: "Retail", start: 1989, end: 2010},
      {name: "Company Five", category: "Technology", start: 2009, end: 2014},
      {name: "Company Six", category: "Finance", start: 1987, end: 2010},
      {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
      {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
      {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
    ];
    
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    //Companies in 1980s
//     const companyIn80s = companies.filter(company=>(company.start>=1980 && company.start<1990))
//     console.log(companyIn80s)

    //companies established first
//     const companyByYear = companies.sort((a,b)=>a.start>b.start?1:-1)
//     console.log(companyByYear)
//Sort Ages
// const sortAges = ages.sort((a,b)=>b-a)
// console.log(sortAges);
// Add all ages
const addedAge=ages.reduce((total,age)=>total+age,0)
console.log(addedAge);