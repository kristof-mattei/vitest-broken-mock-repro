import Joi from "joi";

export function isValidEmailCustom(email: string): boolean {
    const schema = Joi.object({
        email: Joi.string().email(),
    });

    return schema.validate({ email }).error === undefined;
}
