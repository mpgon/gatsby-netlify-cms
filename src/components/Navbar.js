import React from "react";
import { navigate } from "gatsby";
import Button from "@material-ui/core/Button";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      },
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div>
          <div>
            {/* Hamburger menu */}
            <div data-target="navMenu" onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu">
            <div>
              <Button color="secondary" onClick={() => navigate("/faq")}>
                {`<- FAQ`}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
