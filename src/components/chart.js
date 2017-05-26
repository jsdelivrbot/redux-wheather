import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import R from 'ramda'

const average = (data) => {
    const round = R.compose(Number, (x => x.toFixed(2)));
    const avg = (lst => R.sum(lst) / R.length(lst));
    return R.compose(round, avg)(data);
}

export default (props) => {
    return (
        <div>
            <Sparklines width={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
}
