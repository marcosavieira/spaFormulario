import { useState } from "react";
import "./App.css";
import success from "./assets/images/icon-list.svg";
import { SubSuccess } from "./components/SubSuccess";

function App() {
    const [subscribing, setSubscribing] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);
        setValidEmail(true);
    };

    const handleSubscribing = (event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            setValidEmail(false);
            return;
        }
        setSubscribing(true);
    };

    return (
        <>
            <div className="container">
                {console.log(subscribing)}
                {!subscribing ? (
                    <div className="card">
                        <div className="nav-left">
                            <section className="describle">
                                <div className="section-header">
                                    <h1>Stay update!</h1>
                                </div>
                                <div className="section-header">
                                    <p>
                                        Join 60,000+ product managers receiving
                                        monthly
                                        <br />
                                        updates on:
                                    </p>
                                </div>
                                <div className="steps">
                                    <section className="steps-content">
                                        <img src={success} alt="success" />
                                        <p>
                                            Product discovery and building what
                                            matters
                                        </p>
                                    </section>
                                    <section className="steps-content">
                                        <img src={success} alt="success" />
                                        <p>
                                            Measuring to ensure updates are a
                                            success
                                        </p>
                                    </section>
                                    <section className="steps-content">
                                        <img src={success} alt="success" />
                                        <p>And much more!</p>
                                    </section>
                                </div>
                                <form onSubmit={handleSubscribing}>
                                    <div className="label">
                                        <label>Email address</label>
                                        {!validEmail && (
                                            <span className="error-msg">
                                                Valid email required
                                            </span>
                                        )}
                                    </div>

                                    <input
                                        className={!validEmail && "error"}
                                        type="email"
                                        placeholder="email@company.com"
                                        onChange={handleUserEmail}
                                    />
                                    <button type="submit">
                                        Subscribe to monthly newsletter
                                    </button>
                                </form>
                            </section>
                        </div>

                        <div className="nav-rigth">
                            <div className="nav-rigth-img"></div>
                        </div>
                    </div>
                ) : (
                    <SubSuccess
                        setSubscribing={setSubscribing}
                        setUserEmail={setUserEmail}
                        email={userEmail}
                    />
                )}
            </div>
        </>
    );
}

export default App;
