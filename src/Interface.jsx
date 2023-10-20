import { useRef, useEffect } from "react"
import useGemsStore from "./stores/useGems";
import useSoundsStore from "./stores/useSounds";

export default function Interface() {
    const count = useRef()
    const { gemCount, watchScene, hidePostGameInterface } = useGemsStore()
    const { isSoundOn, toggleSounds } = useSoundsStore()

    const reloadPage = () => {
        window.location.reload(false)
    }

    const togglePostGameInterface = () => {
        hidePostGameInterface()
    }

    const toggleSoundOnOff = () => {
        toggleSounds()
    }

    return (
        <div className="interface" >
            {/* Gems Counter */}
            {watchScene && <div className="interface-gems-counter">
                Gem found : <span ref={count}>{gemCount}</span> / 7
            </div>}

            {/* Credits */}
            <p className="interface-credits">Made with ♡ by Arnaud L.</p>

            {/* Post-game */}
            {gemCount === 7 && watchScene && <div className="interface-post-game" >
                <p className="interface-post-game-title">Congratulations !</p>
                <p className="interface-post-game-sentence">You found all the gems !</p>
                <p className="interface-post-game-sentence">
                    Don't want to miss the next project ? Follow me !
                </p>
                <div className="interface-post-game-icon-container">
                    <a href="https://github.com/arnaudleduc">
                        <img className="interface-post-game-icon" src="./icons/github_orange.png" alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/arnaudleduc/">
                        <img className="interface-post-game-icon" src="./icons/linkedin_orange.png" alt="linkedin icon" />
                    </a>
                </div>
                <p className="interface-post-game-sentence">
                    Want to become a three.js developper ? Click below !
                </p>
                <a href="https://threejs-journey.com/">
                    <img className="interface-post-game-icon" src="./icons/three_orange.png" alt="github icon" />
                </a>
                <div className="interface-post-game-buttons-container">
                    <button className="interface-post-game-close" onClick={reloadPage}>
                        Start again
                    </button>
                    <button className="interface-post-game-hide" onClick={togglePostGameInterface}>
                        Watch scene
                    </button>
                </div>
            </div>}

            {!watchScene && <p className="interface-post-game-reload">Reload the page to start over !</p>}

            <div className="interface-sound" onClick={toggleSoundOnOff}>
                {
                    isSoundOn ?
                        <img className="interface-sound-icon" src="./icons/volume_orange.png" alt="sound icon" />
                        :
                        <img className="interface-sound-icon" src="./icons/volume_off_orange.png" alt="sound icon" />
                }
            </div>
        </div>
    )
}