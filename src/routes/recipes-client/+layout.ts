import type { LayoutLoad } from './$types';

export const load = (async (params) => {
    console.log('::receipes-client/+layout.ts', params);
    return {
        layoutPlan: 'this is a layoutPlan-client'
    }
}) satisfies LayoutLoad;
