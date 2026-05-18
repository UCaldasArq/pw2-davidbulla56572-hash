export interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  phoneNumber: string;
}

export type UsagePeriod = 'MORNING' | 'AFTERNOON' | 'NIGHT';

export interface UsageRecord {
  id?: string;
  userId: string;
  applicationId: number;
  days: number;
  hours: number;
  minutes: number;
  usagePeriod: UsagePeriod;
  user?: User;
  application?: Application;
}

export interface Application {
  id?: number;
  name: string;
}
