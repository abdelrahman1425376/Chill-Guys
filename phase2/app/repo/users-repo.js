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
          id: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
        take: 1,
      });    
      const leastInstructor = result[0]._count.id;
      return leastInstructor;
    }

    async getHighestSubjectWithHighFail() {
      const result = await prisma.regesteration.groupBy({
        by: ['course_name'],
        _count: {
          id: true,
        },
        where: {
          grade: 'F', // Adding the condition for grade 'F'
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
        take: 1,
      });    
      const leastInstructor = result[0].course_name;
      return leastInstructor;
    }
      
    




    async  getTeacherWithLeastStudents() {
      const result = await prisma.regesteration.groupBy({
        by: ['instructor'],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: 'asc',
          },
        },
        take: 1,
      });    
      const leastInstructor = result[0]._count.id;
      return leastInstructor;
    }
}

export default new usersRepo();