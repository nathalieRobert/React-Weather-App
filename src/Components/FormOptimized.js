import React from 'react';

const FormOptimized = props => (

    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="country..."/>
        <button>Get weather</button>
    </form>
);

export default FormOptimized;
