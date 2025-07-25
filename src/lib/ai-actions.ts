
'use server';

import { getServiceRecommendations } from '@/ai/flows/service-recommendation';
import { getServicesByIds } from '@/lib/data';
import type { Service } from '@/lib/types';

export async function getRecommendedServicesAction(
  viewingHistory: string[],
  shoppingBagContents: string[]
): Promise<Service[]> {
  try {
    const allInputIds = new Set([...viewingHistory, ...shoppingBagContents]);

    const recommendations = await getServiceRecommendations({
      viewingHistory,
      shoppingBagContents,
    });
    
    const filteredIds = recommendations.recommendedServices.filter(id => !allInputIds.has(id));

    if (filteredIds.length === 0) {
      return [];
    }

    const recommendedServices = await getServicesByIds(filteredIds);
    return recommendedServices;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}
