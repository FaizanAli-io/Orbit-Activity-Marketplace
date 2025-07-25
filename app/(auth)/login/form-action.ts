'use server';

import z from 'zod';
import { LoginSchema } from './login-schema';
import { apiFetch } from '@/lib/api';
import { HTTP_VERB } from '@/lib/enums/http-verbs';
import { setAccessToken } from '@/lib/cookies';
import { withServerError } from '@/lib/utils/with-server-error';

interface Res {
  accessToken: string;
  type: 'VENDOR' | 'USER';
  userId?: string;
  vendorId?: string;
}
type ReqData = z.infer<typeof LoginSchema>;

export async function login(data: ReqData) {
  const { success, error } = LoginSchema.safeParse(data);
  if (!success) return { success, error: error.message };

  return withServerError(async () => {
    const result = await apiFetch<ReqData, Res>('/auth/login', {
      method: HTTP_VERB.POST,
      data,
    });

    await setAccessToken(result.accessToken);

    return null;
  });
}
