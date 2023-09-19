import type { PageLoad } from './$types';

export const load = (async (params) => {
    console.log('::receipes/+page.ts', params);

    return {
        plan: 'this is a plan'
    }
}) satisfies PageLoad;
