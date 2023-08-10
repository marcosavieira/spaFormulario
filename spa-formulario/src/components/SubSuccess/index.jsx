import imgSuccess from "../../assets/images/icon-success.svg";

export const SubSuccess = ({ email, setSubscribing, setUserEmail }) => {
    const handleDimiss = () => {
        setUserEmail("");
        setSubscribing(false);
    };
    return (
        <>
            <div className="card-subscribing">
                <div>
                    <img src={imgSuccess} alt="" />
                </div>
                <div>
                    <h1>Thanks for subscribing!</h1>
                </div>
                <div>
                    <p>A confirmation email has been sent to {email}</p>
                </div>
                <div>
                    <button onClick={handleDimiss}>Dismiss message</button>
                </div>
            </div>
        </>
    );
};
