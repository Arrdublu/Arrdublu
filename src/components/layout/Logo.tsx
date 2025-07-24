
import Image from 'next/image';

export function Logo() {
  return (
    <Image 
        src="/images/logo.png"
        alt="Arrdublu Logo"
        width={150}
        height={40}
        priority
    />
  );
}
