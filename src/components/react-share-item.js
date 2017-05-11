/**
 * Created by tony on 2017/5/11.
 */
import React, {PureComponent,PropTypes} from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: noop
  };
  /*===properties end===*/

  render() {
    const {className, children, onClick} = this.props;
    return (
      <div className={classNames('col', className)}
           onClick={onClick.bind(this)}>{children}</div>
    );
  }
}
