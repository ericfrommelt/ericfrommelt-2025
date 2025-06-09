import Image from "next/image";

export default function Leak() {
  return (
    <>
      <main className="grid min-h-screen grid-cols-2 max-w-screen-xl mx-auto p-4 gap-4">
        <div className="project col-span-1">
          <Image
            src="/work/breach/artificial-intelligence-2x.png"
            alt="3D scene depicting artificial intelligence concepts, with a focus on a large, intricate structure resembling a neural network, surrounded by abstract shapes."
            width={2560}
            height={3313}
          />
        </div>
        <div className="project col-span-1">
          <Image
            src="/work/breach/breach-2x.png"
            alt="3D scene depicting a data security breach."
            width={2560}
            height={3313}
          />
        </div>
        <div className="project col-span-1">
          <Image
            src="/work/breach/leak-2x.png"
            alt="3D scene depicting a data leak."
            width={2560}
            height={3313}
          />
        </div>
        <div className="project col-span-1">
          <Image
            src="/work/breach/norad-2x.png"
            alt="3D scene depicting NORAD."
            width={2560}
            height={3313}
          />
        </div>
      </main>
    </>
  );
}
