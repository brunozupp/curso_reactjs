import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModuleCSSFrameworkBootstrap1 = () => {
    return (
        <div className="card bg-dark text-white m-5" style={{maxWidth: "18rem"}}>
            <div className="card-header">
                Notebook
            </div>
            <div className="card-body">
                <h5 className="card-title">R$ 2500</h5>
                <p className="card-text">Esse é um notebook com 1tb</p>
            </div>
        </div>
    )
}


export default ModuleCSSFrameworkBootstrap1
