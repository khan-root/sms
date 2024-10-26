import prisma from "../config/dbConfig.js"

export const findOrgByID =()=>{

}


export const findSuperAdmin = async(email)=>{
    const superAdmin = await prisma.superAdmin.findFirst({
        where:{
            email: email
        }
    })
    return superAdmin
}



export const findUser = async(email)=>{
    const user = prisma.user.findFirst({
        where:{
            email:email
        }
    })
    return user
}