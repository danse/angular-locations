angular.module('eHealth.locations.data', [])

.constant('ml', [{depth:0,name:'région',plural:'régions',items:[{id:'B',name:'Bamako'},{id:'G',name:'Gao'},{id:'K',name:'Kayes'},{id:'D',name:'Kidal'},{id:'O',name:'Koulikoro'},{id:'M',name:'Mopti'},{id:'S',name:'Ségou'},{id:'K',name:'Sikasso'},{id:'T',name:'Timbuktu'}]},{depth:1,name:'cercle',plural:'cercles',items:[{parentId:'B',id:'BB',name:'Bamako'},{parentId:'G',id:'GA',name:'Ansongo'},{parentId:'G',id:'GB',name:'Bourem'},{parentId:'G',id:'GG',name:'Gao'},{parentId:'G',id:'GM',name:'Ménaka'},{parentId:'K',id:'KB',name:'Bafoulabé'},{parentId:'K',id:'KD',name:'Diéma'},{parentId:'K',id:'KA',name:'Kayes'},{parentId:'K',id:'KE',name:'Kéniéba'},{parentId:'K',id:'KI',name:'Kita'},{parentId:'K',id:'KN',name:'Nioro'},{parentId:'K',id:'KY',name:'Yélimané'},{parentId:'D',id:'DA',name:'Abeïbara'},{parentId:'D',id:'DK',name:'Kidal'},{parentId:'D',id:'DE',name:'Tessalit'},{parentId:'D',id:'DI',name:'Tin-Essako'},{parentId:'O',id:'OB',name:'Banamba'},{parentId:'O',id:'OD',name:'Dioïla'},{parentId:'O',id:'OA',name:'Kangaba'},{parentId:'O',id:'OT',name:'Kati'},{parentId:'O',id:'OK',name:'Kolokani'},{parentId:'O',id:'OU',name:'Koulikoro'},{parentId:'O',id:'ON',name:'Nara'},{parentId:'M',id:'MA',name:'Bandiagara'},{parentId:'M',id:'MB',name:'Bankass'},{parentId:'M',id:'MJ',name:'Djenné'},{parentId:'M',id:'MD',name:'Douentza'},{parentId:'M',id:'MK',name:'Koro'},{parentId:'M',id:'MM',name:'Mopti'},{parentId:'M',id:'MT',name:'Ténenkou'},{parentId:'M',id:'MY',name:'Youwarou'},{parentId:'S',id:'SB',name:'Barouéli'},{parentId:'S',id:'SL',name:'Bla'},{parentId:'S',id:'SK',name:'Koutiala'},{parentId:'S',id:'SM',name:'Macina'},{parentId:'S',id:'SN',name:'Niono'},{parentId:'S',id:'SS',name:'San'},{parentId:'S',id:'SG',name:'Ségou'},{parentId:'S',id:'ST',name:'Tominian'},{parentId:'K',id:'KB',name:'Bougouni'},{parentId:'K',id:'KA',name:'Kadiolo'},{parentId:'K',id:'KO',name:'Kolondiéba'},{parentId:'K',id:'KK',name:'Koutiala'},{parentId:'K',id:'KS',name:'Sikasso'},{parentId:'K',id:'KF',name:'Yanfolila'},{parentId:'K',id:'KY',name:'Yorosso'},{parentId:'T',id:'TD',name:'Diré'},{parentId:'T',id:'TG',name:'Goundam'},{parentId:'T',id:'TR',name:'Gourma-Rharous'},{parentId:'T',id:'TN',name:'Niafunké'},{parentId:'T',id:'TT',name:'Tombouctou'}]},{depth:2,name:'commune',plural:'communes',items:[{parentId:'BB',id:1,name:'Kalban-Coro'},{parentId:'GA',id:2,name:'Ansongo-Central'},{parentId:'GA',id:3,name:'Ouatagouna'},{parentId:'GA',id:4,name:'Talataye'},{parentId:'GA',id:5,name:'Tessit'},{parentId:'GB',id:6,name:'Almoustarat'},{parentId:'GB',id:7,name:'Bamba'},{parentId:'GB',id:8,name:'Bourem-Central'},{parentId:'GB',id:9,name:'Temera'},{parentId:'GG',id:10,name:'Djebock'},{parentId:'GG',id:11,name:'Gao-Central'},{parentId:'GG',id:12,name:'Haoussa-Foulane'},{parentId:'GG',id:13,name:'In-Tillit'},{parentId:'GM',id:14,name:'n.a.'},{parentId:'KB',id:15,name:'Bafoulabe-Central'},{parentId:'KB',id:16,name:'Bamafele'},{parentId:'KB',id:17,name:'Diakon'},{parentId:'KB',id:18,name:'Diallan'},{parentId:'KB',id:19,name:'Koundian'},{parentId:'KB',id:20,name:'Mahina'},{parentId:'KB',id:21,name:'Oualia'},{parentId:'KB',id:22,name:'Oussoubidiagna'},{parentId:'KD',id:23,name:'Bema'},{parentId:'KD',id:24,name:'Diangounte-Camara'},{parentId:'KD',id:25,name:'Diema-Central'},{parentId:'KD',id:26,name:'Dioumara'},{parentId:'KD',id:27,name:'Lakamane'},{parentId:'KA',id:28,name:'Ambidedi'},{parentId:'KA',id:29,name:'Aourou'},{parentId:'KA',id:30,name:'Diadioumbera'},{parentId:'KA',id:31,name:'Diamou'},{parentId:'KA',id:32,name:'Kayes-Central'},{parentId:'KA',id:33,name:'Koussane'},{parentId:'KA',id:34,name:'Lontou'},{parentId:'KA',id:35,name:'Sadiola'},{parentId:'KA',id:36,name:'Same'},{parentId:'KA',id:37,name:'Segala'},{parentId:'KE',id:38,name:'Dialafara'},{parentId:'KE',id:39,name:'Dombia'},{parentId:'KE',id:40,name:'Falea'},{parentId:'KE',id:41,name:'Faraba'},{parentId:'KE',id:42,name:'Kassama'},{parentId:'KE',id:43,name:'Kenieba-Central'},{parentId:'KI',id:44,name:'Djidian'},{parentId:'KI',id:45,name:'Kita-Central'},{parentId:'KI',id:46,name:'Kokofata'},{parentId:'KI',id:47,name:'Sagabari'},{parentId:'KI',id:48,name:'Sebekoro'},{parentId:'KI',id:49,name:'Sefeto'},{parentId:'KI',id:50,name:'Sirakoro'},{parentId:'KI',id:51,name:'Toukoto'},{parentId:'KN',id:52,name:'Gavinane'},{parentId:'KN',id:53,name:'Gogui'},{parentId:'KN',id:54,name:'Korera-Kore'},{parentId:'KN',id:55,name:'Nioro-Central'},{parentId:'KN',id:56,name:'Sandare'},{parentId:'KN',id:57,name:'Simbi'},{parentId:'KN',id:58,name:'Trongoumbe'},{parentId:'KY',id:59,name:'Diadioumbera'},{parentId:'KY',id:60,name:'Kirane'},{parentId:'KY',id:61,name:'Marena'},{parentId:'KY',id:62,name:'Tambacara'},{parentId:'KY',id:63,name:'Yelimane-Central'},{parentId:'DA',id:64,name:'n.a.'},{parentId:'DK',id:65,name:'n.a.'},{parentId:'DE',id:66,name:'n.a.'},{parentId:'DI',id:67,name:'n.a.'},{parentId:'OB',id:68,name:'Banamba-Central'},{parentId:'OB',id:69,name:'Boron'},{parentId:'OB',id:70,name:'Madina-Sako'},{parentId:'OB',id:71,name:'Sebete'},{parentId:'OB',id:72,name:'Toubakoura'},{parentId:'OB',id:73,name:'Toukouroba'},{parentId:'OD',id:74,name:'Banco'},{parentId:'OD',id:75,name:'Beleko'},{parentId:'OD',id:76,name:'Doila-Central'},{parentId:'OD',id:77,name:'Fana'},{parentId:'OD',id:78,name:'Massigui'},{parentId:'OD',id:79,name:'Mena'},{parentId:'OA',id:80,name:'Kangaba-Central'},{parentId:'OA',id:81,name:'Narena'},{parentId:'OT',id:82,name:'Baguineda'},{parentId:'OT',id:83,name:'Kalban-Coro'},{parentId:'OT',id:84,name:'Kati-Central'},{parentId:'OT',id:85,name:'Kourouba'},{parentId:'OT',id:86,name:'Neguela'},{parentId:'OT',id:87,name:'Ouelessebougou'},{parentId:'OT',id:88,name:'Sanakoroba'},{parentId:'OT',id:89,name:'Siby'},{parentId:'OK',id:90,name:'Djidieni'},{parentId:'OK',id:91,name:'Kolokani-Central'},{parentId:'OK',id:92,name:'Massantola'},{parentId:'OK',id:93,name:'Nonssonbougou'},{parentId:'OU',id:94,name:'Kenekou'},{parentId:'OU',id:95,name:'Koula (Koul)'},{parentId:'OU',id:96,name:'Koulikoro-Central'},{parentId:'OU',id:97,name:'Niamina'},{parentId:'OU',id:98,name:'Sirakorola'},{parentId:'OU',id:99,name:'Tienfala'},{parentId:'OU',id:100,name:'Tougouni'},{parentId:'ON',id:101,name:'Balle'},{parentId:'ON',id:102,name:'Dilly'},{parentId:'ON',id:103,name:'Falou'},{parentId:'ON',id:104,name:'Guire'},{parentId:'ON',id:105,name:'Mourdiah'},{parentId:'ON',id:106,name:'Nara-Central'},{parentId:'MA',id:107,name:'Bandiagara-Central'},{parentId:'MA',id:108,name:'Bore'},{parentId:'MA',id:109,name:'Dourou'},{parentId:'MA',id:110,name:'Goundaka'},{parentId:'MA',id:111,name:'Kani-Gogouna'},{parentId:'MA',id:112,name:'Kendie'},{parentId:'MA',id:113,name:'Ningari'},{parentId:'MA',id:114,name:'Ouo'},{parentId:'MA',id:115,name:'Sangha'},{parentId:'MB',id:116,name:'Bandiagara-Central'},{parentId:'MB',id:117,name:'Bankass-Central'},{parentId:'MB',id:118,name:'Baye'},{parentId:'MB',id:119,name:'Diallassagou'},{parentId:'MB',id:120,name:'Kami-Bonzon'},{parentId:'MB',id:121,name:'Ouenkoro'},{parentId:'MB',id:122,name:'Segue'},{parentId:'MB',id:123,name:'Sokoura'},{parentId:'MJ',id:124,name:'Djenne-Central'},{parentId:'MJ',id:125,name:'Konio'},{parentId:'MJ',id:126,name:'Kouakourou'},{parentId:'MJ',id:127,name:'Mougna'},{parentId:'MJ',id:128,name:'Ouromodi'},{parentId:'MJ',id:129,name:'Sofara'},{parentId:'MJ',id:130,name:'Taga'},{parentId:'MD',id:131,name:'Boni'},{parentId:'MD',id:132,name:'Bore'},{parentId:'MD',id:133,name:'Douentzan-Central'},{parentId:'MD',id:134,name:'Hombori'},{parentId:'MD',id:135,name:'Mondoro'},{parentId:'MD',id:136,name:'NGouma'},{parentId:'MK',id:137,name:'Diankabou'},{parentId:'MK',id:138,name:'Dinangourou'},{parentId:'MK',id:139,name:'Dioungani'},{parentId:'MK',id:140,name:'Koporokeniena'},{parentId:'MK',id:141,name:'Koro-Central'},{parentId:'MK',id:142,name:'Madougou'},{parentId:'MK',id:143,name:'Ningari'},{parentId:'MK',id:144,name:'Toroli'},{parentId:'MM',id:145,name:'Dialloube'},{parentId:'MM',id:146,name:'Fatoma'},{parentId:'MM',id:147,name:'Konna'},{parentId:'MM',id:148,name:'Korientze'},{parentId:'MM',id:149,name:'Mopti-Central'},{parentId:'MM',id:150,name:'Ouromodi'},{parentId:'MM',id:151,name:'Sendegue'},{parentId:'MM',id:152,name:'Sossobe'},{parentId:'MM',id:153,name:'Soufouroulaye'},{parentId:'MM',id:154,name:'Soye'},{parentId:'MT',id:155,name:'Diafarabe'},{parentId:'MT',id:156,name:'Diondori'},{parentId:'MT',id:157,name:'Dioura'},{parentId:'MT',id:158,name:'Sossobe'},{parentId:'MT',id:159,name:'Tenenkou-Central'},{parentId:'MT',id:160,name:'Toguerecoumbe'},{parentId:'MY',id:161,name:'Ambiri'},{parentId:'MY',id:162,name:'Dogo'},{parentId:'MY',id:163,name:'Gathi-Loumo'},{parentId:'MY',id:164,name:'Guidio'},{parentId:'MY',id:165,name:'Sah'},{parentId:'MY',id:166,name:'Youwarou-Central'},{parentId:'SB',id:167,name:'Baroueli-Central'},{parentId:'SB',id:168,name:'Konobougou'},{parentId:'SB',id:169,name:'Sanando'},{parentId:'SB',id:170,name:'Tamani'},{parentId:'SL',id:171,name:'Bla-Central'},{parentId:'SL',id:172,name:'Diaramana'},{parentId:'SL',id:173,name:'Falo'},{parentId:'SL',id:174,name:'Touna'},{parentId:'SL',id:175,name:'Yangasso'},{parentId:'SK',id:176,name:'Bla-Central'},{parentId:'SM',id:177,name:'Kolongotomo'},{parentId:'SM',id:178,name:'Macina-Central'},{parentId:'SM',id:179,name:'Monimpe'},{parentId:'SM',id:180,name:'Pogo'},{parentId:'SM',id:181,name:'Sarro'},{parentId:'SM',id:182,name:'Saye'},{parentId:'SN',id:183,name:'Nampala'},{parentId:'SN',id:184,name:'Niono-Central'},{parentId:'SN',id:185,name:'Sokolo'},{parentId:'SS',id:186,name:'Dieli'},{parentId:'SS',id:187,name:'Kassorola'},{parentId:'SS',id:188,name:'Kimparana'},{parentId:'SS',id:189,name:'San-Central'},{parentId:'SS',id:190,name:'Sourountouna'},{parentId:'SS',id:191,name:'Sy'},{parentId:'SS',id:192,name:'Tene'},{parentId:'SG',id:193,name:'Cinzana'},{parentId:'SG',id:194,name:'Dioro'},{parentId:'SG',id:195,name:'Doura'},{parentId:'SG',id:196,name:'Farako'},{parentId:'SG',id:197,name:'Katiena'},{parentId:'SG',id:198,name:'Markala'},{parentId:'SG',id:199,name:'Niono-Central'},{parentId:'SG',id:200,name:'Sanando'},{parentId:'SG',id:201,name:'Sansading'},{parentId:'SG',id:202,name:'Segou-Central'},{parentId:'SG',id:203,name:'Tamani'},{parentId:'ST',id:204,name:'Fangasso'},{parentId:'ST',id:205,name:'Koula'},{parentId:'ST',id:206,name:'Mafoune'},{parentId:'ST',id:207,name:'Mandiakuy'},{parentId:'ST',id:208,name:'Timissa'},{parentId:'ST',id:209,name:'Tominiam-Central'},{parentId:'KB',id:210,name:'Bougouni-Central'},{parentId:'KB',id:211,name:'Dogo (Boug)'},{parentId:'KB',id:212,name:'Faragouaran'},{parentId:'KB',id:213,name:'Garalo'},{parentId:'KB',id:214,name:'Kangare'},{parentId:'KB',id:215,name:'Keleya'},{parentId:'KB',id:216,name:'Koumantou'},{parentId:'KB',id:217,name:'Manakoro'},{parentId:'KB',id:218,name:'Sanso'},{parentId:'KB',id:219,name:'Zantiebougou'},{parentId:'KA',id:220,name:'Fourou'},{parentId:'KA',id:221,name:'Kadiolo-Central'},{parentId:'KA',id:222,name:'Loulouni'},{parentId:'KA',id:223,name:'Misseni'},{parentId:'KO',id:224,name:'Fakola'},{parentId:'KO',id:225,name:'Kadiana'},{parentId:'KO',id:226,name:'Kebila'},{parentId:'KO',id:227,name:'Kolondieba-Central'},{parentId:'KO',id:228,name:'Toussekela'},{parentId:'KK',id:229,name:'Konseguela'},{parentId:'KK',id:230,name:'Kouniana'},{parentId:'KK',id:231,name:'Koutiala-Central'},{parentId:'KK',id:232,name:'Molobala'},{parentId:'KK',id:233,name:'MPessoba'},{parentId:'KK',id:234,name:'Zangasso'},{parentId:'KS',id:235,name:'Blendio'},{parentId:'KS',id:236,name:'Danderesso'},{parentId:'KS',id:237,name:'Dogori'},{parentId:'KS',id:238,name:'Finkolo'},{parentId:'KS',id:239,name:'Kignan'},{parentId:'KS',id:240,name:'Klela'},{parentId:'KS',id:241,name:'Lobougoula'},{parentId:'KS',id:242,name:'Niena'},{parentId:'KS',id:243,name:'Nkourala'},{parentId:'KS',id:244,name:'Sikasso-Central'},{parentId:'KF',id:245,name:'Doussodiana'},{parentId:'KF',id:246,name:'Filamana'},{parentId:'KF',id:247,name:'Gueleninkoro'},{parentId:'KF',id:248,name:'Kalana'},{parentId:'KF',id:249,name:'Kangare'},{parentId:'KF',id:250,name:'Siekorole'},{parentId:'KF',id:251,name:'Yanfolila-Central'},{parentId:'KF',id:252,name:'Yorobougoula'},{parentId:'KY',id:253,name:'Boura'},{parentId:'KY',id:254,name:'Kouri'},{parentId:'KY',id:255,name:'Mahou'},{parentId:'KY',id:256,name:'Yorosso-Central'},{parentId:'TD',id:257,name:'Danga'},{parentId:'TD',id:258,name:'Dire-Central'},{parentId:'TD',id:259,name:'Haibongo'},{parentId:'TD',id:260,name:'Sareyamou'},{parentId:'TG',id:261,name:'Bintagoungou'},{parentId:'TG',id:262,name:'Douekire'},{parentId:'TG',id:263,name:'Farach'},{parentId:'TG',id:264,name:'Gargando'},{parentId:'TG',id:265,name:'Goundam-Central'},{parentId:'TG',id:266,name:'Raz-El-Ma'},{parentId:'TG',id:267,name:'Tilemsi (Lenere)'},{parentId:'TG',id:268,name:'Tonka'},{parentId:'TR',id:269,name:'Bambara-Maoude'},{parentId:'TR',id:270,name:'Gossi'},{parentId:'TR',id:271,name:'Gourma-Rharous'},{parentId:'TR',id:272,name:'Haribomo'},{parentId:'TR',id:273,name:'Inadiatafane'},{parentId:'TR',id:274,name:'Modiakoye'},{parentId:'TR',id:275,name:'Ouinerden'},{parentId:'TN',id:276,name:'Banikane'},{parentId:'TN',id:277,name:'Koumaira'},{parentId:'TN',id:278,name:'Lere'},{parentId:'TN',id:279,name:'NGorkou'},{parentId:'TN',id:280,name:'Nianfuke-Central'},{parentId:'TN',id:281,name:'Sarafere'},{parentId:'TN',id:282,name:'Soumpi'},{parentId:'TT',id:283,name:'Aglal'},{parentId:'TT',id:284,name:'Ber'},{parentId:'TT',id:285,name:'Bourem-Inaly'},{parentId:'TT',id:286,name:'Tinaguelhaj'},{parentId:'TT',id:287,name:'Tombouctou-Central'}]}])

