import axios from "axios";
import Url from "../../../Urls";

/**
 * con esto vamos  obtener los datos de los cursos y mostrarlos en header de cada student
 * realizar la peticion siempre y cuando se estudiante para poder optimizar recursos.
 *
 * Tambien se va   a pasar token para una verificacion mas segura
 */

export const GetDataCourse = async (Token) => {
  try {
    const EndPoint = Url.url;
    const result = await axios.get(`${EndPoint}/data/verifyIstudent/`, {
      headers: {
        authorization: `Bearer ${Token}`,
      },
    });

    if (result.status !== 200) {
      return {
        success: false,
      };
    }
    return {
      result: result.data,
      success: true,
    };
  } catch (error) {
    throw error;
  }
};
