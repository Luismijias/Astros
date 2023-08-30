const dbCelestial = _db.query(`
SELECT uid, nome, id, 
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, id, 'star' AS tipo
            FROM star  
) AS Celestial`);

_out.json(dbCelestial);