.constant('sl', [{depth:0,name:'region',items:[{id:'E',name:'east'},{id:'N',name:'north'},{id:'S',name:'south'},{id:'W',name:'west'}]},{depth:1,name:'district',items:[{id:'1',name:'bo',parentId:'S'},{id:'11',name:'kailahun',parentId:'E'},{id:'12',name:'kenema',parentId:'E'},{id:'13',name:'kono',parentId:'E'},{id:'2',name:'bonthe',parentId:'S'},{id:'21',name:'bombali',parentId:'N'},{id:'22',name:'kambia',parentId:'N'},{id:'23',name:'koinadugu',parentId:'N'},{id:'24',name:'port loko',parentId:'N'},{id:'25',name:'tonkolili',parentId:'N'},{id:'3',name:'moyamba',parentId:'S'},{id:'31',name:'western urban',parentId:'W'},{id:'32',name:'western rural',parentId:'W'},{id:'4',name:'pujehun',parentId:'S'},{id:'5',name:'bonthe island',parentId:'S'}]},{depth:2,name:'chiefdom',items:[{id:'11-01',name:'dia',parentId:'11'},{id:'11-02',name:'jawi',parentId:'11'},{id:'11-03',name:'kissi kama',parentId:'11'},{id:'11-04',name:'kissi teng',parentId:'11'},{id:'11-05',name:'kissi tongi',parentId:'11'},{id:'11-06',name:'peje bongre',parentId:'11'},{id:'11-07',name:'peje west (kpejewaa)',parentId:'11'},{id:'11-08',name:'luawa',parentId:'11'},{id:'11-09',name:'malema',parentId:'11'},{id:'11-10',name:'mandu',parentId:'11'},{id:'11-11',name:'jaluahun',parentId:'11'},{id:'11-12',name:'penguia',parentId:'11'},{id:'11-13',name:'upper bambara',parentId:'11'},{id:'11-14',name:'yawei',parentId:'11'},{id:'12-01',name:'dama',parentId:'12'},{id:'12-02',name:'dodo',parentId:'12'},{id:'12-03',name:'gaura',parentId:'12'},{id:'12-04',name:'gorama mende',parentId:'12'},{id:'12-05',name:'kandu legbewama',parentId:'12'},{id:'12-06',name:'koya',parentId:'12'},{id:'12-07',name:'langrama',parentId:'12'},{id:'12-08',name:'lower bambara',parentId:'12'},{id:'12-09',name:'malegohun',parentId:'12'},{id:'12-10',name:'nyawa',parentId:'12'},{id:'12-11',name:'nomo',parentId:'12'},{id:'12-12',name:'nongowa',parentId:'12'},{id:'12-13',name:'simbaru',parentId:'12'},{id:'12-14',name:'small bo',parentId:'12'},{id:'12-15',name:'tunkia',parentId:'12'},{id:'12-16',name:'wando',parentId:'12'},{id:'13-01',name:'fiama',parentId:'13'},{id:'13-02',name:'gbaneh',parentId:'13'},{id:'13-03',name:'gbaneh kandor',parentId:'13'},{id:'13-04',name:'gbenseh',parentId:'13'},{id:'13-05',name:'gorama (ngorama)',parentId:'13'},{id:'13-06',name:'kamara',parentId:'13'},{id:'13-07',name:'lei',parentId:'13'},{id:'13-08',name:'mafindor',parentId:'13'},{id:'13-09',name:'nimikoro',parentId:'13'},{id:'13-10',name:'nimiyama',parentId:'13'},{id:'13-11',name:'sandor',parentId:'13'},{id:'13-12',name:'soa',parentId:'13'},{id:'13-13',name:'tankoro',parentId:'13'},{id:'13-14',name:'toli',parentId:'13'},{id:'21-01',name:'biriwa',parentId:'21'},{id:'21-02',name:'bombali sebora',parentId:'21'},{id:'21-03',name:'gbanti kamaranka',parentId:'21'},{id:'21-04',name:'gbendembu gowahun',parentId:'21'},{id:'21-05',name:'libeisaygahun',parentId:'21'},{id:'21-06',name:'magbaiamba',parentId:'21'},{id:'21-07',name:'makari gbanti',parentId:'21'},{id:'21-08',name:'paki masabong',parentId:'21'},{id:'21-09',name:'safroko limba',parentId:'21'},{id:'21-10',name:'sanda loko',parentId:'21'},{id:'21-11',name:'sanda tenraran',parentId:'21'},{id:'21-12',name:'sella limba',parentId:'21'},{id:'21-13',name:'tambakha',parentId:'21'},{id:'22-01',name:'gbinle dixing',parentId:'22'},{id:'22-02',name:'bramaia',parentId:'22'},{id:'22-03',name:'magbema',parentId:'22'},{id:'22-04',name:'mambolo',parentId:'22'},{id:'22-05',name:'masungbala',parentId:'22'},{id:'22-06',name:'samu',parentId:'22'},{id:'22-07',name:'tonko limba',parentId:'22'},{id:'23-01',name:'dembelia sinkunia',parentId:'23'},{id:'23-02',name:'diang',parentId:'23'},{id:'23-03',name:'dembelia musaia',parentId:'23'},{id:'23-04',name:'kasunko',parentId:'23'},{id:'23-05',name:'mongo',parentId:'23'},{id:'23-06',name:'neya',parentId:'23'},{id:'23-07',name:'nieni',parentId:'23'},{id:'23-08',name:'sengbe',parentId:'23'},{id:'23-09',name:'sulima',parentId:'23'},{id:'23-10',name:'wara wara bafodea',parentId:'23'},{id:'23-11',name:'wara wara yagala',parentId:'23'},{id:'24-01',name:'bureh kasseh mabonteh',parentId:'24'},{id:'24-02',name:'buya romende',parentId:'24'},{id:'24-03',name:'dibia',parentId:'24'},{id:'24-04',name:'kaffu bullom',parentId:'24'},{id:'24-05',name:'koya',parentId:'24'},{id:'24-06',name:'loko masama',parentId:'24'},{id:'24-07',name:'maforki',parentId:'24'},{id:'24-08',name:'marampa',parentId:'24'},{id:'24-09',name:'masimra',parentId:'24'},{id:'24-10',name:'sanda magbolonton',parentId:'24'},{id:'24-11',name:'t. m. safroko',parentId:'24'},{id:'25-01',name:'gbonkolenken',parentId:'25'},{id:'25-02',name:'kafe simiria',parentId:'25'},{id:'25-03',name:'kalansongoia',parentId:'25'},{id:'25-04',name:'kholifa',parentId:'25'},{id:'25-05',name:'kholifa mabang',parentId:'25'},{id:'25-06',name:'kunike',parentId:'25'},{id:'25-07',name:'kunike barina',parentId:'25'},{id:'25-08',name:'malal',parentId:'25'},{id:'25-09',name:'sambaia',parentId:'25'},{id:'25-10',name:'tane',parentId:'25'},{id:'25-11',name:'yoni',parentId:'25'},{id:'1-01',name:'badja',parentId:'1'},{id:'1-02',name:'bagbo',parentId:'1'},{id:'1-03',name:'bagwe',parentId:'1'},{id:'1-04',name:'baoma',parentId:'1'},{id:'1-05',name:'bumpe',parentId:'1'},{id:'1-06',name:'gbo',parentId:'1'},{id:'1-07',name:'jaiama bongor',parentId:'1'},{id:'1-08',name:'kakua',parentId:'1'},{id:'1-09',name:'komboya',parentId:'1'},{id:'1-10',name:'lugbu',parentId:'1'},{id:'1-11',name:'nyawa lenga',parentId:'1'},{id:'1-12',name:'selenga',parentId:'1'},{id:'1-13',name:'tikonko',parentId:'1'},{id:'1-14',name:'valunia',parentId:'1'},{id:'1-15',name:'wunde',parentId:'1'},{id:'2-01',name:'bendu cha',parentId:'2'},{id:'2-02',name:'bum',parentId:'2'},{id:'2-03',name:'dema',parentId:'2'},{id:'2-04',name:'imperri',parentId:'2'},{id:'2-05',name:'jong',parentId:'2'},{id:'2-06',name:'kpando kemo',parentId:'2'},{id:'2-07',name:'kwamebai krim',parentId:'2'},{id:'2-08',name:'nongoba bullom',parentId:'2'},{id:'2-09',name:'sitia',parentId:'2'},{id:'2-10',name:'sogbini',parentId:'2'},{id:'2-11',name:'yawbeko',parentId:'2'},{id:'3-01',name:'bagruwa',parentId:'3'},{id:'3-02',name:'bumpe',parentId:'3'},{id:'3-03',name:'dasse',parentId:'3'},{id:'3-04',name:'fakunya',parentId:'3'},{id:'3-05',name:'kagboro',parentId:'3'},{id:'3-06',name:'kaiyamba',parentId:'3'},{id:'3-07',name:'kamajei',parentId:'3'},{id:'3-08',name:'kongbora',parentId:'3'},{id:'3-09',name:'kori',parentId:'3'},{id:'3-10',name:'kowa',parentId:'3'},{id:'3-11',name:'lower banta',parentId:'3'},{id:'3-12',name:'ribbi',parentId:'3'},{id:'3-13',name:'timdel',parentId:'3'},{id:'3-14',name:'upper banta',parentId:'3'},{id:'4-01',name:'barri',parentId:'4'},{id:'4-02',name:'gallinas perri',parentId:'4'},{id:'4-03',name:'kpaka',parentId:'4'},{id:'4-04',name:'makpele',parentId:'4'},{id:'4-05',name:'malen',parentId:'4'},{id:'4-06',name:'mano sakrim',parentId:'4'},{id:'4-07',name:'panga kabonde',parentId:'4'},{id:'4-08',name:'panga krim',parentId:'4'},{id:'4-09',name:'peje',parentId:'4'},{id:'4-10',name:'soro gbema',parentId:'4'},{id:'4-11',name:'sowa',parentId:'4'},{id:'4-12',name:'yakemo kpukumu krim',parentId:'4'},{id:'5-01',name:'bonthe island',parentId:'5'},{id:'5-02',name:'bonthe town',parentId:'5'},{id:'5-03',name:'york island',parentId:'5'},{id:'31-01',name:'east i',parentId:'31'},{id:'31-02',name:'east ii',parentId:'31'},{id:'31-03',name:'east iii',parentId:'31'},{id:'31-04',name:'central i',parentId:'31'},{id:'31-05',name:'central ii',parentId:'31'},{id:'31-06',name:'west i',parentId:'31'},{id:'31-07',name:'west ii',parentId:'31'},{id:'31-08',name:'west iii',parentId:'31'},{id:'32-01',name:'koya',parentId:'32'},{id:'32-02',name:'mountain',parentId:'32'},{id:'32-03',name:'waterloo',parentId:'32'},{id:'32-04',name:'york',parentId:'32'}]}])

