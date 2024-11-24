import robot from "../assets/imgs/404-robot.png"

function NotFound(){
    return (
        <div className="not-found-container">
            <img src={robot} />
            <h1>404 Error</h1>
            <span>Page Not Found</span>
        </div>
    );
}

export default NotFound