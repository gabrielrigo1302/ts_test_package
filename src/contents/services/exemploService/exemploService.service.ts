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

/**
   * getOneExemploService service documentation
   *
   * @author ...
   *
   * @param ...
   * @returns ...
   *
   * @remarks
   * 
 */
const getOneExemploService = ({}: InputGetOneExemploService): OutputGetOneExemploService => {
    return {}
} 

/**
   * getAllExemploService service documentation
   *
   * @author ...
   *
   * @param ...
   * @returns ...
   *
   * @remarks
   * 
 */
const getAllExemploService = ({}: InputGetAllExemploService): OutputGetOneExemploService[] => {
    return []
} 

/**
   * postExemploService service documentation
   *
   * @author ...
   *
   * @param ...
   * @returns ...
   *
   * @remarks
   * 
 */
const postExemploService = ({}: InputPostExemploService): OutputPostExemploService => {
    return {}
}

/**
   * putExemploService service documentation
   *
   * @author ...
   *
   * @param ...
   * @returns ...
   *
   * @remarks
   * 
 */
const putExemploService = ({}: InputPutExemploService): OutputPutExemploService => {
    return {}
} 

/**
   * deleteExemploService service documentation
   *
   * @author ...
   *
   * @param ...
   * @returns ...
   *
   * @remarks
   * 
 */
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