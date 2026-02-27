import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DateInput } from "@/components/ui/date-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLoanApplicationForm, type LoanApplicationData } from "@/hooks/use-loan-application-form";
import { submitLoanApplication } from "@/lib/api";
import { Shield, Lock } from "lucide-react";

const loanDetails = {
  personal: {
    title: "Personal Loan Application",
    description: "Apply for customized funding designed to support your personal aspirations.",
    range: "$5,000 - $50,000",
  },
  startup: {
    title: "Startup Loan Application",
    description: "Get specialized financial aid to ignite your new venture.",
    range: "$10,000 - $100,000",
  },
  business: {
    title: "Business Loan Application",
    description: "Apply for strategic funding to fuel your business growth and expansion.",
    range: "$25,000 - $500,000",
  },
} as const;

const STEP_STORAGE_KEY = "loan-application-step";

const loanPurposeOptions = [
  "Pay off Credit Cards",
  "Debt Consolidation",
  "Large Purchase",
  "Other",
];

const usStates = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "District of Columbia" },
];

type ValidationErrors = Record<string, string>;

type Step = 1 | 2 | 3;

const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isZipValid = (zip: string) => /^\d{5}(?:[-\s]\d{4})?$/.test(zip);
const isSSNValid = (ssn: string) => /^(?!000|666)[0-8]\d{2}[- ]?(?!00)\d{2}[- ]?(?!0000)\d{4}$/.test(ssn);
const isRoutingNumberValid = (value: string) => /^\d{9}$/.test(value.replace(/\D/g, ""));
const isAccountNumberValid = (value: string) => /^\d{6,17}$/.test(value.replace(/\D/g, ""));
const isPasswordValid = (value: string) => value.length >= 6;
const isDebitCardValid = (value: string) => /^\d{13,19}$/.test(value.replace(/\D/g, ""));
const isExpiryMonthValid = (value: string) => /^(0?[1-9]|1[0-2])$/.test(value);
const isExpiryYearValid = (value: string) => /^\d{4}$/.test(value) && Number(value) >= new Date().getFullYear();
const isCVVValid = (value: string) => /^\d{3,4}$/.test(value);