.constant('lr', [{depth:0,name:'county',plural:'counties',items:[{name:'montserrado',id:1},{name:'bong',id:2},{name:'gbapolu',id:3},{name:'grand bassa',id:4},{name:'grand cape mount',id:5},{name:'grand gedeh',id:6},{name:'grand kru',id:7},{name:'lofa',id:8},{name:'margibi',id:9},{name:'maryland',id:10},{name:'nimba',id:11},{name:'rivercess',id:12},{name:'rivergee',id:13},{name:'sinoe',id:14},{name:'bomi',id:15}]},{depth:1,name:'district',plural:'districs',items:[{id:1,name:'District #1',parentId:1},{id:2,name:'District #2',parentId:1},{id:3,name:'District #3',parentId:1},{id:4,name:'District #4',parentId:1},{id:5,name:'District #5',parentId:1},{id:6,name:'District #6',parentId:1},{id:7,name:'District #7',parentId:1},{id:8,name:'District #8',parentId:1},{id:9,name:'District #9',parentId:1},{id:10,name:'District #10',parentId:1},{id:11,name:'District #11',parentId:1},{id:12,name:'District #12',parentId:1},{id:13,name:'District #13',parentId:1},{id:14,name:'District #14',parentId:1},{id:15,name:'District #15',parentId:1},{id:16,name:'District #16',parentId:1},{id:17,name:'District #17',parentId:1},{id:18,name:'District #1',parentId:2},{id:19,name:'District #2',parentId:2},{id:20,name:'District #3',parentId:2},{id:21,name:'District #4',parentId:2},{id:22,name:'District #5',parentId:2},{id:23,name:'District #6',parentId:2},{id:24,name:'District #7',parentId:2},{id:25,name:'District #1',parentId:3},{id:26,name:'District #2',parentId:3},{id:27,name:'District #3',parentId:3},{id:28,name:'District #1',parentId:4},{id:29,name:'District #2',parentId:4},{id:30,name:'District #3',parentId:4},{id:31,name:'District #4',parentId:4},{id:32,name:'District #5',parentId:4},{id:33,name:'District #1',parentId:5},{id:34,name:'District #2',parentId:5},{id:35,name:'District #3',parentId:5},{id:36,name:'District #1',parentId:6},{id:37,name:'District #2',parentId:6},{id:38,name:'District #3',parentId:6},{id:39,name:'District #1',parentId:7},{id:40,name:'District #2',parentId:7},{id:41,name:'District #1',parentId:8},{id:42,name:'District #2',parentId:8},{id:43,name:'District #3',parentId:8},{id:44,name:'District #4',parentId:8},{id:45,name:'District #5',parentId:8},{id:46,name:'District #1',parentId:9},{id:47,name:'District #2',parentId:9},{id:48,name:'District #3',parentId:9},{id:49,name:'District #4',parentId:9},{id:50,name:'District #5',parentId:9},{id:51,name:'District #1',parentId:10},{id:52,name:'District #2',parentId:10},{id:53,name:'District #3',parentId:10},{id:54,name:'District #1',parentId:11},{id:55,name:'District #2',parentId:11},{id:56,name:'District #3',parentId:11},{id:57,name:'District #4',parentId:11},{id:58,name:'District #5',parentId:11},{id:59,name:'District #6',parentId:11},{id:57,name:'District #7',parentId:11},{id:58,name:'District #8',parentId:11},{id:59,name:'District #9',parentId:11},{id:60,name:'District #1',parentId:12},{id:61,name:'District #2',parentId:12},{id:62,name:'District #1',parentId:13},{id:63,name:'District #2',parentId:13},{id:64,name:'District #3',parentId:13},{id:65,name:'District #1',parentId:14},{id:66,name:'District #2',parentId:14},{id:67,name:'District #3',parentId:14},{id:68,name:'District #1',parentId:15},{id:69,name:'District #2',parentId:15},{id:70,name:'District #3',parentId:15}]}])

