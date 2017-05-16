import './dev.scss';
import {ReactShare, ReactShareItem} from './main';
import ReactPopup from 'react-popup';
import classNames from 'classnames';

class App extends React.Component {
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

  };
  _click2() {
    const {rp2} = this.refs;
    rp2.show();
  };


  render() {
    const {items} = this.state;
    return (
      <div className="hello-react-share">
        <button onClick={this._click2.bind(this)} children="open share"/>
        <ReactPopup ref="rp2">
          <ReactShare >
            {
              !!items && items.map((item, index) => {
                return <ReactShareItem key={index}  onClick={item.onClick.bind(this)}>
                  <i className={classNames('wp-icon', item.iClass)}/>
                  <em children={item.eText}/>
                </ReactShareItem>
              })
            }
          </ReactShare>
        </ReactPopup>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
