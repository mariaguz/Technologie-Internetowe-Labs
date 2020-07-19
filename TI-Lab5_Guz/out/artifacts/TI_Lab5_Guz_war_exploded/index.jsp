
<%@ page import="java.util.Date" %><%--
  Created by IntelliJ IDEA.
  User: Mania
  Date: 03/04/2020
  Time: 11:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8"  import="java.util.*, ti.*" %>
<html>
  <head>
    <title>TI_Lab5</title>
  </head>
  <body>
<%--  Witaj w swiecie JSP<br/>--%>
<%--  <%=new Date()%> <br/>--%>
<%--  <% String zmienna = "abc" ;--%>
<%--  int liczba1 = 0;--%>
<%--  out.println("dowolna zawartosc");--%>

<%--  %><br/>--%>


<%--  zmienna: <%=zmienna%><br/>--%>
<%--  liczba1: <%=++liczba1%><br/>--%>

<%--  <%! int liczba2=0; %>--%>
<%--  liczba2: <%=++liczba2 %> <br/>--%>

<%--  <%! String metoda(String wejscie)--%>
<%--    {return wejscie+" 123";} %>--%>

<%--  metoda(): <%=metoda("1234")%>--%>

<%--  request.getParameter("abc:): <%=request.getParameter("abc")%> <br/>--%>
<%--  ID sesji: <b><%=session.getId() %> </b><br/>--%>
<%--  Server Info: <b><%=application.getServerInfo()%></b><br/>--%>

<%--  <% Test test = new Test("123");%>--%>
<%--  <%=new ti.Test("123")%>--%>

<%--  Id: <b><%=test.getId()%></b>--%>

<%--<br/>--%>
<%--  atrybut1: <b><%=request.getAttribute("atrybut1")%></b><br/>--%>
<%--  atrybut2: <b><%=session.getAttribute("atrybut2")%></b><br/>--%>
<%--  atrybut3: <b><%=application.getAttribute("atrybut3")%></b><br/>--%>

<%--  <br/>--%>
<%--  atrybut(request): <b><%=request.getAttribute("atrybut")%></b><br/>--%>
<%--  atrybut(session): <b><%=session.getAttribute("atrybut")%></b><br/>--%>
<%--  atrybut(app): <b><%=application.getAttribute("atrybut")%></b><br/>--%>

<%--=========================================================================================================================================--%>

<%--  <h3>JSP 2.0</h3>--%>

<%--  atrybut1: <b>${atrybut1}</b><br/>--%>
<%--  atrybut2: <b>${atrybut2}</b><br/>--%>
<%--  atrybut3: <b>${atrybut3}</b><br/>--%>
<%--  <br/>--%>
<%--&lt;%&ndash;  atrybut: <b>${atrybut}</b><br/>&ndash;%&gt;--%>


<%--  <br/>--%>
<%--  atrybut(request): <b>${requestScope.atrybut}</b><br/>--%>
<%--  atrybut(session): <b>${sessionScope.atrybut}</b><br/>--%>
<%--  atrybut(app): <b>${applicationScope.atrybut}</b><br/>--%>

<%--  <br/>--%>

<%--  parametr abc: ${param.abc}<br/>--%>
<%--  ID sesji: ${pageContext.session.id}<br/>--%>

<%--  ID sesji (cookie): ${cookie.JSESSIONID.value}<br/>--%>


<%--  \${1+2+3}: ${1+2+3}<br/>--%>
<%--  \${4<7}: ${4<7}<br/>--%>
<%--  \${"2"+7}: ${"2"+7}<br/>--%>

<%--  <br/>--%>
<%--  imie: ${imie[0]}, nazwisko: ${nazwisko[0]}, firma: ${firma["Miłosz"]}<br/>--%>
<%--  imie: ${imie[1]}, nazwisko: ${nazwisko[1]}, firma: ${firma[nazwisko[1]]}<br/>--%>
<%--  imie: ${imie[2]}, nazwisko: ${nazwisko[2]}, firma: ${firma[nazwisko[2]]}<br/>--%>




  <br/>
  <% Pracownik pracownik1 = (Pracownik) request.getAttribute("pracownik1");%>
  <% Pracownik pracownik2 = (Pracownik) request.getAttribute("pracownik2");%>
  <% Pracownik pracownik3 = (Pracownik) request.getAttribute("pracownik3");%>

  Imię: <b><%=pracownik1.getOsoba().getImie()%></b><br/>
  Nazwisko: <b><%=pracownik1.getOsoba().getNazwisko()%></b><br/>
  Firma: <b><%=pracownik1.getFirma().getNazwa()%></b><br/>
  Profil firmy: <b><%=pracownik1.getFirma().getProfil()%></b><br/>
  Całość: <b><%=pracownik1.getCalosc()%></b><br/><br/>

  Imię: <b><%=pracownik2.getOsoba().getImie()%></b><br/>
  Nazwisko: <b><%=pracownik2.getOsoba().getNazwisko()%></b><br/>
  Firma: <b><%=pracownik2.getFirma().getNazwa()%></b><br/>
  Profil firmy: <b><%=pracownik2.getFirma().getProfil()%></b><br/>
  Całość: <b><%=pracownik2.getCalosc()%></b><br/><br/>

  Imię: <b><%=pracownik3.getOsoba().getImie()%></b><br/>
  Nazwisko: <b><%=pracownik3.getOsoba().getNazwisko()%></b><br/>
  Firma: <b><%=pracownik3.getFirma().getNazwa()%></b><br/>
  Profil firmy: <b><%=pracownik3.getFirma().getProfil()%></b><br/>
  Całość: <b><%=pracownik3.getCalosc()%></b><br/><br/>


  Imię:  <b>${pracownik[0].getOsoba().getImie()}</b><br/>
  Nazwisko:  <b>${pracownik[0].getOsoba().getNazwisko()}</b><br/>
  Firma:  <b>${pracownik[0].getFirma().getNazwa()}</b><br/>
  Profil firmy:  <b>${pracownik[0].getFirma().getProfil()}</b><br/>
  Całość: <b>${pracownik[0].getCalosc()}</b><br/><br/>

  Imię:  <b>${pracownik[1].getOsoba().getImie()}</b><br/>
  Nazwisko:  <b>${pracownik[1].getOsoba().getNazwisko()}</b><br/>
  Firma:  <b>${pracownik[1].getFirma().getNazwa()}</b><br/>
  Profil firmy:  <b>${pracownik[1].getFirma().getProfil()}</b><br/>
  Całość: <b>${pracownik[1].getCalosc()}</b><br/><br/>

  Imię:  <b>${pracownik[2].getOsoba().getImie()}</b><br/>
  Nazwisko:  <b>${pracownik[2].getOsoba().getNazwisko()}</b><br/>
  Firma:  <b>${pracownik[2].getFirma().getNazwa()}</b><br/>
  Profil firmy:  <b>${pracownik[2].getFirma().getProfil()}</b><br/>
  Całość: <b>${pracownik[2].getCalosc()}</b><br/><br/>





  </body>
</html>
