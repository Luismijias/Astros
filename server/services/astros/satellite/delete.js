const dbSatellite = _db.get('satellite', _req.getString('uid'));

if (!dbSatellite) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.delete('satellite', _req.getString('uid'));

_out.json(
    _val.map()
        .set("resultado", true)
);
