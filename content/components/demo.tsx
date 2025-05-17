import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "src/components/ui/accordion";

interface AccordionEntry {
    title: string;
    content: string;
}

interface DemoAccordionProps {
    items: AccordionEntry[];
}

export default function DemoAccordion({ items }: DemoAccordionProps) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-300"
                >
                    <AccordionTrigger className="text-lg font-medium text-indigo-600 hover:underline">
                        {item.title}
                    </AccordionTrigger>
                    <AccordionContent style={{color: "#fffff", background: "#a0312d"}}>
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
