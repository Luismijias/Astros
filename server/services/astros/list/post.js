const name = _req.getValues('filtro', _val.map()).getString('name')
const pageNumber = _req.getValues('pagina', _val.map()).getInt('numero', 1)
const PAGE_SIZE = 2
const SELECT = 'uid, name, radius, rotation, tipo'
const QUERY_PAGE = `LIMIT ${PAGE_SIZE} OFFSET ${pageNumber <= 1 ? 0 : PAGE_SIZE * pageNumber}`

let dbAstros = null;

if (name != '') {
    dbAstros = _db.query(`
        SELECT ${SELECT}
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
            FROM star
            UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
            FROM satellite
            UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
            FROM planet
            ) AS astros
            WHERE lower(name) LIKE lower(?)
         ${QUERY_PAGE}
        ` , `%${name}%`);
} else {
    dbAstros = _db.query(`
        SELECT ${SELECT}
        FROM (
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
            FROM star
            UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
            FROM satellite
            UNION ALL
            SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'planet' AS tipo
            FROM planet
        ) AS astro
        ${QUERY_PAGE}
        `);
}

_out.json(dbAstros);



