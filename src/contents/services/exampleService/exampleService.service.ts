import { 
    InputGetOneExampleService,
    InputGetAllExampleService,
    InputPostExampleService,
    InputPutExampleService,
    InputDeleteExampleService,
    OutputGetOneExampleService,
    OutputPostExampleService,
    OutputPutExampleService,
    OutputDeleteExampleService,
} from './exampleService.type';

const getOneExampleService = ({}: InputGetOneExampleService): OutputGetOneExampleService => {
    return {}
} 

const getAllExampleService = ({}: InputGetAllExampleService): OutputGetOneExampleService[] => {
    return []
} 

const postExampleService = ({}: InputPostExampleService): OutputPostExampleService => {
    return {}
}

const putExampleService = ({}: InputPutExampleService): OutputPutExampleService => {
    return {}
} 

const deleteExampleService = ({}: InputDeleteExampleService): OutputDeleteExampleService => {
    return {}
} 

export const exampleServiceService = {
    getOneExampleService,
    getAllExampleService,
    postExampleService,
    putExampleService,
    deleteExampleService
}