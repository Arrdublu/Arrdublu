
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/logo.png?alt=media&token=8665db41-2101-446e-82d2-28c06354674a"
      width={150}
      height={40}
      alt="Arrdublu Logo"
      priority
    />
  );
}
