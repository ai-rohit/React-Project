
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardTitle, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Row,Label,Col} from 'reactstrap';
import {LocalForm, Control, Errors} from "react-redux-form";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isSelected = (val) => val;

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            modalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComments = this.handleComments.bind(this);

    }

    toggleModal = ()=> {
        this.setState({modalOpen: !this.state.modalOpen});
    };

    handleComments(values){
        this.toggleModal();
        this.props.addComment( this.props.dishId, values.rating, values.author, values.comment );
    }

    render(){
        return(
            <React.Fragment>
                <Button outline onClick = {this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen = {this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h3>Provide Comments</h3></ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleComments(values)}>
                            <Row className="form-group">
                                <Label htmlfor="rating" md={4}>Rating</Label>

                                <Col md={12}>
                                <Control.select
                                    model=".rating"
                                    id="rating"
                                    name="rating"
                                    className="form-control"
                                    validators={{
                                        isSelected
                                    }}
                                    
                                >
                                    <option> </option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>   
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touched"
                                    messages={{
                                        isSelected: "Please rate the dish by selecting a rating!"
                                    }}
                                />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Author</Label>
                                <Col>
                                    <Control.text
                                    model=".author"
                                    id="author"
                                    name="author"
                                    className="form-control"
                                    validators = {{
                                        
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show= "touched"
                                        messages={{
                                            
                                            minLength: "Input must be more than 2 characters",
                                            maxLength: "Input must be less than or equal to 15 characters"
                                        }}

                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comments</Label>
                                <Col>
                                <Control.textarea
                                model=".comment"
                                id="comment"
                                name="comment"
                                className="form-control"
                                rows = "8"/>
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Col >
                                <Button type="submit" color="primary" >Submit</Button>
                            </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}


    function RenderComments({comments, addComment, dishId}){

            if (comments!=null) {
               const comms = comments.map((comment)=>{
                   return(
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, 
                        {" "}{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                    
                   );
               });
               return(
                   <div class="col-sm-12 col-md-5 m-1">
                       <h4>Comments</h4>
                       {comms}
                       <div>
                       <CommentForm dishId={dishId} addComment={addComment}/>
                       </div>
                   </div>
               );
            }else{
               
                return(
                    <div></div>
                );
            }
            
    }

    function RenderDish({dishDetails}){
       
            return(
                <Card>
                     <CardImg top src={dishDetails.image} alt={dishDetails.name} />
                     <CardBody>
                        <CardTitle>{dishDetails.name}</CardTitle>
                        <CardText>{dishDetails.description}</CardText>
                    </CardBody>
                </Card>
            );
        
    }

    
    const DishDetail = (props)=>{

        if (props.selectedDish!=null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>

                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr/>
                    </div>

                    <div className="row">                 
                        <div className="col-sm-12 col-md-5 m-1">
                        <RenderDish dishDetails={props.selectedDish}/>
                        </div>
                        <RenderComments comments={props.comments}
                            addComment={props.addComment} dishId={props.selectedDish.id}/>
                           
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
            
                </div>
            );
        }

    }

export default DishDetail;
