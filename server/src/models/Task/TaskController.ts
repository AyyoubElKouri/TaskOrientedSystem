import { Router, Request, Response, RequestHandler } from 'express';
import TaskService from './TaskService';

class TaskController {

    public router: Router;
    private service: TaskService;
    private readonly routes;

    constructor(service: TaskService) {
        this.router = Router();
        this.service = service;
        this.routes = {
            new: '/new',
            modify: '/modify/:id',
            delete: '/delete/:id',
            getAll: '/get_all',
            finish: '/finish/:id',
            unfinish: '/unfinish/:id',
            deleteAll: '/delete_all',
        };
        this.initializeRoutes();
    }

    private newTask: RequestHandler = (request, response) => {
        return this.service.newTask(request, response);
    };

    private modifyTask: RequestHandler = (request, response) => {
        return this.service.modifyTask(request, response);
    };

    private deleteTask: RequestHandler = (request, response) => {
        return this.service.deleteTask(request, response);
    };

    private getAllTasks: RequestHandler = (request, response) => {
        return this.service.getAllTasks(request, response);
    };

    private makeTaskFinished: RequestHandler = (request, response) => {
        return this.service.makeTaskFinished(request, response);
    };

    private makeTaskUnfinished: RequestHandler = (request, response) => {
        return this.service.makeTaskUnfinished(request, response);
    };

    private deleteAllTasks: RequestHandler = (request, response) => {
        return this.service.deleteAllTasks(request, response);
    };

    private initializeRoutes(): void {

        // Add a new task to the system.
        this.router.post(this.routes.new, this.newTask);

        // Update an existing task by its ID.
        this.router.post(this.routes.modify, this.modifyTask);

        // Delete a task by its ID.
        this.router.post(this.routes.delete, this.deleteTask);

        // Retrieve all tasks in the system as an array of objects: [{ name: "", ... }, {}, ...].
        this.router.get(this.routes.getAll, this.getAllTasks);

        // Mark a task as completed by its ID.
        this.router.post(this.routes.finish, this.makeTaskFinished);

        // Mark a task as not completed (inverse of the "finish" route).
        this.router.post(this.routes.unfinish, this.makeTaskUnfinished);

        // Remove all tasks from the system.
        this.router.delete(this.routes.deleteAll, this.deleteAllTasks);

    }
}

export default TaskController;

