import { Component } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Films extends Component {
  state = {
    filmsArray: [],
  };

  getFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=f364cb6f&s=${this.props.title}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nel reperimento dei dati");
        }
      })
      .then(films => {
        console.log(films);
        this.setState({
          filmsArray: films.Search.slice(0, 6),
        });
      })
      .catch(error => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Container fluid className="bg-dark px-4">
        <h4 className="text-white">{this.props.title}</h4>
        <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.filmsArray.map(film => {
            return (
              <Col className="col mb-2 text-center px-1" key={film.imdbID}>
                <img src={film.Poster} alt={film.Title} className="img-fluid" id="img" />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Films;
