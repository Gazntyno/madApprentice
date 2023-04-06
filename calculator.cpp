// a calculator program

#include <iostream>
#include <random>
using namespace std;

int main() {
   char op; 
   float num1, num2;

   cout << "Enter calculation: ";
   cin >> num1 >> op >> num2 ;


// Checks for operator
   switch(op)
   {
    case '+':
    cout << num1 + num2 << "\n";
    break;

    case '-':
    cout << num1 - num2 << "\n";
    break;

    case '*':
    cout << num1 * num2 << "\n";
    break;
// Checks for errors 
    case '/':
    if(num2 == 0)
    {
        cout << "Error: Divison by zero \n";
    } else{cout << num1 / num2 << "\n";
    }
    break;

    defualt: 
    cout << "Error: Invalid operator \n";
    break;
   }

   return 0;
}