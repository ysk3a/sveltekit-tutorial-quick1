import { fail } from '@sveltejs/kit';
import type { Actions, RequestEvent } from './$types';

export const actions = {
    default: async (event: RequestEvent) => {
        const data = await event.request.formData();
        const email = data.get('email');
        const password = data.get('password');
        console.log('::/login/+page.server.ts', email, password);
        if (!email) {
            return fail(400, { email, missing: true });
        }
        event.cookies.set('sessionid', '1234');
        // throw redirect(303, '/dashboard');
        return { success: true };
    }
} satisfies Actions;
