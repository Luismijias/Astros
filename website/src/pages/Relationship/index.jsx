import React from 'react';
import { Row, Col} from 'antd';

import './index.less';
import RelationshipTable from '../../components/Tables//Relationship';

function Relationship () {
  return (
<Row justify="center" align="middle" className="page--relationship">
      <Col span={24}>
        <h1>Relação Astronômica</h1>
      </Col>
      <Col span={24}>
       <RelationshipTable/>
      </Col>
    </Row>
  );
};

export default Relationship;