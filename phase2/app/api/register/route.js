import registerRepo from "@/app/repo/regster-repo";
export async function GET(req) {
    const classes = await registerRepo.getAllRegister();
    return Response.json(classes);
}
export async function POST(req) {
    const reg = await req.json();
    console.log(reg)
    const newreg = await registerRepo.createRegister(reg);
    return Response.json(newreg);
}
export async function PUT(req) {
    const reg = await req.json();
    console.log(reg)
    const newreg = await registerRepo.updateGrade(reg);
    return Response.json(newreg);
}