<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css" type="text/css" />
    <title>Sugestie</title>
    <script type="text/javascript">

        function wyslijAsynchronicznie(url, funkcjeZwortne, metoda, wysylaneDane, typDanych) {

            if(!window.XMLHttpRequest){
                return null;
            }

            //tworzymy obiekt XMLHttpRequest
            var requester = new XMLHttpRequest();

            metoda = metoda || 'GET';
            wysylaneDane = wysylaneDane || null;
            typDanych = typDanych || "text/plain";


            requester.open(metoda, url);

            requester.setRequestHeader("content-Type", typDanych);

            requester.onreadystatechange = function() {
                el = document.getElementById("wyniki");
                el.style.display = "block";
                el.innerHTML = "Ładuję...";

                if(requester.readyState === 4){
                    if(requester.status === 200){
                        funkcjeZwortne.success(requester);
                    }
                    else{
                        funkcjeZwortne.failure(requester);
                    }
                }
            }

            requester.send(wysylaneDane);
            return requester;
        }

        function pobierzSugestie() {
            if (document.getElementById("pole").value === ""){
                document.getElementById("wyniki").innerHTML = "";
                return null;}

            var wartosc = document.getElementById("pole").value;

            var wynik = {
                success : function (requester) {
                    rezultat = "";

                    ile = requester.responseXML.getElementsByTagName("sugestia").length;

                    for(i = 0; i < ile; ++i){
                        odpowiedzXML = requester.responseXML.getElementsByTagName("sugestia")[i].childNodes[0].nodeValue;
                        rezultat += '<div class="lista">' + odpowiedzXML + '</div>';
                    }
                    el.innerHTML = rezultat;
                },
                failure : function (requester) {
                    alert("Bład: "+requester.status);
                }
            }
            var typDanych = 'application/x-www-form-urlencoded';
            wyslijAsynchronicznie('sugestieXML', wynik, 'POST', 'wartosc='+wartosc, typDanych);
        }

    </script>
</head>
<body>
<h4>Wpisz markę samochodu</h4>
<input id="pole" type="text" onkeyup="javascript:pobierzSugestie();" />
<div id="wyniki"></div>
</body>
</html>