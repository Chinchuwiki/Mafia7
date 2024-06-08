import './Discord.css';

function Discord() {
    return (
        <>
            <div className="discordContainer container-fluid">
                <h1 className='text-light fw-bold'>Únete al Discord del clan</h1>
                <iframe className='discordIframe' src="https://discord.com/widget?id=1032404182646399067&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </>
    );
}

export default Discord;