
import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardTitle, CardImg, CardBody, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap';


    function RenderComments({comments}){

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
                        <RenderComments comments={props.comments}/>
                           
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
