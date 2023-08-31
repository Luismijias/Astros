const nome = _req.getString('nome')
const numeroPagina = _req.getInt('numeroPagina', 1)

const PAGE_SIZE = 5;
const SELECT = 'uid, nome, rotacao, raio, tipo'
const QUERY_PAGE = 
    `LIMIT ${PAGE_SIZE} 
     OFFSET ${PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina -1)}`
     
let dbSatellites = null;

if (nome != '') {
    dbSatellites = _db.query(`
SELECT 
    satellite.uid,
    satellite.nome AS nome,
    satellite.raio AS raio,
    satellite.rotacao AS rotacao,
    planet.name AS planeta_mae
FROM (
    SELECT 
        uid,
        name AS nome,
        radius AS raio,
        rotation AS rotacao,
        planet_id AS planeta_mae
    FROM satellite
) AS satellite
LEFT JOIN planet ON satellite.planeta_mae = planet.id
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `, `%${nome}%`)
} else {
    dbSatellites = _db.query(`
SELECT 
    satellite.uid,
    satellite.nome AS nome,
    satellite.raio AS raio,
    satellite.rotacao AS rotacao,
    planet.name AS planeta_mae
FROM (
    SELECT 
        uid,
        name AS nome,
        radius AS raio,
        rotation AS rotacao,
        planet_id AS planeta_mae
    FROM satellite
) AS satellite
LEFT JOIN planet ON satellite.planeta_mae = planet.id
    ${QUERY_PAGE}
    `);
}

_out.json(dbSatellites);