.constant('gn', [{depth:0,name:'région',plural:'régions',items:[{name:'conakry',id:'C'},{name:'boké',id:'B'},{name:'faranah',id:'F'},{name:'kankan',id:'K'},{name:'kindia',id:'D'},{name:'labé',id:'L'},{name:'mamou',id:'M'},{name:'n\'zérékoré',id:'N'}]},{depth:1,name:'préfecture',plural:'préfectures',items:[{id:'BE',name:'beyla',parentId:'N'},{id:'BF',name:'boffa',parentId:'B'},{id:'BK',name:'boké',parentId:'B'},{id:'CY',name:'conakry',parentId:'C'},{id:'CO',name:'coyah',parentId:'D'},{id:'DB',name:'dabola',parentId:'F'},{id:'DL',name:'dalaba',parentId:'M'},{id:'DI',name:'dinguiraye',parentId:'F'},{id:'DU',name:'dubréka',parentId:'D'},{id:'FA',name:'faranah',parentId:'F'},{id:'FO',name:'forécariah',parentId:'D'},{id:'FR',name:'fria',parentId:'B'},{id:'GA',name:'gaoual',parentId:'B'},{id:'GU',name:'guékédou',parentId:'N'},{id:'KA',name:'kankan',parentId:'K'},{id:'KE',name:'kérouané',parentId:'K'},{id:'KD',name:'kindia',parentId:'D'},{id:'KS',name:'kissidougou',parentId:'F'},{id:'KB',name:'koubia',parentId:'L'},{id:'KN',name:'koundara',parentId:'B'},{id:'KO',name:'kouroussa',parentId:'K'},{id:'LA',name:'labé',parentId:'L'},{id:'LE',name:'lélouma',parentId:'L'},{id:'LO',name:'lola',parentId:'N'},{id:'MC',name:'macenta',parentId:'N'},{id:'ML',name:'mali',parentId:'L'},{id:'MM',name:'mamou',parentId:'M'},{id:'MD',name:'mandiana',parentId:'K'},{id:'NZ',name:'nzérékoré',parentId:'N'},{id:'PI',name:'pita',parentId:'M'},{id:'SI',name:'siguiri',parentId:'K'},{id:'TE',name:'télimélé',parentId:'D'},{id:'TO',name:'tougué',parentId:'L'},{id:'YO',name:'yomou',parentId:'N'}]},{depth:2,name:'sous-préfecture',plural:'sous-préfectures',items:[{id:1,name:'albadariah',parentId:'KS'},{id:2,name:'alassoya',parentId:'FO'},{id:3,name:'arfamoussaya',parentId:'DA'},{id:4,name:'babila',parentId:'KO'},{id:5,name:'badi',parentId:'DU'},{id:6,name:'baguinet',parentId:'FR'},{id:7,name:'balaki',parentId:'ML'},{id:8,name:'balandougou',parentId:'KA'},{id:9,name:'balandougouba',parentId:'MD'},{id:10,name:'balato',parentId:'KO'},{id:11,name:'balaya',parentId:'LE'},{id:12,name:'balizia',parentId:'MC'},{id:13,name:'banama',parentId:'KS'},{id:14,name:'banankoro',parentId:'KE'},{id:15,name:'banfélé',parentId:'KO'},{id:16,name:'bangouyah',parentId:'KD'},{id:17,name:'banguigny',parentId:'FR'},{id:18,name:'banian',parentId:'FA'},{id:19,name:'banié',parentId:'YO'},{id:20,name:'banko',parentId:'DA'},{id:21,name:'bankon',parentId:'SI'},{id:22,name:'banora',parentId:'DI'},{id:23,name:'bantignel',parentId:'PI'},{id:24,name:'bardou',parentId:'KS'},{id:25,name:'baro',parentId:'KO'},{id:26,name:'baté-nafadji',parentId:'KA'},{id:27,name:'beindou, faranah',parentId:'FA'},{id:28,name:'beindou, kissidougou',parentId:'KS'},{id:29,name:'benty',parentId:'FO'},{id:30,name:'beyla-centre',parentId:'BE'},{id:31,name:'bheeta',parentId:'YO'},{id:32,name:'bignamou',parentId:'YO'},{id:33,name:'binikala',parentId:'MC'},{id:34,name:'bintimodiya',parentId:'BK'},{id:35,name:'bissikrima',parentId:'DB'},{id:36,name:'bodié',parentId:'DL'},{id:37,name:'boffa-centre',parentId:'BF'},{id:38,name:'bofossou',parentId:'MC'},{id:39,name:'boké-centre',parentId:'BK'},{id:40,name:'bolodou',parentId:'GU'},{id:41,name:'boola',parentId:'BE'},{id:42,name:'bossou',parentId:'LO'},{id:43,name:'boula',parentId:'KA'},{id:44,name:'bouliwel',parentId:'MM'},{id:45,name:'bounouma',parentId:'NZ'},{id:46,name:'bourouwal',parentId:'TE'},{id:47,name:'bowé',parentId:'YO'},{id:48,name:'bourouwal-tappé',parentId:'PI'},{id:49,name:'cisséla',parentId:'KO'},{id:50,name:'coyah-centre',parentId:'CO'},{id:51,name:'dabiss',parentId:'BK'},{id:52,name:'dabola-centre',parentId:'DB'},{id:53,name:'dalaba-centre',parentId:'DL'},{id:54,name:'dalein',parentId:'LA'},{id:55,name:'damankanyah',parentId:'KD'},{id:56,name:'damaro',parentId:'KE'},{id:57,name:'daralabe',parentId:'LA'},{id:58,name:'daramagnaky',parentId:'TE'},{id:59,name:'daro',parentId:'MC'},{id:60,name:'dialakoro, faranah',parentId:'DI'},{id:61,name:'dialakoro, kankan',parentId:'MD'},{id:62,name:'diara-guerela',parentId:'BE'},{id:63,name:'diari',parentId:'LA'},{id:64,name:'diassodou',parentId:'BE'},{id:65,name:'diatiféré',parentId:'DI'},{id:66,name:'diécké',parentId:'YO'},{id:67,name:'dinguiraye-centre',parentId:'DI'},{id:68,name:'dionfo',parentId:'LA'},{id:69,name:'diountou',parentId:'LE'},{id:70,name:'ditinn',parentId:'DL'},{id:71,name:'dixinn',parentId:'CY'},{id:72,name:'dogomet',parentId:'DB'},{id:73,name:'doko',parentId:'SI'},{id:74,name:'donghol-sigon',parentId:'ML'},{id:75,name:'dongol-touma',parentId:'PI'},{id:76,name:'douako',parentId:'KO'},{id:77,name:'dougountouny',parentId:'ML'},{id:78,name:'dounet',parentId:'MM'},{id:79,name:'douprou',parentId:'BF'},{id:80,name:'doura',parentId:'KO'},{id:81,name:'dubréka-centre',parentId:'DU'},{id:82,name:'fafaya',parentId:'KB'},{id:83,name:'falessade',parentId:'DU'},{id:84,name:'fangamadou',parentId:'GU'},{id:85,name:'faralako',parentId:'MD'},{id:86,name:'faranah-centre',parentId:'FA'},{id:87,name:'farmoriah',parentId:'FO'},{id:88,name:'fassankoni',parentId:'MC'},{id:89,name:'fatako',parentId:'TO'},{id:90,name:'fello-koundoua',parentId:'TO'},{id:91,name:'fermessadou-pombo',parentId:'KS'},{id:92,name:'firawa',parentId:'KS'},{id:93,name:'forécariah-centre',parentId:'FO'},{id:94,name:'fouala',parentId:'BE'},{id:95,name:'fougou',parentId:'ML'},{id:96,name:'foulamory',parentId:'GA'},{id:97,name:'foumbadou',parentId:'LO'},{id:98,name:'franwalia',parentId:'SI'},{id:99,name:'fria-centre',parentId:'FR'},{id:100,name:'friguiagbé',parentId:'KD'},{id:101,name:'gadha-woundou',parentId:'KB'},{id:102,name:'gagnakali',parentId:'DI'},{id:103,name:'gama-béréma',parentId:'LO'},{id:104,name:'gaoual-centre',parentId:'GA'},{id:105,name:'garambé',parentId:'LA'},{id:106,name:'gayah',parentId:'ML'},{id:107,name:'gbakedou',parentId:'BE'},{id:108,name:'gbangbadou',parentId:'KS'},{id:109,name:'gbérédou-baranama',parentId:'KA'},{id:110,name:'gbessoba',parentId:'BE'},{id:111,name:'gnaléah',parentId:'FA'},{id:112,name:'gongore',parentId:'PI'},{id:113,name:'gongoret',parentId:'MM'},{id:114,name:'gouécké',parentId:'NZ'},{id:115,name:'gougoudjé',parentId:'TE'},{id:116,name:'guendembou',parentId:'GU'},{id:117,name:'guéassou',parentId:'LO'},{id:118,name:'guéckédou-centre',parentId:'GU'},{id:119,name:'guingan',parentId:'KN'},{id:120,name:'hafia',parentId:'LA'},{id:121,name:'hérémakonon',parentId:'FA'},{id:122,name:'hérico',parentId:'LE'},{id:123,name:'hidayatou',parentId:'ML'},{id:124,name:'kaala',parentId:'DL'},{id:125,name:'kaalan',parentId:'LA'},{id:126,name:'kaback',parentId:'FO'},{id:127,name:'kakony',parentId:'GA'},{id:128,name:'kakossa',parentId:'FO'},{id:129,name:'kalinko',parentId:'DI'},{id:130,name:'kallia',parentId:'FO'},{id:131,name:'kaloum',parentId:'CY'},{id:132,name:'kamaby',parentId:'KN'},{id:133,name:'kamsar',parentId:'BK'},{id:134,name:'kanfarandé',parentId:'BK'},{id:135,name:'kankalabé',parentId:'DL'},{id:136,name:'kankama',parentId:'DB'},{id:137,name:'kankan-centre',parentId:'KA'},{id:138,name:'kansangui',parentId:'TO'},{id:139,name:'kantoumania',parentId:'MD'},{id:140,name:'karala',parentId:'BE'},{id:141,name:'kanfamoriyah',parentId:'KA'},{id:142,name:'kassadou',parentId:'GU'},{id:143,name:'kébali',parentId:'DL'},{id:144,name:'kégnéko',parentId:'MM'},{id:145,name:'kérouané-centre',parentId:'KE'},{id:146,name:'khorira',parentId:'DU'},{id:147,name:'kindia-centre',parentId:'KD'},{id:148,name:'kindoyé',parentId:'DB'},{id:149,name:'kiniébakoura',parentId:'SI'},{id:150,name:'kiniéran',parentId:'MD'},{id:151,name:'kiniéro',parentId:'KO'},{id:152,name:'kintinian',parentId:'SI'},{id:153,name:'kissidougou-centre',parentId:'KS'},{id:154,name:'koba, dalaba',parentId:'DL'},{id:155,name:'koba, télimélé',parentId:'TE'},{id:156,name:'koba-tatema',parentId:'BF'},{id:157,name:'kobéla',parentId:'NZ'},{id:158,name:'kobikoro',parentId:'FA'},{id:159,name:'koïn',parentId:'TO'},{id:160,name:'kokota',parentId:'LO'},{id:161,name:'kolaboui',parentId:'BK'},{id:162,name:'kolangui',parentId:'TO'},{id:163,name:'kolenté',parentId:'KD'},{id:164,name:'kollet, tougué',parentId:'TO'},{id:165,name:'kolia',parentId:'BF'},{id:166,name:'kollet, télimélé',parentId:'TE'},{id:167,name:'komodou',parentId:'KE'},{id:168,name:'komola-koura',parentId:'KO'},{id:169,name:'konah',parentId:'TO'},{id:170,name:'kondiadou',parentId:'KS'},{id:171,name:'konindou',parentId:'DB'},{id:172,name:'konkouré',parentId:'MM'},{id:173,name:'konsotamy',parentId:'TE'},{id:174,name:'korbé',parentId:'LE'},{id:175,name:'koropara',parentId:'NZ'},{id:176,name:'kouankan',parentId:'MC'},{id:177,name:'koubia-centre',parentId:'KB'},{id:178,name:'koulé',parentId:'NZ'},{id:179,name:'koumana',parentId:'KO'},{id:180,name:'koumandou',parentId:'BE'},{id:181,name:'koumban',parentId:'KA'},{id:182,name:'koumbia',parentId:'GA'},{id:183,name:'koundara-centre',parentId:'KN'},{id:184,name:'koundian',parentId:'MD'},{id:185,name:'koundianakoro',parentId:'MD'},{id:186,name:'koundou',parentId:'GU'},{id:187,name:'kounsankoro',parentId:'KE'},{id:188,name:'kounsitel',parentId:'GA'},{id:189,name:'kouramangui',parentId:'LA'},{id:190,name:'kouratongo',parentId:'TO'},{id:191,name:'kouriah',parentId:'CO'},{id:192,name:'kouroussa-centre',parentId:'KO'},{id:193,name:'koyamah',parentId:'MC'},{id:194,name:'labé-centre',parentId:'LA'},{id:195,name:'lafou',parentId:'LE'},{id:196,name:'lainé',parentId:'LO'},{id:197,name:'lansanya',parentId:'DI'},{id:198,name:'lébékére',parentId:'ML'},{id:199,name:'lélouma-centre',parentId:'LE'},{id:200,name:'ley-miro',parentId:'PI'},{id:201,name:'linko',parentId:'KE'},{id:202,name:'linsan saran',parentId:'LE'},{id:203,name:'lisso',parentId:'BF'},{id:204,name:'lola-centre',parentId:'LO'},{id:205,name:'macenta-centre',parentId:'MC'},{id:206,name:'maci',parentId:'PI'},{id:207,name:'madina-oula',parentId:'KD'},{id:208,name:'madina-wora',parentId:'ML'},{id:209,name:'mafara',parentId:'DL'},{id:210,name:'maférinya',parentId:'FO'},{id:211,name:'malanta',parentId:'GA'},{id:212,name:'malapouyah',parentId:'BK'},{id:213,name:'maléah',parentId:'SI'},{id:214,name:'mali-centre',parentId:'ML'},{id:215,name:'mambia',parentId:'KD'},{id:216,name:'mamou-centre',parentId:'MM'},{id:217,name:'mamouroudou',parentId:'KA'},{id:218,name:'manda',parentId:'LE'},{id:219,name:'mandiana-centre',parentId:'MD'},{id:220,name:'manéah',parentId:'CO'},{id:221,name:'manfran',parentId:'KS'},{id:222,name:'mankountan',parentId:'BF'},{id:223,name:'marela',parentId:'FA'},{id:224,name:'matakaou',parentId:'KB'},{id:225,name:'matam',parentId:'CY'},{id:226,name:'matoto',parentId:'CY'},{id:227,name:'missamana',parentId:'KA'},{id:228,name:'missira, kindia',parentId:'KB'},{id:229,name:'missira, télimélé',parentId:'TE'},{id:230,name:'mitty',parentId:'DL'},{id:231,name:'molota',parentId:'KD'},{id:232,name:'mombéyah',parentId:'DL'},{id:233,name:'moribayah',parentId:'KA'},{id:234,name:'morodou',parentId:'MD'},{id:235,name:'moussadou',parentId:'BE'},{id:236,name:'moussayah',parentId:'FO'},{id:237,name:'naboun',parentId:'SI'},{id:238,name:'n\'déma',parentId:'DB'},{id:239,name:'niagassola',parentId:'SI'},{id:240,name:'niandankoro',parentId:'SI'},{id:241,name:'niantania',parentId:'MD'},{id:242,name:'ninguélandé',parentId:'PI'},{id:243,name:'nionsomoridou',parentId:'BE'},{id:244,name:'nongoa',parentId:'GU'},{id:245,name:'norassoba',parentId:'SI'},{id:246,name:'noussy',parentId:'LA'},{id:247,name:'nyagara',parentId:'MM'},{id:248,name:'n\'zébéla',parentId:'MC'},{id:249,name:'n\'zérékoré-centre',parentId:'NZ'},{id:250,name:'n\'zoo',parentId:'LO'},{id:251,name:'ouassou',parentId:'DU'},{id:252,name:'ouéndé-kénéma',parentId:'GU'},{id:253,name:'ouré-kaba',parentId:'MM'},{id:254,name:'ourémaï',parentId:'MC'},{id:255,name:'palé',parentId:'NZ'},{id:256,name:'panziazou',parentId:'MC'},{id:257,name:'parawol',parentId:'LE'},{id:258,name:'passayah',parentId:'FA'},{id:259,name:'péla',parentId:'YO'},{id:260,name:'pilimini',parentId:'KB'},{id:261,name:'pita-centre',parentId:'PI'},{id:262,name:'popodara',parentId:'LA'},{id:263,name:'porédaka',parentId:'MM'},{id:264,name:'ratoma',parentId:'CY'},{id:265,name:'sabadou-baranama',parentId:'KA'},{id:266,name:'sagalé',parentId:'LE'},{id:267,name:'sokourala',parentId:'BE'},{id:268,name:'saladou',parentId:'MD'},{id:269,name:'salambandé',parentId:'ML'},{id:270,name:'samana',parentId:'BE'},{id:271,name:'samayah',parentId:'KD'},{id:272,name:'sambailo',parentId:'KN'},{id:273,name:'samoé',parentId:'NZ'},{id:274,name:'sandéniah',parentId:'FA'},{id:275,name:'sangardo',parentId:'KS'},{id:276,name:'sangaréah',parentId:'PI'},{id:277,name:'sangarédi',parentId:'BK'},{id:278,name:'sanguiana',parentId:'KO'},{id:279,name:'sannou',parentId:'LA'},{id:280,name:'sansalé',parentId:'BK'},{id:281,name:'sansando',parentId:'MD'},{id:282,name:'santou',parentId:'TE'},{id:283,name:'saramoussaya',parentId:'MM'},{id:284,name:'saréboido',parentId:'KN'},{id:285,name:'sarékaly',parentId:'TE'},{id:286,name:'sengbédou',parentId:'MC'},{id:287,name:'sélouma',parentId:'DI'},{id:288,name:'sérédou',parentId:'MC'},{id:289,name:'sibiribaro',parentId:'KE'},{id:290,name:'siguiri-centre',parentId:'SI'},{id:291,name:'siguirini',parentId:'SI'},{id:292,name:'sikhourou',parentId:'FO'},{id:293,name:'sinko',parentId:'BE'},{id:294,name:'sinta',parentId:'TE'},{id:295,name:'sintali',parentId:'PI'},{id:296,name:'sogolon',parentId:'TE'},{id:297,name:'songoyah',parentId:'FA'},{id:298,name:'soromaya',parentId:'KE'},{id:299,name:'souguéta',parentId:'KD'},{id:300,name:'soulouta',parentId:'NZ'},{id:301,name:'soyah',parentId:'MM'},{id:302,name:'tamita',parentId:'BF'},{id:303,name:'tanéné, dubréka',parentId:'DU'},{id:304,name:'tanéné, boké',parentId:'BK'},{id:305,name:'tangali',parentId:'TO'},{id:306,name:'tarihoye',parentId:'TE'},{id:307,name:'téguéréya',parentId:'MM'},{id:308,name:'tékoulo',parentId:'GU'},{id:309,name:'télimélé-centre',parentId:'TE'},{id:310,name:'téliré',parentId:'ML'},{id:311,name:'termessadou-dibo',parentId:'GU'},{id:312,name:'termessé',parentId:'KN'},{id:313,name:'thionthian',parentId:'TE'},{id:314,name:'tyanguel-bori',parentId:'LE'},{id:315,name:'timbi-madina',parentId:'PI'},{id:316,name:'timbi-touny',parentId:'PI'},{id:317,name:'timbo',parentId:'MM'},{id:318,name:'tinti-oulen',parentId:'KA'},{id:319,name:'tiro',parentId:'FA'},{id:320,name:'tokounou',parentId:'KA'},{id:321,name:'tolo',parentId:'MM'},{id:322,name:'tondon',parentId:'DU'},{id:323,name:'tormélin',parentId:'FR'},{id:324,name:'touba, gaoual',parentId:'GA'},{id:325,name:'touba, mali',parentId:'ML'},{id:326,name:'tougnifili',parentId:'BF'},{id:327,name:'tougué-centre',parentId:'TO'},{id:328,name:'tounkarata',parentId:'LO'},{id:329,name:'tountouroun',parentId:'LA'},{id:330,name:'vassérédou',parentId:'MC'},{id:331,name:'watanka',parentId:'MC'},{id:332,name:'wendou m\'bour',parentId:'GA'},{id:333,name:'womey',parentId:'NZ'},{id:334,name:'wonkifong',parentId:'CO'},{id:335,name:'yalenzou',parentId:'NZ'},{id:336,name:'yendé-millimou',parentId:'KS'},{id:337,name:'yimbéring',parentId:'ML'},{id:338,name:'yombiro',parentId:'KS'},{id:339,name:'yomou-centre',parentId:'YO'},{id:340,name:'youkounkoun',parentId:'KN'}]}])

