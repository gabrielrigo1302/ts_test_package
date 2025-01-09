import { 
    InputGetOneExemploService,
    InputGetAllExemploService,
    InputPostExemploService,
    InputPutExemploService,
    InputDeleteExemploService,
    OutputGetOneExemploService,
    OutputPostExemploService,
    OutputPutExemploService,
    OutputDeleteExemploService,
} from './exemploService.interface';

const getOneExemploService = ({}: InputGetOneExemploService): OutputGetOneExemploService => {
    return {}
} 

const getAllExemploService = ({}: InputGetAllExemploService): OutputGetOneExemploService[] => {
    return []
} 

const postExemploService = ({}: InputPostExemploService): OutputPostExemploService => {
    return {}
}

const putExemploService = ({}: InputPutExemploService): OutputPutExemploService => {
    return {}
} 

const deleteExemploService = ({}: InputDeleteExemploService): OutputDeleteExemploService => {
    return {}
} 

export const exemploServiceService = {
    getOneExemploService,
    getAllExemploService,
    postExemploService,
    putExemploService,
    deleteExemploService
}