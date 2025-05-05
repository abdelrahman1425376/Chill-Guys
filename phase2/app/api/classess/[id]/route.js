import registerRepo from "@/app/repo/regster-repo";
export async function GET(req, {params}) {
    const  id=params.id
    const classe = await registerRepo.getClass(id);
    return Response.json(classe);
}
export async function PUT(req) {
    const reg = await req.json();
    console.log(reg)
    const newreg = await registerRepo.updateSeats(reg);
    return Response.json(newreg);
}