.constant('mg', [{depth:0,name:'region',plural:'regions',items:[{name:'diana',id:'DIA'},{name:'sava',id:'SAV'},{name:'itasy',id:'ITA'},{name:'analamanga',id:'ANM'},{name:'vakinankaratra',id:'VAK'},{name:'bongolava',id:'BON'},{name:'sofia',id:'SOF'},{name:'boeny',id:'BOE'},{name:'betsiboka',id:'BES'},{name:'melaky',id:'MEL'},{name:'alaotra-mangoro',id:'AMA'},{name:'atsinanana',id:'ATS'},{name:'analanjirofo',id:'ANN'},{name:'amoron\'i mania',id:'AMO'},{name:'matsiatra ambony',id:'MAT'},{name:'vatovavy-fitovinany',id:'VFI'},{name:'atsimo-atsinanana',id:'AAT'},{name:'ihorombe',id:'IHO'},{name:'menabe',id:'MEN'},{name:'atsimo-andrefana',id:'AAN'},{name:'androy',id:'AND'},{name:'anosy',id:'ANO'}]}])

;
// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('eHealth.locations.config', [])
  .value('eHealth.locations.config', {
    debug: true
  });

// Modules
angular.module('eHealth.locations.directives', []);
angular.module('eHealth.locations.filters', [
  'eHealth.locations.services'
]);
angular.module('eHealth.locations.services', [
  'eHealth.locations.data'
]);
angular.module('eHealth.locations', [
  'eHealth.locations.config',
  'eHealth.locations.directives',
  'eHealth.locations.filters',
  'eHealth.locations.services'
]);



