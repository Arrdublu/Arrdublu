
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/Header_Starting_Mobile_Logo.png?alt=media&token=36c8d541-3b34-4458-8dc5-1ac793933e5b"
      width={135}
      height={36}
      alt="Arrdublu Logo"
      priority
      className="object-contain"
    />
  );
}
