import type { PageLoad } from './$types';

export const load = (async (params) => {
    console.log('::receipes-client/+page.ts', params);

    return {
        plan: 'this is a plan-client'
    }
}) satisfies PageLoad;
