import React from 'react';


function BigList({items, onAction}) {
    return <div>
        <div className="big-list-title">BIG list</div>
        <button onClick={() => {
            console.log("action clicked");
            onAction();
        }}>Action!</button>
        <ul>
            {items.map((it, idx) => {
                return <li key={it.id}>{idx}) {it.value}</li>
            })}
        </ul>
    </div>
}

export default BigList;
