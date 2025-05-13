import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const [name,crn,sname ] =  params.params;
    console.log(name);
   // console.log(CRN);
    console.log(sname);

    const com = await registerRepo.getRegisterByInfo1(name, parseInt(crn),sname);
    return Response.json(com);
}
