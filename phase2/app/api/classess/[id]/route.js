import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const  id=params.id
    const classe = await registerRepo.getClass(id);
    return Response.json(classe);
}