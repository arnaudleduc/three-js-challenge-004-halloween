import { useProgress } from "@react-three/drei";

export default function LoadingScreen({ started, onStarted }) {
    const { progress } = useProgress();
    return (
        <div className={`loading-screen ${started ? "loading-screen-started" : ""}`}>
            <div className="loading-screen-progress">
                <div
                    className="loading-screen-progress-value"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            <div className="loading-screen-board">
                <h1 className="loading-screen-title">(Not so) abandoned house</h1>
                {!started && <button
                    className="loading-screen-button"
                    disabled={progress < 100}
                    onClick={onStarted}
                >
                    Start
                </button>}
            </div>
        </div>
    );
};