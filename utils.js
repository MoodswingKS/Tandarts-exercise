import { v4 as uuidv4 } from 'uuid'

const patientList = [
{id:1,firstname:"Bevvy",lastname:"Selborne",email:"bselborne0@bing.com",mobile:"(208) 4423405",yearOfBirth:1988,sick:false},
{id:2,firstname:"Ladonna",lastname:"Davidowsky",email:"ldavidowsky1@shinystat.com",mobile:"(950) 7028435",yearOfBirth:1994,sick:false},
{id:3,firstname:"Ashly",lastname:"Crozier",email:"acrozier2@123-reg.co.uk",mobile:"(493) 2390941",yearOfBirth:1971,sick:false},
{id:4,firstname:"Kalvin",lastname:"Dorrance",email:"kdorrance3@shareasale.com",mobile:"(703) 1761286",yearOfBirth:1997,sick:false},
{id:5,firstname:"Creight",lastname:"Pancoust",email:"cpancoust4@zimbio.com",mobile:"(658) 1971323",yearOfBirth:1989,sick:false},
{id:6,firstname:"Hedy",lastname:"Gabbitas",email:"hgabbitas5@salon.com",mobile:"(863) 2354201",yearOfBirth:1969,sick:false},
{id:7,firstname:"Wrennie",lastname:"Skase",email:"wskase6@unblog.fr",mobile:"(138) 9233769",yearOfBirth:1975,sick:false},
{id:8,firstname:"Augustina",lastname:"Concannon",email:"aconcannon7@dailymail.co.uk",mobile:"(700) 1699542",yearOfBirth:1974,sick:false},
{id:9,firstname:"Mufinella",lastname:"Acom",email:"macom8@techcrunch.com",mobile:"(351) 3589785",yearOfBirth:1973,sick:false},
{id:10,firstname:"Brose",lastname:"Mursell",email:"bmursell9@admin.ch",mobile:"(305) 2743390",yearOfBirth:1986,sick:false},
{id:11,firstname:"Loraine",lastname:"MacTeggart",email:"lmacteggarta@studiopress.com",mobile:"(914) 8243910",yearOfBirth:1984,sick:false},
{id:12,firstname:"Avrom",lastname:"Ganderton",email:"agandertonb@toplist.cz",mobile:"(258) 4534751",yearOfBirth:1987,sick:false},
{id:13,firstname:"Flem",lastname:"Orbine",email:"forbinec@surveymonkey.com",mobile:"(370) 5045063",yearOfBirth:1990,sick:false},
{id:14,firstname:"Jena",lastname:"Clawson",email:"jclawsond@symantec.com",mobile:"(574) 3569034",yearOfBirth:1977,sick:false},
{id:15,firstname:"Dagny",lastname:"Pender",email:"dpendere@wikimedia.org",mobile:"(297) 5179548",yearOfBirth:1990,sick:false},
{id:16,firstname:"Tova",lastname:"Matthiae",email:"tmatthiaef@slashdot.org",mobile:"(155) 4589191",yearOfBirth:1992,sick:false},
{id:17,firstname:"Lyndsey",lastname:"Kelshaw",email:"lkelshawg@cornell.edu",mobile:"(378) 6398571",yearOfBirth:1967,sick:false},
{id:18,firstname:"Colet",lastname:"Jenkinson",email:"cjenkinsonh@ted.com",mobile:"(440) 5655062",yearOfBirth:1994,sick:false},
{id:19,firstname:"Sosanna",lastname:"Dimbleby",email:"sdimblebyi@amazon.co.uk",mobile:"(439) 9160000",yearOfBirth:1981,sick:false},
{id:20,firstname:"Cindelyn",lastname:"Murtagh",email:"cmurtaghj@unicef.org",mobile:"(115) 8628219",yearOfBirth:1973,sick:false},
{id:21,firstname:"Viole",lastname:"Allridge",email:"vallridgek@jiathis.com",mobile:"(542) 3071224",yearOfBirth:1991,sick:false},
{id:22,firstname:"Andrea",lastname:"Tourne",email:"atournel@mail.ru",mobile:"(443) 8890301",yearOfBirth:1982,sick:false},
{id:23,firstname:"De witt",lastname:"Estevez",email:"destevezm@friendfeed.com",mobile:"(206) 2419718",yearOfBirth:1997,sick:false},
{id:24,firstname:"Dill",lastname:"Dennerly",email:"ddennerlyn@google.ca",mobile:"(518) 7860598",yearOfBirth:1999,sick:false},
{id:25,firstname:"Bartram",lastname:"Dews",email:"bdewso@yahoo.co.jp",mobile:"(135) 6280181",yearOfBirth:1971,sick:false},
{id:26,firstname:"Norbie",lastname:"Jakoubek",email:"njakoubekp@weebly.com",mobile:"(235) 9825078",yearOfBirth:1979,sick:false},
{id:27,firstname:"Lira",lastname:"Cockayme",email:"lcockaymeq@example.com",mobile:"(955) 9636518",yearOfBirth:1967,sick:false},
{id:28,firstname:"Amerigo",lastname:"Tebbitt",email:"atebbittr@simplemachines.org",mobile:"(184) 8603559",yearOfBirth:1973,sick:false},
{id:29,firstname:"Daisi",lastname:"Klimentyev",email:"dklimentyevs@google.nl",mobile:"(150) 6688198",yearOfBirth:1986,sick:false},
{id:30,firstname:"Hugibert",lastname:"Kinder",email:"hkindert@latimes.com",mobile:"(500) 7624483",yearOfBirth:1964,sick:false},
{id:31,firstname:"Ulrica",lastname:"Purchon",email:"upurchonu@army.mil",mobile:"(606) 5700085",yearOfBirth:1963,sick:false},
{id:32,firstname:"Rhodia",lastname:"Westall",email:"rwestallv@bbc.co.uk",mobile:"(337) 7778191",yearOfBirth:1964,sick:false},
{id:33,firstname:"Brande",lastname:"Bielfeldt",email:"bbielfeldtw@independent.co.uk",mobile:"(278) 2485124",yearOfBirth:1961,sick:false},
{id:34,firstname:"Kiersten",lastname:"Grombridge",email:"kgrombridgex@utexas.edu",mobile:"(956) 6665500",yearOfBirth:1961,sick:false},
{id:35,firstname:"Clemmie",lastname:"Inger",email:"cingery@mapquest.com",mobile:"(852) 8968509",yearOfBirth:1979,sick:false},
{id:36,firstname:"Christoffer",lastname:"Clara",email:"cclaraz@sciencedaily.com",mobile:"(122) 2209491",yearOfBirth:1984,sick:false},
{id:37,firstname:"Mycah",lastname:"Cluckie",email:"mcluckie10@amazon.co.jp",mobile:"(684) 1242711",yearOfBirth:1994,sick:false},
{id:38,firstname:"Stafani",lastname:"Covolini",email:"scovolini11@cyberchimps.com",mobile:"(821) 3911034",yearOfBirth:1965,sick:false},
{id:39,firstname:"Annice",lastname:"Sidnall",email:"asidnall12@newsvine.com",mobile:"(696) 4061727",yearOfBirth:1989,sick:false},
{id:40,firstname:"Joice",lastname:"Berkeley",email:"jberkeley13@moonfruit.com",mobile:"(601) 3415857",yearOfBirth:1988,sick:false},
{id:41,firstname:"Iggie",lastname:"Thake",email:"ithake14@linkedin.com",mobile:"(922) 8016952",yearOfBirth:1980,sick:false},
{id:42,firstname:"Tabatha",lastname:"Gallier",email:"tgallier15@smh.com.au",mobile:"(245) 7019251",yearOfBirth:1991,sick:false},
{id:43,firstname:"Tobias",lastname:"Wardale",email:"twardale16@sourceforge.net",mobile:"(980) 8975074",yearOfBirth:1962,sick:false},
{id:44,firstname:"Myles",lastname:"Cattermole",email:"mcattermole17@acquirethisname.com",mobile:"(993) 5327056",yearOfBirth:1999,sick:false},
{id:45,firstname:"Gerianna",lastname:"Phelp",email:"gphelp18@homestead.com",mobile:"(879) 5812816",yearOfBirth:1963,sick:false},
{id:46,firstname:"Alia",lastname:"Limerick",email:"alimerick19@xinhuanet.com",mobile:"(885) 9913482",yearOfBirth:1963,sick:false},
{id:47,firstname:"Kathrine",lastname:"Ribbens",email:"kribbens1a@networksolutions.com",mobile:"(104) 6555854",yearOfBirth:1994,sick:false},
{id:48,firstname:"Dela",lastname:"Terbeck",email:"dterbeck1b@bloglines.com",mobile:"(780) 4080281",yearOfBirth:1996,sick:false},
{id:49,firstname:"Cyrus",lastname:"Chupin",email:"cchupin1c@elegantthemes.com",mobile:"(725) 2776913",yearOfBirth:2000,sick:false},
{id:50,firstname:"Ame",lastname:"Haster",email:"ahaster1d@feedburner.com",mobile:"(710) 7117329",yearOfBirth:1999,sick:false}]


