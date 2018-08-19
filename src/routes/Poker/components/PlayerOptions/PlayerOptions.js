import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Styles from 'styles/main.scss';

export class PlayerOptions extends Component{
  render(){
    const { player, fold, check, call, bid, leave } = this.props;
    return (
      <div className="form-group">
        {
          (player.move != 'waiting') && (player.move != 'fold') ? [
              <div className={Styles['options' + player.id]}>
                <h3>{`Money: ${player.money}`}</h3>
              <div>
                <input
                  type="text"
                  className={`form-control ${Styles.input}`}
                  ref={ node => {
                    this.amount = node
                  }}
                />
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => {
                    bid({ id: player.id, amount: Number(this.amount.value) })
                    this.amount.value = '';
                  }}
                >Bid</button>
              </div>

              <button
                type="button"
                className="btn btn-default"
                onClick={() => fold(player.id)}
              >Fold</button>

              <button
                type="button"
                className="btn btn-default"
                onClick={() => check(player.id)}
              >Check</button>

              <button
                type="button"
                className="btn btn-default"
                onClick={() => call(player.id)}
              >Call</button>
              </div>
            ] :
            <button
              type="button"
              className={`btn btn-default ${Styles['player' + player.id]}`}
              onClick={() => leave(player.id)}
            >Leave</button>
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
