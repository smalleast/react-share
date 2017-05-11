import './dev.scss';
import {ReactShare, ReactShareCtrl, ReactShare2, ReactShareItem} from './main';
import ReactPopup from 'react-popup';
import classNames from 'classnames';

class App extends React.Component {
  componentDidMount() {
    console.log('will / did..');
    ReactShareCtrl.createInstance({
      backdropOptions: {
        zIndex: 11,
        opacity: 0.1
      }
    });

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

  _click1() {
    const {items} = this.state;
    ReactShareCtrl.show(items, () => {
      console.log('show....');
    })
  }

  _click2() {
    const {rp2} = this.refs;
    rp2.show();
  }

  _click3() {
    console.log('click3......');
  }

  render() {
    const {items} = this.state;
    return (
      <div className="hello-react-share">
        <button onClick={this._click1.bind(this)} children="open share"/>
        <button onClick={this._click2.bind(this)} children="open share 2"/>
        <ReactPopup ref="rp2">
          <ReactShare >
            {
              !!items && items.map((item, index) => {
                return <ReactShareItem key={index} className="col" onClick={item.onClick.bind(this)}>
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
