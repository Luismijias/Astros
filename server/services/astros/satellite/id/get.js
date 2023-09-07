const dbSatellite = _db.query(`
SELECT uid, planet_id, nome, id, 
    FROM (
        SELECT uid, planet_id, name AS nome, radius AS raio, rotation AS rotacao, id, 'satellite' AS tipo
            FROM satellite  
) AS Satellite`);

_out.json(dbSatellite);