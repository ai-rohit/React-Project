import React, {Component} from 'react';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent"
import { Redirect, Route, Switch } from 'react-router-dom';
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import {COMMENTS} from "../shared/comments";
import Contact from "./ContactComponent";

class Main extends Component{
    constructor(props){
        super(props);
        this.state= {
            dishes: DISHES,
            leaders: LEADERS,
            comments: COMMENTS,
            promotions: PROMOTIONS
        };
    }

    render(){
        const DishAtId = ({match})=>{
            return(
                <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId, 10))[0]}
                            comments = {this.state.comments.filter((comment)=> comment.dishId === parseInt(match.params.dishId, 10))}/>
            );
        }; 

        const HomePage = ()=> {
            return(
                <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                        leader={this.state.leaders.filter((leader)=> leader.featured)[0]}
                        promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}/>
            );
        };
        
        return(
            <div>
                <Header />
                <Switch>
                    <Route path = "/home" component={HomePage} />
                    <Route exact path="/menu" component={()=> <Menu dishes= {this.state.dishes}/>}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Route path="/menu/:dishId" component={DishAtId}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;