
"use client";

import { Suspense } from 'react';
import { KeywordFilter } from '@/components/services/KeywordFilter';

export function HomePageClient() {
  return (
    <Suspense>
      <KeywordFilter />
    </Suspense>
  );
}
