const Curve = ({ direction }) => {

    if (direction === "up") {

        return (
            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 20 0 100 100 Z"></path>
            </svg>
        )
    }
    return (
        <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
        </svg>
    )
}

export default Curve;