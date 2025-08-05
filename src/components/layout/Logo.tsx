
import Image from 'next/image';

export function Logo() {
  const lightLogo = "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/arrdublu_logo_blackArtboard-1.png?alt=media&token=0c573884-0b4b-405c-ba36-5477f43a1699";
  const darkLogo = "https://firebasestorage.googleapis.com/v0/b/arrdublu-yur7j.appspot.com/o/arrdublu_logo_whiteArtboard-1.png?alt=media&token=08940c38-8959-450f-8b93-9028aed51152";

  return (
    <div className="relative h-9 w-36">
        <Image
            src={lightLogo}
            fill
            alt="Arrdublu Logo"
            priority
            className="object-contain dark:hidden"
            sizes="(max-width: 768px) 100vw, 144px"
        />
        <Image
            src={darkLogo}
            fill
            alt="Arrdublu Logo"
            priority
            className="object-contain hidden dark:block"
            sizes="(max-width: 768px) 100vw, 144px"
        />
    </div>
  );
}
