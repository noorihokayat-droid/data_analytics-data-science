# atm withdrawal program

balance = 110000
pin = 1234

print("======================")
print("Welcome to the ATM")

user_pin = int(input("Please enter your PIN: "))

if user_pin == pin:

    while True:
        print("\n1. Check Balance")
        print("2. Withdraw Money")
        print("3. Deposit Money")
        print("4. Exit")

        choice = int(input("Please select an option: "))

        if choice == 1:
             print("Your Balance is:", balance)

        elif choice == 2:
            amount = int(input("Enter the amount to withdraw: "))
            if amount <= balance:
                balance -= amount
                print(f"You have withdrawn ${amount}. Your new balance is: ${balance}")
            else:
                print("Insufficient funds.")

        elif choice == 3:
            amount = int(input("Enter the amount to deposit: "))
            balance += amount
            print(f"You have deposited ${amount}. Your new balance is: ${balance}") 

        elif choice == 4:
            print("Thank you for using the ATM. Goodbye!")
            break

        else:
            print("Invalid option. Please try again.")

else:
    print("Incorrect PIN. Access denied.")