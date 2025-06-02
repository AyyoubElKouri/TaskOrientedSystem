import Joi from 'joi';

class TaskValidator {

    private newTaskSchema: Joi.ObjectSchema;
    private modifyTaskSchema: Joi.ObjectSchema;

    constructor() {

        this.newTaskSchema = Joi.object({
            name: Joi.string().min(1).required(),
            hours: Joi.number().required(),
            minutes: Joi.number().required(),
        });

        this.modifyTaskSchema = Joi.object({
            name: Joi.string().min(1).optional(),
            hours: Joi.number().optional(),
            minutes: Joi.number().optional(),
        });
    }

    public newTaskValidate( data: object, ): false | {name: string, hours: number, minutes: number} {

        // Check if the data object is valid.
        if (!data || typeof data !== 'object') {
            console.log('Validation failed: data is not an object or is undefined');
            return false;
        }

        // Validate the data object using the schema.
        const { error, value } = this.newTaskSchema.validate(data);
        if (error) {
            console.log("Error: " + error.details[0].message);
            return false;
        }

        // Return the validated data if it passes validation.
        return {
            name: value.name,
            hours: value.hours,
            minutes: value.minutes
        };
    }

    public modifyTaskValidate( data: object, ): false | {name: string, hours: number, minutes: number} {

        // Check if the data object is valid.
        if (!data || typeof data !== 'object') {
            console.log('Validation failed: data is not an object or is undefined');
            return false;
        }

        // Validate the data object using the schema.
        const { error, value } = this.modifyTaskSchema.validate(data);
        if (error) {
            console.log("Error: " + error.details[0].message);
            return false;
        }

        // Return the validated data if it passes validation.
        return {
            name: value.name,
            hours: value.hours,
            minutes: value.minutes
        };
    }
}

export default TaskValidator;