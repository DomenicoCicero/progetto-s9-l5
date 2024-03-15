import { Component } from "react";
import MyNavbar from "./MyNavbar";
import UnderNavbar from "./UnderNavbar";
import Films from "./Films";
import MyFooter from "./MyFooter";

class HomePage extends Component {
  state = {
    genre: "",
    textForm: "",
  };

  handleGenre = data => {
    this.setState({ genre: data });
  };

  handleForm = data => {
    this.setState({ textForm: data });
  };

  render() {
    return (
      <div className="bg-dark" style={{ minHeight: "100vh" }}>
        <MyNavbar textFormProp={this.handleForm} />
        <UnderNavbar genreProp={this.handleGenre} />

        {(this.state.genre === "" || this.state.genre === "serie") && this.state.textForm === "" && (
          <>
            <Films title="Game of Thrones" />
            <Films title="Breaking Bad" />
            <Films title="Harry Potter" />
          </>
        )}

        {this.state.genre === "comedy" && this.state.textForm === "" && (
          <>
            <Films title="Comedy" />
            <Films title="Friends" />
            <Films title="Hangover" />
          </>
        )}

        {this.state.genre === "drama" && this.state.textForm === "" && (
          <>
            <Films title="Drama" />
            <Films title="Baby" />
            <Films title="Solution" />
          </>
        )}

        {this.state.genre === "thriller" && this.state.textForm === "" && (
          <>
            <Films title="Saw" />
            <Films title="Hypnotic" />
            <Films title="Padrino" />
          </>
        )}

        {this.state.textForm !== "" && (
          <>
            <Films title={this.state.textForm} />
          </>
        )}

        <MyFooter />
      </div>
    );
  }
}

export default HomePage;
