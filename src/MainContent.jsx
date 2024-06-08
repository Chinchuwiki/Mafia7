import storm from '/lightningStormAnimationBackground.webm'
import mafia7 from '/MAFIA-7.png'
import './MainContent.css'

function MainContent() {
    return (
        <>
            <div className="container-fluid">
                <div className="background-container">
                    <video autoPlay loop muted className="background-video">
                        <source src={storm} type="video/webm" />
                    </video>
                    <img src={mafia7} alt="Mafia 7" className="centered-image" />
                </div>
            </div>
        </>
    )
}

export default MainContent