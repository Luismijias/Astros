const nome = _req.getString('nome')
const numeroPagina = _req.getInt('numeroPagina', 1)

const PAGE_SIZE = 5;
const SELECT = 'uid, nome, rotacao, raio, tipo'
const QUERY_PAGE = 
    `LIMIT ${PAGE_SIZE} 
     OFFSET ${PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina -1)}`
     
let dbPlanets = null;

if (nome != '') {
    dbPlanets = _db.query(`
        SELECT uid, nome, rotacao, raio, tipo,
            CASE 
                WHEN tipo = 'planet' THEN 'planeta'
            END AS tipo       
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
            FROM planet
        ) AS Planet
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `, `%${nome}%`)
} else {
    dbPlanets = _db.query(`
    SELECT uid, nome, rotacao, raio, tipo, 
        CASE 
            WHEN tipo = 'planet' THEN 'planeta'
        END AS tipo      
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
        FROM planet
    ) AS Planet
    ${QUERY_PAGE}
    `);
}

_out.json(dbPlanets);