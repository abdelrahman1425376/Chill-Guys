import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const [courceName,name ] = await params.params;
    const com = await registerRepo.checkRepeatSameCource(courceName,name);
    return Response.json(com);
    
}