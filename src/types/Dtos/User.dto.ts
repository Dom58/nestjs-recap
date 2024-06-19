export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verified: boolean;
  provider: string;
  profileId: string;
  role?: string;
  profileImage?: string;
  userHasCompany?: boolean;
  timezone?: string | null;
  invitationId?: string;
  appTwoFactorEnabled?: boolean;
  appTwoFactorSecret?: string | null;
  emailTwoFactorEnabled?: boolean;
  emailTwoFactorSecret?: string | null;
}
export type UserResponse = Partial<Omit<User, 'password'>>;

export type CreateUser = Omit<
  User,
  'id' | 'verified' | 'profileId' | 'provider' | 'companies' | 'appTwoFactorSecret' | 'emailTwoFactorSecret' | 'appTwoFactorEnabled' | 'emailTwoFactorEnabled'
>;
