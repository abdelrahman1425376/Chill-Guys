import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class usersRepo {
  async countStudents() {
    return await prisma.users.count({
      where: {
        role: 'student',
      },
    });
  }
  async countAdmins() {
    return await prisma.users.count({
      where: {
        role: 'admin',
      },
    });
  }
  async countTeachers() {
    return await prisma.users.count({
      where: {
        role: 'teacher',
      },
    });
  }
  async countusers() {
    return await prisma.users.count(
     
    );
  }
  async AvgStudents() {
    let studentCount = await prisma.users.count({
      where: {
        role: 'student',
      },
    });
  
    let totalUsers = await this.countusers(); 
  
    return await parseFloat(studentCount) / parseFloat(totalUsers);
    }
  async AvgAdmins() {
    let studentCount = await prisma.users.count({
      where: {
        role: 'admin',
      },
    });
  
    let totalUsers = await this.countusers(); 
  
    return await parseFloat( parseFloat(studentCount) / parseFloat(totalUsers));
    }
  async AvgTeachers() {
    let studentCount = await prisma.users.count({
      where: {
        role: 'teacher',
      },
    });
    let totalUsers = await this.countusers(); // assuming countusers is defined in the same class/repo 
    return await parseFloat(studentCount / totalUsers);
    }
  
    async getUser(username,password) {
        return await prisma.users.findFirst({
            where: {
              username: username,
              password: password,
            }
          });
}
    // async getAllMeals() {
    //     return await prisma.cources.findMany();
    // }

   
   
    
}

export default new usersRepo();