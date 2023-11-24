import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


export const URL_BASE = 'http://localhost:8080/api';

export const buildResponsePaginated = (data, baseUrl = URL_BASE) => {
  return {
    //status:success/error
    status: 'success',
    //payload: Resultado de los productos solicitados
    payload: data.docs.map((doc) => doc.toJSON()),
    //totalPages: Total de páginas
    totalPages: data.totalPages,
    //prevPage: Página anterior
    prevPage: data.prevPage,
    //nextPage: Página siguiente
    nextPage: data.nextPage,
    //page: Página actual
    page: data.page,
    //hasPrevPage: Indicador para saber si la página previa existe
    hasPrevPage: data.hasPrevPage,
    //hasNextPage: Indicador para saber si la página siguiente existe.
    hasNextPage: data.hasNextPage,
    //prevLink: Link directo a la página previa (null si hasPrevPage=false)
    prevLink: data.hasPrevPage ? `${baseUrl}/students?limit=${data.limit}&page=${data.prevPage}` : null,
    //nextLink: Link directo a la página siguiente (null si hasNextPage=false)
    nextLink: data.hasNextPage ? `${baseUrl}/students?limit=${data.limit}&page=${data.nextPage}` : null,
  };  
};