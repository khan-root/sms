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