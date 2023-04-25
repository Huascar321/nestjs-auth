import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // const prismaService = new PrismaService();
  // const userService = new UserService(prismaService);
  console.log('Seeding...');
  setRoles().then();
  setPermissions().then();
}

/*async function setUsers(userService: UserService, roleService: RoleService): Promise<void> {
  // pending
}*/

async function setRoles(): Promise<void> {
  await prisma.role.upsert({
    where: {
      name: 'Predeterminado'
    },
    update: {},
    create: {
      name: 'Predeterminado',
      description:
        'Rol con los permisos básicos, se otorga como predeterminado al registrar un nuevo usuario'
    }
  });
  await prisma.role.upsert({
    where: {
      name: 'Administrador'
    },
    update: {},
    create: {
      name: 'Administrador',
      description:
        'Rol con todos los permisos de la aplicación, considerado también como usuario maestro'
    }
  });
}

async function setPermissions(): Promise<void> {
  await prisma.permission.upsert({
    where: {
      name: 'ROLE_READ'
    },
    update: {},
    create: {
      name: 'ROLE_READ',
      description: 'Puede ver los roles',
      code: 1000
    }
  });
  await prisma.permission.upsert({
    where: {
      name: 'ROLE_CREATE'
    },
    update: {},
    create: {
      name: 'ROLE_CREATE',
      description: 'Puede crear roles',
      code: 1001
    }
  });
  await prisma.permission.upsert({
    where: {
      name: 'ROLE_UPDATE'
    },
    update: {},
    create: {
      name: 'ROLE_UPDATE',
      description: 'Puede editar roles',
      code: 1002
    }
  });
  await prisma.permission.upsert({
    where: {
      name: 'ROLE_DELETE'
    },
    update: {},
    create: {
      name: 'ROLE_DELETE',
      description: 'Puede eliminar roles',
      code: 1003
    }
  });
}

main()
  .then(async () => {
    console.log('Seeding process finished');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
