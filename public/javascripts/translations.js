var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match %{attribute}","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","present":"must be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","other_than":"must be other than %{count}","odd":"must be odd","even":"must be even","taken":"has already been taken","in_between":"must be in between %{min} and %{max}","spoofed_media_type":"has an extension that does not match its contents"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"one":"Cannot delete record because a dependent %{record} exists","many":"Cannot delete record because dependent %{record} exist"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"one_page":{"display_entries":{"zero":"No %{entry_name} found","one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}"}},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"}}},"numbers":{"ones":["zero","one","two","three","four","five","six","seven","eight","nine"],"teens":["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],"tens":["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],"hundreds":"hundred","mega":["ones","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion"],"ordinal":{"ones":["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"],"teens":["tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"],"tens":["zeroth","tenth","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"],"hundreds":"hundredth","mega":["zeroth","thousandth","millionth","billionth","trillionth","quadrillionth","quintillionth","sextillionth","septillionth","octillionth","nonillionth","decillionth"]},"union_separator":"and","micro":["_","tenths","hundredths","thousandths","millionths","billionths","trillionths","quadrillionths","quintillionths","sextillionths","septillionths","octillionths","nonillionths","decillionths"],"tenths":{"one":"tenth","other":"tenths"},"hundredths":{"one":"hundredth","other":"hundredths"},"thousandths":{"one":"thousandth","other":"thousandths"},"millionths":{"one":"millionth","other":"millionths"},"billionths":{"one":"billionth","other":"billionths"},"trillionths":{"one":"trillionth","other":"trillionths"},"quadrillionths":{"one":"quadrillionth","other":"quadrillionths"},"quintillionths":{"one":"quintillionth","other":"quintillionths"},"sextillionths":{"one":"sextillionth","other":"sextillionths"},"septillionths":{"one":"septillionth","other":"septillionths"},"octillionths":{"one":"octillionth","other":"octillionths"},"nonillionths":{"one":"nonillionth","other":"nonillionths"},"decillionths":{"one":"decillionth","other":"decillionths"},"union":"and"},"stringex":{"characters":{"and":"and","at":"at","divide":"divided by","degrees":"degrees","dot":"\\1 dot \\2","ellipsis":"dot dot dot","equals":"equals","number":"number","percent":"percent","plus":"plus","slash":"slash","star":"star"},"currencies":{"generic":"\\1 pounds","dollars":"\\1 dollars","dollars_cents":"\\1 dollars \\2 cents","pounds":"\\1 pounds","pounds_pence":"\\1 pounds \\2 pence","euros":"\\1 euros","euros_cents":"\\1 euros \\2 cents","yen":"\\1 yen","reais":"\\1 reais","reais_cents":"\\1 reais \\2 cents"},"html_entities":{"amp":"and","cent":" cents","copy":"(c)","deg":" degrees ","divide":" divided by ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"one fourth","frac12":"half","frac34":"three fourths","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" pounds ","reg":"(r)","single_quote":"'","times":"x","trade":"(tm)","yen":" yen "},"vulgar_fractions":{"half":"half","one_third":"one third","two_thirds":"two thirds","one_fourth":"one fourth","three_fourths":"three fourths","one_fifth":"one fifth","two_fifths":"two fifths","three_fifths":"three fifths","four_fifths":"four fifths","one_sixth":"one sixth","five_sixths":"five sixths","one_eighth":"one eighth","three_eighths":"three eighths","five_eighths":"five eighths","seven_eighths":"seven eighths"}},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","previous":"\u0026lsaquo; Prev","next":"Next \u0026rsaquo;","truncate":"\u0026hellip;"}},"hello":"Hello world"},"es":{"numbers":{"ones":["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],"one":"un","teens":["diez","once","doce","trece","catorce","quince","dieciseis","diecisiete","dieciocho","diecinueve"],"tens":["cero","diez","veinti","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"],"twenty":"veinte","hundreds":["ciento","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"],"one_hundred":"cien","mega":["ones","mil","millón","millardo","billón","billardo","trillón","trillardo","quadrillón","quadrillardo","quintillón","quintillardo"],"megas":["ones","mil","millones","millardos","billones","billardos","trillones","trillardos","quadrillones","quadrillardos","quintillones","quintillardos"]},"i18n":{"plural":{"rule":{}}},"errors":{"messages":{"in_between":"debe estar entre %{min} y %{max}","spoofed_media_type":"tiene una extensión que no coincide con su contenido"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}}},"en-GB":{"numbers":{"ones":["zero","one","two","three","four","five","six","seven","eight","nine"],"teens":["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],"tens":["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],"hundreds":"hundred","mega":["ones","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion"],"ordinal":{"ones":["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"],"teens":["tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"],"tens":["zeroth","tenth","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"],"hundreds":"hundredth","mega":["zeroth","thousandth","millionth","billionth","trillionth","quadrillionth","quintillionth","sextillionth","septillionth","octillionth","nonillionth","decillionth"]},"union_separator":"point","micro":["_","tenths","hundredths","thousandths","millionths","billionths","trillionths","quadrillionths","quintillionths","sextillionths","septillionths","octillionths","nonillionths","decillionths"],"tenths":{"one":"tenth","other":"tenths"},"hundredths":{"one":"hundredth","other":"hundredths"},"thousandths":{"one":"thousandth","other":"thousandths"},"millionths":{"one":"millionth","other":"millionths"},"billionths":{"one":"billionth","other":"billionths"},"trillionths":{"one":"trillionth","other":"trillionths"},"quadrillionths":{"one":"quadrillionth","other":"quadrillionths"},"quintillionths":{"one":"quintillionth","other":"quintillionths"},"sextillionths":{"one":"sextillionth","other":"sextillionths"},"septillionths":{"one":"septillionth","other":"septillionths"},"octillionths":{"one":"octillionth","other":"octillionths"},"nonillionths":{"one":"nonillionth","other":"nonillionths"},"decillionths":{"one":"decillionth","other":"decillionths"},"union":"and"}},"lt":{"numbers":{"ones":["nulis","vienas","du","trys","keturi","penki","šeši","septyni","aštuoni","devyni"],"teens":["dešimt","vienuolika","dvylika","trylika","keturiolika","penkiolika","šešiolika","septyniolika","aštuoniolika","devyniolika"],"tens":["nulis","dešimt","dvidešimt","trisdešimt","keturiasdešimt","penkiasdešimt","šešiasdešimt","septyniasdešimt","aštuoniasdešimt","devyniasdešimt"],"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"],"hundreds":["šimtas","du šimtai","trys šimtai","keturi šimtai","penki šimtai","šeši šimtai","septyni šimtai","aštuoni šimtai","devyni šimtai"],"one_hundred":"šimtas","thousands":{"one":"tūkstantis","ones":"tūkstančiai","other":"tūkstančių"},"millions":{"one":"milijonas","ones":"milijonai","other":"milijonø"},"billions":{"one":"bilijonas","ones":"bilijonai","other":"bilijonø"},"trillions":{"one":"trilijonas","ones":"trilijonai","other":"trilijonø"},"quadrillions":{"one":"kvadrilijonas","ones":"kvadrilijonai","other":"kvadrilijonø"},"quintillions":{"one":"kvintilijonas","ones":"kvadrilijonai","other":"kvadrilijonø"},"sextillions":{"one":"sekstilijonas","ones":"sekstilijonai","other":"sekstilijonø"},"septillions":{"one":"septilijonas","ones":"septilijonai","other":"septilijonø"},"octillions":{"one":"oktilijonas","ones":"oktilijonai","other":"oktilijonø"},"nonillions":{"one":"nonilijonas","ones":"nonilijonai","other":"nonilijonø"},"decillions":{"one":"decilijonas","ones":"decilijonai","other":"decilijonø"}},"i18n":{"plural":{"rule":{}}}},"ru":{"numbers":{"ones":{"male":["ноль","один","два","три","четыре","пять","шесть","семь","восемь","девять"],"female":["ноль","одна","двe","три","четыре","пять","шесть","семь","восемь","девять"],"neuter":["ноль","одно","два","три","четыре","пять","шесть","семь","восемь","девять"]},"teens":["десять","одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать"],"tens":["ноль","десять","двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто"],"hundreds":["ноль","сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот"],"union_separator":"и","union":"и","micro":{"one":["_","десятая","сотая","тысячная","миллионная","миллиардная","триллионная"],"few":["_","десятых","сотых","тысячных","миллионных","миллиардных","триллионных"],"many":["_","десятых","сотых","тысячных","миллионных","миллиардных","триллионных"]},"sub_micro":["_","десяти","сто"],"integral":{"one":"целая","few":"целых","many":"целых"},"thousands":{"one":"тысяча","few":"тысячи","many":"тысяч"},"millions":{"one":"миллион","few":"миллиона","many":"миллионов"},"billions":{"one":"миллиард","few":"миллиарда","many":"миллиардов"},"trillions":{"one":"триллион","few":"триллионa","many":"триллионов"},"quadrillions":{"one":"квадриллион","few":"квадриллиона","many":"квадриллионов"},"quintillions":{"one":"квинтиллион","few":"квинтиллиона","many":"квинтиллионов"},"sextillions":{"one":"секстиллион","few":"секстиллиона","many":"секстиллионов"},"septillions":{"one":"септиллион","few":"секстиллиона","many":"секстиллионов"},"octillions":{"one":"октиллион","few":"октиллиона","many":"октиллионов"},"nonillions":{"one":"нониллион","few":"нониллиона","many":"нониллионов"},"decillions":{"one":"дециллион","few":"дециллиона","many":"дециллионов"},"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"]},"i18n":{"plural":{"rule":{}}},"stringex":{"characters":{"and":"и","at":"в","divide":"делить на","degrees":"градусов","dot":"\\1 точка \\2","ellipsis":"многоточие","equals":"равно","number":"номер","percent":"процентов","plus":"плюс","slash":"слеш","star":"звезда"},"currencies":{"generic":"\\1 рубль","dollars":"\\1 долларов","dollars_cents":"\\1 долларов \\2 центов","pounds":"\\1 фунтов","pounds_pence":"\\1 фунтов \\2 пенсов","euros":"\\1 евро","euros_cents":"\\1 евро \\2 центов","yen":"\\1 йен","reais":"\\1 реал","reais_cents":"\\1 реал \\2 сентаво"},"html_entities":{"amp":"и","cent":" центов","copy":"(c)","deg":" градусов ","divide":" делить на ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"одна четверть","frac12":"половина","frac34":"три четверти","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" фунтов ","reg":"(r)","single_quote":"'","times":"x","trade":"(tm)","yen":" йен "},"vulgar_fractions":{"half":"половина","one_third":"одна треть","two_thirds":"две трети","one_fourth":"одна четверть","three_fourths":"три четверти","one_fifth":"одна пятая","two_fifths":"две пятых","three_fifths":"три пятых","four_fifths":"четыре пятых","one_sixth":"одна шестая","five_sixths":"пять шестых","one_eighth":"одна восьмая","three_eighths":"три восьмых","five_eighths":"пять восьмых","seven_eighths":"семь восьмых"}}},"se":{"numbers":{"ones":["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio"],"teens":["tio","elva","tolv","tretton","fjorton","femton","sexton","sjutton","arton","nitton"],"tens":["noll","tio","tjugo","trettio","fyrtio","femtio","sextio","sjuttio","åttio","nittio"],"hundreds":"hundra","mega":["ett","tusen","miljoner","miljarder","biljoner","kvadriljon","kvintiljon","sextillion","septillion","octillion","nonillion","decillion"]}},"fr":{"numbers":{"ones":["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf"],"teens":["dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"],"tens":["zéro","dix","vingt","trente","quarante","cinquante","soixante","soixante-dix","quatre-vingt","quatre-vingt-dix"],"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"],"eighty":"quatre-vingts","hundreds":{"one":"cent","many":"cents"},"thousands":{"one":"mille","many":"mille"},"millions":{"one":"million","many":"millions"},"billions":{"one":"milliard","many":"milliards"},"trillions":{"one":"billion","many":"billions"},"quadrillions":{"one":"billiard","many":"billiards"},"quintillions":{"one":"trillion","many":"trillions"},"sextillions":{"one":"trilliard","many":"trilliards"},"septillions":{"one":"quadrillion","many":"quadrillions"},"octillions":{"one":"quadrilliard","many":"quadrilliards"},"nonillions":{"one":"quintillion","many":"quintillions"},"decillions":{"one":"quintilliard","many":"quintilliards"}},"i18n":{"plural":{"rule":{}}}},"it":{"numbers":{"ones":["zero","uno","due","tre","quattro","cinque","sei","sette","otto","nove"],"teens":["dieci","undici","dodici","tredici","quattordici","quindici","sedici","diciasette","diciotto","diciannove"],"tens":["zero","dieci","venti","trenta","quaranta","cinquanta","sessanta","settanta","ottanta","novanta"],"hundreds":"cento","mega":["ones","mille","milione","miliardo","triliardo","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion"]}},"lv":{"numbers":{"ones":["nulle","viens","divi","trīs","četri","pieci","seši","septiņi","astoņi","deviņi"],"teens":["desmit","vienpadsmit","divpadsmit","trīspadsmit","četrpadsmit","piecpadsmit","sešpadsmit","septiņpadsmit","astoņpadsmit","deviņpadsmit"],"tens":["nulle","desmit","divdesmit","trīsdesmit","četrdesmit","piecdesmit","sešdesmit","septiņdesmit","astoņdesmit","deviņdesmit"],"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"],"hundreds":["simtu","divi simti","trīs simti","četri simti","pieci simti","seši simti","septiņi simti","astoņi simti","deviņi simti"],"one_hundred":"simts","thousands":{"one":"tūkstots","other":"tūkstoši"},"millions":{"one":"miljons","other":"miljoni"},"billions":{"one":"miljards","other":"miljardi"},"trillions":{"one":"triljons","other":"triljoni"},"quadrillions":{"one":"kvadriljons","other":"kvadriljoni"},"quintillions":{"one":"kvintiljons","other":"kvintiljoni"},"sextillions":{"one":"sekstiljons","other":"sekstiljoni"},"septillions":{"one":"septiljons","other":"septiljoni"},"octillions":{"one":"oktiljons","other":"oktiljoni"},"nonillions":{"one":"noniljons","other":"noniljoni"},"decillions":{"one":"deciljons","other":"deciljoni"}},"i18n":{"plural":{"rule":{}}}},"de":{"numbers":{"ones":{"default":["null","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun"],"combine":["null","ein","zwei","drei","vier","fünf","sechs","sieben","acht","neun"],"gender":["null","eine","zwei","drei","vier","fünf","sechs","sieben","acht","neun"]},"teens":["zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"],"tens":[null,"zehn","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"],"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"],"hundreds":"hundert","thousands":{"one":"tausend","other":"tausend"},"millions":{"one":"Million","other":"Millionen"},"billions":{"one":"Milliarde","other":"Milliarden"},"trillions":{"one":"Billion","other":"Billionen"},"quadrillions":{"one":"Billiarde","other":"Billiaden"},"quintillions":{"one":"Trillion","other":"Trillionen"},"sextillions":{"one":"Trilliarde","other":"Trilliarden"},"septillions":{"one":"Quadrillion","other":"Quadrillionen"},"octillions":{"one":"Quadrilliarde","other":"Quadrilliarden"},"nonillions":{"one":"Quintillion","other":"Quintillionen"},"decillions":{"one":"Quintilliarde","other":"Quintilliarden"}},"errors":{"messages":{"in_between":"muss zwischen %{min} und %{max} sein","spoofed_media_type":"trägt eine Dateiendung, die nicht mit dem Inhalt der Datei übereinstimmt"}},"number":{"human":{"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}}}},"stringex":{"characters":{"and":"und","at":"um","divide":"geteilt durch","degrees":"Grad","dot":"\\1 Punkt \\2","ellipsis":"Punkt Punkt Punkt","equals":"gleich","number":"Nummer","percent":"Prozent","plus":"plus","slash":"Strich","star":"Stern"},"currencies":{"generic":"\\1 Euro","dollars":"\\1 Dollar","dollars_cents":"\\1 Dollar \\2 Cent","pounds":"\\1 Pfund","pounds_pence":"\\1 Pfund \\2 Pence","euros":"\\1 Euro","euros_cents":"\\1 Euro \\2 Cent","yen":"\\1 Yen","reais":"\\1 Reais","reais_cents":"\\1 Reais \\2 Cent"},"html_entities":{"amp":"und","cent":" Cent","copy":"(C)","deg":" Grad ","divide":" geteilt durch ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"ein Viertel","frac12":"halbe(r)","frac34":"drei Viertel","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" Pfund ","reg":"(R)","single_quote":"'","times":"x","trade":"(TM)","yen":" Yen "},"vulgar_fractions":{"half":"halbe(r)","one_third":"ein Drittel","two_thirds":"zwei Drittel","one_fourth":"ein Viertel","three_fourths":"drei Viertel","one_fifth":"ein Fünftel","two_fifths":"zwei Fünftel","three_fifths":"drei Fünftel","four_fifths":"vier Fünftel","one_sixth":"ein Sechstel","five_sixths":"fünf Sechstel","one_eighth":"ein Achtel","three_eighths":"drei Achtel","five_eighths":"fünf Achtel","seven_eighths":"sieben Achtel"},"transliterations":{"Ä":"AE","Ö":"OE","Ü":"UE","ß":"ss","ä":"ae","ö":"oe","ü":"ue"}}},"et":{"numbers":{"ones":["null","üks","kaks","kolm","neli","viis","kuus","seitse","kaheksa","üheksa"],"teens":["kümme","üksteist","kaksteist","kolmteist","neliteist","viisteist","kuusteist","seitseteist","kaheksateist","üheksateist"],"tens":["null","kümme","kakskümmend","kolmkümmend","nelikümmend","viiskümmend","kuuskümmend","seitsekümmend","kaheksakümmend","üheksakümmend"],"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"],"hundreds":"sada","thousands":"tuhat","millions":{"one":"miljon","other":"miljonit"},"billions":{"one":"miljard","other":"miljardit"},"trillions":{"one":"triljon","other":"triljonit"},"quadrillions":{"one":"kvadriljon","other":"kvadriljonit"},"quintillions":{"one":"kvintiljon","other":"kvintiljonit"},"sextillions":{"one":"sekstiljon","other":"sekstiljonit"},"septillions":{"one":"septiljon","other":"septiljonit"},"octillions":{"one":"oktiljon","other":"oktiljonit"},"nonillions":{"one":"noniljon","other":"noniljonit"},"decillions":{"one":"dekiljon","other":"dekiljonit"}}},"ua":{"numbers":{"ones":{"male":["нуль","один","два","три","чотири","п’ять","шiсть","сiм","вiсiм","дев’ять"],"female":["нуль","одна","двi","три","чотири","п’ять","шiсть","сiм","вiсiм","дев’ять"],"neuter":["нуль","одне","два","три","чотири","п’ять","шiсть","сiм","вiсiм","дев’ять"]},"teens":["десять","одинадцять","дванадцять","тринадцять","чотирнадцять","п’ятнадцять","шiстнадцять","сiмнадцять","вiсiмнадцять","дев’ятнадцять"],"tens":["нуль","десять","двадцять","тридцять","сорок","п’ятдесят","шiстдесят","сiмдесят","вiсiмдесят","дев’яносто"],"hundreds":["нуль","сто","двiстi","триста","чотириста","п’ятсот","шiстсот","сiмсот","вiсiмсот","дев’ятсот"],"union_separator":"i","union":"i","micro":{"one":["_","десята","сота","тысячна","мiльйонна","мiльярдна","трильйонна"],"few":["_","десятих","сотих","тисячних","мiльйонних","мiльярдних","трильйонних"],"many":["_","десятих","сотих","тисячних","мiльйонних","мiльярдних","трильйонних"]},"sub_micro":["_","десяти","сто"],"integral":{"one":"цiла","few":"цiлих","many":"цiлих"},"thousands":{"one":"тисяча","few":"тисячi","many":"тисяч"},"millions":{"one":"мiльйон","few":"мiльйона","many":"мiльйонiв"},"billions":{"one":"мiльярд","few":"мiльярда","many":"мiльярдiв"},"trillions":{"one":"трильйон","few":"трильйона","many":"трильйонiв"},"quadrillions":{"one":"квадрильйон","few":"квадрильйона","many":"квадрильйонiв"},"quintillions":{"one":"квiнтильйон","few":"квiнтильйона","many":"квiнтильйонiв"},"sextillions":{"one":"секстильйон","few":"секстильйона","many":"секстильйонiв"},"septillions":{"one":"септильйон","few":"септильйона","many":"септильйонiв"},"octillions":{"one":"октильйон","few":"октильйона","many":"октильйонiв"},"nonillions":{"one":"нонильйон","few":"нонильйона","many":"нонильйонiв"},"decillions":{"one":"децильйон","few":"децильйона","many":"децильйонiв"},"mega":["ones","thousands","millions","billions","trillions","quadrillions","quintillion","sextillions","septillions","octillions","nonillions","decillions"]},"i18n":{"plural":{"rule":{}}}},"nl":{"numbers":{"ones":["nul","één","twee","drie","vier","vijf","zes","zeven","acht","negen"],"teens":["tien","elf","twaalf","dertien","veertien","vijftien","zestien","zeventien","achttien","negentien"],"tens":["nul","tien","twintig","dertig","veertig","vijftig","zestig","zeventig","tachtig","negentig"],"hundreds":"honderd","mega":["degenen","duizend","miljoen","miljard","biljoen","biljard","triljoen","triljard","septiljoen","octillion","noniljoen","decillion"]},"stringex":{"characters":{"and":"en","at":"op","divide":"gedeeld door","degrees":"graden","dot":"\\1 punt \\2","ellipsis":"punt punt punt","equals":"is","number":"nummer","percent":"procent","plus":"plus","slash":"slash","star":"ster"},"currencies":{"generic":"\\1 euro","dollars":"\\1 dollar","dollars_cents":"\\1 dollar \\2 cent","pounds":"\\1 pond","pounds_pence":"\\1 pond \\2 pence","euros":"\\1 euro","euros_cents":"\\1 euro \\2 cent","yen":"\\1 yen","reais":"\\1 reais","reais_cents":"\\1 reais \\2 cents"},"html_entities":{"amp":"en","cent":" cent","copy":"(c)","deg":" graden ","divide":" gedeeld door ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"eenvierde","frac12":"half","frac34":"drievierde","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" pond ","reg":"(r)","single_quote":"'","times":"x","trade":"(tm)","yen":" yen "},"vulgar_fractions":{"half":"half","one_third":"eenderde","two_thirds":"tweederde","one_fourth":"eenvierde","three_fourths":"drievierde","one_fifth":"eenvijfde","two_fifths":"tweevijfde","three_fifths":"drievijfde","four_fifths":"viervijfde","one_sixth":"eenzesde","five_sixths":"vijfzesde","one_eighth":"eenachtste","three_eighths":"drieachtste","five_eighths":"vijfachtste","seven_eighths":"zevenachtste"}}},"hu":{"numbers":{"ones":["nulla","egy","kettő","három","négy","öt","hat","hét","nyolc","kilenc"],"ones_with_tens":["nulla","egy","kettő","három","négy","öt","hat","hét","nyolc","kilenc"],"tens":["nulla","tíz","húsz","harminc","negyven","ötven","hatvan","hetven","nyolcvan","kilencven"],"tens_with_ones":["nulla","tizen","huszon","harminc","negyven","ötven","hatvan","hetven","nyolcvan","kilencven"],"hundreds":"száz","mega":["egy","ezer","millió","milliárd","billió","billiárd","trillió","trilliárd","kvadrillió","kvadrilliárd","kvintillió","kvintilliárd"],"union_separator":"egész","union":"egész","ordinal":{"ones":["nulladik","első","második","harmadik","negyedik","ötödik","hatodik","hetedik","nyolcadik","kilencedik"],"ones_with_tens":["nulladik","egyedik","kettedik","harmadik","negyedik","ötödik","hatodik","hetedik","nyolcadik","kilencedik"],"tens":["nulladik","tizedik","huszadik","harmincadik","negyvenedik","ötvenedik","hatvanadik","hetvenedik","nyolcvanadik","kilencvenedik"],"hundreds":"századik","mega":["nulladik","ezredik","milliomodik","milliárdodik","billiomodik","billiárdodik","trilliomodik","trilliárdodik","kvadrilliomodik","kvadrilliárdodik","kvintilliomodik","kvintilliárdodik"]},"micro":["_","tized","század","ezred","milliomod","milliárdod","billiomod","billiárdod","trilliomod","trilliárdod","kvadrilliomod","kvadrilliárdod","kvintilliomod","kvintilliárdod"]}},"tr":{"numbers":{"ones":["sıfır","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"],"teens":["on","on bir","on iki","on üç","on dört","on beş","on altı","on yedi","on sekiz","on dokuz"],"tens":["sıfır","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"],"hundreds":"yüz","mega":["bir","bin","milyon","milyar","trilyon","katrilyon","kentilyon","seksilyon","septilyon","oktilyon","nonilyon","desilyon"]}},"pt-BR":{"stringex":{"characters":{"and":"e","at":"em","divide":"dividido por","degrees":"graus","dot":"\\1 ponto \\2","ellipsis":"reticências","equals":"igual à","number":"número","percent":"porcento","plus":"mais","slash":"barra","star":"estrela"},"currencies":{"generic":"\\1 reais","dollars":"\\1 dólares","dollars_cents":"\\1 dólares \\2 cents","pounds":"\\1 libras","pounds_pence":"\\1 libras \\2 centavos","euros":"\\1 euros","euros_cents":"\\1 euros \\2 cents","yen":"\\1 yen","reais":"\\1 reais","reais_cents":"\\1 reais \\2 centavos"},"html_entities":{"amp":"e","cent":" centavos","copy":"(c)","deg":" graus ","divide":" dividido por ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"um quarto","frac12":"metade","frac34":"três quartos","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" libras ","reg":"(r)","single_quote":"'","times":"x","trade":"(tm)","yen":" yen "},"vulgar_fractions":{"half":"metade","one_third":"um terço","two_thirds":"dois terços","one_fourth":"um quarto","three_fourths":"três quartos","one_fifth":"um quinto","two_fifths":"dois quintos","three_fifths":"três quintos","four_fifths":"quatro quintos","one_sixth":"um sexto","five_sixths":"cinco sextos","one_eighth":"um oitavo","three_eighths":"três oitavos","five_eighths":"cinco oitavos","seven_eighths":"sete oitavos"}}},"da":{"stringex":{"characters":{"and":"og","at":"snabel-a","divide":"divideret med","degrees":"grader","dot":"\\1 punktum \\2","ellipsis":"prik prik prik","equals":"lig med","number":"nummer","percent":"procent","plus":"plus","slash":"skråstreg","star":"stjerne"},"currencies":{"generic":"\\1 kroner","dollars":"\\1 dollars","dollars_cents":"\\1 dollars \\2 cents","pounds":"\\1 pund","pounds_pence":"\\1 pund \\2 pence","euros":"\\1 euro","euros_cents":"\\1 euro \\2 cent","yen":"\\1 yen","reais":"\\1 reais","reais_cents":"\\1 reais \\2 cents"},"html_entities":{"amp":"og","cent":" cents","copy":"(c)","deg":" grader ","divide":" divideret med ","double_quote":"\"","ellipsis":"...","en_dash":"-","em_dash":"--","frac14":"en fjerdedel","frac12":"halv","frac34":"tre fjerdedele","gt":"\u003e","lt":"\u003c","nbsp":" ","pound":" pund ","reg":"(r)","single_quote":"'","times":"x","trade":"(tm)","yen":" yen "},"vulgar_fractions":{"half":"halv","one_third":"en tredjedel","two_thirds":"to tredjedele","one_fourth":"en fjerdedel","three_fourths":"tre fjerdedele","one_fifth":"en femtedel","two_fifths":"to femtedele","three_fifths":"tre femtedele","four_fifths":"fire femtedele","one_sixth":"en sjettedel","five_sixths":"fem sjettedele","one_eighth":"en ottendedel","three_eighths":"tre ottendedele","five_eighths":"fem ottendedele","seven_eighths":"syv ottendedele"},"transliterations":{"Æ":"AE","Ø":"OE","Å":"AA","æ":"ae","ø":"oe","å":"aa"}}}};