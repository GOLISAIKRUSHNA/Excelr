


class Sai{

    static int a =13;

    static{
        System.out.println("multline 1");
        System.out.println(a);
        a=7;

    }
    
    static int b; 
    public static void main(String[] args) {
        System.out.println("main");
        System.out.println(a);
        System.out.println(b);

    }

    static 
    {
        System.out.println("multline 2");
        System.out.println(a);
        System.out.println(b);
        a=17;
        b=13;


        
    }
}