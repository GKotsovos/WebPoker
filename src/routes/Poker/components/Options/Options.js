import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export class Options extends Component{
  render(){
    const { player, fold, bid } = this.props;
    return (
      <div>
        <button onClick={() => fold(player)}>fold</button>
        {/*<button onClick={() => this.props.fold(player)}>call</button>*/}
        <input ref={ node => {
            this.amount = node
          }
        } />
        <button onClick={() => {
          bid(Number(this.amount.value))
          this.amount.value = '';
        }}>bid</button>
      </div>
    )
  }
}

Options.propTypes = {
  player: PropTypes.object.isRequired,
  fold: PropTypes.func.isRequired,
  //call: PropTypes.func.isRequired,
  bid: PropTypes.func.isRequired
};

export default Options;
