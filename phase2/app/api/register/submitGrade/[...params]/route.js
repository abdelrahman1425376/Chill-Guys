import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const [name,CRN,sname ] =  params.params;
    console.log(name);
    console.log(CRN);
    console.log(sname);

    const com = await registerRepo.getRegisterByInfo(name, parseInt(CRN),sname);
    return Response.json(com);
}
