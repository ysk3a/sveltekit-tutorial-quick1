import type { PageServerLoad } from './$types';

export const load = (async (params) => {
    console.log('::/recipes/+page.server.ts', params.route);
    return {
        plan: 'this is a planServer'
    }
}) satisfies PageServerLoad;
