import bcrypt from 'bcrypt';

export const encryptPassword =async (password)=>{
    const encPassword = await bcrypt.hashSync(password, 10)
    return encPassword
}


export const comaprePassword = async (password, sPassword)=>{
    console.log(password, sPassword)
    const compare = await bcrypt.compare(password, sPassword)
    return compare
}