import React from 'react';

const MAX_IN_TABLE = 5000;

function BigList({items, onAction}) {
    var numberOfTables = Math.ceil(items.length / MAX_IN_TABLE);
    var lists = []
    for (var i=0; i < numberOfTables; i++) {
        lists.push(renderContents(i, items))
    }
    return <div>
        <div className="big-list-title">BIG list</div>
        <button onClick={() => {
            console.log("action clicked");
            onAction();
        }}>Sort ASC/DESC</button>
        {lists}
    </div>
}

function renderContents(batch, items) {
    var startIdx = batch * MAX_IN_TABLE;
    var listItems = []
    for(var i=0; i < MAX_IN_TABLE; i++) {
        var idx = startIdx + i;
        listItems.push(<li key={items[idx].id}>{idx}) {items[idx].value}</li>)
    }
    return (
        <ul key={batch}>
            {listItems}
        </ul>
    )
}

export default BigList;
