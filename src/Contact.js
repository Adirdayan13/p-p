import React from 'react';
import './Contact.css';
import axios from "axios";
import $ from 'jquery';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleContact(e, name) {
    e.preventDefault();
    setTimeout(() => {
      window.open(name === 'github' ? 'https://github.com/adirdayan13' : 'https://www.linkedin.com/in/adir-dayan', "_blank");
    }, 700);
  }

  async handleSubmit(e) {
    var $input = $('input');
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await axios.post('https://ovjkzf0d1j.execute-api.us-east-1.amazonaws.com/prod', { first: this.state.first, last: this.state.last, subject: this.state.subject, email: this.state.email, subject: this.state.subject, message: this.state.message })
      setTimeout(() => {
        this.setState({ success: true, loading: false });
      }, 2000);
    } catch (e) {
      console.log("error in send email: ", e);
      setTimeout(() => {
        this.setState({ fail: true, loading: false });
      }, 2000);
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="contact-wrapper">
        <div className="title-first">
          <br />
          <h1>Contact Me</h1>
          <br /><br />
        </div>
        <div className="contact-div">
          <div className="container">
            <div className="title-second">
              <h4>For any further intrigues don't hesitate to<br />
        contact me using the form below:</h4>
            </div>
            {!this.state.success && (
              <form method="POST" onSubmit={e => this.handleSubmit(e)} autoComplete="off">
                <div className="row100">
                  <div className="col">
                    <div className="inputBox">
                      <input autoComplete="new-password" onChange={e => this.handleChange(e)} type="text" name="first" required="required" />
                      <span className="text">First Name</span>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inputBox">
                      <input autoComplete="new-password" onChange={e => this.handleChange(e)} type="text" name="last" required="required" />
                      <span className="text">Last Name</span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
                <div className="row100">
                  <div className="col">
                    <div className="inputBox">
                      <input onChange={e => this.handleChange(e)} type="text" name="email" required="required" autoComplete="new-password" />
                      <span className="text">Email</span>
                      <span className="line"></span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inputBox">
                      <input onChange={e => this.handleChange(e)} type="text" name="subject" required="required" autoComplete="new-password" />
                      <span className="text">Subject</span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
                <div className="row100">
                  <div className="col">
                    <div className="inputBox textarea">
                      <textarea onChange={e => this.handleChange(e)} required="required" name="message"></textarea>
                      <span className="text">Type your message Here...</span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
                {!this.state.loading && (
                  <div className="row100">
                    <div className="col">
                      <input type="submit" value="Send" />
                    </div>
                  </div>
                )}
                {this.state.loading && (
                  <img
                    src="./pictures/loading.svg"
                    alt="loading"
                    style={{ width: "50px" }}
                  />
                )}
              </form>
            )}
            {this.state.success && (
              <div id="mailSent">
                <img
                  alt="success"
                  style={{ width: "100px" }}
                  src="./pictures/check.svg"
                />
                <h1>Your Email was sent successfully.</h1>
              </div>
            )}
            {this.state.fail && (
              <h1>Something went wrong, please try again.</h1>
            )}
          </div>
        </div>
        <br /><br /><br />
        <div className="icons">
          <a className="pointer" onClick={e => this.handleContact(e, 'github')}><i value="github" className="github icon fa fa-github fa-2x"></i></a>
          <a className="pointer" onClick={e => this.handleContact(e, 'linkedin')}><i className="linkedin icon fa fa-linkedin fa-2x"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;