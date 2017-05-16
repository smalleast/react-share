/**
 * Created by tony on 2017/5/11.
 */
import '../../bower_components/flex-grid/dist/flex-grid.scss';
import './style.scss'
import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';

export default class extends PureComponent {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };


  /*===properties end===*/

  render() {
    const {className, children} = this.props;
    return (
      <div className="react-share">
        <div className={classNames('row row-no-padding', className)}>{children}</div>
      </div>
    );
  }
}
