const uid = _req.getString('uid');

const dbAstro = _db.queryFirst(`
SELECT uid, nome, raio, rotacao, 
    CASE 
        WHEN tipo = 'star' THEN 'estrela'
        WHEN tipo = 'satellite' THEN 'satelite'
        WHEN tipo = 'planet' THEN 'planeta'
    END AS tipo
FROM (
    SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
    FROM star
    UNION ALL
    SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
    FROM satellite
    UNION ALL
    SELECT uid, name AS nome, radius AS raio, rotation as rotacao, 'planet' AS tipo
    FROM planet
) AS celestial
WHERE uid = ?::uuid;
`, uid);

if (!dbAstro) {
    _header.status(404);
    _exec.stop();
}

_out.json(dbAstro);
