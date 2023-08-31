const dbSatellite = _db.queryFirst('SELECT * FROM satellite WHERE uid = ?', _req.getString('uid'));

if (!dbSatellite) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.update(
    'satellite',
    _req.getString('uid'),
    {
        name: _req.getString('nome'),
        radius: _req.getString('raio'),
        rotation: _req.getString('rotacao'),
        star_id: _req.getInt('planeta_mae')
    }
);

_out.json(
    _val.map()
    .set("resultado", true)
);