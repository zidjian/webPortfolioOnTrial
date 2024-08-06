import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Twitch from 'next-auth/providers/twitch';

export const authConfig: NextAuthConfig = {
    trustHost: true,
    pages: {
        signIn: "iniciar-sesion"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isOnLogin = nextUrl.pathname.startsWith('/iniciar-sesion');

            // console.log(nextUrl.pathname, isOnLogin, isLoggedIn);
            if (isOnLogin && isLoggedIn) {
                console.log("con");
                return Response.redirect(new URL('/', nextUrl));
            } else if (!isLoggedIn && !isOnLogin) {
                console.log("sin");

                return Response.redirect(new URL('/iniciar-sesion', nextUrl));

            }

            return true;
        },

        async signIn({ user, account, profile, email, credentials }) {
            return true;
        },

        async jwt({ token, user, account, profile }) {
            if (account?.provider == 'credentials') {
                token.data = {
                    user: {
                        ...user,
                    },
                };

                return token;
            } else if (account?.provider == 'google') {
                const data = {
                    email: user.email || '',
                    discordId: profile?.id || '',
                    username: user.name || '',
                    access_token: account?.access_token || '',
                    refresh_token: account?.refresh_token || '',
                    avatar: user.image || '',
                };

                token.data = {
                    ...user,
                    roles: "user",
                };
            }

            return token;
        },

        session({ session, token, user }) {
            session.user = token.data as any;

            return session;
        },
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Twitch({
            clientId: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_CLIENT_SECRET,
        })
    ], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);