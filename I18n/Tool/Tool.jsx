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
    }
  };

  onClick = () => {
    if (typeof this.props.href === 'string') {
      this.props.history.push(this.props.href);
    }
  };

  render() {
    return (
      <div className="toolbar">
        <img
          className="head"
          src={require('./lang.svg').default}
          onClick={() => {
            this.setState({showTool: true})
          }}
        />
        <Drawer
          title="CHOOSE LANGUAGE"
          placement="right"
          closable={false}
          onClose={() => {
            this.setState({
              showTool: false,
            })
          }}
          visible={this.state.showTool}
        >
          <Radio.Group
            defaultValue={this.state.defaultLang}
            onChange={(evt) => {
              Cookie.set('i18nDefaultLang', evt.target.value, 30);
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
