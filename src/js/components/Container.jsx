import React from "react";
import Card from "./Card";


const Container = () => {





    return (
        <div className="block">
            <div className="bg-secondary text-white mt-3 mx-3   bg-opacity-50 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-dark">Dark color hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-dark">Quickly design and customize responsive mobile-first sites with Bootstrap,
                            the world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                            responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                            
                        </div>
                    </div>
                </div>
            </div>
           {/* bloque para  las cartas */}
           <div className="container-fluid mt-3 ">
           <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">

              <Card/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">

              <Card/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">

              <Card/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">

              <Card/>
            </div>
             
                
         


           </div>



           </div>



        </div>

      





    );




};



















export default Container;