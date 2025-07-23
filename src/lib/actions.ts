'use server';

import { getServiceRecommendations } from '@/ai/flows/service-recommendation';
import { getServicesByIds } from '@/lib/data';
import type { Service } from '@/lib/types';

export async function getRecommendedServicesAction(
  viewingHistory: string[],
  shoppingBagContents: string[]
): Promise<Service[]> {
  try {
    // The GenAI flow might recommend items already in the cart or viewed.
    // It's a simple model, so we'll filter them out here.
    const allInputIds = new Set([...viewingHistory, ...shoppingBagContents]);

    const recommendations = await getServiceRecommendations({
      viewingHistory,
      shoppingBagContents,
    });
    
    const filteredIds = recommendations.recommendedServices.filter(id => !allInputIds.has(id));

    if (filteredIds.length === 0) {
      return [];
    }

    // Fetch full service details for the recommended IDs
    const recommendedServices = await getServicesByIds(filteredIds);
    return recommendedServices;
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // In case of an error, return an empty array to prevent crashing the client.
    return [];
  }
}
