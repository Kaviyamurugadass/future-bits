import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from "$env/static/private";

export const { handle } = SvelteKitAuth({
    providers: [
        Google({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: 'openid profile email',
                    prompt: 'consent', 
                },
            },
        }),
    ],
    secret: AUTH_SECRET,
    trustHost: true,
    callbacks: {
        async jwt({ token, account}) {
            if (account) {
                token.accessToken = account.access_token || undefined; 
                token.refreshToken = account.refresh_token || undefined;
                token.idToken = account.id_token || undefined; 
              
            }
            return token;
        },
        async session({ session, token }) {
           
            session.access_token = token.accessToken as string | undefined;
            session.refresh_token = token.refreshToken as string | undefined;
            session.id_token = token.idToken as string | undefined;
            session.sub = token.sub as string | undefined; 
            return session;
        }
        
    }
});
