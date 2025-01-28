import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.roles.upsert({
        where: {
            id: 1
        },
        update: {},
        create: {
            id: 1,
            role_name: "user"
        }
    });

    await prisma.roles.upsert({
        where: {
            id: 2
        },
        update: {},
        create: {
            id: 2,
            role_name: "seller"
        }
    });

    await prisma.roles.upsert({
        where: {
            id: 3
        },
        update: {},
        create: {
            id: 3,
            role_name: "admin"
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })