import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/hr.svg" 
            alt="Tagalog" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Tagalog
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/es.svg" 
            alt="Ilocano" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Ilocano
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/fr.svg" 
            alt="Pangasinan" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Pangasinan
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/it.svg" 
            alt="Cebuano/Bisaya" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Bisaya/Cebuano
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/jp.svg" 
            alt="Pampango" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Pampango
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/jp.svg" 
            alt="Bicol" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Bicol
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          {/* <Image 
            src="/jp.svg" 
            alt="Ilonggo" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          /> */}
          Ilonggo
        </Button>
      </div>
    </footer>
  );
};
