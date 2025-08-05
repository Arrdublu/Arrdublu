
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://firebasestorage.googleapis.com/v0/b/arrdublu-yur7j.appspot.com/o/android-chrome-512x512.png?alt=media&token=3488a531-1051-4775-a864-2831818291d0"
      width={150}
      height={40}
      alt="Arrdublu Logo"
      priority
    />
  );
}
