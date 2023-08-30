const dbPlanet = _db.queryFirst('SELECT * FROM planet WHERE lower(name) = lower(?)' ,
 _req.getString('name')
 );

if (!dbPlanet) {
    _header.status(409);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-ja-existe')
    );
    _exec.stop();
}

const nome = _req.getString('nome');
const raio = parseFloat(_req.getString('raio'));
const rotacao = parseInt(_req.getString('rotacao'));
const estrela_mae = parseInt(_req.getString('estrela_mae'));


_db.insert(
    'planet',
    _val.map()
        .set('name', nome)
        .set('rotation', rotacao)
        .set('radius', raio)
        .set('star_id', estrela_mae)
);

_out.json(
    _val.map()
        .set("resultado", true)
);
