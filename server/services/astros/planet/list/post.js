const nome = _req.getString("nome");
const numeroPagina = _req.getInt("numeroPagina", 1);

const PAGE_SIZE = 5;
const SELECT = "uid, nome, rotacao, raio, tipo";
const QUERY_PAGE = `LIMIT ${PAGE_SIZE} 
     OFFSET ${
       PAGE_SIZE * numeroPagina <= 1 ? 0 : PAGE_SIZE * (numeroPagina - 1)
     }`;

let dbPlanets = null;

if (nome != "") {
  dbPlanets = _db.query(
    `
SELECT 
    planet.uid,
    planet.nome AS nome,
    planet.raio AS raio,
    planet.rotacao AS rotacao,
    star.name AS estrela_mae
FROM (
    SELECT 
        uid,
        name AS nome,
        radius AS raio,
        rotation AS rotacao,
        star_id AS estrela_mae
    FROM planet
) AS planet
LEFT JOIN star ON planet.estrela_mae = star.id
        WHERE lower(nome) LIKE lower(?)
         ${QUERY_PAGE}
    `,
    `%${nome}%`
  );
} else {
  dbPlanets = _db.query(`
SELECT 
    planet.uid,
    planet.nome AS nome,
    planet.raio AS raio,
    planet.rotacao AS rotacao,
    star.name AS estrela_mae
FROM (
    SELECT 
        uid,
        name AS nome,
        radius AS raio,
        rotation AS rotacao,
        star_id AS estrela_mae
    FROM planet
) AS planet
LEFT JOIN star ON planet.estrela_mae = star.id
    ${QUERY_PAGE}
    `);
}

_out.json(dbPlanets);
