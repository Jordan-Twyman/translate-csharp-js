// See https://aka.ms/new-console-template for more information

using System;
using System.Linq;

namespace DinnerParty
{

        public class Guest
{
    public string? Name { get; set; }
    public string? Occupation { get; set; }
    public string? Bio { get; set; }
}
    class Program {




  public static void Main() {
// List<Guest> allGuests = GetGuests();


  List<Guest> allGuests = new List<Guest>() {
        new Guest() {
            Name = "Marilyn Monroe",
            Occupation = "entertainer",
            Bio = "(1926 - 1962) American actress, singer, model"
        },
        new Guest() {
            Name = "Abraham Lincoln",
            Occupation = "politician",
            Bio = "(1809 - 1865) US President during American civil war"
        },
        new Guest() {
            Name = "Martin Luther King",
            Occupation = "activist",
            Bio = "(1929 - 1968)  American civil rights campaigner"
        },
        new Guest() {
            Name = "Rosa Parks",
            Occupation = "activist",
            Bio = "(1913 - 2005)  American civil rights activist"
        },
        new Guest() {
            Name = "Peter Sellers",
            Occupation = "entertainer",
            Bio = "(1925 - 1980) British actor and comedian"
        },
        new Guest() {
            Name = "Alan Turing",
            Occupation = "computer scientist",
            Bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
        },
        new Guest() {
            Name = "Admiral Grace Hopper",
            Occupation = "computer scientist",
            Bio = "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
        },
        new Guest() {
            Name = "Indira Gandhi",
            Occupation = "politician",
            Bio = "(1917 - 1984) Prime Minister of India 1966 - 1977"
        }
    };

List<Guest> table1 = new List<Guest>();
List<Guest> table2 = new List<Guest>();

        foreach (Guest guest in allGuests)
        {
            var table1Occupations = table1.Select(g => g.Occupation);
            if (table1Occupations.Contains(guest.Occupation)){
                table2.Add(guest);
            }
            else{
                table1.Add(guest);
            }
        }
    Console.WriteLine("Table 1");
    foreach (Guest guest in table1)
    {
        Console.WriteLine($"{guest.Name}");
        Console.WriteLine($"{guest.Occupation}");
        Console.WriteLine($"{guest.Bio}");        
    }
    
    Console.WriteLine("Table 2");

     foreach (Guest guest in table2)
    {
        Console.WriteLine($"{guest.Name}");
        Console.WriteLine($"{guest.Occupation}");
        Console.WriteLine($"{guest.Bio}");          
    }


// var tables = 
// bool occupationExist = allGuests.Contains("");

// foreach (var guests in from Guest guest in allGuests
//                       where occupationExist
//                       select guest)
// {
//     Console.WriteLine($"{guests.Occupation}");
// }


  



}}}
    
