import React, { Fragment } from "react"

export default function Todo(props) {
    return (
        <Fragment>
            <div className="listContainer">
                <button>x</button>
                <button>-</button>
                <span>List one</span>
            </div>
        </Fragment>
    )
}
