

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import {CardModel} from './cardmodel';
import {getMyModels} from '../redux/actions/carAction';


class CardList extends Component {

    componentDidMount() {
      this.props.getMyModels();
    }


    render() {
        const { model_list } = this.props.models;

        return (
            <div>
               

              
                    <div className="mt-5">
                        <div className="d-flex flex-wrap">
                            {model_list.map((model, index) => (

                                <CardModel model={model} />

                            ))}
                        </div>
                    </div>
                
            </div>  

        );
    }

}

CardList.propTypes = {
   models: PropTypes.object.isRequired,
   getMyModels: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
models: state.models

});


export default connect(mapStateToProps, { getMyModels})(CardList);

