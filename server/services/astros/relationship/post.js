const nome = _req.getString("nome")
const numeroPagina = _req.getInt("numeroPagina", 1)

const PAGE_SIZE = 10
const QUERY_PAGE = `LIMIT ${PAGE_SIZE} 
     OFFSET ${
       PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina - 1)
     }`
let dborigem = null

if (nome != "") {
  dbRelation = _db.query(`
        SELECT uid, origem, nome, raio, rotacao, tipo,
            CASE 
                WHEN tipo = 'star' THEN 'estrela'
                WHEN tipo = 'planet' THEN 'planeta'
                WHEN tipo = 'satellite' THEN 'satelite'
            END AS tipo       
        FROM (
            SELECT uid, id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo 
            FROM star
                UNION ALL
            SELECT uid, star_id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo 
            FROM planet
                UNION ALL
            SELECT uid, planet_id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo 
            FROM satellite
        ) AS relation
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `,
    `%${nome}%`
  )
} else {
  dbRelation = _db.query(`
    SELECT uid, origem, nome,  raio, rotacao, tipo,
    CASE 
        WHEN tipo = 'star' THEN 'estrela'
        WHEN tipo = 'planet' THEN 'planeta'
        WHEN tipo = 'satellite' THEN 'satelite'
    END AS tipo       
FROM (
    SELECT uid, id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo 
    FROM star
        UNION ALL
    SELECT uid, star_id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo 
    FROM planet
        UNION ALL
    SELECT uid, planet_id AS origem, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo 
    FROM satellite
    ) AS relation
    ${QUERY_PAGE}
    `)
}

_out.json(dbRelation)
