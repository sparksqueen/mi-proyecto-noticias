import React from "react";
import Noticia from "./Noticia";

import './Noticias.css'

import axios from 'axios'

//const URL_NOTICIAS_LOCAL = './noticias.json'
const URL_NOTICIAS_REMOTA = 'https://5c8ef17a3e557700145e85c7.mockapi.io/noticias/'

class Noticias extends React.Component {

    state = {
        noticias: [/* 
            {
                "createdAt": "2022-01-06T04:16:09.511Z",
                "title": "Use the back-end ADP matrix, then you can synthesize the mobile monitor!",
                "image": "http://placeimg.com/640/480/sports",
                "author": "Kyle Ondricka",
                "seen": false,
                "id": "1"
            },
            {
                "createdAt": "2022-01-06T20:10:23.807Z",
                "title": "I'll hack the optical COM transmitter, that should card the XML matrix!",
                "image": "http://placeimg.com/640/480/animals",
                "author": "Cecil Wolf",
                "seen": false,
                "id": "2"
            },
            {
                "createdAt": "2022-01-06T11:46:15.731Z",
                "title": "Try to synthesize the GB transmitter, maybe it will back up the multi-byte circuit!",
                "image": "http://placeimg.com/640/480/transport",
                "author": "Donnie Schuppe",
                "seen": false,
                "id": "3"
            }
         */]
    }

    async componentDidMount() {
        /* ------------------------------------------- */
        /* fetch con then/catch */
        /* fetch(URL_NOTICIAS_LOCAL)
        .then(response => response.json())
        .then( noticias => {
            console.log(noticias)
            this.setState({noticias})
        })
        .catch( error => console.error('error en fetch componentDidMount', error)) */

        /* ------------------------------------------- */
        /* axios con then/catch */
        /* axios(URL_NOTICIAS_LOCAL)
        //.then( response => {
        //    let noticias = response.data
        //    console.log(noticias)
        //    this.setState({noticias})
        //})
        .then( ({data:noticias}) => {
            console.log(noticias)
            this.setState({noticias})
        })
        .catch( error => console.error('error en axios componentDidMount', error)) */

        /* ------------------------------------------- */
        /* axios con async/await */
        try {
            //let response = await axios(URL_NOTICIAS_LOCAL)
            //let noticias = response.data
            //let { data:noticias } = await axios(URL_NOTICIAS_LOCAL)
            let { data:noticias } = await axios(URL_NOTICIAS_REMOTA)
            console.log(noticias)
            this.setState({noticias})
        }
        catch( error ) {
            console.error('error en axios componentDidMount', error)
        }
    }

    async marcarLeida(id) {
        console.log('Marcar leída', id)

        /* Actualización remota de la noticia leída */
        let { data:noticiaActualizada } = await axios.put(URL_NOTICIAS_REMOTA+id, { seen : true })
        //console.log(noticiaActualizada)

        /* Actualización local de la noticia leída */
        let noticias = [...this.state.noticias]
        noticias.find(noticia => noticia.id === noticiaActualizada.id).seen = true
        this.setState({noticias})
    }

    render() {
        let { noticias } = this.state

        return (
            <div className="Noticias">
                <div className="container mt-3">
                    <div className="jumbotron">
                        <h2>Mis Noticias</h2>
                        <br />
                        {
                            noticias.filter(noticia => !noticia.seen).map( noticia => 
                                <Noticia 
                                    noticia={noticia}
                                    key={noticia.id}
                                    marcarLeida={id => this.marcarLeida(id)}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Noticias