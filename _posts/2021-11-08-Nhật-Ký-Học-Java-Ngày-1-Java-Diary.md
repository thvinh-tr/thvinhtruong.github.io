---
layout: post
title:  "Nhật ký học Java"
date:   2021-11-08 12:35:20
categories: Cheatsheet
---

Hi,

Lên năm ba mới học Java, tính ra là trễ so với đám Gifted, nhưng mà thui, khá fun và high nên tui blog chơi cái này.

Đầu tiên, là tải Java trước. Khá tiện, tải trên web sau đó double check version. Như thế này:

<img src="/img/java_dia_img/Screenshot_2021-10-27_at_11.33.56.png">

Này version mới hình như có Javac luôn.

- Tiếp đến chiến cú pháp căn bản. First and foremost, "Hello, world!".
    
    ```java
    public class MyHello {
       public static void main(String []args) {
          System.out.println("Hello World"); // prints Hello World
       }
    }
    ```
    
- Note: khá phiền là tên file phải == tên public class và thường người ta chuộng tên file theo chuẩn clean, ví dụ như: BinarySearch, setName, getName,... Trước giờ code C/C++, Go, Python, JS, cứ "main" mà phang (quá lười để đặt tên file).
- Điều thú vị thứ hai là hình như mọi thứ đều coi như object. Về cơ bản những function sẽ xem như method của một class (kể cả main), và nếu multiclass thì có thể viết một file main riêng để testing, cũng khá vui 😂.
    
    ```java
    import java.io.*;
    public class Employee {
        public String name;
        private int age;
        private double salary;
        
        // constructor
        public Employee(){}
        public Employee(String name, int age, double salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
    
        public void setAge(int age) {
            this.age = age;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public void setSalary(double salary) {
            this.salary = salary;
        }
    
        public String getName() {
            return this.name;
        }
    
        public int getAge() {
            return this.age;
        }
    
        public double getSalary() {
            return this.salary;
        }
    
        public void PrintMe() {
            System.out.println("Name: " + this.name);
            System.out.println("Age: " + this.age);
            System.out.println("Salary: " + this.salary);
        }
    }
    ```
    
    Testing time!!!!
    
    ```java
    public class EmployeeTest {
        public static void main(String []arg) {
            Employee david = new Employee();
            david.setName("David");
            david.setAge(20);
            david.setSalary(15.327);
            david.PrintMe();
        }
    }
    ```
    
