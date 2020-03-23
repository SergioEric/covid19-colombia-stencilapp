import { h } from '@stencil/core';

const Cards = (props, children)=> {
    // console.log(String(props.value).valueOf().length);
    // if(String(props.value).valueOf().length >=5){
        // change font size for number >=5 figures, exa 31.000
    // }
  
    if (props.name == "Confirmed") {
      return [<div class="my-card Confirmed">
        <p class="my-card-name">{ props.name }</p>
        <p class="my-card-value">{ props.value }</p>
      </div>, children]
    }  else if (props.name == "Deaths") {
      return <div class="my-card Deaths">
        <p class="my-card-name">{ props.name }</p>
        <p class="my-card-value">{ props.value }</p>
      </div>
    } else if (props.name == "Recovered") {
      return <div class="my-card Recovered">
        <p class="my-card-name">{ props.name }</p>
        <p class="my-card-value">{ props.value }</p>
      </div>
    }
  }
  
  export default Cards;