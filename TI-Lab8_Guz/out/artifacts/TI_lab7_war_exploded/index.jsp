<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Sugestie</title>
    <script type="text/javascript">
        function wyslijAJAX() {

            var parametry = new Object();
            parametry.pole = $('#pole').val();
            parametry.wartosc = $('#pole').val();


            var parametry2 = {
                "pole": $('#pole').val(),
                "wartosc": $('#pole').val()
            };


            $("#wyniki").css("display", "block");
            $("#wyniki").html("");

            if (parametry.wartosc) {
                $('#wyniki').html("Laduje...");
                $.ajax({
                    url:"sugestieJSON",
                    type: 'POST',
                    dataType: 'json',
                    data: JSON.stringify(parametry),
                    contentType: 'application/json',
                    success: function(data){
                        $("#wyniki").html("");
                        $.each(data.sugestia, function (index, wynik) {

                            $("#wyniki").append('<div class="lista" >' + wynik + '</div>');


                        });
                    },
                    error: function (data, status, error) {

                        console.log("status: " + status);
                        console.log("error: " + error.statusText);
                        $("#wyniki").html("Bład");
                    }
                });

            }

        }
    </script>
</head>
<body>
<h4>Wpisz markę samochodu</h4>
<input id="pole" type="text" onkeyup="javascript:wyslijAJAX();"/>
<div id="wyniki"></div>
</body>
</html>