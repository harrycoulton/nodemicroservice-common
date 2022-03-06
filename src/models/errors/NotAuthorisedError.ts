import {ErrorMessages, GenericError, GenericErrorResponse} from './GenericError';

export class NotAuthorisedError extends GenericError {

    public statusCode = 401;

    constructor() {
        super(ErrorMessages.NOT_AUTHORISED_ERROR);

        Object.setPrototypeOf(this, NotAuthorisedError.prototype)
    }

    generateErrorResponse = () : GenericErrorResponse => {
        return {
            statusCode: this.statusCode,
            errors: [
                {
                    message: ErrorMessages.NOT_AUTHORISED_ERROR,
                }
            ]
        }
    }

}
