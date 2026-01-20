import java.util.Scanner;

class BankAccount {
    private double balance;


    BankAccount(double balance) {
        this.balance = balance;
    }

    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient Balance");
        }
    }

    void showBalance() {
        System.out.println("Current Balance: " + balance);
    }
}

class LoanAccount {
    double loanAmount;
    double annualRate;
    int months;

    LoanAccount(double loanAmount, double annualRate, int months) {
        this.loanAmount = loanAmount;
        this.annualRate = annualRate;
        this.months = months;
    }

    double calculateEMI() {
        double monthlyRate = annualRate / (12 * 100);
        return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
               (Math.pow(1 + monthlyRate, months) - 1);
    }
    void payEMI(String mode) {
        System.out.println("EMI Amount: " + calculateEMI());
        System.out.println("Paid using: " + mode);
    }
}

public class BankApplication {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        BankAccount account = new BankAccount(5000);
        account.deposit(2000);
        account.withdraw(1500);
        account.showBalance();
        
        System.out.print("Enter Loan Amount: ");
        double loanAmount = sc.nextDouble();

        System.out.print("Enter Annual Interest Rate (%): ");
        double rate = sc.nextDouble();

        System.out.print("Enter Loan Duration (months): ");
        int months = sc.nextInt();

        LoanAccount loan = new LoanAccount(loanAmount, rate, months);

        System.out.print("Pay EMI by (Cash/Card): ");
        String mode = sc.next();

        loan.payEMI(mode);

        sc.close();
    }
}
