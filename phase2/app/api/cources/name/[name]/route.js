import courcesRepo from "@/app/repo/cources-repo";
export async function GET(req, {params}) {
    const  name=params.name
    const cources = await courcesRepo.getCourceByName(name);
    return Response.json(cources);
}