interface Ty {
    name: string;
  }
  
  export default function PageTitle(props: Ty) {
    return (
      <div className="bg-[black] lg:h-[200px] p-5">
        <div className="p-5"></div>
        <h1 className="font-mono  p-5 lg:text-6xl sm:text-xl text-left mb-4 font-bold text-slate-50">
          {props.name}
        </h1>
      </div>
    );
  }
  