import React from 'react';
import { Row, Col} from 'antd';

import './index.less';
import DetailTable from '../../components/Tables//Detail';

function Detail() {
  return (
<Row justify="center" align="middle" className="page--detail">
      <Col span={24}>
        <h1>Detalhe do Corpo Celeste</h1>
      </Col>
      <Col span={24}>
       <DetailTable/>
      </Col>
    </Row>
  );
};

export default Detail;