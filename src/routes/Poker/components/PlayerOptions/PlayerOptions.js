import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export class PlayerOptions extends Component{
  render(){
    const { player, fold, check, call, bid, leave } = this.props;
    return (
      <div>
        {
          (player.move != 'waiting') && (player.move != 'fold') ? [
              <button onClick={() => fold(player.id)}>fold</button>,
              <button onClick={() => check(player.id)}>check</button>,
              <button onClick={() => call(player.id)}>call</button>,
              <input ref={ node => {
                  this.amount = node
                }
              } />,
              <button onClick={() => {
                bid({ id: player.id, amount: Number(this.amount.value) })
                this.amount.value = '';
              }}>bid</button>,
              <text>{`Money: ${player.money}`}</text>
            ] :
            <button onClick={() => leave(player.id)}>leave</button>
        }
      </div>
    )
  }
}

PlayerOptions.propTypes = {
  player: PropTypes.object.isRequired,
  fold: PropTypes.func.isRequired,
  check: PropTypes.func.isRequired,
  call: PropTypes.func.isRequired,
  bid: PropTypes.func.isRequired,
  leave: PropTypes.func.isRequired
};

export default PlayerOptions;
