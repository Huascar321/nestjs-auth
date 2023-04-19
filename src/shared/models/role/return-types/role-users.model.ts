import { UserRole } from '@prisma/client';

export type RoleUsersReturn = (UserRole & {
  user: { id: number; username: string };
})[];
