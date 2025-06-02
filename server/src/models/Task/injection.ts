import ConnectDB from '../../config/database/Database';
import TaskController from './TaskController';
import TaskRepository from './TaskRepository';
import TaskService from './TaskService';
import TaskValidator from './TaskValidator';

const database = new ConnectDB();

const validator = new TaskValidator();

const repository = new TaskRepository(database);

const service = new TaskService(validator, repository);

const controller = new TaskController(service);

export default controller;
