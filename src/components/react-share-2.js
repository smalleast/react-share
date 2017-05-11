/**
 * Created by tony on 2017/5/11.
 */
import '../../bower_components/flex-grid/dist/flex-grid.scss'
import './style.scss';
import '../dev.scss';
import documentAppend from 'react-document-append';
import classNames from 'classnames';
import {ReactBackdrop} from 'react-backdrop';
import React, {PropTypes} from 'react';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactPopup from 'react-popup';

export default class ReactShare extends React.Component {
  static propTypes = {
    items: PropTypes.array
  };

  static
  newInstance(inProps) {
    return documentAppend(ReactShare, inProps, {
      className: 'react-modal-wrapper'
    });
  }

  static  defaultProps = {};

  componentWillMount() {

  }

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          iClass: 'wp-icon-code',
          eText: '二维码',
          onClick: () => {
            console.log('code.....');
          }
        },
        {
          iClass: 'wp-icon-link',
          eText: '发送链接',
          onClick: () => {
            console.log('link....');
          }
        }]
    };

  }

  show(inOptions, inCallback) {
    console.log('show');
    const {rp} = this.refs;
    this.setState({
      items: inOptions
    }, () => {
      rp.show();
      if (inCallback && typeof inCallback === 'function') {
        inCallback();
      }
    })
  }

  hide(inCallback) {
    console.log('hide');
    const {rp} = this.refs;
    rp.hide();
  }


  render() {
    const {items} = this.state;
    return (
      <ReactPopup ref="rp">
        <div className="react-share">
          <div className="row row-no-padding">
            {
              !!items && items.map((item, index) => {
                return <div className="col" key={index}>
                  <a onClick={item.onClick.bind(this)}>
                    <i className={classNames('wp-icon', item.iClass)}/>
                    <em children={item.eText}/>
                  </a>
                </div>
              })
            }
          </div>
        </div>
      </ReactPopup>
    )
  }
}
