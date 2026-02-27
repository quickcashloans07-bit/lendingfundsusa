import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of loans do you offer?",
    answer: "We offer three main types of loans: Personal Loans for individual needs, Startup Loans for new ventures, and Business Loans for established enterprises. Each loan type is customized to meet specific financial requirements.",
  },
  {
    question: "How long does the approval process take?",
    answer: "Most applications receive a same-day decision. Once you submit your application, our team reviews it promptly. If approved, you can sign your contract and receive funds within 1-2 business days.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "Basic requirements include valid identification, proof of income, and business documentation (for business loans). Specific requirements may vary based on loan type and amount. Our team will guide you through the exact documents needed.",
  },
  {
    question: "What are the eligibility criteria?",
    answer: "Eligibility varies by loan type. Generally, we require applicants to be 18+ years old, have a stable income source, and meet creditworthiness standards. For business loans, we also consider business age and revenue.",
  },
  {
    question: "Are there any application fees?",
    answer: "No, applying for a loan with QuickCashLoans is completely free. We only charge interest and any applicable fees once your loan is approved and disbursed. All costs are clearly outlined before you sign.",
  },
  {
    question: "Can I repay my loan early?",
    answer: "Yes, we encourage early repayment and offer flexible repayment options. Many of our loan products have no prepayment penalties, allowing you to save on interest by paying off your loan ahead of schedule.",
  },
  {
    question: "How much can I borrow?",
    answer: "Loan amounts vary based on the type of loan and your qualifications. Personal loans typically range from $5,000 to $50,000, while business loans can go significantly higher based on business needs and capacity.",
  },
  {
    question: "What is your interest rate?",
    answer: "Interest rates are personalized based on various factors including loan type, amount, term, and creditworthiness. We provide competitive rates and will present you with a detailed breakdown during the approval process.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We employ high-end security measures and encryption to protect your personal and financial information. Our systems comply with industry standards and regulations to ensure your data remains confidential.",
  },
  {
    question: "Can I apply if I have bad credit?",
    answer: "We consider applications from individuals with various credit profiles. While credit history is a factor, we also evaluate other aspects like income stability and business performance. We encourage you to apply regardless of your credit score.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12">
              Find answers to common questions about our lending services, application process, and terms.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-border px-6 data-[state=open]:border-accent transition-colors"
                >
                  <AccordionTrigger className="text-left font-mono font-bold hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-8 border-2 border-accent bg-accent/5">
              <h3 className="text-2xl font-mono font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help. Contact us and we'll get back to you as soon as possible.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-accent text-accent-foreground font-mono font-bold hover:bg-accent/90 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
