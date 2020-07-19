package ti;

import com.sun.net.httpserver.HttpContext;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

@WebServlet(name = "Servlet", urlPatterns = "/Servlet")
public class Servlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session =request.getSession();
        ServletContext app = request.getServletContext();

//        request.setAttribute("atrybut1", "Pierwsza");
//        session.setAttribute("atrybut2", "Druga");
//        app.setAttribute("atrybut3", "Trzecia");
//
//        request.setAttribute("atrybut", "request");
//        session.setAttribute("atrybut", "session");
//        app.setAttribute("atrybut", "app");

//        String[] imie = {"PaniAgnieszka", "Zbigniew", "JSON"};
//
//        ArrayList<String> nazwisko = new ArrayList<String>();
//        nazwisko.add("Miłosz");
//        nazwisko.add("Mrożek");
//        nazwisko.add("Białoszewski");
//
//        HashMap<String, String > firma = new HashMap<String ,String >();
//        firma.put("Miłosz", "1");
//        firma.put("Mrożek", "1");
//        firma.put("Białoszewski", "1");
//
//        request.setAttribute("imie", imie);
//        request.setAttribute("nazwisko", nazwisko);
//        request.setAttribute("firma", firma);


        Osoba osoba1 = new Osoba("Britney", "Spears");
        Osoba osoba2 = new Osoba("Madzia", "Gessler");
        Osoba osoba3 = new Osoba("Beatka", "Kozidrak");

        Firma firma1 = new Firma("Żabka", "spożywczy");
        Firma firma2 = new Firma("Biedronka", "spożywczy");

        Pracownik pracownik1 = new Pracownik(osoba1, firma1);
        Pracownik pracownik2 = new Pracownik(osoba2, firma2);
        Pracownik pracownik3 = new Pracownik(osoba3, firma2);

        ArrayList<Pracownik> pracownik = new ArrayList<Pracownik>();
        pracownik.add(pracownik1);
        pracownik.add(pracownik2);
        pracownik.add(pracownik3);

        request.setAttribute("pracownik1", pracownik1);
        request.setAttribute("pracownik2", pracownik2);
        request.setAttribute("pracownik3", pracownik3);

        request.setAttribute("pracownik", pracownik);

        RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
        dispatcher.forward(request,response);






//        dispatcher.include();
    }
}
