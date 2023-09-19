import type { LayoutServerLoad } from './$types';

export const load = (async (params) => {
    console.log('::/recipes/+layout.server.ts', params.route);
    return {
        layoutPlan: 'this is a layoutPlanServer'
    }
}) satisfies LayoutServerLoad;
