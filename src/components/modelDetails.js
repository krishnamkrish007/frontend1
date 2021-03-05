import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Card, Button, CardTitle, CardHeader,
    CardBody, CardFooter, FormGroup, Label, Input, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import PropTypes from 'prop-types';



class ModelDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
            modal: false,
            flag: null,

            comment: '',
        }
    }

    componentDidMount() {


    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            flag: null
        })
    }



    render() {
        

        return (
            <div>
                {this.props.error.reviewappserror != null ? 
                
                <Container>
                <div className=" mt-5 d-flex flex-column align-items-center">
                    <div className="mx-auto " ><h3>Error: fetching App deatils from API and action (Try freshing the page)</h3></div>
                   

                </div>
                </Container>

                :

                <Container className="m-8 mt-5 p-6">

                    { this.props.list.map( (app, index ) => {
                        if(app._id === this.props.id){
                        return (
                            
                            <Card style={{}} className="mb-5 border border-dark rounded " >
                               
                            <CardHeader className="row  text-primary">
                            <img src="../../../uploads/appimages/Simpan - Note various needs_5fc1fba62e6ede1a304a7bb3.jpeg" height="250" class="col-4 rounded float-left" alt="App Logo"></img>
                            <span className="col-6 offset-2 p-4">
                                <div className="text-capitalize text-left"><h3>{app.app_name} </h3></div>
                                <br />
                                <div tag="h6" className="text-capitalize text-left font-weight-bold">{app.genre} </div>
                                <br />
                                <div tag="h6" className="text-capitalize text-left font-weight-bold">{app.store} </div>

                            </span>
                        </CardHeader>
                        <CardBody>
                            <CardTitle className="d-flex justify-content-center">
                                <form action={app.link} target="_blank">
                                    <input type="submit" className="bg-success" block value="Open App Link" />
                                </form>
                            </CardTitle>
                            <hr />
                            <div className="font-weight-bold">Developer Info:
                                <div className="row m-2 ">
                                    <div className="col-6 pl-5">
                                        <div className="m-0 p-0"><h6 className="m-0 p-0">Username </h6></div>
                                        <div className="ml-5 pl-5 mt-0 pt-0 btn text-info text-capitalize"><h5>{app.developer_name}</h5></div>
                                    </div>
                                    <div className="col-6">
                                        <div ><h6 className="m-0 p-0">Country</h6></div>
                                        <div className="ml-5 pl-5 mt-0 pt-0 text-info text-capitalize"><h5>{app.date}</h5></div>
                                    </div>

                                </div>
                            </div>
                            <hr />
                            <div className="font-weight-bold">
                                <div tag="h3" className="m-1 ">Description</div>
                                <div tag="h4" className="m-1 text-info text-capitalize">{app.description}</div>
                            </div>

                        </CardBody>
                        <CardFooter>
                        
                            <hr />
    

                            <FormGroup className="">
                                <Label for="comment">Comments</Label>
                                <Input type="textarea" id="comment" name="comment" placeholder="Leave a note" onChange={this.onChange}></Input>
                            </FormGroup>

                        </CardFooter>
                    </Card>
                        )
                        }
                    })}
                    

                </Container>
                
            }


                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                className="modal-sm modal-dialog-centered">
                <ModalHeader toggle={this.toggle} >
                    Status
                </ModalHeader>
                <ModalBody>
                    { this.state.flag === 1 ? <p className="bg-danger">Screenshot missing! Upload it and submit</p>
                    :
                    this.props.error.pendingappserror != null ? 

                        <p className="br-danger">{this.props.error.pendingappserror.msg}</p>
                        :
                        <p className="bg-success"> Review successfully submitted</p>                        
                
                }
                </ModalBody>
                </Modal>

                
                  
            </div>

        )
    };


}

ModelDetails.propTypes = {
    child_id: PropTypes.string,
    list: PropTypes.array,

}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const list = state.models.models_list;
    const reviewapp = list.find(app => {
        if (app._id === id) {
            console.log("OOOOOOOO= ")
            return app;
        } else {
            console.log('not found')
        }
    })

    return {
        id: id,
        list: state.models.list,

    }

};


export default connect(mapStateToProps, { addPendingApp, getReviewAppDetailsandLogo })(ModelDetails);



{/* <Button className="col-5 mx-4 px-5 shadow-lg" color="dark" onClick={this.uploadScreenshot}   block>Upload Screenshot</Button>
                         */}