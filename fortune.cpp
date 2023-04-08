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
    std::cout << "Random Number: " << rannum << std::endl;

    return 0;
    
}