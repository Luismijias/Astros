const dbSatellite = _db.query(`
SELECT uid, nome, id, 
    FROM (
        SELECT uid, name AS nome, radius AS raio, rotation AS rotacao, id, 'satellite' AS tipo
            FROM satellite  
) AS Satellite`);

_out.json(dbSatellite);