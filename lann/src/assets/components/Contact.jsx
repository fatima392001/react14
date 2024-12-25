import React from "react";

const Contact = () => {
    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="contact-form w-50">
                <h2 className="text-center mb-4">CONTACT ME</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">
                            Full name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-send w-100">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
