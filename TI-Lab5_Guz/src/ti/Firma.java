package ti;

public class Firma {

    private String nazwa = "brak nazwy";
    private String profil = "brak profilu";

    public Firma(String nazwa, String profil) {
        this.nazwa = nazwa;
        this.profil = profil;
    }

    public String getNazwa() {
        return nazwa;
    }

    public void setNazwa(String nazwa) {
        this.nazwa = nazwa;
    }

    public String getProfil() {
        return profil;
    }

    public void setProfil(String profil) {
        this.profil = profil;
    }
}