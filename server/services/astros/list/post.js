const nome = _req.getValues('filtro', _val.map()).getString('nome');
const numeroPagina = _req.getValues('pagina', _val.map()).getInt('numero', 1);
const PAGE_SIZE = 5;
const offset = (numeroPagina - 1) * PAGE_SIZE;

let dbCelestes = null;

if (nome !== '') {
    dbCelestes = _db.query(`
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao,
            CASE 
                WHEN tipo = 'star' THEN 'estrela'
                WHEN tipo = 'planet' THEN 'planeta'
                WHEN tipo = 'satellite' THEN 'satélite'
            END AS tipo
        FROM (
            SELECT uid, name, radius, rotation, 'star' AS tipo
            FROM star
            UNION ALL
            SELECT uid, name, radius, rotation, 'satellite' AS tipo
            FROM satellite
            UNION ALL
            SELECT uid, name, radius, rotation, 'planet' AS tipo
            FROM planet
        ) AS Celestial
        WHERE lower(name) LIKE lower(?)
        LIMIT ${PAGE_SIZE} OFFSET ${offset}
    `, `%${nome}%`);
} else {
    dbCelestes = _db.query(`
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao,
            CASE 
                WHEN tipo = 'star' THEN 'estrela'
                WHEN tipo = 'planet' THEN 'planeta'
                WHEN tipo = 'satellite' THEN 'satélite'
            END AS tipo
        FROM (
            SELECT uid, name, radius, rotation, 'star' AS tipo
            FROM star
            UNION ALL
            SELECT uid, name, radius, rotation, 'satellite' AS tipo
            FROM satellite
            UNION ALL
            SELECT uid, name, radius, rotation, 'planet' AS tipo
            FROM planet
        ) AS Celestial
        LIMIT ${PAGE_SIZE} OFFSET ${offset}
    `);
}

_out.json({ data: dbCelestes });
