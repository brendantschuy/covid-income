//Sourced from US Census Bureau
//Table S1901 - column CN

const oregon_income_rates = {
    "97001": {
       householdMedian: "43333",
       familyMedian: "55625",
       marriedCoupleMedian: "60000",
       nonfamilyHouseholdMedian: "-",
       householdMean: "57422",
       familyMean: "43242",
       marriedCoupleMean: "N",
       nonfamilyMean: "70890"
    },
    "97002": {
       householdMedian: "71587",
       familyMedian: "82350",
       marriedCoupleMedian: "90644",
       nonfamilyHouseholdMedian: "37340",
       householdMean: "93306",
       familyMean: "102352",
       marriedCoupleMean: "N",
       nonfamilyMean: "68224"
    },
    "97004": {
       householdMedian: "80036",
       familyMedian: "92069",
       marriedCoupleMedian: "95469",
       nonfamilyHouseholdMedian: "27279",
       householdMean: "101251",
       familyMean: "111681",
       marriedCoupleMean: "N",
       nonfamilyMean: "56390"
    },
    "97005": {
       householdMedian: "49127",
       familyMedian: "59919",
       marriedCoupleMedian: "73489",
       nonfamilyHouseholdMedian: "35620",
       householdMean: "68296",
       familyMean: "79091",
       marriedCoupleMean: "N",
       nonfamilyMean: "53230"
    },
    "97006": {
       householdMedian: "74116",
       familyMedian: "79091",
       marriedCoupleMedian: "88695",
       nonfamilyHouseholdMedian: "57701",
       householdMean: "87728",
       familyMean: "94578",
       marriedCoupleMean: "104212",
       nonfamilyMean: "69275"
    },
    "97007": {
       householdMedian: "83605",
       familyMedian: "90960",
       marriedCoupleMedian: "102716",
       nonfamilyHouseholdMedian: "55875",
       householdMean: "100711",
       familyMean: "110264",
       marriedCoupleMean: "122078",
       nonfamilyMean: "66448"
    },
    "97008": {
       householdMedian: "65091",
       familyMedian: "81612",
       marriedCoupleMedian: "94506",
       nonfamilyHouseholdMedian: "41335",
       householdMean: "80246",
       familyMean: "91888",
       marriedCoupleMean: "N",
       nonfamilyMean: "55849"
    },
    "97009": {
       householdMedian: "79149",
       familyMedian: "92262",
       marriedCoupleMedian: "97542",
       nonfamilyHouseholdMedian: "39224",
       householdMean: "98336",
       familyMean: "107938",
       marriedCoupleMean: "N",
       nonfamilyMean: "56804"
    },
    "97011": {
       householdMedian: "42024",
       familyMedian: "78508",
       marriedCoupleMedian: "77903",
       nonfamilyHouseholdMedian: "-",
       householdMean: "53004",
       familyMean: "67358",
       marriedCoupleMean: "N",
       nonfamilyMean: "24206"
    },
    "97013": {
       householdMedian: "70461",
       familyMedian: "82274",
       marriedCoupleMedian: "88972",
       nonfamilyHouseholdMedian: "45323",
       householdMean: "86067",
       familyMean: "97120",
       marriedCoupleMean: "N",
       nonfamilyMean: "51616"
    },
    "97014": {
       householdMedian: "50357",
       familyMedian: "52188",
       marriedCoupleMedian: "52455",
       nonfamilyHouseholdMedian: "33125",
       householdMean: "57012",
       familyMean: "69805",
       marriedCoupleMean: "N",
       nonfamilyMean: "36799"
    },
    "97015": {
       householdMedian: "75723",
       familyMedian: "89726",
       marriedCoupleMedian: "97256",
       nonfamilyHouseholdMedian: "47721",
       householdMean: "89869",
       familyMean: "104364",
       marriedCoupleMean: "N",
       nonfamilyMean: "57381"
    },
    "97016": {
       householdMedian: "47794",
       familyMedian: "57750",
       marriedCoupleMedian: "70387",
       nonfamilyHouseholdMedian: "23486",
       householdMean: "63366",
       familyMean: "79819",
       marriedCoupleMean: "N",
       nonfamilyMean: "33936"
    },
    "97017": {
       householdMedian: "81477",
       familyMedian: "98807",
       marriedCoupleMedian: "105625",
       nonfamilyHouseholdMedian: "42642",
       householdMean: "95691",
       familyMean: "106048",
       marriedCoupleMean: "N",
       nonfamilyMean: "47223"
    },
    "97018": {
       householdMedian: "67587",
       familyMedian: "68924",
       marriedCoupleMedian: "68523",
       nonfamilyHouseholdMedian: "58500",
       householdMean: "79213",
       familyMean: "80494",
       marriedCoupleMean: "N",
       nonfamilyMean: "75971"
    },
    "97019": {
       householdMedian: "68882",
       familyMedian: "90152",
       marriedCoupleMedian: "90871",
       nonfamilyHouseholdMedian: "28487",
       householdMean: "83990",
       familyMean: "103179",
       marriedCoupleMean: "N",
       nonfamilyMean: "44502"
    },
    "97020": {
       householdMedian: "66250",
       familyMedian: "70476",
       marriedCoupleMedian: "83750",
       nonfamilyHouseholdMedian: "41458",
       householdMean: "77103",
       familyMean: "78675",
       marriedCoupleMean: "N",
       nonfamilyMean: "66613"
    },
    "97021": {
       householdMedian: "54375",
       familyMedian: "69583",
       marriedCoupleMedian: "78542",
       nonfamilyHouseholdMedian: "36250",
       householdMean: "74211",
       familyMean: "95186",
       marriedCoupleMean: "N",
       nonfamilyMean: "36965"
    },
    "97022": {
       householdMedian: "76020",
       familyMedian: "70078",
       marriedCoupleMedian: "77113",
       nonfamilyHouseholdMedian: "42500",
       householdMean: "87613",
       familyMean: "84276",
       marriedCoupleMean: "N",
       nonfamilyMean: "48384"
    },
    "97023": {
       householdMedian: "66226",
       familyMedian: "73971",
       marriedCoupleMedian: "82978",
       nonfamilyHouseholdMedian: "50744",
       householdMean: "86297",
       familyMean: "95735",
       marriedCoupleMean: "N",
       nonfamilyMean: "53552"
    },
    "97024": {
       householdMedian: "60829",
       familyMedian: "71801",
       marriedCoupleMedian: "80247",
       nonfamilyHouseholdMedian: "37026",
       householdMean: "72989",
       familyMean: "81086",
       marriedCoupleMean: "N",
       nonfamilyMean: "52491"
    },
    "97026": {
       householdMedian: "66676",
       familyMedian: "68676",
       marriedCoupleMedian: "72548",
       nonfamilyHouseholdMedian: "36625",
       householdMean: "76582",
       familyMean: "76846",
       marriedCoupleMean: "N",
       nonfamilyMean: "51834"
    },
    "97027": {
       householdMedian: "61638",
       familyMedian: "76043",
       marriedCoupleMedian: "91903",
       nonfamilyHouseholdMedian: "34183",
       householdMean: "79291",
       familyMean: "91002",
       marriedCoupleMean: "N",
       nonfamilyMean: "53424"
    },
    "97028": {
       householdMedian: "66971",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "78339",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "78353"
    },
    "97029": {
       householdMedian: "49375",
       familyMedian: "68409",
       marriedCoupleMedian: "79028",
       nonfamilyHouseholdMedian: "17813",
       householdMean: "89179",
       familyMean: "118366",
       marriedCoupleMean: "N",
       nonfamilyMean: "27902"
    },
    "97030": {
       householdMedian: "50318",
       familyMedian: "58450",
       marriedCoupleMedian: "73215",
       nonfamilyHouseholdMedian: "31572",
       householdMean: "61710",
       familyMean: "70824",
       marriedCoupleMean: "N",
       nonfamilyMean: "43419"
    },
    "97031": {
       householdMedian: "63838",
       familyMedian: "74046",
       marriedCoupleMedian: "79732",
       nonfamilyHouseholdMedian: "45199",
       householdMean: "87325",
       familyMean: "99917",
       marriedCoupleMean: "N",
       nonfamilyMean: "61808"
    },
    "97032": {
       householdMedian: "55859",
       familyMedian: "68536",
       marriedCoupleMedian: "81029",
       nonfamilyHouseholdMedian: "37831",
       householdMean: "70122",
       familyMean: "78003",
       marriedCoupleMean: "N",
       nonfamilyMean: "39711"
    },
    "97033": {
       householdMedian: "25833",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "22143",
       householdMean: "63250",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "61125"
    },
    "97034": {
       householdMedian: "120473",
       familyMedian: "158619",
       marriedCoupleMedian: "168047",
       nonfamilyHouseholdMedian: "51750",
       householdMean: "174269",
       familyMean: "210109",
       marriedCoupleMean: "N",
       nonfamilyMean: "76637"
    },
    "97035": {
       householdMedian: "94531",
       familyMedian: "124848",
       marriedCoupleMedian: "143168",
       nonfamilyHouseholdMedian: "49000",
       householdMean: "130985",
       familyMean: "164620",
       marriedCoupleMean: "N",
       nonfamilyMean: "67804"
    },
    "97037": {
       householdMedian: "45679",
       familyMedian: "49375",
       marriedCoupleMedian: "60156",
       nonfamilyHouseholdMedian: "26250",
       householdMean: "54797",
       familyMean: "67710",
       marriedCoupleMean: "N",
       nonfamilyMean: "29316"
    },
    "97038": {
       householdMedian: "61716",
       familyMedian: "71691",
       marriedCoupleMedian: "78697",
       nonfamilyHouseholdMedian: "38762",
       householdMean: "74479",
       familyMean: "83021",
       marriedCoupleMean: "N",
       nonfamilyMean: "46239"
    },
    "97039": {
       householdMedian: "57212",
       familyMedian: "65000",
       marriedCoupleMedian: "64583",
       nonfamilyHouseholdMedian: "29375",
       householdMean: "75313",
       familyMean: "87403",
       marriedCoupleMean: "N",
       nonfamilyMean: "43231"
    },
    "97040": {
       householdMedian: "69042",
       familyMedian: "74856",
       marriedCoupleMedian: "76719",
       nonfamilyHouseholdMedian: "54167",
       householdMean: "79003",
       familyMean: "85330",
       marriedCoupleMean: "N",
       nonfamilyMean: "61790"
    },
    "97041": {
       householdMedian: "70833",
       familyMedian: "73814",
       marriedCoupleMedian: "73456",
       nonfamilyHouseholdMedian: "48542",
       householdMean: "81499",
       familyMean: "85503",
       marriedCoupleMean: "N",
       nonfamilyMean: "62747"
    },
    "97042": {
       householdMedian: "73669",
       familyMedian: "86081",
       marriedCoupleMedian: "98068",
       nonfamilyHouseholdMedian: "-",
       householdMean: "87366",
       familyMean: "96327",
       marriedCoupleMean: "N",
       nonfamilyMean: "40749"
    },
    "97045": {
       householdMedian: "76495",
       familyMedian: "88547",
       marriedCoupleMedian: "95670",
       nonfamilyHouseholdMedian: "41944",
       householdMean: "91935",
       familyMean: "103094",
       marriedCoupleMean: "N",
       nonfamilyMean: "55146"
    },
    "97048": {
       householdMedian: "55534",
       familyMedian: "65256",
       marriedCoupleMedian: "74031",
       nonfamilyHouseholdMedian: "32765",
       householdMean: "68251",
       familyMean: "76883",
       marriedCoupleMean: "N",
       nonfamilyMean: "39506"
    },
    "97049": {
       householdMedian: "76528",
       familyMedian: "73750",
       marriedCoupleMedian: "87778",
       nonfamilyHouseholdMedian: "62853",
       householdMean: "82402",
       familyMean: "93098",
       marriedCoupleMean: "N",
       nonfamilyMean: "54072"
    },
    "97050": {
       householdMedian: "50893",
       familyMedian: "66250",
       marriedCoupleMedian: "74063",
       nonfamilyHouseholdMedian: "29063",
       householdMean: "54928",
       familyMean: "63130",
       marriedCoupleMean: "N",
       nonfamilyMean: "38291"
    },
    "97051": {
       householdMedian: "55194",
       familyMedian: "69695",
       marriedCoupleMedian: "83246",
       nonfamilyHouseholdMedian: "32887",
       householdMean: "69073",
       familyMean: "80221",
       marriedCoupleMean: "N",
       nonfamilyMean: "43042"
    },
    "97053": {
       householdMedian: "64652",
       familyMedian: "89491",
       marriedCoupleMedian: "89352",
       nonfamilyHouseholdMedian: "43442",
       householdMean: "97057",
       familyMean: "118824",
       marriedCoupleMean: "N",
       nonfamilyMean: "43529"
    },
    "97054": {
       householdMedian: "74844",
       familyMedian: "74609",
       marriedCoupleMedian: "78036",
       nonfamilyHouseholdMedian: "57313",
       householdMean: "78870",
       familyMean: "85803",
       marriedCoupleMean: "N",
       nonfamilyMean: "54048"
    },
    "97055": {
       householdMedian: "68789",
       familyMedian: "79907",
       marriedCoupleMedian: "84985",
       nonfamilyHouseholdMedian: "38783",
       householdMean: "80470",
       familyMean: "89708",
       marriedCoupleMean: "N",
       nonfamilyMean: "48321"
    },
    "97056": {
       householdMedian: "73505",
       familyMedian: "83940",
       marriedCoupleMedian: "100110",
       nonfamilyHouseholdMedian: "31930",
       householdMean: "85649",
       familyMean: "100056",
       marriedCoupleMean: "N",
       nonfamilyMean: "50494"
    },
    "97057": {
       householdMedian: "22750",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "21933",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97058": {
       householdMedian: "50407",
       familyMedian: "60131",
       marriedCoupleMedian: "67045",
       nonfamilyHouseholdMedian: "31607",
       householdMean: "62914",
       familyMean: "72113",
       marriedCoupleMean: "N",
       nonfamilyMean: "39836"
    },
    "97060": {
       householdMedian: "67239",
       familyMedian: "77148",
       marriedCoupleMedian: "98290",
       nonfamilyHouseholdMedian: "40144",
       householdMean: "83776",
       familyMean: "93953",
       marriedCoupleMean: "N",
       nonfamilyMean: "52613"
    },
    "97062": {
       householdMedian: "82077",
       familyMedian: "103175",
       marriedCoupleMedian: "119591",
       nonfamilyHouseholdMedian: "42158",
       householdMean: "103323",
       familyMean: "121444",
       marriedCoupleMean: "N",
       nonfamilyMean: "60524"
    },
    "97063": {
       householdMedian: "51774",
       familyMedian: "55260",
       marriedCoupleMedian: "55417",
       nonfamilyHouseholdMedian: "43750",
       householdMean: "83795",
       familyMean: "107538",
       marriedCoupleMean: "N",
       nonfamilyMean: "46313"
    },
    "97064": {
       householdMedian: "58300",
       familyMedian: "69219",
       marriedCoupleMedian: "70625",
       nonfamilyHouseholdMedian: "29561",
       householdMean: "64063",
       familyMean: "71357",
       marriedCoupleMean: "N",
       nonfamilyMean: "41568"
    },
    "97065": {
       householdMedian: "42250",
       familyMedian: "61250",
       marriedCoupleMedian: "62273",
       nonfamilyHouseholdMedian: "21667",
       householdMean: "70233",
       familyMean: "98644",
       marriedCoupleMean: "N",
       nonfamilyMean: "32733"
    },
    "97067": {
       householdMedian: "55038",
       familyMedian: "67125",
       marriedCoupleMedian: "66000",
       nonfamilyHouseholdMedian: "33011",
       householdMean: "60227",
       familyMean: "71134",
       marriedCoupleMean: "N",
       nonfamilyMean: "39765"
    },
    "97068": {
       householdMedian: "104618",
       familyMedian: "127178",
       marriedCoupleMedian: "136720",
       nonfamilyHouseholdMedian: "43391",
       householdMean: "139386",
       familyMean: "157902",
       marriedCoupleMean: "N",
       nonfamilyMean: "75051"
    },
    "97070": {
       householdMedian: "69842",
       familyMedian: "85333",
       marriedCoupleMedian: "106304",
       nonfamilyHouseholdMedian: "52017",
       householdMean: "103831",
       familyMean: "115216",
       marriedCoupleMean: "N",
       nonfamilyMean: "79755"
    },
    "97071": {
       householdMedian: "47994",
       familyMedian: "51071",
       marriedCoupleMedian: "58669",
       nonfamilyHouseholdMedian: "33353",
       householdMean: "61204",
       familyMean: "64080",
       marriedCoupleMean: "N",
       nonfamilyMean: "44333"
    },
    "97080": {
       householdMedian: "72917",
       familyMedian: "83847",
       marriedCoupleMedian: "93904",
       nonfamilyHouseholdMedian: "39826",
       householdMean: "86821",
       familyMean: "97813",
       marriedCoupleMean: "N",
       nonfamilyMean: "51655"
    },
    "97086": {
       householdMedian: "89852",
       familyMedian: "122071",
       marriedCoupleMedian: "133232",
       nonfamilyHouseholdMedian: "50890",
       householdMean: "120447",
       familyMean: "147681",
       marriedCoupleMean: "N",
       nonfamilyMean: "60134"
    },
    "97089": {
       householdMedian: "94656",
       familyMedian: "105167",
       marriedCoupleMedian: "119923",
       nonfamilyHouseholdMedian: "33607",
       householdMean: "107965",
       familyMean: "118429",
       marriedCoupleMean: "N",
       nonfamilyMean: "46503"
    },
    "97101": {
       householdMedian: "56538",
       familyMedian: "70469",
       marriedCoupleMedian: "90917",
       nonfamilyHouseholdMedian: "22131",
       householdMean: "70928",
       familyMean: "80740",
       marriedCoupleMean: "N",
       nonfamilyMean: "41219"
    },
    "97102": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "137319",
       familyMean: "138498",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97103": {
       householdMedian: "52846",
       familyMedian: "72655",
       marriedCoupleMedian: "81875",
       nonfamilyHouseholdMedian: "33596",
       householdMean: "67589",
       familyMean: "83498",
       marriedCoupleMean: "N",
       nonfamilyMean: "42296"
    },
    "97106": {
       householdMedian: "100855",
       familyMedian: "102500",
       marriedCoupleMedian: "104861",
       nonfamilyHouseholdMedian: "45625",
       householdMean: "112275",
       familyMean: "116469",
       marriedCoupleMean: "N",
       nonfamilyMean: "71213"
    },
    "97107": {
       householdMedian: "57132",
       familyMedian: "62135",
       marriedCoupleMedian: "71058",
       nonfamilyHouseholdMedian: "30000",
       householdMean: "64217",
       familyMean: "69843",
       marriedCoupleMean: "N",
       nonfamilyMean: "42745"
    },
    "97108": {
       householdMedian: "43472",
       familyMedian: "55000",
       marriedCoupleMedian: "58550",
       nonfamilyHouseholdMedian: "35800",
       householdMean: "50734",
       familyMean: "57677",
       marriedCoupleMean: "N",
       nonfamilyMean: "38995"
    },
    "97109": {
       householdMedian: "68500",
       familyMedian: "84423",
       marriedCoupleMedian: "84135",
       nonfamilyHouseholdMedian: "26429",
       householdMean: "102395",
       familyMean: "115935",
       marriedCoupleMean: "N",
       nonfamilyMean: "31850"
    },
    "97110": {
       householdMedian: "37232",
       familyMedian: "59464",
       marriedCoupleMedian: "66719",
       nonfamilyHouseholdMedian: "24306",
       householdMean: "62348",
       familyMean: "76550",
       marriedCoupleMean: "N",
       nonfamilyMean: "50829"
    },
    "97111": {
       householdMedian: "62575",
       familyMedian: "72800",
       marriedCoupleMedian: "83750",
       nonfamilyHouseholdMedian: "47538",
       householdMean: "69661",
       familyMean: "73204",
       marriedCoupleMean: "N",
       nonfamilyMean: "43046"
    },
    "97112": {
       householdMedian: "44231",
       familyMedian: "65909",
       marriedCoupleMedian: "51875",
       nonfamilyHouseholdMedian: "32500",
       householdMean: "55746",
       familyMean: "66154",
       marriedCoupleMean: "N",
       nonfamilyMean: "40300"
    },
    "97113": {
       householdMedian: "63689",
       familyMedian: "71058",
       marriedCoupleMedian: "74563",
       nonfamilyHouseholdMedian: "48534",
       householdMean: "76899",
       familyMean: "77755",
       marriedCoupleMean: "N",
       nonfamilyMean: "65285"
    },
    "97114": {
       householdMedian: "61172",
       familyMedian: "68706",
       marriedCoupleMedian: "74554",
       nonfamilyHouseholdMedian: "35729",
       householdMean: "77057",
       familyMean: "82701",
       marriedCoupleMean: "N",
       nonfamilyMean: "44479"
    },
    "97115": {
       householdMedian: "74375",
       familyMedian: "78214",
       marriedCoupleMedian: "81429",
       nonfamilyHouseholdMedian: "-",
       householdMean: "86879",
       familyMean: "91301",
       marriedCoupleMean: "N",
       nonfamilyMean: "60701"
    },
    "97116": {
       householdMedian: "61981",
       familyMedian: "73621",
       marriedCoupleMedian: "80833",
       nonfamilyHouseholdMedian: "35375",
       householdMean: "77683",
       familyMean: "87177",
       marriedCoupleMean: "N",
       nonfamilyMean: "45489"
    },
    "97117": {
       householdMedian: "82132",
       familyMedian: "80221",
       marriedCoupleMedian: "73750",
       nonfamilyHouseholdMedian: "101111",
       householdMean: "98702",
       familyMean: "103941",
       marriedCoupleMean: "N",
       nonfamilyMean: "79973"
    },
    "97118": {
       householdMedian: "41083",
       familyMedian: "46250",
       marriedCoupleMedian: "40500",
       nonfamilyHouseholdMedian: "38438",
       householdMean: "74121",
       familyMean: "57181",
       marriedCoupleMean: "N",
       nonfamilyMean: "106035"
    },
    "97119": {
       householdMedian: "88750",
       familyMedian: "98688",
       marriedCoupleMedian: "105000",
       nonfamilyHouseholdMedian: "42344",
       householdMean: "112056",
       familyMean: "123978",
       marriedCoupleMean: "N",
       nonfamilyMean: "48911"
    },
    "97121": {
       householdMedian: "59554",
       familyMedian: "60278",
       marriedCoupleMedian: "64773",
       nonfamilyHouseholdMedian: "41875",
       householdMean: "69526",
       familyMean: "72954",
       marriedCoupleMean: "N",
       nonfamilyMean: "56741"
    },
    "97122": {
       householdMedian: "41196",
       familyMedian: "47070",
       marriedCoupleMedian: "47070",
       nonfamilyHouseholdMedian: "25568",
       householdMean: "44982",
       familyMean: "59615",
       marriedCoupleMean: "N",
       nonfamilyMean: "23508"
    },
    "97123": {
       householdMedian: "74211",
       familyMedian: "81997",
       marriedCoupleMedian: "92945",
       nonfamilyHouseholdMedian: "42931",
       householdMean: "89940",
       familyMean: "94817",
       marriedCoupleMean: "N",
       nonfamilyMean: "68236"
    },
    "97124": {
       householdMedian: "86400",
       familyMedian: "92154",
       marriedCoupleMedian: "99746",
       nonfamilyHouseholdMedian: "68805",
       householdMean: "99239",
       familyMean: "108540",
       marriedCoupleMean: "N",
       nonfamilyMean: "75713"
    },
    "97125": {
       householdMedian: "139875",
       familyMedian: "138984",
       marriedCoupleMedian: "138281",
       nonfamilyHouseholdMedian: "-",
       householdMean: "126629",
       familyMean: "115314",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97127": {
       householdMedian: "63832",
       familyMedian: "69750",
       marriedCoupleMedian: "77318",
       nonfamilyHouseholdMedian: "39015",
       householdMean: "74210",
       familyMean: "77486",
       marriedCoupleMean: "N",
       nonfamilyMean: "56166"
    },
    "97128": {
       householdMedian: "53815",
       familyMedian: "66119",
       marriedCoupleMedian: "79120",
       nonfamilyHouseholdMedian: "39646",
       householdMean: "79052",
       familyMean: "91277",
       marriedCoupleMean: "N",
       nonfamilyMean: "53525"
    },
    "97130": {
       householdMedian: "51691",
       familyMedian: "61944",
       marriedCoupleMedian: "58750",
       nonfamilyHouseholdMedian: "50192",
       householdMean: "61794",
       familyMean: "76656",
       marriedCoupleMean: "N",
       nonfamilyMean: "44729"
    },
    "97131": {
       householdMedian: "60156",
       familyMedian: "71500",
       marriedCoupleMedian: "72353",
       nonfamilyHouseholdMedian: "41406",
       householdMean: "74702",
       familyMean: "96616",
       marriedCoupleMean: "N",
       nonfamilyMean: "44989"
    },
    "97132": {
       householdMedian: "63750",
       familyMedian: "77655",
       marriedCoupleMedian: "91721",
       nonfamilyHouseholdMedian: "38905",
       householdMean: "82649",
       familyMean: "91161",
       marriedCoupleMean: "N",
       nonfamilyMean: "54976"
    },
    "97133": {
       householdMedian: "95433",
       familyMedian: "101167",
       marriedCoupleMedian: "102300",
       nonfamilyHouseholdMedian: "48906",
       householdMean: "115342",
       familyMean: "131122",
       marriedCoupleMean: "N",
       nonfamilyMean: "68220"
    },
    "97134": {
       householdMedian: "61823",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "62005",
       householdMean: "74093",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "78582"
    },
    "97135": {
       householdMedian: "-",
       familyMedian: "39361",
       marriedCoupleMedian: "43482",
       nonfamilyHouseholdMedian: "16661",
       householdMean: "38716",
       familyMean: "40774",
       marriedCoupleMean: "N",
       nonfamilyMean: "30351"
    },
    "97136": {
       householdMedian: "43585",
       familyMedian: "51328",
       marriedCoupleMedian: "51875",
       nonfamilyHouseholdMedian: "24554",
       householdMean: "50850",
       familyMean: "58069",
       marriedCoupleMean: "N",
       nonfamilyMean: "36457"
    },
    "97137": {
       householdMedian: "89083",
       familyMedian: "93750",
       marriedCoupleMedian: "98889",
       nonfamilyHouseholdMedian: "63542",
       householdMean: "101234",
       familyMean: "105163",
       marriedCoupleMean: "N",
       nonfamilyMean: "81488"
    },
    "97138": {
       householdMedian: "47017",
       familyMedian: "66138",
       marriedCoupleMedian: "85877",
       nonfamilyHouseholdMedian: "30011",
       householdMean: "64171",
       familyMean: "79321",
       marriedCoupleMean: "N",
       nonfamilyMean: "43102"
    },
    "97140": {
       householdMedian: "105388",
       familyMedian: "120520",
       marriedCoupleMedian: "128075",
       nonfamilyHouseholdMedian: "40711",
       householdMean: "122837",
       familyMean: "140832",
       marriedCoupleMean: "N",
       nonfamilyMean: "55006"
    },
    "97141": {
       householdMedian: "46557",
       familyMedian: "59656",
       marriedCoupleMedian: "69750",
       nonfamilyHouseholdMedian: "26689",
       householdMean: "65303",
       familyMean: "77907",
       marriedCoupleMean: "N",
       nonfamilyMean: "39270"
    },
    "97144": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "52603",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97145": {
       householdMedian: "85486",
       familyMedian: "85903",
       marriedCoupleMedian: "86667",
       nonfamilyHouseholdMedian: "31731",
       householdMean: "67449",
       familyMean: "76716",
       marriedCoupleMean: "N",
       nonfamilyMean: "45175"
    },
    "97146": {
       householdMedian: "57806",
       familyMedian: "68036",
       marriedCoupleMedian: "76649",
       nonfamilyHouseholdMedian: "27311",
       householdMean: "71966",
       familyMean: "80556",
       marriedCoupleMean: "N",
       nonfamilyMean: "41556"
    },
    "97147": {
       householdMedian: "43036",
       familyMedian: "46944",
       marriedCoupleMedian: "58750",
       nonfamilyHouseholdMedian: "33523",
       householdMean: "60319",
       familyMean: "78958",
       marriedCoupleMean: "N",
       nonfamilyMean: "47004"
    },
    "97148": {
       householdMedian: "79688",
       familyMedian: "100956",
       marriedCoupleMedian: "106458",
       nonfamilyHouseholdMedian: "51144",
       householdMean: "114078",
       familyMean: "128686",
       marriedCoupleMean: "N",
       nonfamilyMean: "62121"
    },
    "97149": {
       householdMedian: "50873",
       familyMedian: "71354",
       marriedCoupleMedian: "70625",
       nonfamilyHouseholdMedian: "42083",
       householdMean: "59574",
       familyMean: "77906",
       marriedCoupleMean: "N",
       nonfamilyMean: "35514"
    },
    "97201": {
       householdMedian: "51625",
       familyMedian: "122193",
       marriedCoupleMedian: "144250",
       nonfamilyHouseholdMedian: "35789",
       householdMean: "96865",
       familyMean: "190499",
       marriedCoupleMean: "N",
       nonfamilyMean: "61554"
    },
    "97202": {
       householdMedian: "73924",
       familyMedian: "107314",
       marriedCoupleMedian: "123305",
       nonfamilyHouseholdMedian: "49862",
       householdMean: "100566",
       familyMean: "136074",
       marriedCoupleMean: "N",
       nonfamilyMean: "63318"
    },
    "97203": {
       householdMedian: "60908",
       familyMedian: "70039",
       marriedCoupleMedian: "86705",
       nonfamilyHouseholdMedian: "42917",
       householdMean: "75017",
       familyMean: "83000",
       marriedCoupleMean: "N",
       nonfamilyMean: "58546"
    },
    "97204": {
       householdMedian: "11763",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "11116",
       householdMean: "35474",
       familyMean: "186672",
       marriedCoupleMean: "N",
       nonfamilyMean: "16268"
    },
    "97205": {
       householdMedian: "33302",
       familyMedian: "117284",
       marriedCoupleMedian: "134327",
       nonfamilyHouseholdMedian: "25385",
       householdMean: "64671",
       familyMean: "158478",
       marriedCoupleMean: "N",
       nonfamilyMean: "40337"
    },
    "97206": {
       householdMedian: "63381",
       familyMedian: "73838",
       marriedCoupleMedian: "88750",
       nonfamilyHouseholdMedian: "50060",
       householdMean: "76845",
       familyMean: "85101",
       marriedCoupleMean: "N",
       nonfamilyMean: "60147"
    },
    "97208": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "-",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "-"
    },
    "97209": {
       householdMedian: "61070",
       familyMedian: "100673",
       marriedCoupleMedian: "116200",
       nonfamilyHouseholdMedian: "48497",
       householdMean: "87462",
       familyMean: "146316",
       marriedCoupleMean: "N",
       nonfamilyMean: "71554"
    },
    "97210": {
       householdMedian: "79696",
       familyMedian: "166061",
       marriedCoupleMedian: "179104",
       nonfamilyHouseholdMedian: "48188",
       householdMean: "138806",
       familyMean: "216505",
       marriedCoupleMean: "N",
       nonfamilyMean: "86337"
    },
    "97211": {
       householdMedian: "78154",
       familyMedian: "96901",
       marriedCoupleMedian: "113814",
       nonfamilyHouseholdMedian: "55697",
       householdMean: "95509",
       familyMean: "107979",
       marriedCoupleMean: "N",
       nonfamilyMean: "76325"
    },
    "97212": {
       householdMedian: "101492",
       familyMedian: "134208",
       marriedCoupleMedian: "146728",
       nonfamilyHouseholdMedian: "59366",
       householdMean: "136986",
       familyMean: "174889",
       marriedCoupleMean: "N",
       nonfamilyMean: "79434"
    },
    "97213": {
       householdMedian: "71574",
       familyMedian: "93484",
       marriedCoupleMedian: "109668",
       nonfamilyHouseholdMedian: "49356",
       householdMean: "92113",
       familyMean: "115440",
       marriedCoupleMean: "N",
       nonfamilyMean: "61553"
    },
    "97214": {
       householdMedian: "65183",
       familyMedian: "101327",
       marriedCoupleMedian: "122109",
       nonfamilyHouseholdMedian: "48550",
       householdMean: "87672",
       familyMean: "125537",
       marriedCoupleMean: "N",
       nonfamilyMean: "62733"
    },
    "97215": {
       householdMedian: "80024",
       familyMedian: "109403",
       marriedCoupleMedian: "117098",
       nonfamilyHouseholdMedian: "50898",
       householdMean: "105871",
       familyMean: "130109",
       marriedCoupleMean: "N",
       nonfamilyMean: "75041"
    },
    "97216": {
       householdMedian: "45742",
       familyMedian: "55962",
       marriedCoupleMedian: "61250",
       nonfamilyHouseholdMedian: "32146",
       householdMean: "58314",
       familyMean: "65793",
       marriedCoupleMean: "N",
       nonfamilyMean: "42939"
    },
    "97217": {
       householdMedian: "74094",
       familyMedian: "85549",
       marriedCoupleMedian: "99852",
       nonfamilyHouseholdMedian: "58765",
       householdMean: "89405",
       familyMean: "99807",
       marriedCoupleMean: "N",
       nonfamilyMean: "75849"
    },
    "97218": {
       householdMedian: "63791",
       familyMedian: "67048",
       marriedCoupleMedian: "83547",
       nonfamilyHouseholdMedian: "40625",
       householdMean: "71324",
       familyMean: "74557",
       marriedCoupleMean: "N",
       nonfamilyMean: "59453"
    },
    "97219": {
       householdMedian: "97454",
       familyMedian: "122248",
       marriedCoupleMedian: "133594",
       nonfamilyHouseholdMedian: "61194",
       householdMean: "128818",
       familyMean: "153532",
       marriedCoupleMean: "N",
       nonfamilyMean: "84137"
    },
    "97220": {
       householdMedian: "51575",
       familyMedian: "63662",
       marriedCoupleMedian: "80058",
       nonfamilyHouseholdMedian: "38163",
       householdMean: "64552",
       familyMean: "74892",
       marriedCoupleMean: "N",
       nonfamilyMean: "48286"
    },
    "97221": {
       householdMedian: "109119",
       familyMedian: "143453",
       marriedCoupleMedian: "167344",
       nonfamilyHouseholdMedian: "57143",
       householdMean: "151127",
       familyMean: "188386",
       marriedCoupleMean: "N",
       nonfamilyMean: "78502"
    },
    "97222": {
       householdMedian: "58998",
       familyMedian: "74581",
       marriedCoupleMedian: "86578",
       nonfamilyHouseholdMedian: "39806",
       householdMean: "70932",
       familyMean: "83651",
       marriedCoupleMean: "N",
       nonfamilyMean: "48764"
    },
    "97223": {
       householdMedian: "79300",
       familyMedian: "97150",
       marriedCoupleMedian: "107426",
       nonfamilyHouseholdMedian: "43482",
       householdMean: "96946",
       familyMean: "113846",
       marriedCoupleMean: "N",
       nonfamilyMean: "61572"
    },
    "97224": {
       householdMedian: "74498",
       familyMedian: "96831",
       marriedCoupleMedian: "110664",
       nonfamilyHouseholdMedian: "45616",
       householdMean: "100467",
       familyMean: "123247",
       marriedCoupleMean: "N",
       nonfamilyMean: "60401"
    },
    "97225": {
       householdMedian: "81965",
       familyMedian: "122656",
       marriedCoupleMedian: "131387",
       nonfamilyHouseholdMedian: "48721",
       householdMean: "110183",
       familyMean: "147751",
       marriedCoupleMean: "N",
       nonfamilyMean: "63676"
    },
    "97227": {
       householdMedian: "60333",
       familyMedian: "77292",
       marriedCoupleMedian: "104615",
       nonfamilyHouseholdMedian: "51825",
       householdMean: "90736",
       familyMean: "124811",
       marriedCoupleMean: "N",
       nonfamilyMean: "72657"
    },
    "97229": {
       householdMedian: "112456",
       familyMedian: "139240",
       marriedCoupleMedian: "157753",
       nonfamilyHouseholdMedian: "53499",
       householdMean: "148736",
       familyMean: "171703",
       marriedCoupleMean: "N",
       nonfamilyMean: "73071"
    },
    "97230": {
       householdMedian: "51506",
       familyMedian: "63858",
       marriedCoupleMedian: "76171",
       nonfamilyHouseholdMedian: "35238",
       householdMean: "64797",
       familyMean: "73427",
       marriedCoupleMean: "82639",
       nonfamilyMean: "46952"
    },
    "97231": {
       householdMedian: "91786",
       familyMedian: "128194",
       marriedCoupleMedian: "133984",
       nonfamilyHouseholdMedian: "43125",
       householdMean: "164915",
       familyMean: "188088",
       marriedCoupleMean: "N",
       nonfamilyMean: "116884"
    },
    "97232": {
       householdMedian: "59807",
       familyMedian: "118929",
       marriedCoupleMedian: "127379",
       nonfamilyHouseholdMedian: "46417",
       householdMean: "89620",
       familyMean: "147189",
       marriedCoupleMean: "N",
       nonfamilyMean: "61734"
    },
    "97233": {
       householdMedian: "39957",
       familyMedian: "45450",
       marriedCoupleMedian: "62899",
       nonfamilyHouseholdMedian: "26815",
       householdMean: "50839",
       familyMean: "54970",
       marriedCoupleMean: "N",
       nonfamilyMean: "37397"
    },
    "97236": {
       householdMedian: "47969",
       familyMedian: "53591",
       marriedCoupleMedian: "70370",
       nonfamilyHouseholdMedian: "25167",
       householdMean: "62358",
       familyMean: "70387",
       marriedCoupleMean: "N",
       nonfamilyMean: "35746"
    },
    "97239": {
       householdMedian: "86455",
       familyMedian: "139563",
       marriedCoupleMedian: "149760",
       nonfamilyHouseholdMedian: "62705",
       householdMean: "121579",
       familyMean: "164772",
       marriedCoupleMean: "N",
       nonfamilyMean: "82961"
    },
    "97266": {
       householdMedian: "48138",
       familyMedian: "55042",
       marriedCoupleMedian: "69162",
       nonfamilyHouseholdMedian: "33750",
       householdMean: "60626",
       familyMean: "64008",
       marriedCoupleMean: "73731",
       nonfamilyMean: "48161"
    },
    "97267": {
       householdMedian: "68948",
       familyMedian: "86347",
       marriedCoupleMedian: "94154",
       nonfamilyHouseholdMedian: "41963",
       householdMean: "86880",
       familyMean: "102843",
       marriedCoupleMean: "N",
       nonfamilyMean: "54298"
    },
    "97301": {
       householdMedian: "39670",
       familyMedian: "48262",
       marriedCoupleMedian: "58718",
       nonfamilyHouseholdMedian: "27156",
       householdMean: "52194",
       familyMean: "60827",
       marriedCoupleMean: "N",
       nonfamilyMean: "37775"
    },
    "97302": {
       householdMedian: "63366",
       familyMedian: "80615",
       marriedCoupleMedian: "93457",
       nonfamilyHouseholdMedian: "40275",
       householdMean: "83830",
       familyMean: "101236",
       marriedCoupleMean: "117928",
       nonfamilyMean: "52695"
    },
    "97303": {
       householdMedian: "61828",
       familyMedian: "72782",
       marriedCoupleMedian: "89574",
       nonfamilyHouseholdMedian: "39280",
       householdMean: "76629",
       familyMean: "85514",
       marriedCoupleMean: "N",
       nonfamilyMean: "54996"
    },
    "97304": {
       householdMedian: "66438",
       familyMedian: "82277",
       marriedCoupleMedian: "94696",
       nonfamilyHouseholdMedian: "35640",
       householdMean: "86017",
       familyMean: "95443",
       marriedCoupleMean: "N",
       nonfamilyMean: "60081"
    },
    "97305": {
       householdMedian: "49348",
       familyMedian: "54630",
       marriedCoupleMedian: "63610",
       nonfamilyHouseholdMedian: "34416",
       householdMean: "59337",
       familyMean: "64704",
       marriedCoupleMean: "N",
       nonfamilyMean: "41217"
    },
    "97306": {
       householdMedian: "65570",
       familyMedian: "78382",
       marriedCoupleMedian: "91386",
       nonfamilyHouseholdMedian: "39854",
       householdMean: "86194",
       familyMean: "97406",
       marriedCoupleMean: "N",
       nonfamilyMean: "56914"
    },
    "97317": {
       householdMedian: "60099",
       familyMedian: "62329",
       marriedCoupleMedian: "77649",
       nonfamilyHouseholdMedian: "34406",
       householdMean: "75750",
       familyMean: "82088",
       marriedCoupleMean: "N",
       nonfamilyMean: "49684"
    },
    "97321": {
       householdMedian: "70404",
       familyMedian: "82573",
       marriedCoupleMedian: "98313",
       nonfamilyHouseholdMedian: "40494",
       householdMean: "83388",
       familyMean: "96040",
       marriedCoupleMean: "N",
       nonfamilyMean: "50795"
    },
    "97322": {
       householdMedian: "49966",
       familyMedian: "63285",
       marriedCoupleMedian: "72098",
       nonfamilyHouseholdMedian: "33680",
       householdMean: "65320",
       familyMean: "77719",
       marriedCoupleMean: "N",
       nonfamilyMean: "39450"
    },
    "97324": {
       householdMedian: "57440",
       familyMedian: "73958",
       marriedCoupleMedian: "79375",
       nonfamilyHouseholdMedian: "23229",
       householdMean: "67056",
       familyMean: "79894",
       marriedCoupleMean: "N",
       nonfamilyMean: "28037"
    },
    "97325": {
       householdMedian: "58510",
       familyMedian: "62229",
       marriedCoupleMedian: "73681",
       nonfamilyHouseholdMedian: "39615",
       householdMean: "72415",
       familyMean: "78219",
       marriedCoupleMean: "N",
       nonfamilyMean: "39967"
    },
    "97326": {
       householdMedian: "55375",
       familyMedian: "51550",
       marriedCoupleMedian: "58583",
       nonfamilyHouseholdMedian: "56000",
       householdMean: "69223",
       familyMean: "69006",
       marriedCoupleMean: "N",
       nonfamilyMean: "65682"
    },
    "97327": {
       householdMedian: "51898",
       familyMedian: "63720",
       marriedCoupleMedian: "68148",
       nonfamilyHouseholdMedian: "33913",
       householdMean: "73701",
       familyMean: "84239",
       marriedCoupleMean: "N",
       nonfamilyMean: "53880"
    },
    "97329": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "54477",
       familyMean: "82298",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97330": {
       householdMedian: "53610",
       familyMedian: "82646",
       marriedCoupleMedian: "95503",
       nonfamilyHouseholdMedian: "29445",
       householdMean: "80126",
       familyMean: "111916",
       marriedCoupleMean: "N",
       nonfamilyMean: "42454"
    },
    "97331": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "-",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "-"
    },
    "97333": {
       householdMedian: "52314",
       familyMedian: "80879",
       marriedCoupleMedian: "89512",
       nonfamilyHouseholdMedian: "30673",
       householdMean: "71459",
       familyMean: "94157",
       marriedCoupleMean: "N",
       nonfamilyMean: "45582"
    },
    "97338": {
       householdMedian: "61430",
       familyMedian: "74422",
       marriedCoupleMedian: "81361",
       nonfamilyHouseholdMedian: "37833",
       householdMean: "70429",
       familyMean: "79253",
       marriedCoupleMean: "N",
       nonfamilyMean: "45445"
    },
    "97341": {
       householdMedian: "46981",
       familyMedian: "59563",
       marriedCoupleMedian: "62663",
       nonfamilyHouseholdMedian: "22679",
       householdMean: "64855",
       familyMean: "82164",
       marriedCoupleMean: "N",
       nonfamilyMean: "39204"
    },
    "97342": {
       householdMedian: "25250",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "26000",
       householdMean: "60676",
       familyMean: "70870",
       marriedCoupleMean: "N",
       nonfamilyMean: "28133"
    },
    "97343": {
       householdMedian: "22500",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-2500",
       householdMean: "36535",
       familyMean: "73795",
       marriedCoupleMean: "N",
       nonfamilyMean: "11252"
    },
    "97344": {
       householdMedian: "43802",
       familyMedian: "51944",
       marriedCoupleMedian: "65938",
       nonfamilyHouseholdMedian: "21442",
       householdMean: "60415",
       familyMean: "67301",
       marriedCoupleMean: "N",
       nonfamilyMean: "40933"
    },
    "97345": {
       householdMedian: "43229",
       familyMedian: "43785",
       marriedCoupleMedian: "43819",
       nonfamilyHouseholdMedian: "31389",
       householdMean: "42877",
       familyMean: "45901",
       marriedCoupleMean: "N",
       nonfamilyMean: "35767"
    },
    "97346": {
       householdMedian: "63281",
       familyMedian: "77813",
       marriedCoupleMedian: "78641",
       nonfamilyHouseholdMedian: "27917",
       householdMean: "62935",
       familyMean: "69923",
       marriedCoupleMean: "N",
       nonfamilyMean: "37561"
    },
    "97347": {
       householdMedian: "44183",
       familyMedian: "47744",
       marriedCoupleMedian: "52688",
       nonfamilyHouseholdMedian: "27768",
       householdMean: "53380",
       familyMean: "58407",
       marriedCoupleMean: "N",
       nonfamilyMean: "36200"
    },
    "97348": {
       householdMedian: "60863",
       familyMedian: "60089",
       marriedCoupleMedian: "60595",
       nonfamilyHouseholdMedian: "76786",
       householdMean: "80348",
       familyMean: "86354",
       marriedCoupleMean: "N",
       nonfamilyMean: "64027"
    },
    "97350": {
       householdMedian: "43906",
       familyMedian: "67500",
       marriedCoupleMedian: "76250",
       nonfamilyHouseholdMedian: "18625",
       householdMean: "52215",
       familyMean: "65903",
       marriedCoupleMean: "N",
       nonfamilyMean: "24681"
    },
    "97351": {
       householdMedian: "47758",
       familyMedian: "54787",
       marriedCoupleMedian: "66204",
       nonfamilyHouseholdMedian: "28472",
       householdMean: "58857",
       familyMean: "65593",
       marriedCoupleMean: "N",
       nonfamilyMean: "41653"
    },
    "97352": {
       householdMedian: "65263",
       familyMedian: "65952",
       marriedCoupleMedian: "79167",
       nonfamilyHouseholdMedian: "36563",
       householdMean: "74682",
       familyMean: "76680",
       marriedCoupleMean: "N",
       nonfamilyMean: "45130"
    },
    "97355": {
       householdMedian: "50021",
       familyMedian: "60784",
       marriedCoupleMedian: "69694",
       nonfamilyHouseholdMedian: "22680",
       householdMean: "61518",
       familyMean: "72027",
       marriedCoupleMean: "N",
       nonfamilyMean: "34202"
    },
    "97357": {
       householdMedian: "54474",
       familyMedian: "80104",
       marriedCoupleMedian: "82083",
       nonfamilyHouseholdMedian: "48750",
       householdMean: "63310",
       familyMean: "76422",
       marriedCoupleMean: "N",
       nonfamilyMean: "50712"
    },
    "97358": {
       householdMedian: "65344",
       familyMedian: "66829",
       marriedCoupleMedian: "69853",
       nonfamilyHouseholdMedian: "43333",
       householdMean: "72774",
       familyMean: "79354",
       marriedCoupleMean: "N",
       nonfamilyMean: "47297"
    },
    "97360": {
       householdMedian: "39167",
       familyMedian: "52083",
       marriedCoupleMedian: "53922",
       nonfamilyHouseholdMedian: "16172",
       householdMean: "47040",
       familyMean: "60532",
       marriedCoupleMean: "N",
       nonfamilyMean: "26933"
    },
    "97361": {
       householdMedian: "41400",
       familyMedian: "66214",
       marriedCoupleMedian: "73596",
       nonfamilyHouseholdMedian: "19690",
       householdMean: "53495",
       familyMean: "70109",
       marriedCoupleMean: "N",
       nonfamilyMean: "29269"
    },
    "97362": {
       householdMedian: "53813",
       familyMedian: "68594",
       marriedCoupleMedian: "69241",
       nonfamilyHouseholdMedian: "17401",
       householdMean: "66582",
       familyMean: "79232",
       marriedCoupleMean: "N",
       nonfamilyMean: "30984"
    },
    "97364": {
       householdMedian: "53563",
       familyMedian: "78125",
       marriedCoupleMedian: "78482",
       nonfamilyHouseholdMedian: "47583",
       householdMean: "64005",
       familyMean: "77381",
       marriedCoupleMean: "N",
       nonfamilyMean: "37148"
    },
    "97365": {
       householdMedian: "47949",
       familyMedian: "62776",
       marriedCoupleMedian: "69721",
       nonfamilyHouseholdMedian: "30234",
       householdMean: "60454",
       familyMean: "69942",
       marriedCoupleMean: "N",
       nonfamilyMean: "44015"
    },
    "97366": {
       householdMedian: "50337",
       familyMedian: "58456",
       marriedCoupleMedian: "61563",
       nonfamilyHouseholdMedian: "42143",
       householdMean: "72002",
       familyMean: "84828",
       marriedCoupleMean: "N",
       nonfamilyMean: "49093"
    },
    "97367": {
       householdMedian: "38843",
       familyMedian: "48821",
       marriedCoupleMedian: "53500",
       nonfamilyHouseholdMedian: "29063",
       householdMean: "48622",
       familyMean: "57414",
       marriedCoupleMean: "N",
       nonfamilyMean: "37042"
    },
    "97368": {
       householdMedian: "40662",
       familyMedian: "48942",
       marriedCoupleMedian: "53706",
       nonfamilyHouseholdMedian: "22157",
       householdMean: "67250",
       familyMean: "63731",
       marriedCoupleMean: "N",
       nonfamilyMean: "66474"
    },
    "97369": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "26731",
       householdMean: "125819",
       familyMean: "148283",
       marriedCoupleMean: "N",
       nonfamilyMean: "30972"
    },
    "97370": {
       householdMedian: "71992",
       familyMedian: "82798",
       marriedCoupleMedian: "84194",
       nonfamilyHouseholdMedian: "35472",
       householdMean: "85703",
       familyMean: "97715",
       marriedCoupleMean: "N",
       nonfamilyMean: "48801"
    },
    "97371": {
       householdMedian: "121500",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "155125",
       householdMean: "152343",
       familyMean: "154690",
       marriedCoupleMean: "N",
       nonfamilyMean: "139863"
    },
    "97373": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "-",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "-"
    },
    "97374": {
       householdMedian: "61800",
       familyMedian: "72400",
       marriedCoupleMedian: "83682",
       nonfamilyHouseholdMedian: "41929",
       householdMean: "77203",
       familyMean: "84984",
       marriedCoupleMean: "N",
       nonfamilyMean: "46928"
    },
    "97375": {
       householdMedian: "71505",
       familyMedian: "72476",
       marriedCoupleMedian: "76875",
       nonfamilyHouseholdMedian: "-",
       householdMean: "75065",
       familyMean: "81720",
       marriedCoupleMean: "N",
       nonfamilyMean: "17113"
    },
    "97376": {
       householdMedian: "51696",
       familyMedian: "49583",
       marriedCoupleMedian: "49417",
       nonfamilyHouseholdMedian: "-",
       householdMean: "78119",
       familyMean: "75023",
       marriedCoupleMean: "N",
       nonfamilyMean: "77193"
    },
    "97377": {
       householdMedian: "60559",
       familyMedian: "62154",
       marriedCoupleMedian: "83000",
       nonfamilyHouseholdMedian: "23846",
       householdMean: "87108",
       familyMean: "91366",
       marriedCoupleMean: "N",
       nonfamilyMean: "22077"
    },
    "97378": {
       householdMedian: "53981",
       familyMedian: "67222",
       marriedCoupleMedian: "74402",
       nonfamilyHouseholdMedian: "28468",
       householdMean: "68079",
       familyMean: "83182",
       marriedCoupleMean: "N",
       nonfamilyMean: "37908"
    },
    "97380": {
       householdMedian: "46053",
       familyMedian: "48363",
       marriedCoupleMedian: "54955",
       nonfamilyHouseholdMedian: "43679",
       householdMean: "58434",
       familyMean: "64477",
       marriedCoupleMean: "N",
       nonfamilyMean: "44593"
    },
    "97381": {
       householdMedian: "67472",
       familyMedian: "79077",
       marriedCoupleMedian: "91708",
       nonfamilyHouseholdMedian: "33490",
       householdMean: "91957",
       familyMean: "108228",
       marriedCoupleMean: "N",
       nonfamilyMean: "49989"
    },
    "97383": {
       householdMedian: "63200",
       familyMedian: "70934",
       marriedCoupleMedian: "77829",
       nonfamilyHouseholdMedian: "27711",
       householdMean: "76550",
       familyMean: "85107",
       marriedCoupleMean: "N",
       nonfamilyMean: "38246"
    },
    "97384": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "-",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "-"
    },
    "97385": {
       householdMedian: "73712",
       familyMedian: "87422",
       marriedCoupleMedian: "98393",
       nonfamilyHouseholdMedian: "26979",
       householdMean: "81899",
       familyMean: "104780",
       marriedCoupleMean: "N",
       nonfamilyMean: "34021"
    },
    "97386": {
       householdMedian: "47586",
       familyMedian: "53480",
       marriedCoupleMedian: "64830",
       nonfamilyHouseholdMedian: "26453",
       householdMean: "60232",
       familyMean: "69589",
       marriedCoupleMean: "N",
       nonfamilyMean: "37331"
    },
    "97388": {
       householdMedian: "53346",
       familyMedian: "59167",
       marriedCoupleMedian: "58788",
       nonfamilyHouseholdMedian: "28906",
       householdMean: "86958",
       familyMean: "79479",
       marriedCoupleMean: "N",
       nonfamilyMean: "95650"
    },
    "97389": {
       householdMedian: "60703",
       familyMedian: "65871",
       marriedCoupleMedian: "69375",
       nonfamilyHouseholdMedian: "30694",
       householdMean: "83764",
       familyMean: "94565",
       marriedCoupleMean: "N",
       nonfamilyMean: "35682"
    },
    "97390": {
       householdMedian: "46792",
       familyMedian: "57000",
       marriedCoupleMedian: "58750",
       nonfamilyHouseholdMedian: "25733",
       householdMean: "47965",
       familyMean: "57116",
       marriedCoupleMean: "N",
       nonfamilyMean: "30320"
    },
    "97391": {
       householdMedian: "52813",
       familyMedian: "60682",
       marriedCoupleMedian: "68051",
       nonfamilyHouseholdMedian: "29875",
       householdMean: "67943",
       familyMean: "75206",
       marriedCoupleMean: "N",
       nonfamilyMean: "46020"
    },
    "97392": {
       householdMedian: "77033",
       familyMedian: "85563",
       marriedCoupleMedian: "89492",
       nonfamilyHouseholdMedian: "50583",
       householdMean: "84979",
       familyMean: "93351",
       marriedCoupleMean: "N",
       nonfamilyMean: "52514"
    },
    "97394": {
       householdMedian: "45174",
       familyMedian: "57500",
       marriedCoupleMedian: "66316",
       nonfamilyHouseholdMedian: "21725",
       householdMean: "54907",
       familyMean: "67165",
       marriedCoupleMean: "N",
       nonfamilyMean: "34877"
    },
    "97396": {
       householdMedian: "51371",
       familyMedian: "52500",
       marriedCoupleMedian: "66676",
       nonfamilyHouseholdMedian: "41875",
       householdMean: "56400",
       familyMean: "58409",
       marriedCoupleMean: "N",
       nonfamilyMean: "42317"
    },
    "97401": {
       householdMedian: "36228",
       familyMedian: "72642",
       marriedCoupleMedian: "93621",
       nonfamilyHouseholdMedian: "22368",
       householdMean: "58103",
       familyMean: "93405",
       marriedCoupleMean: "N",
       nonfamilyMean: "36794"
    },
    "97402": {
       householdMedian: "44762",
       familyMedian: "59202",
       marriedCoupleMedian: "67433",
       nonfamilyHouseholdMedian: "28168",
       householdMean: "55134",
       familyMean: "67279",
       marriedCoupleMean: "77105",
       nonfamilyMean: "35707"
    },
    "97403": {
       householdMedian: "45706",
       familyMedian: "103359",
       marriedCoupleMedian: "116174",
       nonfamilyHouseholdMedian: "24077",
       householdMean: "77342",
       familyMean: "137819",
       marriedCoupleMean: "N",
       nonfamilyMean: "37189"
    },
    "97404": {
       householdMedian: "61006",
       familyMedian: "68148",
       marriedCoupleMedian: "82953",
       nonfamilyHouseholdMedian: "40441",
       householdMean: "74424",
       familyMean: "80376",
       marriedCoupleMean: "N",
       nonfamilyMean: "56151"
    },
    "97405": {
       householdMedian: "66925",
       familyMedian: "81573",
       marriedCoupleMedian: "90689",
       nonfamilyHouseholdMedian: "38967",
       householdMean: "87836",
       familyMean: "106785",
       marriedCoupleMean: "N",
       nonfamilyMean: "54534"
    },
    "97406": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "N"
    },
    "97408": {
       householdMedian: "61067",
       familyMedian: "74097",
       marriedCoupleMedian: "90833",
       nonfamilyHouseholdMedian: "36755",
       householdMean: "99378",
       familyMean: "116869",
       marriedCoupleMean: "N",
       nonfamilyMean: "64824"
    },
    "97410": {
       householdMedian: "65329",
       familyMedian: "69868",
       marriedCoupleMedian: "75496",
       nonfamilyHouseholdMedian: "21875",
       householdMean: "58876",
       familyMean: "66847",
       marriedCoupleMean: "N",
       nonfamilyMean: "34878"
    },
    "97411": {
       householdMedian: "36531",
       familyMedian: "46837",
       marriedCoupleMedian: "50292",
       nonfamilyHouseholdMedian: "18333",
       householdMean: "52999",
       familyMean: "64240",
       marriedCoupleMean: "N",
       nonfamilyMean: "32821"
    },
    "97412": {
       householdMedian: "38542",
       familyMedian: "43750",
       marriedCoupleMedian: "60000",
       nonfamilyHouseholdMedian: "24792",
       householdMean: "50725",
       familyMean: "53878",
       marriedCoupleMean: "N",
       nonfamilyMean: "36764"
    },
    "97413": {
       householdMedian: "51316",
       familyMedian: "66136",
       marriedCoupleMedian: "77344",
       nonfamilyHouseholdMedian: "28000",
       householdMean: "60880",
       familyMean: "73907",
       marriedCoupleMean: "N",
       nonfamilyMean: "42755"
    },
    "97414": {
       householdMedian: "9063",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "10921",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "8846"
    },
    "97415": {
       householdMedian: "46768",
       familyMedian: "59397",
       marriedCoupleMedian: "63604",
       nonfamilyHouseholdMedian: "26752",
       householdMean: "57362",
       familyMean: "67307",
       marriedCoupleMean: "N",
       nonfamilyMean: "41974"
    },
    "97416": {
       householdMedian: "53397",
       familyMedian: "46389",
       marriedCoupleMedian: "59250",
       nonfamilyHouseholdMedian: "27188",
       householdMean: "65919",
       familyMean: "64648",
       marriedCoupleMean: "N",
       nonfamilyMean: "39901"
    },
    "97417": {
       householdMedian: "34136",
       familyMedian: "36942",
       marriedCoupleMedian: "50795",
       nonfamilyHouseholdMedian: "26688",
       householdMean: "42432",
       familyMean: "45897",
       marriedCoupleMean: "N",
       nonfamilyMean: "34240"
    },
    "97419": {
       householdMedian: "47326",
       familyMedian: "75250",
       marriedCoupleMedian: "76417",
       nonfamilyHouseholdMedian: "22656",
       householdMean: "61460",
       familyMean: "68742",
       marriedCoupleMean: "N",
       nonfamilyMean: "39689"
    },
    "97420": {
       householdMedian: "46481",
       familyMedian: "58591",
       marriedCoupleMedian: "67584",
       nonfamilyHouseholdMedian: "30165",
       householdMean: "63222",
       familyMean: "78275",
       marriedCoupleMean: "N",
       nonfamilyMean: "39311"
    },
    "97423": {
       householdMedian: "36927",
       familyMedian: "42357",
       marriedCoupleMedian: "51551",
       nonfamilyHouseholdMedian: "29797",
       householdMean: "57821",
       familyMean: "63219",
       marriedCoupleMean: "N",
       nonfamilyMean: "40256"
    },
    "97424": {
       householdMedian: "45766",
       familyMedian: "50345",
       marriedCoupleMedian: "60236",
       nonfamilyHouseholdMedian: "28300",
       householdMean: "57383",
       familyMean: "65343",
       marriedCoupleMean: "N",
       nonfamilyMean: "38347"
    },
    "97426": {
       householdMedian: "59522",
       familyMedian: "66185",
       marriedCoupleMedian: "79073",
       nonfamilyHouseholdMedian: "32981",
       householdMean: "69596",
       familyMean: "77172",
       marriedCoupleMean: "N",
       nonfamilyMean: "46866"
    },
    "97429": {
       householdMedian: "45000",
       familyMedian: "55114",
       marriedCoupleMedian: "57045",
       nonfamilyHouseholdMedian: "30625",
       householdMean: "60800",
       familyMean: "65676",
       marriedCoupleMean: "N",
       nonfamilyMean: "33044"
    },
    "97430": {
       householdMedian: "42115",
       familyMedian: "61750",
       marriedCoupleMedian: "66875",
       nonfamilyHouseholdMedian: "22875",
       householdMean: "57173",
       familyMean: "75603",
       marriedCoupleMean: "N",
       nonfamilyMean: "26659"
    },
    "97431": {
       householdMedian: "53864",
       familyMedian: "63790",
       marriedCoupleMedian: "68667",
       nonfamilyHouseholdMedian: "35956",
       householdMean: "78779",
       familyMean: "84227",
       marriedCoupleMean: "N",
       nonfamilyMean: "37908"
    },
    "97434": {
       householdMedian: "36071",
       familyMedian: "41083",
       marriedCoupleMedian: "45000",
       nonfamilyHouseholdMedian: "12083",
       householdMean: "44293",
       familyMean: "50890",
       marriedCoupleMean: "N",
       nonfamilyMean: "13318"
    },
    "97435": {
       householdMedian: "46042",
       familyMedian: "54455",
       marriedCoupleMedian: "56250",
       nonfamilyHouseholdMedian: "29886",
       householdMean: "57980",
       familyMean: "70002",
       marriedCoupleMean: "N",
       nonfamilyMean: "33144"
    },
    "97436": {
       householdMedian: "51000",
       familyMedian: "70568",
       marriedCoupleMedian: "71250",
       nonfamilyHouseholdMedian: "22396",
       householdMean: "75447",
       familyMean: "88446",
       marriedCoupleMean: "N",
       nonfamilyMean: "35064"
    },
    "97437": {
       householdMedian: "69404",
       familyMedian: "73365",
       marriedCoupleMedian: "80142",
       nonfamilyHouseholdMedian: "49279",
       householdMean: "75067",
       familyMean: "76037",
       marriedCoupleMean: "N",
       nonfamilyMean: "67115"
    },
    "97438": {
       householdMedian: "59479",
       familyMedian: "62500",
       marriedCoupleMedian: "63315",
       nonfamilyHouseholdMedian: "-",
       householdMean: "79988",
       familyMean: "93083",
       marriedCoupleMean: "N",
       nonfamilyMean: "41751"
    },
    "97439": {
       householdMedian: "42915",
       familyMedian: "54277",
       marriedCoupleMedian: "62517",
       nonfamilyHouseholdMedian: "26495",
       householdMean: "58141",
       familyMean: "68774",
       marriedCoupleMean: "N",
       nonfamilyMean: "39829"
    },
    "97441": {
       householdMedian: "44394",
       familyMedian: "57873",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "28105",
       householdMean: "41582",
       familyMean: "46965",
       marriedCoupleMean: "N",
       nonfamilyMean: "24549"
    },
    "97442": {
       householdMedian: "32895",
       familyMedian: "47177",
       marriedCoupleMedian: "48162",
       nonfamilyHouseholdMedian: "18333",
       householdMean: "44955",
       familyMean: "55200",
       marriedCoupleMean: "N",
       nonfamilyMean: "24148"
    },
    "97443": {
       householdMedian: "53707",
       familyMedian: "52672",
       marriedCoupleMedian: "61944",
       nonfamilyHouseholdMedian: "-",
       householdMean: "72710",
       familyMean: "67589",
       marriedCoupleMean: "N",
       nonfamilyMean: "82765"
    },
    "97444": {
       householdMedian: "48612",
       familyMedian: "67355",
       marriedCoupleMedian: "68472",
       nonfamilyHouseholdMedian: "26481",
       householdMean: "68264",
       familyMean: "86142",
       marriedCoupleMean: "N",
       nonfamilyMean: "36939"
    },
    "97446": {
       householdMedian: "49871",
       familyMedian: "59922",
       marriedCoupleMedian: "63854",
       nonfamilyHouseholdMedian: "30043",
       householdMean: "64840",
       familyMean: "72180",
       marriedCoupleMean: "N",
       nonfamilyMean: "30956"
    },
    "97447": {
       householdMedian: "28011",
       familyMedian: "34100",
       marriedCoupleMedian: "34550",
       nonfamilyHouseholdMedian: "25847",
       householdMean: "34353",
       familyMean: "46327",
       marriedCoupleMean: "N",
       nonfamilyMean: "29384"
    },
    "97448": {
       householdMedian: "53844",
       familyMedian: "63373",
       marriedCoupleMedian: "72088",
       nonfamilyHouseholdMedian: "31400",
       householdMean: "66281",
       familyMean: "75666",
       marriedCoupleMean: "N",
       nonfamilyMean: "42930"
    },
    "97449": {
       householdMedian: "40917",
       familyMedian: "52188",
       marriedCoupleMedian: "56324",
       nonfamilyHouseholdMedian: "27063",
       householdMean: "52252",
       familyMean: "64965",
       marriedCoupleMean: "N",
       nonfamilyMean: "33154"
    },
    "97450": {
       householdMedian: "47083",
       familyMedian: "46302",
       marriedCoupleMedian: "46771",
       nonfamilyHouseholdMedian: "-",
       householdMean: "50649",
       familyMean: "41843",
       marriedCoupleMean: "N",
       nonfamilyMean: "55806"
    },
    "97451": {
       householdMedian: "105500",
       familyMedian: "106250",
       marriedCoupleMedian: "106250",
       nonfamilyHouseholdMedian: "-",
       householdMean: "122686",
       familyMean: "131008",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97452": {
       householdMedian: "59667",
       familyMedian: "61818",
       marriedCoupleMedian: "69395",
       nonfamilyHouseholdMedian: "43500",
       householdMean: "74985",
       familyMean: "76422",
       marriedCoupleMean: "N",
       nonfamilyMean: "67131"
    },
    "97453": {
       householdMedian: "45045",
       familyMedian: "46932",
       marriedCoupleMedian: "51667",
       nonfamilyHouseholdMedian: "32614",
       householdMean: "53374",
       familyMean: "64876",
       marriedCoupleMean: "N",
       nonfamilyMean: "35708"
    },
    "97454": {
       householdMedian: "78750",
       familyMedian: "83750",
       marriedCoupleMedian: "88774",
       nonfamilyHouseholdMedian: "53269",
       householdMean: "89236",
       familyMean: "94737",
       marriedCoupleMean: "N",
       nonfamilyMean: "67567"
    },
    "97455": {
       householdMedian: "76458",
       familyMedian: "87125",
       marriedCoupleMedian: "92785",
       nonfamilyHouseholdMedian: "20600",
       householdMean: "82512",
       familyMean: "97547",
       marriedCoupleMean: "N",
       nonfamilyMean: "24883"
    },
    "97456": {
       householdMedian: "51758",
       familyMedian: "72981",
       marriedCoupleMedian: "74199",
       nonfamilyHouseholdMedian: "39531",
       householdMean: "79858",
       familyMean: "93805",
       marriedCoupleMean: "N",
       nonfamilyMean: "41712"
    },
    "97457": {
       householdMedian: "46355",
       familyMedian: "51839",
       marriedCoupleMedian: "60237",
       nonfamilyHouseholdMedian: "31633",
       householdMean: "56102",
       familyMean: "60606",
       marriedCoupleMean: "N",
       nonfamilyMean: "42378"
    },
    "97458": {
       householdMedian: "39450",
       familyMedian: "52902",
       marriedCoupleMedian: "58977",
       nonfamilyHouseholdMedian: "20806",
       householdMean: "52181",
       familyMean: "63249",
       marriedCoupleMean: "N",
       nonfamilyMean: "29528"
    },
    "97459": {
       householdMedian: "49673",
       familyMedian: "62821",
       marriedCoupleMedian: "69758",
       nonfamilyHouseholdMedian: "25970",
       householdMean: "68094",
       familyMean: "84252",
       marriedCoupleMean: "N",
       nonfamilyMean: "33289"
    },
    "97461": {
       householdMedian: "84185",
       familyMedian: "-",
       marriedCoupleMedian: "140417",
       nonfamilyHouseholdMedian: "-",
       householdMean: "93838",
       familyMean: "95408",
       marriedCoupleMean: "N",
       nonfamilyMean: "75595"
    },
    "97462": {
       householdMedian: "46667",
       familyMedian: "52031",
       marriedCoupleMedian: "54495",
       nonfamilyHouseholdMedian: "31988",
       householdMean: "60121",
       familyMean: "71165",
       marriedCoupleMean: "N",
       nonfamilyMean: "36438"
    },
    "97463": {
       householdMedian: "38362",
       familyMedian: "40982",
       marriedCoupleMedian: "50188",
       nonfamilyHouseholdMedian: "28183",
       householdMean: "42214",
       familyMean: "46226",
       marriedCoupleMean: "N",
       nonfamilyMean: "30649"
    },
    "97465": {
       householdMedian: "35370",
       familyMedian: "47639",
       marriedCoupleMedian: "57308",
       nonfamilyHouseholdMedian: "25739",
       householdMean: "52277",
       familyMean: "67435",
       marriedCoupleMean: "N",
       nonfamilyMean: "36825"
    },
    "97466": {
       householdMedian: "28542",
       familyMedian: "46429",
       marriedCoupleMedian: "53077",
       nonfamilyHouseholdMedian: "14010",
       householdMean: "39018",
       familyMean: "49868",
       marriedCoupleMean: "N",
       nonfamilyMean: "23830"
    },
    "97467": {
       householdMedian: "37705",
       familyMedian: "50455",
       marriedCoupleMedian: "63323",
       nonfamilyHouseholdMedian: "20581",
       householdMean: "49338",
       familyMean: "59537",
       marriedCoupleMean: "N",
       nonfamilyMean: "32018"
    },
    "97469": {
       householdMedian: "47774",
       familyMedian: "50667",
       marriedCoupleMedian: "55370",
       nonfamilyHouseholdMedian: "28929",
       householdMean: "48851",
       familyMean: "55084",
       marriedCoupleMean: "N",
       nonfamilyMean: "34400"
    },
    "97470": {
       householdMedian: "44363",
       familyMedian: "54544",
       marriedCoupleMedian: "64818",
       nonfamilyHouseholdMedian: "28841",
       householdMean: "54092",
       familyMean: "63684",
       marriedCoupleMean: "N",
       nonfamilyMean: "39310"
    },
    "97471": {
       householdMedian: "51003",
       familyMedian: "66107",
       marriedCoupleMedian: "75548",
       nonfamilyHouseholdMedian: "25637",
       householdMean: "71380",
       familyMean: "84377",
       marriedCoupleMean: "N",
       nonfamilyMean: "39543"
    },
    "97473": {
       householdMedian: "51324",
       familyMedian: "56094",
       marriedCoupleMedian: "60048",
       nonfamilyHouseholdMedian: "-",
       householdMean: "51326",
       familyMean: "57419",
       marriedCoupleMean: "N",
       nonfamilyMean: "35134"
    },
    "97476": {
       householdMedian: "56295",
       familyMedian: "56786",
       marriedCoupleMedian: "56786",
       nonfamilyHouseholdMedian: "-",
       householdMean: "66315",
       familyMean: "70606",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97477": {
       householdMedian: "41493",
       familyMedian: "49789",
       marriedCoupleMedian: "62352",
       nonfamilyHouseholdMedian: "30058",
       householdMean: "53674",
       familyMean: "63256",
       marriedCoupleMean: "N",
       nonfamilyMean: "39032"
    },
    "97478": {
       householdMedian: "54641",
       familyMedian: "66543",
       marriedCoupleMedian: "73080",
       nonfamilyHouseholdMedian: "31624",
       householdMean: "70711",
       familyMean: "81331",
       marriedCoupleMean: "N",
       nonfamilyMean: "39988"
    },
    "97479": {
       householdMedian: "46250",
       familyMedian: "53137",
       marriedCoupleMedian: "65909",
       nonfamilyHouseholdMedian: "31151",
       householdMean: "53680",
       familyMean: "59382",
       marriedCoupleMean: "N",
       nonfamilyMean: "36916"
    },
    "97480": {
       householdMedian: "23802",
       familyMedian: "28500",
       marriedCoupleMedian: "47500",
       nonfamilyHouseholdMedian: "20625",
       householdMean: "36977",
       familyMean: "50653",
       marriedCoupleMean: "N",
       nonfamilyMean: "20144"
    },
    "97481": {
       householdMedian: "66029",
       familyMedian: "77721",
       marriedCoupleMedian: "78015",
       nonfamilyHouseholdMedian: "18281",
       householdMean: "81196",
       familyMean: "89805",
       marriedCoupleMean: "N",
       nonfamilyMean: "19761"
    },
    "97484": {
       householdMedian: "42232",
       familyMedian: "52750",
       marriedCoupleMedian: "52750",
       nonfamilyHouseholdMedian: "-",
       householdMean: "45920",
       familyMean: "56825",
       marriedCoupleMean: "N",
       nonfamilyMean: "27271"
    },
    "97486": {
       householdMedian: "53393",
       familyMedian: "43229",
       marriedCoupleMedian: "95625",
       nonfamilyHouseholdMedian: "98000",
       householdMean: "157376",
       familyMean: "166695",
       marriedCoupleMean: "N",
       nonfamilyMean: "113013"
    },
    "97487": {
       householdMedian: "51378",
       familyMedian: "58766",
       marriedCoupleMedian: "68547",
       nonfamilyHouseholdMedian: "36739",
       householdMean: "63318",
       familyMean: "69168",
       marriedCoupleMean: "N",
       nonfamilyMean: "47869"
    },
    "97488": {
       householdMedian: "62019",
       familyMedian: "80179",
       marriedCoupleMedian: "82143",
       nonfamilyHouseholdMedian: "37250",
       householdMean: "85473",
       familyMean: "99461",
       marriedCoupleMean: "N",
       nonfamilyMean: "46017"
    },
    "97489": {
       householdMedian: "71680",
       familyMedian: "82188",
       marriedCoupleMedian: "92532",
       nonfamilyHouseholdMedian: "-",
       householdMean: "97365",
       familyMean: "111839",
       marriedCoupleMean: "N",
       nonfamilyMean: "42186"
    },
    "97490": {
       householdMedian: "46111",
       familyMedian: "47361",
       marriedCoupleMedian: "46389",
       nonfamilyHouseholdMedian: "-",
       householdMean: "56485",
       familyMean: "62354",
       marriedCoupleMean: "N",
       nonfamilyMean: "40409"
    },
    "97492": {
       householdMedian: "40069",
       familyMedian: "40385",
       marriedCoupleMedian: "41705",
       nonfamilyHouseholdMedian: "-",
       householdMean: "48213",
       familyMean: "50020",
       marriedCoupleMean: "N",
       nonfamilyMean: "40413"
    },
    "97493": {
       householdMedian: "52639",
       familyMedian: "62614",
       marriedCoupleMedian: "64545",
       nonfamilyHouseholdMedian: "-",
       householdMean: "63388",
       familyMean: "77129",
       marriedCoupleMean: "N",
       nonfamilyMean: "24378"
    },
    "97494": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97495": {
       householdMedian: "80605",
       familyMedian: "94111",
       marriedCoupleMedian: "100028",
       nonfamilyHouseholdMedian: "66833",
       householdMean: "82951",
       familyMean: "95073",
       marriedCoupleMean: "N",
       nonfamilyMean: "53386"
    },
    "97496": {
       householdMedian: "39232",
       familyMedian: "45302",
       marriedCoupleMedian: "68456",
       nonfamilyHouseholdMedian: "21276",
       householdMean: "60934",
       familyMean: "65883",
       marriedCoupleMean: "N",
       nonfamilyMean: "49565"
    },
    "97497": {
       householdMedian: "32764",
       familyMedian: "33364",
       marriedCoupleMedian: "33483",
       nonfamilyHouseholdMedian: "28194",
       householdMean: "46550",
       familyMean: "43790",
       marriedCoupleMean: "N",
       nonfamilyMean: "49298"
    },
    "97498": {
       householdMedian: "48788",
       familyMedian: "63333",
       marriedCoupleMedian: "62083",
       nonfamilyHouseholdMedian: "29821",
       householdMean: "55519",
       familyMean: "78438",
       marriedCoupleMean: "N",
       nonfamilyMean: "36342"
    },
    "97499": {
       householdMedian: "40000",
       familyMedian: "51319",
       marriedCoupleMedian: "60446",
       nonfamilyHouseholdMedian: "24402",
       householdMean: "45970",
       familyMean: "54856",
       marriedCoupleMean: "N",
       nonfamilyMean: "27260"
    },
    "97501": {
       householdMedian: "43037",
       familyMedian: "48270",
       marriedCoupleMedian: "59213",
       nonfamilyHouseholdMedian: "30000",
       householdMean: "54811",
       familyMean: "62225",
       marriedCoupleMean: "N",
       nonfamilyMean: "38046"
    },
    "97502": {
       householdMedian: "55748",
       familyMedian: "64049",
       marriedCoupleMedian: "73150",
       nonfamilyHouseholdMedian: "31066",
       householdMean: "78352",
       familyMean: "90189",
       marriedCoupleMean: "N",
       nonfamilyMean: "40995"
    },
    "97503": {
       householdMedian: "53883",
       familyMedian: "58081",
       marriedCoupleMedian: "62821",
       nonfamilyHouseholdMedian: "31674",
       householdMean: "59318",
       familyMean: "63524",
       marriedCoupleMean: "N",
       nonfamilyMean: "40897"
    },
    "97504": {
       householdMedian: "54199",
       familyMedian: "70099",
       marriedCoupleMedian: "82304",
       nonfamilyHouseholdMedian: "33382",
       householdMean: "73820",
       familyMean: "88761",
       marriedCoupleMean: "N",
       nonfamilyMean: "42294"
    },
    "97520": {
       householdMedian: "53250",
       familyMedian: "81748",
       marriedCoupleMedian: "95392",
       nonfamilyHouseholdMedian: "31993",
       householdMean: "82466",
       familyMean: "112853",
       marriedCoupleMean: "N",
       nonfamilyMean: "47973"
    },
    "97522": {
       householdMedian: "37639",
       familyMedian: "42404",
       marriedCoupleMedian: "79375",
       nonfamilyHouseholdMedian: "21250",
       householdMean: "67510",
       familyMean: "85858",
       marriedCoupleMean: "N",
       nonfamilyMean: "35613"
    },
    "97523": {
       householdMedian: "33380",
       familyMedian: "41811",
       marriedCoupleMedian: "51509",
       nonfamilyHouseholdMedian: "20500",
       householdMean: "46195",
       familyMean: "53778",
       marriedCoupleMean: "N",
       nonfamilyMean: "30411"
    },
    "97524": {
       householdMedian: "63791",
       familyMedian: "75562",
       marriedCoupleMedian: "83790",
       nonfamilyHouseholdMedian: "33604",
       householdMean: "82802",
       familyMean: "90565",
       marriedCoupleMean: "N",
       nonfamilyMean: "56924"
    },
    "97525": {
       householdMedian: "51712",
       familyMedian: "59324",
       marriedCoupleMedian: "65192",
       nonfamilyHouseholdMedian: "29453",
       householdMean: "62988",
       familyMean: "72876",
       marriedCoupleMean: "N",
       nonfamilyMean: "37632"
    },
    "97526": {
       householdMedian: "46507",
       familyMedian: "56074",
       marriedCoupleMedian: "64822",
       nonfamilyHouseholdMedian: "29241",
       householdMean: "62695",
       familyMean: "74131",
       marriedCoupleMean: "N",
       nonfamilyMean: "40070"
    },
    "97527": {
       householdMedian: "43776",
       familyMedian: "52927",
       marriedCoupleMedian: "62080",
       nonfamilyHouseholdMedian: "25835",
       householdMean: "59407",
       familyMean: "69623",
       marriedCoupleMean: "N",
       nonfamilyMean: "35254"
    },
    "97530": {
       householdMedian: "62932",
       familyMedian: "72368",
       marriedCoupleMedian: "82514",
       nonfamilyHouseholdMedian: "30191",
       householdMean: "76656",
       familyMean: "93574",
       marriedCoupleMean: "N",
       nonfamilyMean: "46179"
    },
    "97531": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "33581",
       nonfamilyHouseholdMedian: "-",
       householdMean: "68129",
       familyMean: "78727",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97532": {
       householdMedian: "54444",
       familyMedian: "53542",
       marriedCoupleMedian: "64969",
       nonfamilyHouseholdMedian: "-",
       householdMean: "63287",
       familyMean: "69304",
       marriedCoupleMean: "N",
       nonfamilyMean: "37685"
    },
    "97534": {
       householdMedian: "22038",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "21832",
       householdMean: "31410",
       familyMean: "44127",
       marriedCoupleMean: "N",
       nonfamilyMean: "24812"
    },
    "97535": {
       householdMedian: "39694",
       familyMedian: "54472",
       marriedCoupleMedian: "66850",
       nonfamilyHouseholdMedian: "20766",
       householdMean: "48219",
       familyMean: "64337",
       marriedCoupleMean: "N",
       nonfamilyMean: "28457"
    },
    "97536": {
       householdMedian: "33690",
       familyMedian: "46726",
       marriedCoupleMedian: "59464",
       nonfamilyHouseholdMedian: "17868",
       householdMean: "46744",
       familyMean: "58516",
       marriedCoupleMean: "N",
       nonfamilyMean: "28626"
    },
    "97537": {
       householdMedian: "52135",
       familyMedian: "62401",
       marriedCoupleMedian: "66600",
       nonfamilyHouseholdMedian: "28568",
       householdMean: "66084",
       familyMean: "77136",
       marriedCoupleMean: "N",
       nonfamilyMean: "39274"
    },
    "97538": {
       householdMedian: "34361",
       familyMedian: "36548",
       marriedCoupleMedian: "45439",
       nonfamilyHouseholdMedian: "28393",
       householdMean: "47315",
       familyMean: "52792",
       marriedCoupleMean: "N",
       nonfamilyMean: "36290"
    },
    "97539": {
       householdMedian: "41353",
       familyMedian: "42849",
       marriedCoupleMedian: "48173",
       nonfamilyHouseholdMedian: "24176",
       householdMean: "54708",
       familyMean: "58545",
       marriedCoupleMean: "N",
       nonfamilyMean: "44815"
    },
    "97540": {
       householdMedian: "43070",
       familyMedian: "54798",
       marriedCoupleMedian: "61591",
       nonfamilyHouseholdMedian: "24255",
       householdMean: "53614",
       familyMean: "63057",
       marriedCoupleMean: "N",
       nonfamilyMean: "37724"
    },
    "97541": {
       householdMedian: "50857",
       familyMedian: "56619",
       marriedCoupleMedian: "56790",
       nonfamilyHouseholdMedian: "-",
       householdMean: "49351",
       familyMean: "58841",
       marriedCoupleMean: "N",
       nonfamilyMean: "24625"
    },
    "97543": {
       householdMedian: "31638",
       familyMedian: "-",
       marriedCoupleMedian: "85547",
       nonfamilyHouseholdMedian: "15167",
       householdMean: "51276",
       familyMean: "70479",
       marriedCoupleMean: "N",
       nonfamilyMean: "17761"
    },
    "97544": {
       householdMedian: "37500",
       familyMedian: "37150",
       marriedCoupleMedian: "39219",
       nonfamilyHouseholdMedian: "-",
       householdMean: "48935",
       familyMean: "58289",
       marriedCoupleMean: "N",
       nonfamilyMean: "30571"
    },
    "97601": {
       householdMedian: "40726",
       familyMedian: "49970",
       marriedCoupleMedian: "62156",
       nonfamilyHouseholdMedian: "27640",
       householdMean: "57726",
       familyMean: "70231",
       marriedCoupleMean: "N",
       nonfamilyMean: "39047"
    },
    "97603": {
       householdMedian: "46919",
       familyMedian: "56456",
       marriedCoupleMedian: "66016",
       nonfamilyHouseholdMedian: "24423",
       householdMean: "57758",
       familyMean: "68062",
       marriedCoupleMean: "N",
       nonfamilyMean: "35828"
    },
    "97604": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "N"
    },
    "97620": {
       householdMedian: "58472",
       familyMedian: "82000",
       marriedCoupleMedian: "88026",
       nonfamilyHouseholdMedian: "25625",
       householdMean: "63942",
       familyMean: "81643",
       marriedCoupleMean: "N",
       nonfamilyMean: "29762"
    },
    "97621": {
       householdMedian: "57713",
       familyMedian: "58476",
       marriedCoupleMedian: "58476",
       nonfamilyHouseholdMedian: "-",
       householdMean: "44937",
       familyMean: "52844",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97622": {
       householdMedian: "43571",
       familyMedian: "43155",
       marriedCoupleMedian: "45000",
       nonfamilyHouseholdMedian: "-",
       householdMean: "41900",
       familyMean: "41960",
       marriedCoupleMean: "N",
       nonfamilyMean: "36080"
    },
    "97623": {
       householdMedian: "42905",
       familyMedian: "41250",
       marriedCoupleMedian: "52950",
       nonfamilyHouseholdMedian: "41094",
       householdMean: "53569",
       familyMean: "58395",
       marriedCoupleMean: "N",
       nonfamilyMean: "43032"
    },
    "97624": {
       householdMedian: "37689",
       familyMedian: "46197",
       marriedCoupleMedian: "46549",
       nonfamilyHouseholdMedian: "23818",
       householdMean: "49242",
       familyMean: "56977",
       marriedCoupleMean: "N",
       nonfamilyMean: "33012"
    },
    "97625": {
       householdMedian: "60536",
       familyMedian: "155833",
       marriedCoupleMedian: "156111",
       nonfamilyHouseholdMedian: "30583",
       householdMean: "94381",
       familyMean: "137505",
       marriedCoupleMean: "N",
       nonfamilyMean: "28465"
    },
    "97626": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "N"
    },
    "97627": {
       householdMedian: "56196",
       familyMedian: "70481",
       marriedCoupleMedian: "72760",
       nonfamilyHouseholdMedian: "-",
       householdMean: "62027",
       familyMean: "73011",
       marriedCoupleMean: "N",
       nonfamilyMean: "10379"
    },
    "97630": {
       householdMedian: "41291",
       familyMedian: "54763",
       marriedCoupleMedian: "76895",
       nonfamilyHouseholdMedian: "27159",
       householdMean: "54779",
       familyMean: "66438",
       marriedCoupleMean: "N",
       nonfamilyMean: "34713"
    },
    "97632": {
       householdMedian: "47917",
       familyMedian: "55929",
       marriedCoupleMedian: "60250",
       nonfamilyHouseholdMedian: "29779",
       householdMean: "63468",
       familyMean: "70111",
       marriedCoupleMean: "N",
       nonfamilyMean: "36129"
    },
    "97633": {
       householdMedian: "45298",
       familyMedian: "47467",
       marriedCoupleMedian: "58750",
       nonfamilyHouseholdMedian: "27194",
       householdMean: "60729",
       familyMean: "68269",
       marriedCoupleMean: "N",
       nonfamilyMean: "36279"
    },
    "97634": {
       householdMedian: "36500",
       familyMedian: "32000",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "50265",
       familyMean: "54150",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97635": {
       householdMedian: "26250",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "28021",
       householdMean: "27910",
       familyMean: "31261",
       marriedCoupleMean: "N",
       nonfamilyMean: "25970"
    },
    "97636": {
       householdMedian: "45938",
       familyMedian: "51765",
       marriedCoupleMedian: "60125",
       nonfamilyHouseholdMedian: "26250",
       householdMean: "50854",
       familyMean: "61657",
       marriedCoupleMean: "N",
       nonfamilyMean: "29288"
    },
    "97637": {
       householdMedian: "37292",
       familyMedian: "60625",
       marriedCoupleMedian: "60625",
       nonfamilyHouseholdMedian: "32500",
       householdMean: "42382",
       familyMean: "49097",
       marriedCoupleMean: "N",
       nonfamilyMean: "33532"
    },
    "97638": {
       householdMedian: "40417",
       familyMedian: "56125",
       marriedCoupleMedian: "56125",
       nonfamilyHouseholdMedian: "-",
       householdMean: "43409",
       familyMean: "48398",
       marriedCoupleMean: "N",
       nonfamilyMean: "24598"
    },
    "97639": {
       householdMedian: "40658",
       familyMedian: "41974",
       marriedCoupleMedian: "48913",
       nonfamilyHouseholdMedian: "-",
       householdMean: "93131",
       familyMean: "96917",
       marriedCoupleMean: "N",
       nonfamilyMean: "72006"
    },
    "97640": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "28889",
       householdMean: "54427",
       familyMean: "70133",
       marriedCoupleMean: "N",
       nonfamilyMean: "48538"
    },
    "97641": {
       householdMedian: "28322",
       familyMedian: "32168",
       marriedCoupleMedian: "40108",
       nonfamilyHouseholdMedian: "14250",
       householdMean: "41451",
       familyMean: "55020",
       marriedCoupleMean: "N",
       nonfamilyMean: "18301"
    },
    "97701": {
       householdMedian: "65211",
       familyMedian: "80514",
       marriedCoupleMedian: "92098",
       nonfamilyHouseholdMedian: "40627",
       householdMean: "90896",
       familyMean: "107982",
       marriedCoupleMean: "N",
       nonfamilyMean: "57217"
    },
    "97702": {
       householdMedian: "66848",
       familyMedian: "76938",
       marriedCoupleMedian: "86011",
       nonfamilyHouseholdMedian: "43052",
       householdMean: "88612",
       familyMean: "100438",
       marriedCoupleMean: "N",
       nonfamilyMean: "57336"
    },
    "97707": {
       householdMedian: "66186",
       familyMedian: "68750",
       marriedCoupleMedian: "73384",
       nonfamilyHouseholdMedian: "34839",
       householdMean: "76554",
       familyMean: "85107",
       marriedCoupleMean: "N",
       nonfamilyMean: "48262"
    },
    "97710": {
       householdMedian: "88750",
       familyMedian: "91250",
       marriedCoupleMedian: "91250",
       nonfamilyHouseholdMedian: "-",
       householdMean: "104606",
       familyMean: "111017",
       marriedCoupleMean: "N",
       nonfamilyMean: "66856"
    },
    "97711": {
       householdMedian: "53750",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "64938",
       familyMean: "78037",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97712": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97720": {
       householdMedian: "39205",
       familyMedian: "43143",
       marriedCoupleMedian: "49009",
       nonfamilyHouseholdMedian: "31987",
       householdMean: "54052",
       familyMean: "60716",
       marriedCoupleMean: "N",
       nonfamilyMean: "38927"
    },
    "97721": {
       householdMedian: "41429",
       familyMedian: "48333",
       marriedCoupleMedian: "51250",
       nonfamilyHouseholdMedian: "21000",
       householdMean: "64060",
       familyMean: "84520",
       marriedCoupleMean: "N",
       nonfamilyMean: "33373"
    },
    "97722": {
       householdMedian: "56641",
       familyMedian: "56667",
       marriedCoupleMedian: "56786",
       nonfamilyHouseholdMedian: "-",
       householdMean: "61502",
       familyMean: "61648",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97730": {
       householdMedian: "77917",
       familyMedian: "86250",
       marriedCoupleMedian: "86750",
       nonfamilyHouseholdMedian: "-",
       householdMean: "101110",
       familyMean: "109165",
       marriedCoupleMean: "N",
       nonfamilyMean: "47093"
    },
    "97731": {
       householdMedian: "29167",
       familyMedian: "37443",
       marriedCoupleMedian: "40268",
       nonfamilyHouseholdMedian: "21023",
       householdMean: "40472",
       familyMean: "55833",
       marriedCoupleMean: "N",
       nonfamilyMean: "21144"
    },
    "97732": {
       householdMedian: "60000",
       familyMedian: "60000",
       marriedCoupleMedian: "54250",
       nonfamilyHouseholdMedian: "56250",
       householdMean: "62943",
       familyMean: "69486",
       marriedCoupleMean: "N",
       nonfamilyMean: "49857"
    },
    "97733": {
       householdMedian: "35795",
       familyMedian: "39438",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "42807",
       familyMean: "49801",
       marriedCoupleMean: "N",
       nonfamilyMean: "32466"
    },
    "97734": {
       householdMedian: "55691",
       familyMedian: "61875",
       marriedCoupleMedian: "72917",
       nonfamilyHouseholdMedian: "30375",
       householdMean: "66703",
       familyMean: "75008",
       marriedCoupleMean: "N",
       nonfamilyMean: "38938"
    },
    "97735": {
       householdMedian: "30714",
       familyMedian: "32885",
       marriedCoupleMedian: "32885",
       nonfamilyHouseholdMedian: "-",
       householdMean: "27127",
       familyMean: "32107",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97736": {
       householdMedian: "73333",
       familyMedian: "74375",
       marriedCoupleMedian: "130000",
       nonfamilyHouseholdMedian: "35938",
       householdMean: "76850",
       familyMean: "83133",
       marriedCoupleMean: "N",
       nonfamilyMean: "53811"
    },
    "97737": {
       householdMedian: "39931",
       familyMedian: "39375",
       marriedCoupleMedian: "39306",
       nonfamilyHouseholdMedian: "52955",
       householdMean: "49507",
       familyMean: "51354",
       marriedCoupleMean: "N",
       nonfamilyMean: "45217"
    },
    "97738": {
       householdMedian: "53438",
       familyMedian: "68646",
       marriedCoupleMedian: "71644",
       nonfamilyHouseholdMedian: "28824",
       householdMean: "59316",
       familyMean: "64954",
       marriedCoupleMean: "N",
       nonfamilyMean: "41814"
    },
    "97739": {
       householdMedian: "49816",
       familyMedian: "55128",
       marriedCoupleMedian: "55938",
       nonfamilyHouseholdMedian: "21850",
       householdMean: "55296",
       familyMean: "60518",
       marriedCoupleMean: "N",
       nonfamilyMean: "35267"
    },
    "97741": {
       householdMedian: "47055",
       familyMedian: "62559",
       marriedCoupleMedian: "77612",
       nonfamilyHouseholdMedian: "26552",
       householdMean: "61368",
       familyMean: "72495",
       marriedCoupleMean: "N",
       nonfamilyMean: "34521"
    },
    "97750": {
       householdMedian: "35625",
       familyMedian: "73125",
       marriedCoupleMedian: "73906",
       nonfamilyHouseholdMedian: "24375",
       householdMean: "57951",
       familyMean: "80069",
       marriedCoupleMean: "N",
       nonfamilyMean: "22728"
    },
    "97751": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "46680",
       familyMean: "76640",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97752": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "-",
       familyMean: "-",
       marriedCoupleMean: "-",
       nonfamilyMean: "-"
    },
    "97753": {
       householdMedian: "92849",
       familyMedian: "93535",
       marriedCoupleMedian: "94422",
       nonfamilyHouseholdMedian: "39426",
       householdMean: "105210",
       familyMean: "113029",
       marriedCoupleMean: "N",
       nonfamilyMean: "48388"
    },
    "97754": {
       householdMedian: "41255",
       familyMedian: "55805",
       marriedCoupleMedian: "62058",
       nonfamilyHouseholdMedian: "25713",
       householdMean: "54474",
       familyMean: "62581",
       marriedCoupleMean: "N",
       nonfamilyMean: "34194"
    },
    "97756": {
       householdMedian: "59077",
       familyMedian: "67965",
       marriedCoupleMedian: "73857",
       nonfamilyHouseholdMedian: "31094",
       householdMean: "68465",
       familyMean: "76534",
       marriedCoupleMean: "N",
       nonfamilyMean: "45028"
    },
    "97758": {
       householdMedian: "21932",
       familyMedian: "-",
       marriedCoupleMedian: "51750",
       nonfamilyHouseholdMedian: "20556",
       householdMean: "56868",
       familyMean: "81456",
       marriedCoupleMean: "N",
       nonfamilyMean: "18450"
    },
    "97759": {
       householdMedian: "70662",
       familyMedian: "82584",
       marriedCoupleMedian: "84972",
       nonfamilyHouseholdMedian: "33444",
       householdMean: "95625",
       familyMean: "109946",
       marriedCoupleMean: "N",
       nonfamilyMean: "51110"
    },
    "97760": {
       householdMedian: "60688",
       familyMedian: "68709",
       marriedCoupleMedian: "69533",
       nonfamilyHouseholdMedian: "31544",
       householdMean: "71309",
       familyMean: "82307",
       marriedCoupleMean: "N",
       nonfamilyMean: "42308"
    },
    "97761": {
       householdMedian: "42625",
       familyMedian: "43750",
       marriedCoupleMedian: "62375",
       nonfamilyHouseholdMedian: "20875",
       householdMean: "51891",
       familyMean: "52574",
       marriedCoupleMean: "N",
       nonfamilyMean: "31448"
    },
    "97801": {
       householdMedian: "51120",
       familyMedian: "65637",
       marriedCoupleMedian: "74829",
       nonfamilyHouseholdMedian: "28621",
       householdMean: "64492",
       familyMean: "77281",
       marriedCoupleMean: "N",
       nonfamilyMean: "39938"
    },
    "97810": {
       householdMedian: "76667",
       familyMedian: "88542",
       marriedCoupleMedian: "95750",
       nonfamilyHouseholdMedian: "48958",
       householdMean: "87540",
       familyMean: "96507",
       marriedCoupleMean: "N",
       nonfamilyMean: "62112"
    },
    "97812": {
       householdMedian: "57708",
       familyMedian: "65000",
       marriedCoupleMedian: "76094",
       nonfamilyHouseholdMedian: "34375",
       householdMean: "68238",
       familyMean: "68418",
       marriedCoupleMean: "N",
       nonfamilyMean: "65700"
    },
    "97813": {
       householdMedian: "63107",
       familyMedian: "67937",
       marriedCoupleMedian: "68588",
       nonfamilyHouseholdMedian: "21944",
       householdMean: "65228",
       familyMean: "72310",
       marriedCoupleMean: "N",
       nonfamilyMean: "26461"
    },
    "97814": {
       householdMedian: "44442",
       familyMedian: "57028",
       marriedCoupleMedian: "62832",
       nonfamilyHouseholdMedian: "28926",
       householdMean: "63407",
       familyMean: "77993",
       marriedCoupleMean: "N",
       nonfamilyMean: "36421"
    },
    "97817": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97818": {
       householdMedian: "51928",
       familyMedian: "56867",
       marriedCoupleMedian: "63421",
       nonfamilyHouseholdMedian: "23292",
       householdMean: "63723",
       familyMean: "70740",
       marriedCoupleMean: "N",
       nonfamilyMean: "38888"
    },
    "97819": {
       householdMedian: "53750",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "122947",
       familyMean: "209475",
       marriedCoupleMean: "N",
       nonfamilyMean: "24057"
    },
    "97820": {
       householdMedian: "51250",
       familyMedian: "70000",
       marriedCoupleMedian: "76339",
       nonfamilyHouseholdMedian: "27500",
       householdMean: "62634",
       familyMean: "71559",
       marriedCoupleMean: "N",
       nonfamilyMean: "35661"
    },
    "97823": {
       householdMedian: "41182",
       familyMedian: "48563",
       marriedCoupleMedian: "60000",
       nonfamilyHouseholdMedian: "24000",
       householdMean: "48863",
       familyMean: "61319",
       marriedCoupleMean: "N",
       nonfamilyMean: "28266"
    },
    "97824": {
       householdMedian: "54250",
       familyMedian: "63977",
       marriedCoupleMedian: "69875",
       nonfamilyHouseholdMedian: "22868",
       householdMean: "67485",
       familyMean: "78469",
       marriedCoupleMean: "N",
       nonfamilyMean: "29196"
    },
    "97825": {
       householdMedian: "50000",
       familyMedian: "55625",
       marriedCoupleMedian: "55625",
       nonfamilyHouseholdMedian: "31875",
       householdMean: "57904",
       familyMean: "70711",
       marriedCoupleMean: "N",
       nonfamilyMean: "36055"
    },
    "97826": {
       householdMedian: "40625",
       familyMedian: "54531",
       marriedCoupleMedian: "59643",
       nonfamilyHouseholdMedian: "22917",
       householdMean: "63338",
       familyMean: "75168",
       marriedCoupleMean: "N",
       nonfamilyMean: "33744"
    },
    "97827": {
       householdMedian: "42107",
       familyMedian: "56510",
       marriedCoupleMedian: "62857",
       nonfamilyHouseholdMedian: "22589",
       householdMean: "51554",
       familyMean: "63829",
       marriedCoupleMean: "N",
       nonfamilyMean: "27652"
    },
    "97828": {
       householdMedian: "45769",
       familyMedian: "70089",
       marriedCoupleMedian: "84000",
       nonfamilyHouseholdMedian: "22366",
       householdMean: "61326",
       familyMean: "79930",
       marriedCoupleMean: "N",
       nonfamilyMean: "29652"
    },
    "97830": {
       householdMedian: "30909",
       familyMedian: "49583",
       marriedCoupleMedian: "49583",
       nonfamilyHouseholdMedian: "28233",
       householdMean: "43421",
       familyMean: "54585",
       marriedCoupleMean: "N",
       nonfamilyMean: "32239"
    },
    "97833": {
       householdMedian: "45625",
       familyMedian: "51161",
       marriedCoupleMedian: "53750",
       nonfamilyHouseholdMedian: "20197",
       householdMean: "61018",
       familyMean: "60725",
       marriedCoupleMean: "N",
       nonfamilyMean: "45428"
    },
    "97834": {
       householdMedian: "41118",
       familyMedian: "50885",
       marriedCoupleMedian: "51953",
       nonfamilyHouseholdMedian: "28750",
       householdMean: "52768",
       familyMean: "65853",
       marriedCoupleMean: "N",
       nonfamilyMean: "33016"
    },
    "97835": {
       householdMedian: "48523",
       familyMedian: "53125",
       marriedCoupleMedian: "62750",
       nonfamilyHouseholdMedian: "27500",
       householdMean: "59680",
       familyMean: "66173",
       marriedCoupleMean: "N",
       nonfamilyMean: "37993"
    },
    "97836": {
       householdMedian: "49107",
       familyMedian: "59784",
       marriedCoupleMedian: "72656",
       nonfamilyHouseholdMedian: "35665",
       householdMean: "61711",
       familyMean: "70214",
       marriedCoupleMean: "N",
       nonfamilyMean: "39063"
    },
    "97837": {
       householdMedian: "-",
       familyMedian: "78125",
       marriedCoupleMedian: "78125",
       nonfamilyHouseholdMedian: "20313",
       householdMean: "45425",
       familyMean: "68247",
       marriedCoupleMean: "N",
       nonfamilyMean: "19092"
    },
    "97838": {
       householdMedian: "55293",
       familyMedian: "61651",
       marriedCoupleMedian: "71186",
       nonfamilyHouseholdMedian: "36871",
       householdMean: "67732",
       familyMean: "74696",
       marriedCoupleMean: "N",
       nonfamilyMean: "45346"
    },
    "97839": {
       householdMedian: "50625",
       familyMedian: "52679",
       marriedCoupleMedian: "51875",
       nonfamilyHouseholdMedian: "-",
       householdMean: "56205",
       familyMean: "61914",
       marriedCoupleMean: "N",
       nonfamilyMean: "33674"
    },
    "97840": {
       householdMedian: "79732",
       familyMedian: "78661",
       marriedCoupleMedian: "69792",
       nonfamilyHouseholdMedian: "-",
       householdMean: "91397",
       familyMean: "88692",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97841": {
       householdMedian: "76500",
       familyMedian: "79318",
       marriedCoupleMedian: "82955",
       nonfamilyHouseholdMedian: "-",
       householdMean: "79800",
       familyMean: "85865",
       marriedCoupleMean: "N",
       nonfamilyMean: "59184"
    },
    "97842": {
       householdMedian: "35500",
       familyMedian: "57708",
       marriedCoupleMedian: "57708",
       nonfamilyHouseholdMedian: "24135",
       householdMean: "58315",
       familyMean: "70318",
       marriedCoupleMean: "N",
       nonfamilyMean: "23718"
    },
    "97843": {
       householdMedian: "65208",
       familyMedian: "81591",
       marriedCoupleMedian: "82778",
       nonfamilyHouseholdMedian: "36250",
       householdMean: "78586",
       familyMean: "93943",
       marriedCoupleMean: "N",
       nonfamilyMean: "36094"
    },
    "97844": {
       householdMedian: "60637",
       familyMedian: "65921",
       marriedCoupleMedian: "69375",
       nonfamilyHouseholdMedian: "37917",
       householdMean: "66526",
       familyMean: "68530",
       marriedCoupleMean: "N",
       nonfamilyMean: "47329"
    },
    "97845": {
       householdMedian: "41365",
       familyMedian: "60461",
       marriedCoupleMedian: "75363",
       nonfamilyHouseholdMedian: "24830",
       householdMean: "56023",
       familyMean: "64657",
       marriedCoupleMean: "N",
       nonfamilyMean: "45592"
    },
    "97846": {
       householdMedian: "57333",
       familyMedian: "67500",
       marriedCoupleMedian: "78403",
       nonfamilyHouseholdMedian: "27750",
       householdMean: "74014",
       familyMean: "85397",
       marriedCoupleMean: "N",
       nonfamilyMean: "45791"
    },
    "97848": {
       householdMedian: "50556",
       familyMedian: "52031",
       marriedCoupleMedian: "52188",
       nonfamilyHouseholdMedian: "-",
       householdMean: "76947",
       familyMean: "84605",
       marriedCoupleMean: "N",
       nonfamilyMean: "31285"
    },
    "97850": {
       householdMedian: "46800",
       familyMedian: "61547",
       marriedCoupleMedian: "74605",
       nonfamilyHouseholdMedian: "28771",
       householdMean: "67953",
       familyMean: "79189",
       marriedCoupleMean: "N",
       nonfamilyMean: "47474"
    },
    "97856": {
       householdMedian: "57500",
       familyMedian: "56750",
       marriedCoupleMedian: "56750",
       nonfamilyHouseholdMedian: "67587",
       householdMean: "57716",
       familyMean: "65060",
       marriedCoupleMean: "N",
       nonfamilyMean: "50787"
    },
    "97857": {
       householdMedian: "41875",
       familyMedian: "54167",
       marriedCoupleMedian: "71875",
       nonfamilyHouseholdMedian: "18500",
       householdMean: "53701",
       familyMean: "64635",
       marriedCoupleMean: "N",
       nonfamilyMean: "20966"
    },
    "97859": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "59798",
       familyMean: "62463",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97862": {
       householdMedian: "49556",
       familyMedian: "56289",
       marriedCoupleMedian: "65153",
       nonfamilyHouseholdMedian: "21108",
       householdMean: "64326",
       familyMean: "77701",
       marriedCoupleMean: "N",
       nonfamilyMean: "31135"
    },
    "97864": {
       householdMedian: "22292",
       familyMedian: "24000",
       marriedCoupleMedian: "27750",
       nonfamilyHouseholdMedian: "20000",
       householdMean: "42184",
       familyMean: "43018",
       marriedCoupleMean: "N",
       nonfamilyMean: "37575"
    },
    "97865": {
       householdMedian: "50031",
       familyMedian: "52946",
       marriedCoupleMedian: "53958",
       nonfamilyHouseholdMedian: "18333",
       householdMean: "58157",
       familyMean: "70322",
       marriedCoupleMean: "N",
       nonfamilyMean: "32017"
    },
    "97867": {
       householdMedian: "36111",
       familyMedian: "39792",
       marriedCoupleMedian: "63000",
       nonfamilyHouseholdMedian: "30481",
       householdMean: "54735",
       familyMean: "61903",
       marriedCoupleMean: "N",
       nonfamilyMean: "34681"
    },
    "97868": {
       householdMedian: "54634",
       familyMedian: "66023",
       marriedCoupleMedian: "69063",
       nonfamilyHouseholdMedian: "31667",
       householdMean: "74511",
       familyMean: "85343",
       marriedCoupleMean: "N",
       nonfamilyMean: "52763"
    },
    "97869": {
       householdMedian: "49219",
       familyMedian: "58239",
       marriedCoupleMedian: "60357",
       nonfamilyHouseholdMedian: "19615",
       householdMean: "50286",
       familyMean: "60073",
       marriedCoupleMean: "N",
       nonfamilyMean: "27089"
    },
    "97870": {
       householdMedian: "41071",
       familyMedian: "52569",
       marriedCoupleMedian: "52986",
       nonfamilyHouseholdMedian: "21607",
       householdMean: "48880",
       familyMean: "58179",
       marriedCoupleMean: "N",
       nonfamilyMean: "34049"
    },
    "97873": {
       householdMedian: "45729",
       familyMedian: "60208",
       marriedCoupleMedian: "53594",
       nonfamilyHouseholdMedian: "16250",
       householdMean: "56702",
       familyMean: "72842",
       marriedCoupleMean: "N",
       nonfamilyMean: "25436"
    },
    "97874": {
       householdMedian: "35417",
       familyMedian: "40750",
       marriedCoupleMedian: "42500",
       nonfamilyHouseholdMedian: "20417",
       householdMean: "43647",
       familyMean: "47473",
       marriedCoupleMean: "N",
       nonfamilyMean: "32341"
    },
    "97875": {
       householdMedian: "58508",
       familyMedian: "60500",
       marriedCoupleMedian: "69250",
       nonfamilyHouseholdMedian: "43162",
       householdMean: "66210",
       familyMean: "66449",
       marriedCoupleMean: "N",
       nonfamilyMean: "48619"
    },
    "97876": {
       householdMedian: "70673",
       familyMedian: "77750",
       marriedCoupleMedian: "81875",
       nonfamilyHouseholdMedian: "60000",
       householdMean: "78379",
       familyMean: "80128",
       marriedCoupleMean: "N",
       nonfamilyMean: "62069"
    },
    "97877": {
       householdMedian: "11250",
       familyMedian: "40417",
       marriedCoupleMedian: "52917",
       nonfamilyHouseholdMedian: "9145",
       householdMean: "32347",
       familyMean: "65615",
       marriedCoupleMean: "N",
       nonfamilyMean: "15293"
    },
    "97880": {
       householdMedian: "47500",
       familyMedian: "55417",
       marriedCoupleMedian: "63125",
       nonfamilyHouseholdMedian: "28333",
       householdMean: "54340",
       familyMean: "67010",
       marriedCoupleMean: "N",
       nonfamilyMean: "38050"
    },
    "97882": {
       householdMedian: "42221",
       familyMedian: "50562",
       marriedCoupleMedian: "66094",
       nonfamilyHouseholdMedian: "26062",
       householdMean: "52272",
       familyMean: "59928",
       marriedCoupleMean: "N",
       nonfamilyMean: "38091"
    },
    "97883": {
       householdMedian: "54309",
       familyMedian: "56250",
       marriedCoupleMedian: "68854",
       nonfamilyHouseholdMedian: "38882",
       householdMean: "62838",
       familyMean: "70080",
       marriedCoupleMean: "N",
       nonfamilyMean: "42109"
    },
    "97884": {
       householdMedian: "37344",
       familyMedian: "53125",
       marriedCoupleMedian: "53125",
       nonfamilyHouseholdMedian: "33750",
       householdMean: "48726",
       familyMean: "59856",
       marriedCoupleMean: "N",
       nonfamilyMean: "33608"
    },
    "97885": {
       householdMedian: "39076",
       familyMedian: "43750",
       marriedCoupleMedian: "54464",
       nonfamilyHouseholdMedian: "27083",
       householdMean: "53495",
       familyMean: "63682",
       marriedCoupleMean: "N",
       nonfamilyMean: "36182"
    },
    "97886": {
       householdMedian: "62083",
       familyMedian: "72788",
       marriedCoupleMedian: "75156",
       nonfamilyHouseholdMedian: "19135",
       householdMean: "69613",
       familyMean: "82407",
       marriedCoupleMean: "N",
       nonfamilyMean: "30924"
    },
    "97901": {
       householdMedian: "43646",
       familyMedian: "50469",
       marriedCoupleMedian: "55197",
       nonfamilyHouseholdMedian: "-",
       householdMean: "56879",
       familyMean: "57276",
       marriedCoupleMean: "N",
       nonfamilyMean: "54910"
    },
    "97903": {
       householdMedian: "74000",
       familyMedian: "74000",
       marriedCoupleMedian: "81250",
       nonfamilyHouseholdMedian: "-",
       householdMean: "117779",
       familyMean: "117779",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97904": {
       householdMedian: "47813",
       familyMedian: "73333",
       marriedCoupleMedian: "73750",
       nonfamilyHouseholdMedian: "16442",
       householdMean: "101991",
       familyMean: "115014",
       marriedCoupleMean: "N",
       nonfamilyMean: "61217"
    },
    "97905": {
       householdMedian: "82500",
       familyMedian: "90250",
       marriedCoupleMedian: "90250",
       nonfamilyHouseholdMedian: "-",
       householdMean: "75073",
       familyMean: "77169",
       marriedCoupleMean: "N",
       nonfamilyMean: "N"
    },
    "97906": {
       householdMedian: "47708",
       familyMedian: "55250",
       marriedCoupleMedian: "61667",
       nonfamilyHouseholdMedian: "15357",
       householdMean: "62327",
       familyMean: "76290",
       marriedCoupleMean: "N",
       nonfamilyMean: "22619"
    },
    "97907": {
       householdMedian: "47500",
       familyMedian: "51875",
       marriedCoupleMedian: "58068",
       nonfamilyHouseholdMedian: "-",
       householdMean: "53526",
       familyMean: "61718",
       marriedCoupleMean: "N",
       nonfamilyMean: "45715"
    },
    "97908": {
       householdMedian: "23750",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "26250",
       householdMean: "31694",
       familyMean: "34850",
       marriedCoupleMean: "N",
       nonfamilyMean: "29170"
    },
    "97909": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "-",
       householdMean: "N",
       familyMean: "N",
       marriedCoupleMean: "N",
       nonfamilyMean: "-"
    },
    "97910": {
       householdMedian: "46136",
       familyMedian: "53333",
       marriedCoupleMedian: "67917",
       nonfamilyHouseholdMedian: "20625",
       householdMean: "68606",
       familyMean: "71143",
       marriedCoupleMean: "N",
       nonfamilyMean: "58465"
    },
    "97911": {
       householdMedian: "45000",
       familyMedian: "48333",
       marriedCoupleMedian: "48750",
       nonfamilyHouseholdMedian: "-",
       householdMean: "45990",
       familyMean: "60930",
       marriedCoupleMean: "N",
       nonfamilyMean: "33089"
    },
    "97913": {
       householdMedian: "44048",
       familyMedian: "57755",
       marriedCoupleMedian: "66707",
       nonfamilyHouseholdMedian: "16840",
       householdMean: "52602",
       familyMean: "60113",
       marriedCoupleMean: "N",
       nonfamilyMean: "29769"
    },
    "97914": {
       householdMedian: "41427",
       familyMedian: "48057",
       marriedCoupleMedian: "66757",
       nonfamilyHouseholdMedian: "23081",
       householdMean: "55158",
       familyMean: "62166",
       marriedCoupleMean: "N",
       nonfamilyMean: "37939"
    },
    "97918": {
       householdMedian: "43158",
       familyMedian: "54188",
       marriedCoupleMedian: "64301",
       nonfamilyHouseholdMedian: "20375",
       householdMean: "55840",
       familyMean: "64926",
       marriedCoupleMean: "N",
       nonfamilyMean: "29863"
    },
    "97920": {
       householdMedian: "-",
       familyMedian: "-",
       marriedCoupleMedian: "-",
       nonfamilyHouseholdMedian: "8995",
       householdMean: "32651",
       familyMean: "102250",
       marriedCoupleMean: "N",
       nonfamilyMean: "12404"
    }
 }
 
 export default oregon_income_rates;