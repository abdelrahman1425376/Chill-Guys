import courcesRepo from "@/app/repo/cources-repo";
export async function GET(req) {
    const cources = await courcesRepo.getAllCources();
    return Response.json(cources);
}