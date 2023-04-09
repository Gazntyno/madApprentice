// A fortune teller program

#include <iostream>
#include <random>

using namespace std;

int main() 
{
    //Generates a random number 
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> dis(0,99);

    int rannum = dis(gen);
    std::cout << "Random Number: " << rannum << "\n";
    
    //Prints Fortune
    switch(rannum)
    {
        case 1:
        std::cout << "The odds are in your favor\n";
        break;

         case 2:
        std::cout << "It's possible\n";
        break;

         case 3:
        std::cout << "You must wait and find out for yourself\n";
        break;

         case 4:
        std::cout << "You already know the asnwer\n";
        break;
        
         case 5:
        std::cout << "Not likely\n";
        break;

        default: std::cout << "Future is undecided. Ask again later\n";

    }
    
    return 0;
    
}