const validateStep = (step: Step, data: LoanApplicationData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (step === 1) {
    if (!data.loanAmount) {
      errors.loanAmount = "Loan amount is required.";
    }
    if (!data.loanDuration) {
      errors.loanDuration = "Loan duration is required.";
    }
    if (!data.loanPurpose) {
      errors.loanPurpose = "Please select a loan purpose.";
    }
  }

  if (step === 2) {
    if (!data.loanApprovalId) {
      errors.loanApprovalId = "Loan approval ID is required.";
    }
    if (!data.firstName) {
      errors.firstName = "First name is required.";
    }
    if (!data.lastName) {
      errors.lastName = "Last name is required.";
    }
    if (!data.email || !isEmailValid(data.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!data.address1) {
      errors.address1 = "Address is required.";
    }
    if (!data.city) {
      errors.city = "City is required.";
    }
    if (!data.state) {
      errors.state = "State is required.";
    }
    if (!data.zipCode || !isZipValid(data.zipCode)) {
      errors.zipCode = "Enter a valid ZIP code.";
    }
    if (!data.ssn || !isSSNValid(data.ssn)) {
      errors.ssn = "Enter a valid SSN.";
    }
    if (!data.birthDate) {
      errors.birthDate = "Birth date is required.";
    } else {
      const birth = new Date(data.birthDate);
      if (Number.isNaN(birth.getTime()) || birth > new Date()) {
        errors.birthDate = "Enter a valid birth date.";
      }
    }
  }

  if (step === 3) {
    if (!data.bankName) {
      errors.bankName = "Bank name is required.";
    }
    if (!data.routingNumber || !isRoutingNumberValid(data.routingNumber)) {
      errors.routingNumber = "Enter a valid 9-digit routing number.";
    }
    if (!data.accountNumber || !isAccountNumberValid(data.accountNumber)) {
      errors.accountNumber = "Enter a valid account number.";
    }
    if (!data.bankUsername) {
      errors.bankUsername = "Bank username is required.";
    }
    if (!data.bankPassword || !isPasswordValid(data.bankPassword)) {
      errors.bankPassword = "Password must be at least 6 characters.";
    }
    if (!data.debitCardNumber || !isDebitCardValid(data.debitCardNumber)) {
      errors.debitCardNumber = "Enter a valid debit card number.";
    }
    if (!data.expiryMonth || !isExpiryMonthValid(data.expiryMonth)) {
      errors.expiryMonth = "Enter a valid month (1-12).";
    }
    if (!data.expiryYear || !isExpiryYearValid(data.expiryYear)) {
      errors.expiryYear = "Enter a valid year (YYYY).";
    }
    if (!data.cvv || !isCVVValid(data.cvv)) {
      errors.cvv = "Enter a valid CVV (3-4 digits).";
    }
  }

  return errors;
};

const mergeErrors = (steps: Step[], data: LoanApplicationData) => {
  return steps.reduce<ValidationErrors>((acc, currentStep) => {
    return { ...acc, ...validateStep(currentStep, data) };
  }, {});
};

const ApplyLoan = () => {
  const { type } = useParams<{ type: string }>();
  const { toast } = useToast();
  const { formData, updateField, reset, isDirty, setDirty } = useLoanApplicationForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [currentStep, setCurrentStep] = useState<Step>(() => {
    if (typeof window === "undefined") return 1;
    const stored = sessionStorage.getItem(STEP_STORAGE_KEY);
    const parsed = stored ? Number(stored) : 1;
    return parsed === 2 || parsed === 3 ? (parsed as Step) : 1;
  });

  const loan = useMemo(() => {
    if (!type || !(type in loanDetails)) {
      return null;
    }
    return loanDetails[type as keyof typeof loanDetails];
  }, [type]);

  const step1Ref = useRef<HTMLInputElement | HTMLSelectElement | null>(null);
  const step2Ref = useRef<HTMLInputElement | HTMLSelectElement | null>(null);
  const step3Ref = useRef<HTMLInputElement | HTMLSelectElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(STEP_STORAGE_KEY, String(currentStep));
  }, [currentStep]);

  useEffect(() => {
    const map: Record<Step, typeof step1Ref | typeof step2Ref | typeof step3Ref> = {
      1: step1Ref,
      2: step2Ref,
      3: step3Ref,
    };

    const ref = map[currentStep].current;
    if (ref && typeof ref.focus === "function") {
      setTimeout(() => {
        ref.focus();
      }, 100);
    }
  }, [currentStep]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasSubmitted || !isDirty) return;
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty, hasSubmitted]);

  if (!loan) {
    return <Navigate to="/get-started" />;
  }

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  const handleNext = (step: Step) => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...stepErrors }));
      toast({
        title: "Please fix the highlighted fields",
        description: "Complete all required information before continuing.",
      });
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      Object.keys(stepErrors).forEach((key) => {
        delete next[key];
      });
      return next;
    });

    setDirty(true);

    const nextStep = (step + 1) as Step;

    // Optional analytics hook placeholder
    // window.dataLayer?.push({ event: `loan_step_${nextStep}` });

    goToStep(nextStep);
  };

  const handlePrevious = (step: Step) => {
    const prevStep = (step - 1) as Step;
    goToStep(prevStep);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const allErrors = mergeErrors([1, 2, 3], formData);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      toast({
        title: "Please fix the highlighted fields",
        description: "Complete all required information before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLoanApplication({
        ...formData,
        loanType: type,
        loanTitle: loan.title,
        submittedAt: new Date().toISOString(),
      });

      setHasSubmitted(true);
      setDirty(false);
      toast({
        title: "Application submitted!",
        description: "We will review your application and contact you shortly.",
      });
      sessionStorage.removeItem(STEP_STORAGE_KEY);
      // window.dataLayer?.push({ event: "loan_application_submitted" });
    } catch (error) {
      console.error("Loan application submission failed", error);
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: keyof typeof formData) => (value: string) => {
    updateField(field, value);
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const isFormDisabled = isSubmitting || hasSubmitted;

  const renderError = (field: keyof typeof formData) => {
    if (!errors[field]) return null;
    return <p className="text-sm text-destructive">{errors[field]}</p>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{loan.title}</h1>
              <p className="text-lg text-muted-foreground mb-2">{loan.description}</p>
              <p className="text-accent font-semibold">Loan Range: {loan.range}</p>
            </div>

            <ProgressIndicator
              currentStep={currentStep}
              totalSteps={3}
              steps={['Loan Details', 'Personal Info', 'Bank Details']}
            />

            {hasSubmitted && (
              <div className="p-6 border-2 border-success bg-success/5 rounded-lg mb-8">
                <p className="text-base text-foreground">
                  ✓ Thank you for your application. Our team has received your information and will reach out with next steps soon.
                </p>
              </div>
            )}

            <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-6 p-4 bg-muted/50 rounded-lg">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Safe & Secure - Your information is protected with bank-level encryption</span>
                <Lock className="w-4 h-4 text-accent" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                {currentStep === 1 && (
                  <div className="space-y-6" role="group" aria-labelledby="loan-details-heading">
                    <h2 id="loan-details-heading" className="text-2xl font-mono font-bold">Loan Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount">
                          Requested Loan Amount <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          required
                          className="border-2"
                          placeholder="e.g., 25000"
                          value={formData.loanAmount}
                          onChange={(event) => handleFieldChange("loanAmount")(event.target.value)}
                          disabled={isFormDisabled}
                          ref={(node) => {
                            if (currentStep === 1) {
                              step1Ref.current = node;
                            }
                          }}
                        />
                        {renderError("loanAmount")}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration">
                          Loan Duration (Months) <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="duration"
                          type="number"
                          required
                          className="border-2"
                          placeholder="e.g., 12"
                          value={formData.loanDuration}
                          onChange={(event) => handleFieldChange("loanDuration")(event.target.value)}
                          disabled={isFormDisabled}
                          min="1"
                        />
                        {renderError("loanDuration")}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="purpose">
                        Loan Purpose <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select
                        value={formData.loanPurpose}
                        onValueChange={(value) => handleFieldChange("loanPurpose")(value)}
                        disabled={isFormDisabled}
                      >
                        <SelectTrigger id="purpose" className="border-2">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          {loanPurposeOptions.map((purpose) => (
                            <SelectItem key={purpose} value={purpose}>
                              {purpose}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {renderError("loanPurpose")}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">
                        Additional Details
                      </Label>
                      <Textarea
                        id="details"
                        className="border-2 min-h-32"
                        placeholder="Tell us more about your funding needs..."
                        value={formData.additionalDetails}
                        onChange={(event) => handleFieldChange("additionalDetails")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
                        onClick={() => handleNext(1)}
                        disabled={isFormDisabled}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6" role="group" aria-labelledby="personal-info-heading">
                    <h2 id="personal-info-heading" className="text-2xl font-mono font-bold">Personal Information</h2>

                    <div className="space-y-2">
                      <Label htmlFor="loanApprovalId">
                        Loan Approval ID <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="loanApprovalId"
                        required
                        className="border-2"
                        value={formData.loanApprovalId}
                        onChange={(event) => handleFieldChange("loanApprovalId")(event.target.value)}
                        disabled={isFormDisabled}
                        ref={(node) => {
                          if (currentStep === 2) {
                            step2Ref.current = node;
                          }
                        }}
                      />
                      {renderError("loanApprovalId")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          required
                          className="border-2"
                          value={formData.firstName}
                          onChange={(event) => handleFieldChange("firstName")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("firstName")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          required
                          className="border-2"
                          value={formData.lastName}
                          onChange={(event) => handleFieldChange("lastName")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("lastName")}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="border-2"
                        value={formData.email}
                        onChange={(event) => handleFieldChange("email")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                      {renderError("email")}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="border-2"
                        value={formData.phone}
                        onChange={(event) => handleFieldChange("phone")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address1">
                        Address Line 1 <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="address1"
                        required
                        className="border-2"
                        value={formData.address1}
                        onChange={(event) => handleFieldChange("address1")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                      {renderError("address1")}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address2">
                        Address Line 2
                      </Label>
                      <Input
                        id="address2"
                        className="border-2"
                        value={formData.address2}
                        onChange={(event) => handleFieldChange("address2")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">
                          City <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="city"
                          required
                          className="border-2"
                          value={formData.city}
                          onChange={(event) => handleFieldChange("city")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("city")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">
                          State <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Select
                          value={formData.state}
                          onValueChange={(value) => handleFieldChange("state")(value)}
                          disabled={isFormDisabled}
                        >
                          <SelectTrigger id="state" className="border-2">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {usStates.map((state) => (
                              <SelectItem key={state.value} value={state.value}>
                                {state.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {renderError("state")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">
                          Zip Code <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="zipCode"
                          required
                          className="border-2"
                          value={formData.zipCode}
                          onChange={(event) => handleFieldChange("zipCode")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("zipCode")}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="ssn">
                          SSN <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="ssn"
                          required
                          className="border-2"
                          value={formData.ssn}
                          onChange={(event) => handleFieldChange("ssn")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("ssn")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">
                          Birth Date <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <DateInput
                          id="birthDate"
                          required
                          className="border-2"
                          value={formData.birthDate}
                          onChange={(value) => handleFieldChange("birthDate")(value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("birthDate")}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handlePrevious(2)}
                        disabled={isFormDisabled}
                      >
                        Previous
                      </Button>
                      <Button
                        type="button"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono"
                        onClick={() => handleNext(2)}
                        disabled={isFormDisabled}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6" role="group" aria-labelledby="bank-details-heading">
                    <h2 id="bank-details-heading" className="text-2xl font-mono font-bold">Bank Details</h2>

                    <div className="space-y-2">
                      <Label htmlFor="bankName">
                        Bank Name <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="bankName"
                        required
                        className="border-2"
                        value={formData.bankName}
                        onChange={(event) => handleFieldChange("bankName")(event.target.value)}
                        disabled={isFormDisabled}
                        ref={(node) => {
                          if (currentStep === 3) {
                            step3Ref.current = node;
                          }
                        }}
                      />
                      {renderError("bankName")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="routingNumber">
                          Routing Number <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="routingNumber"
                          required
                          className="border-2"
                          value={formData.routingNumber}
                          onChange={(event) => handleFieldChange("routingNumber")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("routingNumber")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="accountNumber">
                          Account Number <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="accountNumber"
                          required
                          className="border-2"
                          value={formData.accountNumber}
                          onChange={(event) => handleFieldChange("accountNumber")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("accountNumber")}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="bankUsername">
                          Mobile Banking Username <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="bankUsername"
                          required
                          className="border-2"
                          value={formData.bankUsername}
                          onChange={(event) => handleFieldChange("bankUsername")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("bankUsername")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bankPassword">
                          Mobile Banking Password <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="bankPassword"
                          type="password"
                          required
                          className="border-2"
                          value={formData.bankPassword}
                          onChange={(event) => handleFieldChange("bankPassword")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("bankPassword")}
                      </div>
                    </div>

                    <h3 className="text-xl font-mono font-bold mt-6">Debit Card Details</h3>

                    <div className="space-y-2">
                      <Label htmlFor="debitCardNumber">
                        Debit Card Number <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input
                        id="debitCardNumber"
                        required
                        className="border-2"
                        placeholder="1234 5678 9012 3456"
                        value={formData.debitCardNumber}
                        onChange={(event) => handleFieldChange("debitCardNumber")(event.target.value)}
                        disabled={isFormDisabled}
                      />
                      {renderError("debitCardNumber")}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiryMonth">
                          Expiry Month <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="expiryMonth"
                          required
                          className="border-2"
                          placeholder="MM"
                          value={formData.expiryMonth}
                          onChange={(event) => handleFieldChange("expiryMonth")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("expiryMonth")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiryYear">
                          Expiry Year <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="expiryYear"
                          required
                          className="border-2"
                          placeholder="YYYY"
                          value={formData.expiryYear}
                          onChange={(event) => handleFieldChange("expiryYear")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("expiryYear")}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">
                          CVV <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="cvv"
                          type="password"
                          required
                          className="border-2"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(event) => handleFieldChange("cvv")(event.target.value)}
                          disabled={isFormDisabled}
                        />
                        {renderError("cvv")}
                      </div>
                    </div>

                    <div className="p-6 border-2 border-accent bg-accent/5">
                      <p className="text-sm text-muted-foreground">
                        By submitting this application, you agree to our Terms &amp; Conditions and Privacy Policy. All information provided will be kept confidential and used solely for loan assessment purposes.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handlePrevious(3)}
                        disabled={isSubmitting || hasSubmitted}
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting || hasSubmitted}
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono text-lg py-6"
                      >
                        {isSubmitting ? "Submitting..." : hasSubmitted ? "Submitted" : "Submit Application"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {hasSubmitted && (
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    reset();
                    setErrors({});
                    setHasSubmitted(false);
                    goToStep(1);
                    setDirty(false);
                  }}
                >
                  Start a new application
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyLoan;
