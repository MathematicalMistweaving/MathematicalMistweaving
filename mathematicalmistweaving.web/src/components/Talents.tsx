


function TalentTree() {
    let talentString;
    if (!talentString) {
        talentString = `B4QAAAAAAAAAAAAAAAAAAAAAA0CFkIRpoRIlQSKRJRatAAAAAAAAAAAAASaSKhEJJaFQLJpBJAAIA`;
    }
    const iframeUrl = "https://www.raidbots.com/simbot/render/talents/";
    const options = "?width=1400&height=500&level=70&bgcolor=3e3e42";
    let srcUrl = iframeUrl + talentString + options;
    return (
        <div>
        <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>
        </div>
    );
}

export default TalentTree;