const dentistList = [{id:1,firstname:"Angel",lastname:"McGinnis",email:"amcginnis0@google.de",mobile:"(806) 6774817",occupation:"dentist",sick:false},
{id:2,firstname:"Josefina",lastname:"Scrivenor",email:"jscrivenor1@dell.com",mobile:"(798) 8555072",occupation:"dentist",sick:false},
{id:3,firstname:"Pamella",lastname:"Deeves",email:"pdeeves2@ustream.tv",mobile:"(763) 4786171",occupation:"dentist",sick:false},
{id:4,firstname:"Daphna",lastname:"Deboy",email:"ddeboy3@msu.edu",mobile:"(930) 1368023",occupation:"dentist",sick:false}]

const assistentList = [{id:1,firstname:"Pincas",lastname:"Cuffin",email:"pcuffin0@indiegogo.com",mobile:"(428) 3069611",occupation:"assistent",sick:false},
{id:2,firstname:"Pippy",lastname:"Radeliffe",email:"pradeliffe1@adobe.com",mobile:"(533) 3536577",occupation:"assistent",sick:false}]

const getPatient = () => {
  const person = patientList[Math.floor(Math.random() * 50)];
  return person
}

const getDentist = () => {
  const person = dentistList[Math.floor(Math.random() * 4)];
  return person
}

const getAssistent = () => {
  const person = assistentList[Math.floor(Math.random() * 2)];
  return person
}

const getRandomTime = () => {
  let hour;
  while (true) {
    hour = Math.floor(Math.random() * 24);
    if (hour > 7 && hour < 19) {
      return hour;
    }
  }
};

const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

const generateRandomAppointment = () => ({
  id: uuidv4(),
  day: getRandomDay(),
  time: getRandomTime(),
  patient: getPatient(),
  dentist: getDentist(),
  assistant: getAssistent(),
});

const generateRandomAppointments = num => {
  return Array(num)
    .fill(0)
    .map(_ => generateRandomAppointment());
}

export default generateRandomAppointments;
