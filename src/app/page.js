import Image from "next/image";
import SketchOne from "./sketches/SketchOne";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SketchOne />
      <main className="grid min-h-screen grid-cols-2 max-w-screen-xl mx-auto p-4 gap-4">
        <h1 className="col-span-2 py-10 text-2xl">
          Eric Frommelt is a 3D artist and designer based in Los Angeles, California.
        </h1>
        <div className="project col-span-2 md:col-span-1">
          <Link href="/work/altar">
          <Image
            src="/work/altar/03-14-2024.png"
            alt="Altars"
            width={2560}
            height={1440}
          />
          
          <h2 className="text-base normal py-2">Altar</h2>
          </Link>
        </div>
        <div className="project col-span-2 md:col-span-1">
          <Link href="/work/gpus">
          <Image
            src="/work/gpus/GPUUUUU_685.png"
            alt="GPUs"
            width={2560}
            height={1440}
          />
          <h2 className="text-base normal py-2">GPUs</h2>
          </Link> 
        </div>
        <div className="project col-span-2 md:col-span-1">
          <Link href="/work/leak">
          <Image
            src="/work/breach/TN_Leak.png"
            alt="Leak"
            width={2406}
            height={1354}
          />
          <h2 className="text-base normal py-2">Leak</h2>
          </Link>
        </div>
      </main>
    </>
  );
}
