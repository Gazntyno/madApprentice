// a calculator program

#include <iostream>
using namespace std;

int main() {
   char op; 
   float num1, num2;

   cout << "Enter Operator ( +, -, *, /):";
   cin >> op;

   cout << "Enter two numbers:";
   cin >> num1 >> num2;

   switch(op)
   {
    case '+':
    cout << num1 + num2;
    break;

    case '-':
    cout << num1 - num2;
    break;

    case '*':
    cout << num1 * num2;
    break;

    case '/':
    if(num2 == 0)
    {
        cout << "Error: Divison by zero";
    } else{cout << num1 / num2;
    }
    break;

    defualt: 
    cout << "Error: Invalid operator";
    break;
   }

   return 0;
}