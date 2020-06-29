import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Erro extends Component {
    
    render() {
        return (
            <div>
                <Alert variant="danger" >
                    <img src="/mega-hack-3/pandinha.gif" alt=""/>
                <Alert.Heading>Opa Houve um Erro</Alert.Heading>
                <p>
                    Essa página Não existe.
              </p>
              <Link to="/mega-hack-3/">Clique Aqui para voltar</Link>
            </Alert>
            
            </div>
        )
    }
}
