import fse from 'fs-extra';
import path from 'path';
import { PrismaClient } from '@prisma/client';
let prisma = new PrismaClient();

const courcePath = path.join(process.cwd(), 'app/data/CourceDataBase.json');
const usersPath = path.join(process.cwd(), 'app/data/LoginDataBase.json');
const RegestrationPath = path.join(process.cwd(), 'app/data/RegestrationDataBase.json');
const ClassessPath = path.join(process.cwd(), 'app/data/ClassessDataBase.json');


async function seed() {
  const cources = await fse.readJson(courcePath);
  const users = await fse.readJson(usersPath);
  const Regestrations = await fse.readJson(RegestrationPath);
  const Classess = await fse.readJson(ClassessPath);

  for (const Regestration of Regestrations) {
    await prisma.Regestrations.create({ data: Regestration });
  }
  for (const Class of Classess) {
    await prisma.Classess.create({ data: Class });
  }
  for (const user of users) {
    await prisma.users.create({ data: user });
  }

  for (const cource of cources) {
    await prisma.cources.create({data: cource
    });
  }
  
  console.log('✅ Database seeded successfully!');
}

await seed()
  .catch((e) => {
    console.error('❌ Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });