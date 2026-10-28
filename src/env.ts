import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ GOOGLE_APP_PASSWORD: { static: true } });
