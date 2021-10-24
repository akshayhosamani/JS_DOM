var arr= [{"time":"2016-07-26 09:02:27","type":"aa"}, {"time":"2016-04-21 20:35:07","type":"ae"}, {"time":"2016-08-20 03:31:57","type":"ar"}, {"time":"2017-01-19 22:58:06","type":"ae"}, {"time":"2016-08-28 10:19:27","type":"ae"}, {"time":"2016-12-06 10:36:22","type":"ar"}, {"time":"2016-07-09 12:14:03","type":"ar"}, {"time":"2016-10-25 05:05:37","type":"ae"}, {"time":"2016-06-05 07:57:18","type":"ae"}, {"time":"2016-10-08 22:03:03","type":"aa"}, {"time":"2016-08-13 21:27:37","type":"ae"}, {"time":"2016-04-09 07:36:16","type":"ar"}, {"time":"2016-12-30 17:20:08","type":"aa"}, {"time":"2016-03-11 17:31:46","type":"aa"}, {"time":"2016-05-04 14:08:25","type":"ar"}, {"time":"2016-11-29 05:21:02","type":"ar"}, {"time":"2016-03-08 05:46:01","type":"ar"}, ];

console.log(arr.filter(function(item){
    return item.type == "ar";         
}));
// [
//       {name: "Company One", category: "Finance", start: 1981, end: 2004},
//       {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//       {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//       {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//       {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//       {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//       {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//       {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//       {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//     ];
// data1.forEach(data=>console.log(data.Gender))
// let gender=data1.Gender
// console.log(gender);
// const retailCompany=companies.filter(function(company){
//       if(company.category==='Retail'){
//       return true
//       }
// });
// console.log(retailCompany);

// let retailCompanies=companies.filter(company=>company.category==='Retail');
// console.log(retailCompanies)
// let startCompanies=companies.filter(company=>company.start===1981);
// console.log('Companies Established in 1981');
// console.log(startCompanies)