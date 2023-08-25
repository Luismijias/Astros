import React from "react";
import { Row, Col } from "antd";

import Actions from "../Actions";
import Cluar from "../../common/Cluar";
import Orbit1 from "../Animations/Orbit1";
import Orbit2 from "../Animations/Orbit2";

import "./index.less";

function Banner({
  section,
  type,
  image,
  image_title,
  image_alt,
  title,
  content,
  position,
  actions,
}) {
  let backgroundPositionX = position.x !== "" ? position.x : "50%";
  let backgroundPositionY = position.y !== "" ? position.y : "50%";

  return (
    <section className="banner">
      <div className="banner__animation">
        <div className="banner__animation__orbit1">
          <Orbit1 />
        </div>
        <div className="banner__animation__orbit2">
          <Orbit2 />
        </div>
      </div>
      <div
        className={`banner__${type}`}
        style={{
          backgroundImage: `url(/images/${section}/${image})`,
          backgroundPositionX: backgroundPositionX,
          backgroundPositionY: backgroundPositionY,
        }}
      >
        <Row className="banner__wrapper" justify="center">
          <Col lg={18} sm={24}>
            <div>
              <h1
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
              >
                {title}
              </h1>
              <div
                data-sal="slide-down"
                data-sal-duration="2000"
                data-sal-easing="ease-out-cubic"
                className="banner__wrapper__content"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </Col>
          <Col lg={6} sm={24}>
            <Actions {...{ section, type, actions }} />
          </Col>
        </Row>
        <div className="banner__sub-banner">
          {Cluar.plainDictionary("text-sub-banner")}
        </div>
        <div className="banner__darken-bg"></div>
      </div>
    </section>
  );
}

export default Banner;