angular.module('eHealth.locations.filters')
  .filter('adminDivision', ["locations", "$filter", function (locations, $filter) {
    return function (id, level) {
      return locations.decode(id, level-1);
    };
  }]);



angular.module('eHealth.locations.services')
  .provider('locations', function() {
    var countryCode;
    this.setCountryCode = function(_countryCode_) {
      countryCode = _countryCode_;
    };
    this.$get = ['locationsFactory', function(locationsFactory) {
      if (countryCode) {
        return locationsFactory(countryCode);
      } else {
        var e = 'a country code needs to be set via the locationsProvider.' +
              ' currently the country code is `'+
              JSON.stringify(countryCode)+'`';
        throw new Error(e);
      }
    }];
  });



angular.module('eHealth.locations.services')
  .factory('locationsFactory', ["$log", "ml", "gn", "lr", "sl", "mg", function($log, ml, gn, lr, sl, mg) {
    var map = {
      ml: ml,
      gn: gn,
      gin: gn,
      lr: lr,
      sl: sl,
      mg: mg
    };
    return function(countryCode) {
      if (countryCode in map) {
        var locations = map[countryCode],
            indexes = [];
        indexes = locations.map(function(level) {
          var index = {};
          level.items.forEach(function(item) {
            index[item.id] = item;
          });
          return index;
        });
        locations.decode = function(code, l) {
          if (typeof code === 'undefined') {
            return;
          } else {
            var level = indexes[l];
            if (level) {
              if (level[code]) {
                return level[code].name;
              } else {
                $log.error('we cannot find code '+code+' in locations level '+
                           locations[l].name);
              }
            } else {
              $log.error(countryCode+' locations have only '+indexes.length+
                         ' levels');
            }
          }
        };
        return locations;
      } else {
        var e = 'we have no location data for the country code `' +
              countryCode+'`';
        throw new Error(e);
      }
    };
  }]);



