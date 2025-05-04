import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
     const name = params.id;
    

    const com = await registerRepo.getRegisterByInfo(name);
    return Response.json(com);
}