import React, {Component} from 'react';
import Styles from './styles/cards.css';
import classnames from 'classnames'

export class FaceDownCard extends Component{
  render(){
    return(
        <div className={`${Styles.card} ${Styles.back}`}>*</div>
    );
  }
}

export default FaceDownCard;
