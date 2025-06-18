import Image from "next/image";

export default function SpectrumPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 max-w-screen-xl mx-auto p-4 gap-4">
      <h1 className="py-10 text-2xl">Illustrations for the IEEE Spectrum blog</h1>
      <div className="project">
        <Image
          src="/work/spectrum/6G@2x.png"
          alt="6G"
          width={2800}
          height={2100}
        />
        <p className="text-base normal py-2">6G</p>
      </div>
      <div className="project">
        <Image
          src="/work/spectrum/AI-General@2x.png"
          alt="AI"
          width={2800}
          height={2100}
        />
        <p className="text-base normal py-2">AI</p>
      </div>
      <div className="project">
        <Image
          src="/work/spectrum/TelecomNetwork@2x.png"
          alt="Telecommunications"
          width={2800}
          height={2100}
        />
        <p className="text-base normal py-2">Telecommunications</p>
      </div>
      <div className="project">
        <Image
          src="/work/spectrum/AI-Image-Recognition@2x.png"
          alt="AI Image Recognition"
          width={2800}
          height={2100}
        />
        <p className="text-base normal py-2">AI Image Recognition</p>
      </div>
      <div className="project">
        <Image
          src="/work/spectrum/Binary@2x.png"
          alt="Binary"
          width={2800}
          height={2100}
        />
        <p className="text-base normal py-2">Binary</p>
      </div>
    </main>
  );
}