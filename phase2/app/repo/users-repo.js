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
    let totalUsers = await this.countusers(); 
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

   
   
   
    async getTeacherWithMostStudents() {
      const result = await prisma.regesteration.groupBy({
        by: ['instructor'],
        _count: {
          name: true, 
        },
        orderBy: {
          _count: {
            name: 'desc',
          },
        },
        take: 1,
      });
    
      if (result.length === 0) {
        console.log("No instructors found.");
        return null;
      }
    
      const topInstructor = result[0];
      console.log(`Top Instructor: ${topInstructor.instructor}, Students: ${topInstructor._count.name}`);
      return topInstructor;
    }




    async  getTeacherWithLeastStudents() {
      const result = await prisma.regesteration.groupBy({
        by: ['instructor'],
        _count: {
          name: true,
        },
        orderBy: {
          _count: {
            name: 'asc',
          },
        },
        take: 1,
      });
    
      if (result.length === 0) {
        console.log("No instructors found.");
        return null;
      }
    
      const leastInstructor = result[0];
      console.log(`Instructor with least students: ${leastInstructor.instructor}, Students: ${leastInstructor._count.name}`);
      return leastInstructor;
    }
}

export default new usersRepo();