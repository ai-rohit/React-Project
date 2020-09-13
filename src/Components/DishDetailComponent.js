
import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText, CardImgOverlay} from 'reactstrap';

class DishDetail extends Component{

    renderComments(comments){
            if (comments!=null) {
               const comms = comments.map((comment)=>{
                   return(
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {comment.date}</li>
                    </ul>
                    
                   );
               });
               return(
                   <div class="p-3">
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
    
    render(){
        const dishDetails = this.props.selectedDish;
        
        if (dishDetails!=null) {
            return(
                <div className="row">                 
                       <Card className="col-sm-12 col-md-5">
                            <CardImg top src={dishDetails.image} alt={dishDetails.name}/>
                            <CardBody>
                                <CardImgOverlay>
                                    <CardTitle>
                                        {dishDetails.name}
                                    </CardTitle> 
                                </CardImgOverlay>
                                <CardText>
                                    {dishDetails.description}
                                </CardText>
                            </CardBody>
                        </Card>

                        <div className="col-sm-12 col-md-5">
                            {this.renderComments(dishDetails.comments)}
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
}
export default DishDetail;
