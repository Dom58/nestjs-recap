export interface UserData {
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
export type UserResponse = Partial<Omit<UserData, 'password'>>;

export type CreateUser = Omit<
  UserData,
  'id' | 'verified' | 'profileId' | 'provider' | 'companies' | 'appTwoFactorSecret' | 'emailTwoFactorSecret' | 'appTwoFactorEnabled' | 'emailTwoFactorEnabled'
>;
