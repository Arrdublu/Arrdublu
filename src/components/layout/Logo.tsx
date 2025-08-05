
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/arrdublu_logo_blackArtboard-1.png?alt=media&token=0c573884-0b4b-405c-ba36-5477f43a1699"
      width={150}
      height={40}
      alt="Arrdublu Logo"
      priority
    />
  );
}
