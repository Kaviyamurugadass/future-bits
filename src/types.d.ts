
import type { Session as AuthSession } from "@auth/sveltekit";


declare module "@auth/sveltekit" {
    interface Session extends AuthSession {
        access_token?: string;
        refresh_token?: string;
        id_token?: string;
        sub?:string;
    }
}
