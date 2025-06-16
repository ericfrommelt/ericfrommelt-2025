import Image from "next/image";

export default function Altar() {
  return (
    <>
      <main className="grid min-h-screen grid-cols-1 max-w-screen-xl mx-auto p-4 gap-4">
        <div className="project col-span-1">
          <Image
            src="/work/altar/03-14-2024.png"
            alt="3D scene depicting an altar, a bouquet of flowers, and some wooden pegs"
            width={2560}
            height={1440}
          />
        </div>
        <div className="project col-span-1">
          <Image
            src="/work/altar/03-15-2024.png"
            alt="3D scene depicting an altar with a different arrangement of flowers"
            width={2560}
            height={1440}
          />
        </div>
        <div className="project col-span-1">
          <Image
            src="/work/altar/03-16-2024.png"
            alt="3D scene depicting an altar with a bouquet of flowers and a wooden peg and some things that appear to chopsticks but are not"
            width={2560}
            height={1440}
          />
        </div>
      </main>
    </>
  );
}
