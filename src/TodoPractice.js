import React, { Component } from 'react';


class TodoPractice extends Component {
    constructor() {
        super();
        this.itext = "";
        this.acb = 5;
    }
    state = {
        curInputV: "",
        results: [],
        count: 0,
        editable: false
    }

    onChangeHandler = (event) => {
        this.itext = event.target.value;
        this.setState({ curInputV: this.itext });
    }
    onClickHandler = () => {

        // var arr =[...this.state.results];
        // var cnt = this.state.count;
        // arr.push({inputVal: this.itext, id: new Date().toLocaleTimeString(), counts: cnt + 1});
        // this.setState({results: arr, count: cnt+1});
        this.setState((prevState) => ({
            results: [
                ...prevState.results,
                { inputVal: this.itext, id: new Date().toLocaleTimeString() },
            ],
            count: prevState.count + 1
        }))
        console.log((".........", this.state));
    }

    onDeleteHandler = (id) => {
        var updatedArray = this.state.results.filter((res, index) => res.id !== id);
        this.setState({ results: updatedArray });
    }

    onEditHandler = () => {
        this.setState({ editable: true });
    }

    onSaveHandler = () => {
        this.setState({ editable: false });
    }

    editHandler = () => {

    }

    render() {

        return (
            <div>
                <input type="text" onChange={this.onChangeHandler} value={this.state.curInputV} />
                <button onClick={this.onClickHandler}>Store Result</button>

                <hr />
                <ul>
                    {
                        this.state.results.map((res, index) => (
                            <li key = {res.id}>
                                {!this.state.editable ? <span>{res.inputVal} <button onClick={this.onEditHandler}> Edit </button><button onClick={() => this.onDeleteHandler(res.id)}> Delete </button></span> : null}
                                {this.state.editable ? <span><input type="text" value={res.inputVal} onChange={this.editHandler} /> <button onClick={this.onSaveHandler}> Save </button><button onClick={() => this.onDeleteHandler(res.id)}> Delete </button></span> : null}
                            </li>

                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default TodoPractice;