import registerRepo from "@/app/repo/regster-repo";
export async function GET(req) {
    const classes = await registerRepo.getAllClassess();
    return Response.json(classes);
}