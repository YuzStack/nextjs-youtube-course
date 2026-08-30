export {};

export type Roles = 'admin' | 'moderator';

declare global {
  interface CustomJswSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
