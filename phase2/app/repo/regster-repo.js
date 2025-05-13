import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class registerRepo {
   
async updateGrade(reg)
{
  console.log(reg.id)
    return await prisma.regesteration.update({
        where: {
          id: parseInt(reg.id), // Make sure reg.id exists and is the primary key
        },
        data: {
          grade: reg.grade, // Only updating grade
        }
      });
      
}
async updateSeats(reg)
{
    return await prisma.classess.update({
        where: {
          id: parseInt(reg.id), // Make sure reg.id exists and is the primary key
        },
        data: {
          available_seats: reg.available_seats, // Only updating grade
        }
      });
      
}
    async createRegister(reg) {
        return  await prisma.regesteration.create({
            data: {
                course_name: reg.course_name,
                instructor: reg.instructor,
                name: reg.name,
                grade: reg.grade,
                status: reg.status,
                
            }
        });;
}
    async  isCompleteCource(prerequisite, name) {
        return await prisma.register.findFirst({
            where: {
              course_name: prerequisite,
              name: name,
              status: "completed"
            }
          });
    }
    async  checkRepeatSameCource(courceName, name) {
        return await prisma.regesteration.findFirst({
            where: {
              course_name: courceName,
              name: name,
            }
          });
    }

   
    async  getAllClassess() {
        return await prisma.classess.findMany();
    }
    async  getAllRegister() {
        return await prisma.regesteration.findMany();
    }
    async   getClass(Id) {
        return await prisma.classess.findFirst({
            where: {
              id: parseInt(Id),
            }
          });
    }
    
    async getCourceStatusByStudent(stat,namee) {
       
        return await prisma.regesteration.findMany({
            where: {
                status: stat, 
                name:namee
            },
          });
      }
      async getRegisterByInfo(name,CRN,sname)
      {
       return  await prisma.regesteration.findFirst({
            where: {
              instructor: name,
              status: "InProgress",
              id:  parseInt(CRN),
              name: sname
            }
          })
      }
      async getRegisterByInfo(name)
      {
       return  await prisma.regesteration.findMany({
            where: {
              instructor: name,
              status: "InProgress",
      
            }
          })
      }
     

}
export default new registerRepo();