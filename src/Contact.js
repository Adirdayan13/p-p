import React from 'react';
import './Contact.css';
import axios from "axios";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      await axios.post('https://ovjkzf0d1j.execute-api.us-east-1.amazonaws.com/prod', { name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message })
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
    return (
      <React.Fragment>
        <div className="content_inner contact">
          <h1 className="contact-title">Let's stay in touch</h1>
          <br />
          <h4 className="contact-text">For any further intrigues don't hesitate to contact me using the form below:</h4>
          <br />
          {!this.state.success && (
            <form method="POST" onSubmit={e => this.handleSubmit(e)}>
              <div className="wrapper">
                <div className="container">
                  <div className="row">
                    <div className="form-group">
                      <input onChange={e => this.handleChange(e)} name="name" type="text" id="name" className="form-control" required />
                      <label htmlFor="name" className="ph-area">Name</label>
                    </div>
                    <div className="form-group">
                      <input onChange={e => this.handleChange(e)} name="email" type="text" id="email" className="form-control" required />
                      <label htmlFor="email" className="ph-area">Email</label>
                    </div>
                    <div className="form-group">
                      <input onChange={e => this.handleChange(e)} name="subject" type="text" id="subject" className="form-control" required />
                      <label htmlFor="subject" className="ph-area">Subject</label>
                    </div>
                    <div className="form-group">
                      <textarea onChange={e => this.handleChange(e)} name="message" rows="5" type="text" id="message" className="form-control" required />
                      <label htmlFor="message" className="ph-area">Message</label>
                    </div>
                  </div>
                </div>
                {!this.state.loading && (
                  <button className="btn btn-info">Submit</button>
                )}
                {this.state.loading && (
                  <img
                    src="./pictures/loading.svg"
                    alt="loading"
                    style={{ width: "50px" }}
                  />
                )}
              </div>
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
          <br />
          <div className="icons">
            <a className="pointer" onClick={e => this.handleContact(e, 'github')}><i value="github" className="github icon fa fa-github fa-2x"></i></a>
            <a className="pointer" onClick={e => this.handleContact(e, 'linkedin')}><i className="linkedin icon fa fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;