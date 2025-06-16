import Image from "next/image";

export default function Info() {
  return (
    <>
      <main className="grid min-h-screen grid-cols-1 max-w-screen-md mx-auto p-4 gap-4">
        <div className="col-span-1 max-w-screen-sm">
          <Image
            src="/profilepix/DSCF0051.jpg"
            alt="Portrait of Eric Frommelt—digital artist and designer"
            width={1200}
            height={1200}
          />
        </div>
        <div className="col-span-1">
          <h1 className="text-5xl font-light py-10">3D art + design. Human creativity.</h1>
          <p className="mt-2">I&apos;m a digital artist and designer based in Los Angeles, CA. I partner with brands on visual exploration and storytelling through design.</p>
          <p className="mt-2">I love light, running, and music.</p>
          <p className="mt-20">Let&apos;s work together<br /><a href="mailto:eric@ericfrommelt.com" className="hover:underline">eric@ericfrommelt.com</a></p>
        </div>
      </main>
    </>
  );
}