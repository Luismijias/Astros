const dbPlanet = _db.queryFirst('SELECT * FROM planet WHERE uid = ?', _req.getString('uid'));

if (!dbPlanet) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.update(
    'planet',
    _req.getString('uid'),
    {
        name: _req.getString('nome'),
        radius: _req.getString('raio'),
        rotation: _req.getString('rotacao'),
        star_id: _req.getInt('estrela_mae')
    }
);

_out.json(
    _val.map()
    .set("resultado", true)
);