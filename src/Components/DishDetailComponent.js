
import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText, CardImgOverlay} from 'reactstrap';


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
                   <div class="col-sm-12 col-md-5 p-3">
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
                <Card className="col-sm-12 col-md-5">
                     <CardImg top src={dishDetails.image} alt={dishDetails.name} />
                     <CardBody>
                        <CardTitle>{dishDetails.name}</CardTitle>
                        <CardText>{dishDetails.description}</CardText>
                    </CardBody>
                </Card>
            );
        
    }

    
    const DishDetail = (props)=>{
        const dishDetails = props.selectedDish;
        
        if (dishDetails!=null) {
            return(
                <div className="container">
                    <div className="row">                 
                            
                        <RenderDish dishDetails={dishDetails}/>
                        <RenderComments comments={dishDetails.comments}/>
                           
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
