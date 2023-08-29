import React from 'react';
import { Row, Col} from 'antd';

import './index.less';
import CelestialBodyTable from '../../components/Tables/CelestialBody';

function CelestialBody() {
  return (
<Row justify="center" align="middle" className="page--celestial-body">
      <Col span={24}>
        <h1>Todos os Corpos Celestes</h1>
      </Col>
      <Col span={24}>
        <CelestialBodyTable />
      </Col>
    </Row>
  );
};

export default CelestialBody;