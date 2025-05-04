import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class courcesRepo {
   
    async getAllCources() {
        return await prisma.cources.findMany();
    }
    async getCourceByName(Name) {
        const soso=Name;
        console.log(soso);
        return await prisma.cources.findMany({
            where: {
                name: soso, 
            },
          });
      }
      async getCourceByCategory(category) {
        return await prisma.cources.findMany({
            where: {
                category: category, 
            },
          });
      }

   
    async createMeal(meal) {
            return  await prisma.meals.create({
                data: {
                    title: meal.title,
                    tags: meal.tags,
                    calories: meal.calories,
                    description: meal.description,
                    satisfaction: meal.satisfaction,
                    image: meal.image,
                    userId: 1, 
                }
            });;
    }
    async deleteAllMeals() {
        return await prisma.meals.deleteMany();
    }
    async updateMeal(id, meal) { 
            return await prisma.meals.update({
                where: { id: parseInt(id) },
                data: {
                    title: meal.title,
                    tags: meal.tags,
                    calories: meal.calories,
                    description: meal.description,
                    satisfaction: meal.satisfaction,
                    image: meal.image,
                    userId: 1
                }
            });;
    }
    async deleteMeal(id) {
        return await prisma.meals.delete({
                where: { id: parseInt(id) }
            });
    }


   
      async getMealsByDate(date) {
        const startOfDay = new Date(date);
        startOfDay.setUTCHours(0, 0, 0, 0);
        const endOfDay = new Date(startOfDay);
        endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);
        return await prisma.meals.findMany({
            where: {
                date: {
                    gte: startOfDay,
                    lt: endOfDay,
                },
            },
        });
    }
    
    async rateMeal(id, rate) {
                return  await prisma.meals.update({
                where: { id: parseInt(id) },
                data: {
                    satisfaction: rate,
                }
            });;
    }
    // async getAverageRating(id) {
    //         const meal = await prisma.meals.findUnique({
    //             where: { id: parseInt(id) }
    //         });
    //         if (!meal) {
    //             throw new Error('Meal not found');
    //         }
    //         const meals = await prisma.meals.findMany({
    //             where: { userId: meal.userId },
    //         });
    //         const averageSatisfaction =
    //             meals.reduce((sum, m) => sum + m.satisfaction, 0) / meals.length;

    //         return averageSatisfaction;
    // }
    async getMealSummary() {
        const meals = await prisma.meals.findMany({
            select: {
                tags: true,
                satisfaction: true,
            },
        });
        const summary = {};
        for (let meal of meals) {
            for (let tag of meal.tags) {
                if (!summary[tag]) {
                    summary[tag] = { count: 0, totalSatisfaction: 0 };
                }
                summary[tag].count += 1;
                summary[tag].totalSatisfaction += meal.satisfaction || 0;
            }
        }
        const summaryReport = [];
        for (const tag in summary) {
            const data = summary[tag];
            const averageSatisfaction = data.count > 0 ? data.totalSatisfaction / data.count : 0;
            summaryReport.push({
                tag,
                totalMeals: data.count,
                averageSatisfaction,
            });
        }
        summaryReport.sort((a, b) => b.totalMeals - a.totalMeals);
    
        return summaryReport;
    }
      async getAverageTagSatisfaction(tag) {
        const meals = await prisma.meals.findMany({
            where: {
                tags: {
                    has: tag,
                },
            },
            select: {
                satisfaction: true,
            },
        });
        if (meals.length === 0) {
            return 0;
        }
        const result = await prisma.meals.aggregate({
            _avg: {
                satisfaction: true,
            },
            where: {
                id: {
                    in: meals.map(meal => meal.id),
                },
            },
        });
    
        return result._avg.satisfaction || 0; 
    }
    
}

export default new courcesRepo();