import './Noticia.css'

function Noticia(props) {
    let { noticia, marcarLeida } = props
    return (
        <div className="Noticia" onClick={() => marcarLeida(noticia.id) } >
            <div className="media alert alert-primary">
                <img src={noticia.image} style={{width:'180px', borderRadius:'15px'}} alt={noticia.id} />
                <div className="media-body ml-3">
                    <h5><u>Noticia Nro. {noticia.id}</u></h5>
                    <p><b>{noticia.title}</b></p>
                    <p><i>{noticia.author}</i></p>
                </div>
            </div>
        </div>
    )
}

export default Noticia