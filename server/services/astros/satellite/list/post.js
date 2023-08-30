const nome = _req.getString('nome')
const numeroPagina = _req.getInt('numeroPagina', 1)

const PAGE_SIZE = 10;
const SELECT = 'uid, nome, rotacao, raio, tipo'
const QUERY_PAGE = 
    `LIMIT ${PAGE_SIZE} 
     OFFSET ${PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina -1)}`
     
let dbSatellites = null;

if (nome != '') {
    dbSatellites = _db.query(`
        SELECT uid, nome, rotacao, raio, tipo,
            CASE 
                WHEN tipo = 'satellite' THEN 'satélite'
            END AS tipo       
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
            FROM satellite
        ) AS Satellite
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `, `%${nome}%`)
} else {
    dbSatellites = _db.query(`
    SELECT uid, nome, rotacao, raio, tipo, 
        CASE 
            WHEN tipo = 'satellite' THEN 'satélite'
        END AS tipo      
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
        FROM satellite
    ) AS Satellite
    ${QUERY_PAGE}
    `);
}

_out.json(dbSatellites);