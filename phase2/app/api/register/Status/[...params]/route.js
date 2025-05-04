import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const [stat,name ] = await params.params;
    
    const com = await registerRepo.getCourceStatusByStudent(stat,name);
    return Response.json(com);
    
}
