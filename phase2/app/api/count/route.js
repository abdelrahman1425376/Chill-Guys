import usersRepo from "@/app/repo/users-repo";
export async function GET(req) {
    const countStudents = await usersRepo.countStudents();
    const countAdmins = await usersRepo.countAdmins();
    const countTeachers = await usersRepo.countTeachers();
    const countusers = await usersRepo.countusers();
    const AvgStudents = await usersRepo.AvgStudents();
    const AvgAdmins = await usersRepo.AvgAdmins();
    const AvgTeachers = await usersRepo.AvgTeachers();
    const getTeacherWithMostStudents = await usersRepo.getTeacherWithMostStudents();
    const getTeacherWithLeastStudents = await usersRepo.getTeacherWithLeastStudents();
    const arr = [
        { value: parseInt(countStudents) },
        {  value: parseInt (countAdmins )},
        {  value: parseInt(countTeachers )},
        {  value: parseInt(countusers) },
        {  value: parseInt(AvgStudents) },
        {  value: parseInt(AvgAdmins) },
        {  value: parseInt(AvgTeachers) },
        {  value: parseInt(getTeacherWithMostStudents) },
        {  value: parseInt(getTeacherWithLeastStudents) }
      ];
    
      return Response.json(arr);

    
}