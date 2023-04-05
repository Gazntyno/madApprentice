// a calculator program

#include <iostream>
#include <random>
using namespace std;

int main() {
   char op; 
   float num1, num2;

   cout << "Enter calculation: \n";
   cin >> num1 >> op >> num2 ;

   //cout << "Enter two numbers:";
   //cin >> num1 >> num2;

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