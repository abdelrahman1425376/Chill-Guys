import usersRepo from "@/app/repo/users-repo";
export async function GET(req, {params}) {
    const [username,password ] = await params.params;
    const user = await usersRepo.getUser(username,password);
    return Response.json(user);
    
}