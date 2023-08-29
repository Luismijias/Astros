const dbCelestial = _db.query(`
SELECT uid, nome, raio, rotacao, tipo
FROM (
    SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'star' AS tipo
    FROM star
    UNION ALL
    SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, 'satellite' AS tipo
    FROM satellite
    UNION ALL
    SELECT uid, name AS nome, radius AS raio, rotation as rotacao, 'planet' AS tipo
    FROM planet
) AS Celestial`);

_out.json(dbCelestial);
