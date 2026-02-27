import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [interestRate, setInterestRate] = useState(8.5);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment.toFixed(2);
  };

  const totalPayment = (parseFloat(calculateMonthlyPayment()) * loanTerm).toFixed(2);
  const totalInterest = (parseFloat(totalPayment) - loanAmount).toFixed(2);

  return (
    <section className="container mx-auto px-4 py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Loan Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Estimate Your Repayments
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a quick estimate of your monthly payments
          </p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <Label className="text-base mb-4 block">
                  Loan Amount: <span className="font-bold text-accent">${loanAmount.toLocaleString()}</span>
                </Label>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>$1,000</span>
                  <span>$100,000</span>
                </div>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Loan Term: <span className="font-bold text-accent">{loanTerm} months</span>
                </Label>
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  min={6}
                  max={60}
                  step={6}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6 months</span>
                  <span>60 months</span>
                </div>
              </div>

              <div>
                <Label className="text-base mb-4 block">
                  Interest Rate (APR): <span className="font-bold text-accent">{interestRate.toFixed(2)}%</span>
                </Label>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={3}
                  max={25}
                  step={0.5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>3%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold mb-4">Your Estimate</h3>
              
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">Monthly Payment</span>
                <span className="text-2xl font-bold text-accent">${calculateMonthlyPayment()}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-muted-foreground">Total Payment</span>
                <span className="text-lg font-semibold">${parseFloat(totalPayment).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="text-lg font-semibold">${parseFloat(totalInterest).toLocaleString()}</span>
              </div>

              <div className="mt-6 p-4 bg-background rounded-md">
                <p className="text-xs text-muted-foreground">
                  * This is an estimate only. Actual rates and terms may vary based on your credit score and application details.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LoanCalculator;
