
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What types of media services do you offer?",
        answer: "We offer a comprehensive range of media services, including SEO optimization, creative content production (branding, visuals, video), and lifestyle photography. Our goal is to provide everything you need to elevate your brand's digital presence."
    },
    {
        question: "How does the SEO audit service work?",
        answer: "Our Comprehensive SEO Audit is a deep-dive analysis of your website. We examine technical factors, on-page content, and off-page authority. You'll receive a detailed report with prioritized, actionable recommendations to improve your search engine rankings."
    },
    {
        question: "What is included in the Brand Identity Suite?",
        answer: "The Brand Identity Suite is a complete package to define your visual brand. It includes a custom logo, a defined color palette, typography guidelines, and a full brand style guide to ensure consistency across all your marketing materials."
    },
    {
        question: "Can I customize a service package?",
        answer: "Absolutely. While we offer curated packages, we understand that every client's needs are unique. Please contact our support team to discuss your specific requirements, and we can create a custom service proposal for you."
    },
    {
        question: "What is the typical turnaround time for a project?",
        answer: "Turnaround times vary depending on the scope of the project. A Comprehensive SEO Audit typically takes 5-7 business days, while a full Brand Identity Suite can take 2-3 weeks. We will provide a detailed timeline with your project proposal."
    },
    {
        question: "How do I get started with a service?",
        answer: "The best way to start is by purchasing a service directly from our website. For custom projects or if you're unsure where to begin, please fill out our support form, and one of our specialists will get in touch to schedule a consultation."
    },
    {
        question: "Do you offer ongoing support or retainers?",
        answer: "Yes, we offer monthly retainer packages for ongoing SEO management, content creation, and social media support. Please contact us to discuss your needs, and we can create a custom retainer agreement."
    },
    {
        question: "What is your refund policy?",
        answer: "Due to the nature of our digital services, we generally do not offer refunds once work has commenced. However, client satisfaction is our top priority. If you have concerns about a service, please contact us immediately so we can address the issue. You can view our full Terms & Conditions for more details."
    }
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                    {item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
  );
}
