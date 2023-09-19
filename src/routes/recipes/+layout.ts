import type { LayoutLoad } from './$types';

export const load = (async (params) => {
    console.log('::receipes/+layout.ts', params);
    return {
        layoutPlan: 'this is a layoutPlan'
    }
}) satisfies LayoutLoad;
