
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const brands = [
  { name: 'BrandA', logo: 'https://placehold.co/150x80.png', dataAiHint: 'tech logo' },
  { name: 'BrandB', logo: 'https://placehold.co/150x80.png', dataAiHint: 'fashion logo' },
  { name: 'BrandC', logo: 'https://placehold.co/150x80.png', dataAiHint: 'food logo' },
  { name: 'BrandD', logo: 'https://placehold.co/150x80.png', dataAiHint: 'auto logo' },
  { name: 'BrandE', logo: 'https://placehold.co/150x80.png', dataAiHint: 'startup logo' },
  { name: 'BrandF', logo: 'https://placehold.co/150x80.png', dataAiHint: 'media logo' },
  { name: 'BrandG', logo: 'https://placehold.co/150x80.png', dataAiHint: 'creative agency' },
  { name: 'BrandH', logo: 'https://placehold.co/150x80.png', dataAiHint: 'lifestyle brand' },
];

export function BrandGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {brands.map((brand) => (
        <Card key={brand.name} className="p-6 flex justify-center items-center aspect-video transition-shadow hover:shadow-lg">
          <div className="relative w-full h-full">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain"
              sizes="150px"
              data-ai-hint={brand.dataAiHint}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
