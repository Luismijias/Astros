const dbCelestial = _db.query(`
SELECT uid, star_id, nome, id, 
    FROM (
        SELECT uid, star_id, name AS nome, radius AS raio, rotation AS rotacao, id, 'planet' AS tipo
            FROM planet  
) AS Planet`);

_out.json(dbCelestial);
