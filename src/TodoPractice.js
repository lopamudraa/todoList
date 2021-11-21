import React, { Component } from 'react';
import { Container, ListGroup, Button, InputGroup, FormControl, Col, Stack, Collapse, Row } from 'react-bootstrap';


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
        editable: {},
        errText: false
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
        if (this.itext === "") {
            this.setState( { errText: true } );
            return;
        }

        this.setState((prevState) => ({
            results: [
                ...prevState.results,
                { inputVal: this.itext, id: new Date().toLocaleTimeString(), done: false },
            ],
            count: prevState.count + 1,
            curInputV: "",
            errText: false
        }), () => this.itext = "");
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

    onListItemStatusToggle(e, id) {
        this.setState((prevState) => {
            var res = [...prevState.results];
            var ind = res.findIndex((obj => obj.id === id));
            res[ind].done = e.target.checked;
            return {
                results: res
            }
        });
    }

    getListItem(res) {
        if (res.id === this.state.editable.id) {
            return (
                <React.Fragment>
                    <FormControl defaultValue={res.inputVal} onChange={this.onListItemChange}></FormControl>
                    <Button variant="outline-secondary" onClick={() => (this.onSaveHandler(res.id, this.listEdit))}>
                        Save
                    </Button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div>{res.inputVal}</div>
                    <Button className="ms-auto" variant="outline-secondary" onClick={() => this.onEditHandler(res.id, res.inputVal)}>
                        Edit
                    </Button>
                </React.Fragment>
            );
        }
    }

    render() {

        return (
            <Container fluid style={{ marginTop: "10px" }}>
                <Row>
                    <Col md={5}>
                        <InputGroup className="mb-3">
                            <FormControl value={this.state.curInputV} onChange={this.onChangeHandler}></FormControl>
                            <Button variant="info" onClick={this.onClickHandler}>Store Result</Button>
                        </InputGroup>
                        <hr />
                        <ListGroup>
                            {
                                this.state.results.map((res, index) => (
                                    <ListGroup.Item key={res.id} variant={ res.done ? "success" : null }>
                                        <Stack direction="horizontal" gap={3}>
                                            <input type="checkbox" onChange={(e) => this.onListItemStatusToggle(e, res.id)} />
                                            {this.getListItem(res)}
                                            <Button variant="outline-danger" onClick={() => this.onDeleteHandler(res.id)}>
                                                Delete
                                            </Button>
                                        </Stack>
                                    </ListGroup.Item>

                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <Collapse in={this.state.errText}><div>Please enter some text!</div></Collapse>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default TodoPractice;