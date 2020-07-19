package ti;

public class Pracownik {

    private Osoba osoba;
    private Firma firma;

    public Pracownik(Osoba osoba, Firma firma) {
        this.osoba = osoba;
        this.firma = firma;
    }

    public Osoba getOsoba() {
        return osoba;
    }

    public void setOsoba(Osoba osoba) {
        this.osoba = osoba;
    }

    public Firma getFirma() {
        return firma;
    }

    public void setFirma(Firma firma) {
        this.firma = firma;
    }

    public String getCalosc()
    {
        return "Jestem "+osoba.getImie()+" "+osoba.getNazwisko()+
                ", pracuję w firmie "+firma.getNazwa()+" ("+firma.getProfil()+")";
    }
}