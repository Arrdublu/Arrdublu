import Image from 'next/image';

export function NewLogo() {
  return (
    <Image 
        src="/images/new-logo.png"
        alt="Arrdublu New Logo"
        width={150}
        height={40}
        priority
    />
  );
}