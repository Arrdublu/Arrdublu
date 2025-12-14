
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const brands = [
  { name: 'BrandA', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'tech logo' },
  { name: 'BrandB', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'fashion logo' },
  { name: 'BrandC', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'food logo' },
  { name: 'BrandD', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'auto logo' },
  { name: 'BrandE', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'startup logo' },
  { name: 'BrandF', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'media logo' },
  { name: 'BrandG', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'creative agency' },
  { name: 'BrandH', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsb2dvfGVufDB8fHx8MTc2NTQ5Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'lifestyle brand' },
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
