const dbEstrela = _db.queryFirst('SELECT * FROM star WHERE uid = ?', _req.getString('uid'));

if (!dbEstrela) {
    _header.status(404);
    _out.json(
        _val.map()
            .set('erro', true)
            .set('mensagem', 'registro-nao-encontrado')
    );
    _exec.stop();
}

_db.update(
    'star',
    _req.getString('uid'),
    {
        name: _req.getString('nome'),
        radius: parseFloat(_req.getString('raio')),
        rotation: parseInt(_req.getString('rotacao')),
    }
);

_out.json(
    _val.map()
    .set("resultado", true)
);

