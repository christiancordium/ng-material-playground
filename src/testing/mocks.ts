import * as moment from 'moment';
import * as _ from 'lodash';

export const CASE_MOCKS: Cordium.ICase[] = [
	{
	  "caseId": 1,
	  "name": "tempor occaecat labore",
	  "description": "Proident dolor Lorem non consequat ipsum eu adipisicing amet cupidatat exercitation amet.",
	  "interestItems": [
		{
		  "name": "magna dolor anim",
		  "interestItemId": 1,
		  "ruleExecutionId": 1,
		  "rulesExecution": "nisi esse eiusmod",
		  "description": "Commodo sit excepteur quis excepteur in et labore Lorem ad commodo eu nulla aute nostrud.",
		  "status": 0
		},
		{
		  "name": "ut aute mollit",
		  "interestItemId": 2,
		  "ruleExecutionId": 2,
		  "rulesExecution": "voluptate excepteur magna",
		  "description": "Lorem exercitation pariatur nisi enim.",
		  "status": -1
		},
		{
		  "name": "qui cillum id",
		  "interestItemId": 3,
		  "ruleExecutionId": 3,
		  "rulesExecution": "proident aliquip dolore",
		  "description": "Culpa qui nulla tempor esse magna adipisicing irure et quis in do laborum.",
		  "status": -1
		},
		{
		  "name": "reprehenderit occaecat excepteur",
		  "interestItemId": 4,
		  "ruleExecutionId": 4,
		  "rulesExecution": "do ipsum exercitation",
		  "description": "Id anim enim nostrud sunt nostrud eiusmod laborum et eiusmod.",
		  "status": 1
		},
		{
		  "name": "do exercitation deserunt",
		  "interestItemId": 5,
		  "ruleExecutionId": 5,
		  "rulesExecution": "magna pariatur quis",
		  "description": "Amet sunt eu aliquip cillum laborum sint eiusmod.",
		  "status": -1
		}
	  ],
	  "requests": [
		{
		  "preclearanceId": 1,
		  "name": "ad id irure",
		  "description": "Qui ex do dolor dolore cupidatat voluptate et.",
		  "userId": 1,
		  "securityId": 2,
		  "tradeDate": "Thu Oct 30 2003 14:31:01 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 2,
		  "name": "mollit incididunt Lorem",
		  "description": "Do veniam labore nulla id sit irure excepteur et.",
		  "userId": 1,
		  "securityId": 3,
		  "tradeDate": "Fri Jan 15 1999 06:39:51 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 3,
		  "name": "voluptate sint sit",
		  "description": "Exercitation eiusmod do exercitation id minim consequat duis.",
		  "userId": 3,
		  "securityId": 2,
		  "tradeDate": "Wed Aug 22 2007 19:49:14 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 4,
		  "name": "et nostrud magna",
		  "description": "Proident eiusmod commodo quis eiusmod velit et fugiat enim fugiat nulla.",
		  "userId": 1,
		  "securityId": 3,
		  "tradeDate": "Thu Aug 23 2007 00:28:37 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 5,
		  "name": "proident qui dolore",
		  "description": "Laboris irure ullamco ut magna irure laboris voluptate culpa pariatur.",
		  "userId": 3,
		  "securityId": 3,
		  "tradeDate": "Sat Apr 21 1973 15:58:19 GMT+0000 (UTC)"
		}
	  ],
	  "assets": [],
	  "cases": [],
	  "status": 1
	},
	{
	  "caseId": 2,
	  "name": "mollit eu adipisicing",
	  "description": "Aliqua excepteur incididunt duis irure dolor cillum nisi in.",
	  "interestItems": [
		{
		  "name": "laborum aute velit",
		  "interestItemId": 1,
		  "ruleExecutionId": 1,
		  "rulesExecution": "officia fugiat qui",
		  "description": "Adipisicing excepteur nostrud ullamco deserunt laboris do deserunt excepteur laborum fugiat ipsum nulla aute ullamco.",
		  "status": -1
		},
		{
		  "name": "labore enim ex",
		  "interestItemId": 2,
		  "ruleExecutionId": 2,
		  "rulesExecution": "nostrud deserunt eu",
		  "description": "Officia amet sint in ea aliquip nulla ullamco minim aliquip enim nulla commodo.",
		  "status": 0
		},
		{
		  "name": "sit fugiat commodo",
		  "interestItemId": 3,
		  "ruleExecutionId": 3,
		  "rulesExecution": "aute laboris dolore",
		  "description": "Excepteur eu proident elit Lorem et ullamco duis.",
		  "status": 0
		},
		{
		  "name": "et duis ea",
		  "interestItemId": 4,
		  "ruleExecutionId": 4,
		  "rulesExecution": "enim laboris sit",
		  "description": "Dolor officia reprehenderit sit in tempor aliqua pariatur qui.",
		  "status": -1
		},
		{
		  "name": "nostrud quis voluptate",
		  "interestItemId": 5,
		  "ruleExecutionId": 5,
		  "rulesExecution": "non ad proident",
		  "description": "Adipisicing culpa nostrud magna reprehenderit duis aute cupidatat elit ut esse sit.",
		  "status": 0
		}
	  ],
	  "requests": [
		{
		  "preclearanceId": 1,
		  "name": "in sint veniam",
		  "description": "Aute non officia proident nostrud.",
		  "userId": 2,
		  "securityId": 3,
		  "tradeDate": "Sun Mar 26 1972 09:24:46 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 2,
		  "name": "adipisicing dolore non",
		  "description": "Proident adipisicing commodo voluptate elit excepteur aliqua laborum sunt ad in quis.",
		  "userId": 3,
		  "securityId": 3,
		  "tradeDate": "Sat Sep 30 1978 07:20:00 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 3,
		  "name": "qui reprehenderit ullamco",
		  "description": "Ex aliqua officia eu ut dolore nulla.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Thu Mar 24 2016 07:34:25 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 4,
		  "name": "adipisicing voluptate dolore",
		  "description": "Tempor labore ullamco amet minim cupidatat.",
		  "userId": 3,
		  "securityId": 2,
		  "tradeDate": "Sun Sep 11 1983 22:14:45 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 5,
		  "name": "exercitation amet laboris",
		  "description": "Irure nisi ipsum culpa velit anim aliqua Lorem in.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Wed Dec 01 1982 17:08:50 GMT+0000 (UTC)"
		}
	  ],
	  "assets": [],
	  "cases": [],
	  "status": 2
	},
	{
	  "caseId": 3,
	  "name": "anim non in",
	  "description": "Pariatur aute irure Lorem esse ut minim officia et qui elit incididunt laborum nisi culpa.",
	  "interestItems": [
		{
		  "name": "laboris Lorem elit",
		  "interestItemId": 1,
		  "ruleExecutionId": 1,
		  "rulesExecution": "et cillum fugiat",
		  "description": "Exercitation pariatur ex cupidatat eu id adipisicing sunt exercitation dolor quis dolor et.",
		  "status": 0
		},
		{
		  "name": "culpa excepteur in",
		  "interestItemId": 2,
		  "ruleExecutionId": 2,
		  "rulesExecution": "mollit dolore fugiat",
		  "description": "Sunt tempor ipsum commodo nisi elit esse occaecat magna ullamco est non mollit occaecat ex.",
		  "status": -1
		},
		{
		  "name": "consectetur ex labore",
		  "interestItemId": 3,
		  "ruleExecutionId": 3,
		  "rulesExecution": "ad aliquip amet",
		  "description": "Ipsum esse proident cillum commodo pariatur enim esse labore enim et ad duis.",
		  "status": 0
		},
		{
		  "name": "ex exercitation esse",
		  "interestItemId": 4,
		  "ruleExecutionId": 4,
		  "rulesExecution": "velit consectetur incididunt",
		  "description": "Laboris ad labore aliqua laboris cillum dolor labore magna aute dolore.",
		  "status": 1
		},
		{
		  "name": "Lorem cillum ex",
		  "interestItemId": 5,
		  "ruleExecutionId": 5,
		  "rulesExecution": "mollit nisi minim",
		  "description": "Nisi aliquip occaecat tempor dolor ex cupidatat irure dolore exercitation enim sint exercitation.",
		  "status": -1
		}
	  ],
	  "requests": [
		{
		  "preclearanceId": 1,
		  "name": "consectetur proident fugiat",
		  "description": "Nulla laborum nisi sit labore velit pariatur magna nostrud.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Sat Jun 07 1980 10:02:03 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 2,
		  "name": "ea pariatur velit",
		  "description": "Dolor labore amet quis ex duis amet eu nisi laboris.",
		  "userId": 1,
		  "securityId": 3,
		  "tradeDate": "Thu Nov 08 2007 09:46:34 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 3,
		  "name": "id esse occaecat",
		  "description": "Amet incididunt anim sint reprehenderit aliqua exercitation magna.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Thu Nov 20 2014 05:53:55 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 4,
		  "name": "cillum eu est",
		  "description": "Labore commodo ad eu mollit esse.",
		  "userId": 1,
		  "securityId": 3,
		  "tradeDate": "Tue Dec 28 1993 05:00:10 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 5,
		  "name": "do pariatur qui",
		  "description": "Nostrud non est anim consequat aute non proident eu commodo eu ea fugiat.",
		  "userId": 2,
		  "securityId": 3,
		  "tradeDate": "Sun Apr 21 1985 13:17:48 GMT+0000 (UTC)"
		}
	  ],
	  "assets": [],
	  "cases": [],
	  "status": 3
	},
	{
	  "caseId": 4,
	  "name": "dolore velit cupidatat",
	  "description": "Pariatur nulla non aute amet incididunt incididunt velit.",
	  "interestItems": [
		{
		  "name": "ipsum qui eiusmod",
		  "interestItemId": 1,
		  "ruleExecutionId": 1,
		  "rulesExecution": "do qui magna",
		  "description": "Et amet excepteur consectetur mollit culpa.",
		  "status": 1
		},
		{
		  "name": "id cupidatat sint",
		  "interestItemId": 2,
		  "ruleExecutionId": 2,
		  "rulesExecution": "esse aute minim",
		  "description": "Nisi esse minim cupidatat in est velit in dolore anim ipsum nostrud sint ex.",
		  "status": 0
		},
		{
		  "name": "tempor elit labore",
		  "interestItemId": 3,
		  "ruleExecutionId": 3,
		  "rulesExecution": "aliquip elit excepteur",
		  "description": "Consequat deserunt sint reprehenderit sunt consectetur do est laborum dolor consequat proident cupidatat.",
		  "status": -1
		},
		{
		  "name": "enim aute aliqua",
		  "interestItemId": 4,
		  "ruleExecutionId": 4,
		  "rulesExecution": "mollit voluptate dolor",
		  "description": "Deserunt minim irure consectetur sit ullamco occaecat officia ipsum nisi labore.",
		  "status": 1
		},
		{
		  "name": "et veniam ad",
		  "interestItemId": 5,
		  "ruleExecutionId": 5,
		  "rulesExecution": "veniam proident ex",
		  "description": "Sit Lorem tempor enim amet eu voluptate adipisicing quis consectetur nisi.",
		  "status": -1
		}
	  ],
	  "requests": [
		{
		  "preclearanceId": 1,
		  "name": "do sint pariatur",
		  "description": "In ipsum ipsum duis enim adipisicing deserunt exercitation veniam aute sit amet veniam incididunt quis.",
		  "userId": 3,
		  "securityId": 3,
		  "tradeDate": "Wed Feb 22 1984 09:52:28 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 2,
		  "name": "esse laborum est",
		  "description": "Velit do consequat aliquip est velit occaecat qui duis adipisicing nisi fugiat laborum.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Wed Aug 01 1990 17:16:33 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 3,
		  "name": "non et et",
		  "description": "Ad in officia sunt aute duis dolor in sint exercitation minim irure adipisicing cupidatat duis.",
		  "userId": 2,
		  "securityId": 2,
		  "tradeDate": "Sat Aug 01 1998 16:03:38 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 4,
		  "name": "culpa eiusmod veniam",
		  "description": "Commodo incididunt enim quis consequat fugiat ullamco minim est duis et id.",
		  "userId": 3,
		  "securityId": 2,
		  "tradeDate": "Sun Jun 22 1986 08:21:20 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 5,
		  "name": "amet ipsum nostrud",
		  "description": "Ut Lorem sint enim ipsum ut nostrud occaecat adipisicing consectetur enim do elit minim exercitation.",
		  "userId": 1,
		  "securityId": 1,
		  "tradeDate": "Thu Aug 11 1977 09:11:26 GMT+0000 (UTC)"
		}
	  ],
	  "assets": [],
	  "cases": [],
	  "status": 3
	},
	{
	  "caseId": 5,
	  "name": "labore ea cupidatat",
	  "description": "Lorem elit velit occaecat qui ex adipisicing.",
	  "interestItems": [
		{
		  "name": "exercitation exercitation ad",
		  "interestItemId": 1,
		  "ruleExecutionId": 1,
		  "rulesExecution": "sunt dolore voluptate",
		  "description": "Consectetur irure aliquip pariatur ad Lorem occaecat ea cupidatat occaecat fugiat.",
		  "status": 0
		},
		{
		  "name": "Lorem aute voluptate",
		  "interestItemId": 2,
		  "ruleExecutionId": 2,
		  "rulesExecution": "mollit eiusmod duis",
		  "description": "Dolore excepteur amet excepteur irure cupidatat officia.",
		  "status": 0
		},
		{
		  "name": "eu ullamco officia",
		  "interestItemId": 3,
		  "ruleExecutionId": 3,
		  "rulesExecution": "et irure tempor",
		  "description": "Et excepteur eu commodo aliqua in nulla nulla esse consectetur aute exercitation dolore ex adipisicing.",
		  "status": 0
		},
		{
		  "name": "eiusmod esse veniam",
		  "interestItemId": 4,
		  "ruleExecutionId": 4,
		  "rulesExecution": "cillum nisi elit",
		  "description": "Id laborum adipisicing sunt veniam aliquip proident veniam nulla voluptate adipisicing deserunt.",
		  "status": -1
		},
		{
		  "name": "adipisicing culpa irure",
		  "interestItemId": 5,
		  "ruleExecutionId": 5,
		  "rulesExecution": "nostrud adipisicing veniam",
		  "description": "Irure incididunt veniam sunt id eiusmod sint sit quis.",
		  "status": -1
		}
	  ],
	  "requests": [
		{
		  "preclearanceId": 1,
		  "name": "et anim adipisicing",
		  "description": "Elit deserunt cillum deserunt quis dolore.",
		  "userId": 2,
		  "securityId": 3,
		  "tradeDate": "Fri Mar 21 2014 03:54:31 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 2,
		  "name": "sint laboris mollit",
		  "description": "Magna tempor ullamco officia enim.",
		  "userId": 3,
		  "securityId": 2,
		  "tradeDate": "Thu May 06 1976 02:11:36 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 3,
		  "name": "irure anim exercitation",
		  "description": "Est magna fugiat dolor aliquip proident Lorem exercitation dolore do.",
		  "userId": 3,
		  "securityId": 3,
		  "tradeDate": "Sun Jan 29 1989 23:40:43 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 4,
		  "name": "ipsum nostrud non",
		  "description": "Labore esse mollit commodo minim.",
		  "userId": 2,
		  "securityId": 1,
		  "tradeDate": "Sun May 14 1989 06:26:43 GMT+0000 (UTC)"
		},
		{
		  "preclearanceId": 5,
		  "name": "sunt cillum sit",
		  "description": "Ut consectetur officia adipisicing occaecat aliquip incididunt occaecat.",
		  "userId": 1,
		  "securityId": 3,
		  "tradeDate": "Sun Jan 18 2009 21:41:39 GMT+0000 (UTC)"
		}
	  ],
	  "assets": [],
	  "cases": [],
	  "status": 3
	}
  ];
