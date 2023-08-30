const nome = _req.getString('nome')
const numeroPagina = _req.getInt('numeroPagina', 1)

const PAGE_SIZE = 1;
const SELECT = 'uid, nome, rotacao, raio, tipo'
const QUERY_PAGE = 
    `LIMIT ${PAGE_SIZE} 
     OFFSET ${PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina -1)}`
let dbStars = null;

if (nome != '') {
    dbStars = _db.query(`
        SELECT uid, nome, rotacao, raio, tipo,
            CASE 
                WHEN tipo = 'star' THEN 'estrela'
            END AS tipo       
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
            FROM star
        ) AS Star
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `, `%${nome}%`)
} else {
    dbStars = _db.query(`
    SELECT uid, nome, rotacao, raio, tipo, 
        CASE 
            WHEN tipo = 'star' THEN 'estrela'
        END AS tipo      
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
        FROM star
    ) AS Star
    ${QUERY_PAGE}
    `);
}

_out.json(dbStars);