- Tìm trên tutorialspoint thì được một số lưu ý về static:
    - "Static" là một non-access modifier
    - Can not use "static method" with "non static" variable or direct call with "non static" method (biến non static không thể sử dụng bên trong một method/hàm static:
        
        ```java
        class A {
        
        	int a = 40; // non static
        	
        	public static void main(String args[]) {
        	
        		System.out.println(a);
        	
        	}
        }
        
        --> Compile Time Error
        ```
        
    - Static Class is executed before main when runing the program (Static clas được execute trước hàm main khi chạy program).
    - Tại sao main lại phải là static:
        - Bởi vì không cần thiết phải tạo đối tượng để gọi phương thức static. Nếu nó là phương thức non-static, JVM đầu tiên tạo đối tượng và sau đó gọi phương thức main() mà có thể gây ra vấn đề về cấp phát bộ nhớ bộ nhớ phụ.
- Tiếp theo là "final" cũng là một non-access modifier. Nhìn chung thì có vẻ giống const 😂
- "Abstract" cũng là một cái quen thuộc trong OOP khi học C++. Ở Java, mình thấy có vẻ Abstract ở đây xài tiện hơn.
- Vài lưu ý từ tutorialspoint sau:
    
    ```
    - If a class is declared as abstract, 
    	the sole purpose is for the class to be extended.
    - A class cannot be both abstract and final 
    	(since a final class cannot be extended). 
    - If a class contains abstract methods then the class should be declared abstract. Otherwise, a compile error will be thrown.
    - An abstract class may contain both abstract methods as well normal methods.
    ```
    
    (Lười dịch quá mn ☹️)
    
- Ví dụ:
    
    ```java
    public abstract class SuperClass {
       abstract void m();   // abstract method
    }
    
    class SubClass extends SuperClass {
       // implements the abstract method
       void m() {
          .........
       }
    ```
    
    Hmm, thường khi khai báo abstract method, thì sẽ để trống, sau đó xuống một class con của nó, định nghĩa lại. Một ví dụ cụ thể là "Animal" là tập cha của "Dog" và "Cat", tức là "Cat" và "Dog" đều thuộc (là) "Animal", nhưng chó kêu gâu gâu, còn mèo kêu meo meo.
    
- Một số thao tác với String: xem tại [đây](https://www.tutorialspoint.com/java/java_strings.htm)
- Dăm ba cú pháp cơ bản, chiến thẳng một hàm sort để test thử xem —> hàm sort duy nhất thuộc không cần hint: bubble sort:
    
    ```java
    public class BubbleSort {
        public static void sort(int []arr) {
            for (int i=1; i<arr.length; i++) {
                for (int j=0; j<i; j++) {
                    if (arr[i] < arr[j]) {
                        int temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
        }
        public static void main(String []arg) {
            int []arr = {24, 35, 43, 232, 54, 36, 7, 764, 8};
            sort(arr);
            for (int i=0; i<arr.length; i++) {
                System.out.printf("%d ", arr[i]);
            }
            System.out.println();
        }    
    }
    ```
    
    Hơi chuối tí với cái swap, nhưng thôi, cái gì phức tạp để sau.
    
- Tiếp tục luyện basic syntax với Binary Search (tiện thử xài đệ quy luôn):
    
    ```java
    import java.util.Arrays;
    public class BinarySearch {
        public static int search(int []arr, int low, int high, int value) {
            Arrays.sort(arr);
            int mid = low + (high - low)/2;
            if (arr[mid] == value) {
                return mid;
            }
            if (arr[mid] > value) {
                return search(arr, low, mid - 1, value);
            } 
            return search(arr, mid + 1, low, value);
        }
    
        public static void main(String []arg) {
            int []arr = {1, 435, 634, 43, 6, 34, 76, 543, 132, 43};
            int low = 0;
            int high = arr.length - 1;
            int value = 6;
            System.out.println("Value is in position: " + search(arr, low, high, value));
            System.out.println("Sorted array is: ");
            for (int i=0; i<arr.length; i++) {
                System.out.printf("%d ", arr[i]);
            }
            System.out.println();
        }
    }
    ```
    
    Sau 2' ngẩn người, thì vẫn code ngon, thuộc bài !
    
- Thử một bài phức tạp như QuickSort xem sao:
    
    ```java
    public class QuickSort {
        public static int partition(int []arr, int low, int high) {
            int pivot = arr[high];
            int temp = low - 1;
            for (int i=low; i<=high-1; i++) {
                if (arr[i] < pivot) {
                    temp++;
                    int item = arr[temp];
                    arr[temp] = arr[i];
                    arr[i] = item;
                }
            }
            int last_item = arr[temp + 1];
            arr[temp+1] = arr[high];
            arr[high] = last_item;
            return temp + 1;
        }
    
        public static void sort(int []arr, int low, int high) {
            if (low < high) {
                int pivot = partition(arr, low, high);
                sort(arr, low, pivot-1);
                sort(arr, pivot+1, high);
            }
        }
        public static void main(String []arg) {
            int []arr = {24, 35, 43, 232, 54, 36, 7, 764, 8};
            sort(arr, 0, arr.length-1);
            for (int i=0; i<arr.length; i++) {
                System.out.printf("%d ", arr[i]);
            }
            System.out.println();
        }    
    }
    ```
    
    Thế quái nào, mình vẫn chưa implement được cái swap, hình như chỉ có collection mới có ☹️
    
    Thấy trên mạng biểu có vẻ phức tạp nên viết thẳng luôn hai lần 🤢
    
    Checkout: [http://www.javadude.com/articles/passbyvalue.htm](http://www.javadude.com/articles/passbyvalue.htm)
    
- Tiếp theo, OOP. Một vài bài tập bên C++ để code quen tay hơn nà !
- Đầu tiên, ta sẽ test về Inheritance.
    
    ```java
    public class Employee {
        // instance variable
        public String name;
        public int age;
        protected int salary;
    
        public Employee(){}
        public Employee(String name, int age, int salary) {
            this.name = name;
            this.age = age;
            this.salary = salary;
        }
    
        public void setAge(int age) {
            this.age = age;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public void setSalary(int salary) {
            this.salary = salary;
        }
    
        public String getName() {
            return this.name;
        }
    
        public int getAge() {
            return this.age;
        }
    
        public int getSalary() {
            return this.salary;
        }
    
        public void PrintMe() {
            System.out.println("Name: " + this.name);
            System.out.println("Age: " + this.age);
            System.out.println("Salary: " + this.salary);
        }
    }
    class Boss extends Employee {
        private int bonus;
    
        public Boss(){}
        public Boss(String name, int age, int salary, int bonus) {
            this.name = name;
            this.age = age;
            this.bonus = bonus;
        }
    
        public void setBonus(int bonus) {
            this.bonus = bonus;
        }
        public int getBonus() {
            return this.bonus;
        }
        public int getSalary() {
            return this.salary + this.bonus;
        }
        public void PrintMe() {
            System.out.println("Name: " + this.name);
            System.out.println("Age: " + this.age);
            System.out.println("Salary: " + (this.salary + this.bonus));
            System.out.println("Bonus: " + this.bonus);
        }
    }
    ```
    
    Nhìn hơi bựa, nhưng đại khái cũng làm được cái inheritance, mới biết một điều thú vị là khi có chữ public trước class  thì phải có file riêng, không sẽ bị bug. Nếu để public trước Boss thì bắt buộc phải viết trong file [Boss.java](http://Boss.java) —> đây có thể là một điều tiện lợi trong các dự án lớn với nhiều attributes và methods.
    
- Test lại kiến thức xíu về data hinding, cũng không khó, nhưng phần này bên Java, mình code tù quá 🤢
    
    ```java
    // practice Abstraction
    public class Euler {
        public Euler(){}
        private int factorial(int a) {
            if (a == 0) {
                return 1;
            } else if (a == 1) {
                return 1;
            } else {
                return a * factorial(a-1);
            }
        }
    
        public double calc_euler_num() {
            double x = 0;
            for (int i=0; i<10; i++) {
                x += (float)1/(factorial(i));
            }
            return x;
        }
    
        public static void main(String []arg) {
            Euler e = new Euler();
            System.out.println(e.calc_euler_num());
        }
    }
    ```
    
    Như đã thấy, phần factorial được đôn lên private, vì users không quan trọng cái đó (khách hàng chỉ muốn biết về euler hơn là biết cách tính giai thừa).
    
- Ngoài lề xíu nhưng mà:
    
    ```java
    Scanner reader = new Scanner(System.in);
    int input = reader.nextInt();
    // use this to get input from users
    ```
    
- Hai thứ quan trọng không kém là regular expression và exception:
    
    —> checkout: [https://www.tutorialspoint.com/java/java_regular_expressions.htm](https://www.tutorialspoint.com/java/java_regular_expressions.htm) and [https://www.tutorialspoint.com/java/java_exceptions.htm](https://www.tutorialspoint.com/java/java_exceptions.htm)
    
- Trở lại với OOP, tui thử implement cái bài con chó con mèo để thử Po ly no phi zầm (đa hình) xem sao:
- Đầu tiên, thử dùng abstract class để giải quyết bài toán động vật
    
    ```java
    public abstract class Animals {
        protected String name;
        protected int age;
        protected String sound;
        protected String food;
        
        public Animals(){}
        public Animals(String name, int age, String sound, String food) {
            this.name = name;
            this.age = age;
            this.sound = sound;
            this.food = food;
        }
    
        public String getName(){
            return this.name;
        }
    
        public int getAge() {
            return this.age;
        }
    
        abstract String Speak();
        abstract String Eat();
    }
    
    class Dog extends Animals {
        public Dog(){}
        public Dog(String name, int age, String sound, String food) {
            this.name = name;
            this.age = age;
            this.sound = sound;
            this.food = food;
        }
        public String Speak() {
            return this.sound;
        }
    
        public String Eat() {
            return this.food;
        }
    }
    
    class Cat extends Animals {
        public Cat(){}
        public Cat(String name, int age, String sound, String food) {
            this.name = name;
            this.age = age;
            this.sound = sound;
            this.food = food;
        }
        public String Speak() {
            return this.sound;
        }
    
        public String Eat() {
            return this.food;
        }
    }
    ```
    
    Note: abstract function bắt buộc đi với abstract class.
    
    Với logic giống bài trên, có thể giải những bài về Hình học hoặc company.
    
- Nhân đây, tui muốn nói đến từ khoá super: nói đơn giản thì super được dùng để truy cập biến của lớp cha (giả sử lớp con có đặc điểm khác cha, chúng ta vẫn dễ dàng tìm thấy đặc điểm ở cha bằng cách dùng super).
    
    ```java
    class Vehicle {
        int speed = 50;
    }
     
    public class Bike2 extends Vehicle {
        int speed = 100;
     
        void display() {
            System.out.println(super.speed);
        }
     
        public static void main(String args[]) {
            Bike2 b = new Bike2();
            b.display();
     
        }
    }
    ```
    
    Result: 50 (value ở parent class).
    
- Trong java, super() được sử dụng để gọi trực tiếp Constructor của lớp cha.
    
    ```java
    class Vehicle {
        Vehicle() {
            System.out.println("Vehicle is created");
        }
    }
     
    class Car extends Vehicle {
        Car() {
            super(); 
            System.out.println("Car is created");
        }
     
        public static void main(String args[]) {
            Bike2 b = new Car();
        }
    
    ```
    
    Result: 
    
    ```
    Vehicle is created
    Bike is created
    ```
    
- Từ khóa super cũng có thể được sử dụng để gọi phương thức của lớp cha. Trong trường hợpn overriding:
    
    ```java
    class Person {
        void message() {
            System.out.println("welcome");
        }
    }
     
    public class Student16 extends Person {
        void message() {
            System.out.println("welcome to java");
        }
     
        void display() {
            message();
            super.message();
        }
     
        public static void main(String args[]) {
            Student16 s = new Student16();
            s.display();
        }
    }
    ```
    
    Result: 
    
    ```
    welcome to java
    welcome
    ```
    
    - Nếu không có super thì result sẽ là "welcome".
- If a class is inheriting the properties of another class, the subclass automatically acquires the default constructor of the superclass. But if you want to call a parameterized constructor of the superclass, you need to use: super(value) —> tức là nếu muốn gọi constructor từ lớp cha, có thể dùng cú pháp super(value)
    
    ```java
    class Superclass {
       int num;
    
       Superclass(int num) {
          this.num = num; 		 
       }
    
       public void getAge() {
          System.out.println(num);
       }
    }
    
    public class Subclass extends Superclass {
       Subclass(int num) {
          super(num);
       }
    
       public static void main(String args[]) {
          Subclass s = new Subclass(24);
          s.getAge();
       }
    }
    ```
    
    Output: 24
    
- Để đào sâu hơn về Polymorphism, ta có thể lấy ví dụ ở tutorialspoint (checkout [here](https://www.tutorialspoint.com/java/java_polymorphism.htm))
    
    Class 1: Employee.java
    
    ```java
    public class Employee {
        private String name;
        private String address;
        private int number;
     
        public Employee(String name, String address, int number) {
            System.out.println("Constructing an Employee");
            this.name = name;
            this.address = address;
            this.number = number;
        }
     
        public void mailCheck() {
            System.out.println("Within Employee class");
            System.out.println("Mailing a check to " + this.name + " " + this.address);
        }
     }
    ```
    
    Class 2: [Salary.java](http://Salary.java) 
    
    ```java
    public class Salary extends Employee {
        private double salary; // Annual salary
        
        public Salary(String name, String address, int number, double salary) {
           super(name, address, number);
           setSalary(salary);
        }
        
        public void mailCheck() {
           System.out.println("Within mailCheck of Salary class ");
           System.out.println("Mailing check to " + getName()
           + " with salary " + salary);
        }
     }
    ```
    
    VirtualDemo (file riêng): 
    
    ```java
    public class VirtualDemo {
        public static void main(String [] args) {
            Salary s = new Salary("Mohd Mohtashim", "Ambehta, UP", 3, 3600.00);
    				Employee e = new Salary("John Adams", "Boston, MA", 2, 2400.00);
            System.out.println("Call mailCheck using Salary reference --");   
            s.mailCheck();
            System.out.println("\n Call mailCheck using Employee reference--");
            e.mailCheck();
         }
    }
    ```
    
    Output (giống nhau cho cả hai trường hợp define Emplyee(...) or Salary(...)):
    
    ```
    Constructing an Employee
    Constructing an Employee
    Call mailCheck using Salary reference --
    Within mailCheck of Salary class 
    Mailing check to Mohd Mohtashim with salary 3600.0
    
    Call mailCheck using Employee reference--
    Within mailCheck of Salary class 
    Mailing check to John Adams with salary 2400.0
    ```
    
- Discussion:
    - Đầu tiên, biến "s" thì khỏi nói rồi, nó toàn là salary, nếu có xuất hàm mailCheck ra thì ra trong lớp con, cũng hợp lý, nhưng tại sao biến "e" lại có vấn đề?
    - Sâu hơn, ta thấy rằng, ở compile time, compiler dùng hàm mailCheck ở lớp Employee để xác thực về cái method này. Sau đó ở run time, JVM (Java Virtual Machine) sẽ invoke hàm mailCheck ở Salary class và hiện kết quả như ta thấy (khác biệt giữa runtime và compile time: checkout [here](https://www.baeldung.com/cs/runtime-vs-compile-time))
    - Nếu biến Employee thành một abtract class thì kết quả cũng thế, khi đó Employee sẽ là một lớp abstract, không thể instantiate
    
- Tiếp đến là Encapsulation. Khá đơn giản, cứ như C++ ấy, getter setter,...

### Interface

- Khái niệm: Interface là một reference type trong java, khá tương đồng với class. Là một collection của các abstract method (phương thức trừu tượng). Một class, để thao tác với interface, bằng cách kế thừa những abtract method của interface.
- Interface không thể instantiate và cũng không chứa constructor.
- Tất cả method trong interface phải là abstract.
- Không có instance variable trong interface, chỉ tồn tại biến static và final.
- Interface không thể là kế thừa của 1 class. Một interface phải được implement từ class.
- Một interface có thể extends nhiều interface.

Tóm lại thì, interface chỉ đơn giản là việc thực hiện các abstract method trong java, mặc dù có chút khác biệt với những abstract class, interface vẫn rất phổ biến. Một interface, basically, chứa những behaviors mà class sẽ implement.

Animals.java

```java
public interface Animals {
    public void eat();
    public void speak();
}
```

Dog.java

```java
public class Dog implements Animals {
    public Dog(){}
    public void eat() {
        System.out.println("Meat");
    }

    public void speak() {
        System.out.println("Gau gau");
    }

    public static void main(String []args) {
        Animals d = new Dog();
        d.eat();
        d.speak();
    }
}
```

### Package

Ví dụ: 

- **java.lang** − bundles the fundamental classes
- **java.io** − classes for input , output functions are bundled in this package

Gần giống như tạo một library trong python rồi import nó lên thôi.

1. Sử dụng keyword package
    
    Theo như tutorialspoint: 
    
    > Since the package creates a new namespace there won't be any name conflicts with names in other packages. Using packages, it is easier to provide access control and it is also easier to locate the related classes.
    > 
    
    Nếu hiểu theo cách này, dùng keyword package, nghĩa là tạo ra một namespace —> trong java thì đơn giản và dễ dàng locate resources hơn.
    
    Hơn nữa, nếu package keyword không được dùng, thì class, interface, enumeration và annotation types,... sẽ tự động lưu vào trong default current package.
    
    Code vẫn như cũ: 
    
    ```java
    // Animal.java
    package animals;
    public interface Animal {
        public void eat();
        public void going();
    }
    
    // Dog.java
    package animals;
    public class Dog implements Animal {
        public void eat() {
            System.out.println("gau gau");
        }
    
        public void going() {
            System.out.println("4 legs");
        }
    
        public static void main(String []args) {
            Dog d = new Dog();
            d.eat();
            d.going();
        }
    }
    ```
    
     Đi đến folder parent. Chạy theo package như sau: 
    
    ```java
    javac -d Animal.java
    javac -d Dog.java
    ```
    
    Sau đó, dễ dàng nhận thấy folder animals (theo tên package đã define trước đó). Trong đó có cả Animal.class và Dog.class —> gõ java Dog để ra kết quả. 
    
    Tuy nhiên, sẽ dễ gặp lỗi như sau,
    
    <img src="/img/java_dia_img/Screenshot_2021-11-08_at_11.30.36.png">
    
    Lỗi này đại khái do sai classpath. Có thể đọc thêm ở [đây](https://javarevisited.blogspot.com/2015/04/error-could-not-find-or-load-main-class-helloworld-java.html#:~:text=There%20are%20many%20ways%20Error,-cp%20or%20-classpath%20option.) hoặc checkout một [thread](https://www.reddit.com/r/learnjava/comments/guzyaw/from_could_not_find_or_load_main_class_to/) về việc định nghĩa các classpath.
    
    Cách khắc phục khá đơn giản, chỉ cần back ra folder mẹ, tức là đừng có "cd animals" làm gì. Khi ở folder mẹ chứa folder của animals - package name, cứ chạy "java animals.Dog" là xong. Done!
    
    Useful link: một số lỗi thường gặp khi bắt gặp error loading main function: [http://net-informations.com/java/err/main.htm](http://net-informations.com/java/err/main.htm)
    
2. Import Keyword
    
    Đơn giản là một class này lấy thông tin từ một class khác (bắt buộc same package nhé), ví dụ như class Boss và Employee không liên quan đến nhau nhưng same package là company (nếu như Boss kế thừa từ Employee thì không nói rồi), sếp muốn xem salary của nhân viên, khác class nhưng tại sao không? dùng import, import class Employee qua để sếp coi là được. 
    
    Case study trên là tui tự nghĩ ra đó hihi, để viết thử xem.
    
    ```java
    // Employee.java
    package company;
    public class Employee {
        public String name;
        private int salary;
        public Employee(String name, int salary){
            this.name = name;
            this.salary = salary;
        }
    
        public String getName() {
            return this.name;
        }
    
        public int getSalary() {
            return this.salary;
        }
    }
    
    // Boss.java
    package company;
    import company.Employee.*;
    public class Boss {
        public Boss(){}
        public int I_Need_To_See_Your_Salary(Employee e) {
            return e.getSalary();
        }
    
        public static void main(String []args) {
            Boss b = new Boss();
            Employee e = new Employee("david", 20);
            System.out.println(b.I_Need_To_See_Your_Salary(e));
            
    
        }
    }
    ```
    
    Chạy với javac -d như trên, vẫn ra kết quả 20 bình thường, khi xoá dòng package company ở file Boss và chạy nó, nếu dùng java -d vẫn ra kết quả.
    
    Nhưng giả sử đó là một file độc lập chạy riêng hoàn toàn thì sao, mình đã chạy riêng nhưng vẫn bị bugs này đến bugs khác. Vậy tóm lại, khi import thì chung một package sẽ được import ?? giả sử Boss thuộc package khác (tức công ty khác mà vẫn muốn xem lương của nhân viên công ty đối thủ thì sao?). Mình vẫn hơi thắc mắc, có lẽ nó liên quan đến cấu trúc của Java, sẽ tìm hiểu sau vậy, nhiêu đây chắc đủ cho hôm nay rồi.
    
    useful link: [https://www.w3schools.com/java/java_packages.asp](https://www.w3schools.com/java/java_packages.asp)