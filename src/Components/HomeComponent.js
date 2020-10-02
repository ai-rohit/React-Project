import React  from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import {Loading} from "./LoadingComponent";

    function RenderCard({item, dishesLoading, dishesErrMess}){
        
        if (dishesLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }else if (dishesErrMess){
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{dishesErrMess}</h4>
                    </div>
                </div>
            );
        }else{
            return(
                <Card>
                    <CardImg src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
        );
     }
    }

    function Home(props){
        return(
            <div className="container">
                <div className="row align-row-start">
                    <div className="col-md col-12 m-1">
                        <RenderCard item={props.dish} dishesLoading={props.dishesLoading}
                        dishesErrMess={props.ErrMess} />
                    </div>

                    <div className="col-md col-12 m-1">
                        <RenderCard item={props.promotion}/>
                    </div>

                    <div className="col-md col-12 m-1">
                        <RenderCard item={props.leader}/>
                    </div>
                </div>
            </div>
        );
    }

export default Home;