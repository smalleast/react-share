#react-share
> Modal components for react(alert/confirm &amp; the common modal components).


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


## properties:
```javascript
 static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    buttons: PropTypes.array,
    theme: PropTypes.oneOf(['ios', 'tranparent']),
    className: PropTypes.string,
    backdropStyle: PropTypes.object,
    onClick: PropTypes.func
  }
```


## usage:
```javascript
import {ReactShare,ReactShareItem} from 'react-share';

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

  }

  _click2() {
    const {rp2} = this.refs;
    rp2.show();
  }


  render() {
    const {items} = this.state;
    return (
      <div className="hello-react-share">
        <button onClick={this._click2.bind(this)} children="open share 2"/>
        <ReactPopup ref="rp2">
          <ReactShare2 >
            {
              !!items && items.map((item, index) => {
                return <ReactShareItem key={index} className="col" onClick={item.onClick.bind(this)}>
                  <i className={classNames('wp-icon', item.iClass)}/>
                  <em children={item.eText}/>
                </ReactShareItem>
              })
            }
          </ReactShare2>
        </ReactPopup>
      </div>
    );
  }
}

```
