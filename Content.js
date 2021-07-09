const generateHTML = (pageName) => {

    if (pageName === "Youtube") {
        return `<div class="pageMsg">Come on. ${pageName}, really? Get back to work.</div>
        <div class="video-container">
            <div class="video-foreground"></div>
                <iframe width="100%" height="518px" style="border: none;" src="https://www.youtube.com/embed/2Rpn_UJjlks?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&amp;playlist=2Rpn_UJjlks&amp;autoplay=1&amp;vq=small" allow="autoplay"></iframe>
            </div>
        </div>`
    }

    if (pageName === "Netflix") {
        return `<div class="pageMsg">Come on. ${pageName}, really? Get back to work.</div>
        <div class="video-container">
            <div class="video-foreground"></div>
                <iframe width="100%" height="518px" style="border: none;" src="https://www.youtube.com/embed/JT2blLZ-LJE?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=0&amp;loop=1&amp;playlist=JT2blLZ-LJE&amp;autoplay=1&amp;vq=small" allow="autoplay"></iframe>
            </div>
        </div>`
    }
}

const generateStyle = () => {
    return `<style>
    .pageMsg {
        font-family:sans-serif;
        color:aliceblue;
        font-size: 48px;
        position: absolute;
        bottom: 65px;
        text-align: center;
        width: 100%;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }

    body {
        background-color: #000;
        overflow: hidden;
    }

    /*.pageVid {
        width: 100%;
        border: none;
    }*/

    .video-container{
        width:100vw;
        height:100vh;
        overflow:hidden;
        position:relative;
    }


    .video-container iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
        
    .video-container iframe{
        position: absolute;
        top: -60px;
        left: 0;
        width: 100%;
        z-index: -1;
        height: calc(100% + 120px);
    }
    
    </style>`
}

switch (window.location.hostname) {
    case "www.netflix.com":
        document.head.innerHTML = generateStyle();
        document.body.innerHTML = generateHTML("Netflix");
        break;
    case "www.youtube.com":
        document.head.innerHTML = generateStyle();
        document.body.innerHTML = generateHTML("Youtube");
        break;

}