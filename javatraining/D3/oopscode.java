//Write a program for bankaccount to know the balance after depositing and withdrawing the amount 
// and also having the loan account facilitiy to calculate the emi and monthly emi's will be
//paid by customer using either by card or cash

package OOPS;

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
        } 
        else
         {
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

        