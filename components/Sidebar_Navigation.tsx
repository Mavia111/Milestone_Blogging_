import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   

export function Sidebar_Navigation(){
    return(
    
    <div className=" menu w-full justify-center lg:w-auto lg:px-0 px-8 text-md font-normal  lg:text-center text-gray-800 lg:flex-grow ">
    
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className=" mt-4  lg:mt-0 px-4 py-2 rounded active:border-bottom-2">Women's Collection</AccordionTrigger>
        <AccordionContent className="px-4 py-2 text-left">
          <a>Bags</a>
        </AccordionContent>
        <AccordionContent className="px-4 py-2 text-left">
          <a>Jewelllery</a>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger className=" mt-4  lg:mt-0 px-4 py-2 rounded active:border-bottom-2">Men's Collection</AccordionTrigger>
        <AccordionContent className="px-4 py-2 text-left">
          <a>Bags</a>
        </AccordionContent>
        <AccordionContent className="px-4 py-2 text-left">
          <a>Jewelllery</a>
        </AccordionContent>
      </AccordionItem>
      
    </Accordion>
      <a
        href="/"
        className=" mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Electronics
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Home & Lifestyle
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left">
        Medicine
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Sports & Outdoor
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Baby’s & Toys
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Groceries & Pets
      </a>
      <a
        href="#responsive-header"
        className="mt-4 lg:block lg:mt-0 px-4 py-2 text-left"
      >
        Health & Beauty
      </a>
    </div>
    
    
);}