import React from "react";
import Card from "./Card";


const Container = () => {

    const galleryData =


        [

            {
                urlima: 'https://album.mediaset.es/eimg/2026/03/03/league-of-legends-16-9-aspect-ratio-default-0_da39.jpg',
                title: 'Shyvana',
                url: 'https://wiki.leagueoflegends.com/en-us/Shyvana'
            },

            {
                urlima: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oEjRGJgaYLCbHaxCRHZm0UQuoAiWT137jw&s',
                title: 'Gwen',
                url: 'https://wiki.leagueoflegends.com/en-us/Gwen'
            },

            {
                urlima: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMpjVMeDLWlOMa9CRUAg2ND0wBJQhNl7WPQ&s',
                title: 'Amumu',
                url: 'https://wiki.leagueoflegends.com/en-us/Amumu'
            },
            { urlima:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb1u5G2e0oS0nZZLLajQkGBSNJLrpDdkkuGw&s',
              title:'Morgana',
              url:'https://wiki.leagueoflegends.com/en-us/Morgana'
                 
            }
        ]










    return (
        <div className="block container mb-3">
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
                    {galleryData.map((el, i) => (
                        <div key={i} className="col-sm-12 col-md-6 col-lg-3 ">

                            <Card urlima={el.urlima} title={el.title} url={el.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



















export default Container;