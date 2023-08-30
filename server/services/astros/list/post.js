const nome = _req.getString('nome')
const numeroPagina = _req.getInt('numeroPagina', 1)

const PAGE_SIZE = 10;
const SELECT = 'uid, nome, rotacao, raio, tipo'
const QUERY_PAGE = 
    `LIMIT ${PAGE_SIZE} 
     OFFSET ${PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina -1)}`
let dbCelestes = null;

if (nome != '') {
    dbCelestes = _db.query(`
        SELECT uid, nome, rotacao, raio, tipo,
            CASE 
                WHEN tipo = 'star' THEN 'estrela'
                WHEN tipo = 'planet' THEN 'planeta'
                WHEN tipo = 'satellite' THEN 'satélite'
            END AS tipo       
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
            FROM star
                UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
            FROM satellite
                UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
            FROM planet
        ) AS Celeste
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `, `%${nome}%`)
} else {
    dbCelestes = _db.query(`
    SELECT uid, nome, rotacao, raio, tipo, 
        CASE 
            WHEN tipo = 'star' THEN 'estrela'
            WHEN tipo = 'planet' THEN 'planeta'
            WHEN tipo = 'satellite' THEN 'satélite'
        END AS tipo      
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
        FROM star
            UNION ALL
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
        FROM satellite
            UNION ALL
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
        FROM planet
    ) AS Celeste
    ${QUERY_PAGE}
    `);
}

_out.json(dbCelestes);
