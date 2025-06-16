import Image from "next/image";

export default function CollapsePage() {
  return (
    <>
            <main className="grid min-h-screen grid-cols-1 max-w-screen-xl mx-auto p-4 gap-4">
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse01-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse02-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse03-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse04-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse05-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse06-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse07-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="project col-span-1">
                <Image
                  src="/work/collapse/collapse08-2x.png"
                  alt="Abstract digital art by Eric Frommelt"
                  width={2000}
                  height={2000}
                />
              </div>              
            </main>
    </>
  );
};
export const metadata = {
  title: "Collapse",
  description: "Digital art and design by Eric Frommelt",
};