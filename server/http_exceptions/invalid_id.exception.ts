import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidIdException extends HttpException {
    constructor() {
        super({
            message: "the id value must be numeric",
            error: "Bad Request",
            statusCode: HttpStatus.BAD_REQUEST
        }, HttpStatus.BAD_REQUEST)
    }
}