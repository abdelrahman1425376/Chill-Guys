import courcesRepo from "@/app/repo/cources-repo";
export async function GET(req, {params}) {
    const  category=params.category
    console.log(category)
    const cources = await courcesRepo.getCourceByCategory(category);
    return Response.json(cources);
}