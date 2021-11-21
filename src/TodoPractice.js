import React, { Component } from 'react';


class TodoPractice extends Component {
    constructor() {
        super();
        this.itext = "";
        this.listEdit = "";
    }
    state = {
        curInputV: "",
        results: [],
        count: 0,
        editable: {}
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
            count: prevState.count + 1,
            curInputV: ""
        }))
        console.log((".........", this.state));
    }

    onDeleteHandler = (id) => {
        var updatedArray = this.state.results.filter((res, index) => res.id !== id);
        this.setState({ results: updatedArray });
    }

    onEditHandler = (id, val) => {
        this.listEdit = val;
        this.setState({ editable: { id: id } });
    }

    onSaveHandler = (id, val) => {
        this.setState((prevState) => {
            var res = [...prevState.results];
            var ind = res.findIndex((obj => obj.id === id));
            res[ind].inputVal = val;
            return {
                results: res,
                editable: {}
            }
        });
    }

    onListItemChange = (e) => {
        this.listEdit = e.target.value;
    }

    render() {

        return (
            <div>
                <input type="text" onChange={this.onChangeHandler} value={this.state.curInputV} />
                <button onClick={this.onClickHandler}>Store Result</button>

                <hr />
                <ul style={{ listStyleType:"none" }}>
                    {
                        this.state.results.map((res, index) => (
                            <li key={res.id}>
                                {res.id === this.state.editable.id ?
                                    <div>
                                        <input type="text" defaultValue={res.inputVal} onChange={this.onListItemChange} />
                                        <button onClick={() => (this.onSaveHandler(res.id, this.listEdit))}> Save </button>
                                        <button onClick={() => this.onDeleteHandler(res.id)}> Delete </button>
                                    </div> :
                                    <div>
                                        {res.inputVal}
                                        <button onClick={(() => this.onEditHandler(res.id, res.inputVal))}> Edit </button>
                                        <button onClick={() => this.onDeleteHandler(res.id)}> Delete </button>
                                    </div>
                                }
                            </li>

                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default TodoPractice;