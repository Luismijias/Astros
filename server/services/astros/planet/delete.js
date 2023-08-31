const dbPlanet = _db.get('planet', _req.getString('uid'));

if (!dbPlanet) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.delete('planet', _req.getString('uid'));

_out.json(
    _val.map()
        .set("resultado", true)
);
