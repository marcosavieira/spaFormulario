import imgSuccess from "../../assets/images/icon-success.svg";
import "./style.css";

export const SubSuccess = ({ email, setSubscribing, setUserEmail }) => {
    const handleDimiss = () => {
        setUserEmail("");
        setSubscribing(false);
    };
    return (
        <>
            <div className="card-subscribing">
                <section>
                    <div className="container-img-success">
                        <img src={imgSuccess} alt="" />
                    </div>
                    <div className="container-header-success">
                        <h1>Thanks for subscribing!</h1>
                    </div>
                    <div className="container-msg">
                        <p>
                            A confirmation email has been sent to{" "}
                            <strong>{email}</strong>. Please open it and click
                            the button inside to confirm your subscription.
                        </p>
                    </div>
                    <div className="container-button">
                        <button onClick={handleDimiss}>Dismiss message</button>
                    </div>
                </section>
            </div>
        </>
    );
};
