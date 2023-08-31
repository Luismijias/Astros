const dbCelestial = _db.query(`
SELECT uid, nome, id, 
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, id, 'planet' AS tipo
            FROM planet  
) AS Planet`);

_out.json(dbCelestial);
