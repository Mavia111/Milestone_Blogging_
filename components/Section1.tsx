export function Banner(){
    return(
        <section className="flex flex-wrap lg:flex-nowrap border-b-4 border-slate-400">
  
  <div className="w-full lg:w-1/2 bg-slate-950 p-6 lg:p-12 border-t-2 lg:border-t-0 lg:border-l-2 border-slate-400">
    <h1 className="text-slate-100 font-mono font-extrabold text-right text-2xl lg:text-4xl pt-6 lg:pt-10">
      Tech Meets AI: Simplifying Life, One Gadget at a Time
    </h1>
    <p className="text-slate-100 font-mono font-light text-right text-sm lg:text-base pt-6 lg:pt-10">
      AI technology is revolutionizing daily life with tools that simplify tasks, enhance productivity, and boost creativity. 
      From AI-powered virtual assistants to smart home devices and innovative apps, these gadgets save time 
      and make life easier. Explore how AI trends like automation, personalization, and smart integration
      are shaping the future of technology.
    </p>
  </div>
  <div className="w-full lg:w-1/2 border-b-2 lg:border-b-0 lg:border-r-2 border-slate-400">
    <img
      src="/banner.jpg"
      alt="AI Banner"
      className="w-full h-auto"
    />
  </div>
</section>

    );
}