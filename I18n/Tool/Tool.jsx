import React, {Component} from 'react';
import {Radio, Drawer, Tooltip} from 'antd';
import I18n from '../index';
import Cookie from '../../Storage/Cookie';

import './Tool.scss';

const langJson = require('./lang.json');

class Tool extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      defaultLang: Cookie.get('i18nDefaultLang') || I18n.defaultLang,
      showTool: false,
      placement: props.placement,
      drawerPlacement: "right",
    };
    this.changed = false;
    switch (this.state.placement) {
      case 'leftTop':
      case 'leftBottom':
        this.state.drawerPlacement = "left";
        break;
      case 'rightTop':
      case 'rightBottom':
      default:
        this.state.drawerPlacement = "right";
        break;
    }
  };

  render() {
    return (
      <div className={`toolbar ${this.state.placement}`}>
        <img
          className="head"
          src={require('./lang.svg').default}
          onClick={() => {
            this.setState({showTool: true})
          }}
        />
        <Drawer
          title="CHOICE LANGUAGE"
          placement={this.state.drawerPlacement}
          closable={false}
          onClose={() => {
            this.setState({
              showTool: false,
            });
            if (this.changed) {
              location.reload();
            }
          }}
          visible={this.state.showTool}
        >
          <Radio.Group
            defaultValue={this.state.defaultLang}
            onChange={(evt) => {
              Cookie.set('i18nDefaultLang', evt.target.value, 30);
              this.changed = true;
            }}
          >
            {
              Object.entries(langJson).map((val, key) => {
                return <Radio className="radioStyle" key={key} value={val[0]}>{val[1]}</Radio>;
              })
            }
          </Radio.Group>
        </Drawer>
      </div>
    );
  }
}

export default Tool;