angular.module('eHealth.locations.services')
  .factory('selectedLocationFactory', ["locations", "$log", function (locations, $log) {

    // Restrict locations. This originally leveraged lodash/underscore _.filter
    // & _.find functions, as lodash/underscore is not available in this
    // project, and while we can't rely on native implenetations accross
    // different environements just yet, and in the name of keeping things lean
    // and performant (at the price of readability / cleanliness), we'll do
    // this the ugly way
    function restrictLocations(locations, restrictions, level) {
      var restrictedLocations = [];
      for (var locationsIndex=0; locationsIndex < locations.length; locationsIndex++) {
        var location = locations[locationsIndex];
        for (var restrictionsIndex=0; restrictionsIndex < restrictions.length; restrictionsIndex++) {
          var restriction = restrictions[restrictionsIndex];
          if (restriction.name === location.name && restriction.id === location.id && restriction.level === level) {
            restrictedLocations.push(locations[locationsIndex]);
          }
        }
      }
      return restrictedLocations;
    }

    function create(options) {
      options = options || {};
      var hasAllItem = options.hasAllItem,
          locationsData = options.locationsData || locations,
          original = angular.copy(locationsData),
          levels = [],
          location;

      function reset(index) {
        var level = angular.copy(original[index]);
        if (hasAllItem) {
          // adds an all-item.
          // The all-item will be automatically selected when there is not
          // a more narrow selection for this level or a child level
          var allItem = {
            isAll: true,
            name: 'all'
          };
          level.items.unshift(allItem);
          level.selected = allItem;
        }
        level.original = angular.copy(level);
        level.byId = {};

        level.items.forEach(function(item) {
          level.byId[item.id] = item;
        });
        level.selectById = function(id) {
          var match = level.byId[id];
          if (match) {
            level.selected = level.byId[id];
          } else {
            throw new Error('id '+id+' in not in level '+level.name);
          }
        };
        function updateUp(selected, depth) {
          if (depth < 0 || selected.isAll) {
            return;
          }
          reset(depth);
          levels[depth].selectById(selected.parentId);
          updateUp(levels[depth].selected, depth - 1);
        }
        function updateDown(selected, depth) {
          var level = levels[depth];
          if (level) {
            // get all the locations in the level below that belong here
            level.items = level.original.items.filter(function (item) {
              return selected.isAll || item.isAll || item.parentId === selected.id;
            });
            if (level.selected) {
              // in case we have an all-item, always select the all-item
              if (hasAllItem) {
                level.selected = level.items[0];
              }
              else {
                // cancel the selection if invalid
                var found;
                level.items.forEach(function(item) {
                  if (item.id === level.selected.id) {
                    found = true;
                  }
                });
                if (!found) {
                  delete level.selected;
                }
              }
            }
            // continue recursively
            updateDown(level.items[0], depth + 1);
          } else {
            return;
          }
        }
        level.update = function () {
          updateUp(level.selected, index - 1);
          updateDown(level.selected, index + 1);
        };

        if (options.restrictByLocations) {
          var items = restrictLocations(level.items, options.restrictByLocations, index);
          level.items = items;
        }

        levels[index] = level;
      }

      original.forEach(function(level, index) {
        reset(index);
      });

      location = {
        levels: levels,
        select: function(level, id) {
          levels[level].selectById(id);
          levels[level].update();
        },
        clone: function() {
          var cloned = create(options);
          for (var i=0; i<cloned.levels.length; i++) {
            var selected = levels[i].selected;
            if (selected) {
              cloned.levels[i].selectById(selected.id);
            }
          }
          return cloned;
        },
        compare: function(other) {
          // two locations are equal unless proven to be different
          var equal = levels.length === other.levels.length;
          for (var i=0; i<levels.length; i++) {
            if (!angular.equals(levels[i].selected, levels[i].selected)) {
              equal = false;
            }
            if (!angular.equals(levels[i].items, levels[i].items)) {
              equal = false;
            }
          }
          return equal;
        },
        setAdminDivisions: function(obj) {
          if (obj) {
            // selected locations have the constraint that lower level
            // locations must be child of the higher level ones, while
            // in the object we might have inconsistencies. starting
            // from the bottom, pick the most specific regional info if
            // available and ignore the rest. this code assumes that we
            // have no more than 5 administrative levels
            var toBeSelected = true;
            [5, 4, 3, 2, 1].forEach(function(n) {
              if (toBeSelected) {
                var i = n - 1,
                    id = obj['adminDivision'+n];
                if (id) {
                  try {
                    location.select(i, id);
                    toBeSelected = false;
                  } catch (error) {
                    $log.error(error);
                  }
                }
              }
            });
          } else {
            $log.error('`setAdminDivisions` was called on a `'+obj+'` object');
          }
          return location;
        },
        getAdminDivisions: function(adminDivisions) {
          adminDivisions = adminDivisions || {};
          levels.forEach(function(level, index) {
            if (level.selected) {
              var key = 'adminDivision'+(index+1);
              adminDivisions[key] = level.selected.id;
            }
          });
          return angular.copy(adminDivisions);
        }
      };
      return location;
    }
    return create;
  }]);
