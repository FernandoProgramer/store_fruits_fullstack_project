import { PrismaService } from "src/prisma/prisma.service";

export async function existEmail(email: string, prisma: PrismaService): Promise<boolean> {
    try {
        const user = await prisma.users.findUnique({
            where: { email }
        });

        return !!user;
    } catch (error) {
        throw new Error('Error checking email');
    }
}