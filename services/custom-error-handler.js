export class CustomErrorHandler extends Error{
    constructor(status, msg){
        super()
        this.status = status
        this.message = msg
    }


    static notFound(msg){
        return new CustomErrorHandler(404, msg)
    }

    static alreadyExist(msg){
        return new CustomErrorHandler(409, msg)
    }

    static credential(msg){
        return new CustomErrorHandler(401, msg)
    }
}