package ti;

public class Test {

    private String Id = "";

    public Test() {
        this.Id = "brak ID";

    }

    public Test(String id){
        super();
        this.Id=id;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        this.Id = id;
    }

    @Override
    public String toString() {
        return "Jestem obiektem klasy Test, mój ID: "+Id;
    }
}
