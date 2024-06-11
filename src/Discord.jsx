import './Discord.css';

function Discord() {
    return (
        <div className="discordContainer container-fluid d-flex justify-content-center align-items-center">
            <div className="contentContainer text-center">
                <h1 className='text-dark fw-bold'>Únete al Discord del clan</h1>
                <iframe className='discordIframe' src="https://discord.com/widget?id=1032404182646399067&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </div>
    );
}

export default Discord;