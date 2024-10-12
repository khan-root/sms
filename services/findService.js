import prisma from "../config/dbConfig"

export const findOrgByID =()=>{

}


export const findOrgByEmail = async(email)=>{
    const org = await prisma.organization.findFirst({
        where:{
            email: email
        }
    })
    return org
}