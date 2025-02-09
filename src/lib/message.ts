// import prisma from '@/lib/prisma'; // Corrected import path

// export async function createMessage(data: { name: string; email: string; message: string }) {
//     return await prisma.message.create({
//         data,
//     });
// }

import prisma from '@/lib/prisma'


export async function getMessage() {
  return await prisma.message.findMany()
}

export async function createMessage(data: { name: string; email: string; message: string }) {
  return await prisma.message.create({
    data
  })
}