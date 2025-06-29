import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const [hasReachedTarget, setHasReachedTarget] = useState(false);
  const intervalRef = useRef(null);

  // useEffect to manage setInterval and cleanup
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;

          // Check if target time is reached
          if (newSeconds === targetTime && !hasReachedTarget) {
            setHasReachedTarget(true);
            playSound();
            console.log(`🎉 Target time of ${targetTime} seconds reached!`);
          }

          return newSeconds;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Cleanup function
    return () => clearInterval(intervalRef.current);
  }, [isRunning, targetTime, hasReachedTarget]);

  // Function to play sound when target is reached
  const playSound = () => {
    try {
      // Create a simple beep sound using Web Audio API
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800; // Frequency in Hz
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 1);
    } catch (error) {
      console.log(
        "🔊 Beep! Sound played (Web Audio API not supported)",
        error.message
      );
    }
  };

  // Start the stopwatch
  const startStopwatch = () => {
    setIsRunning(true);
  };

  // Stop the stopwatch
  const stopStopwatch = () => {
    setIsRunning(false);
  };

  // Reset the stopwatch (Bonus feature)
  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
    setHasReachedTarget(false);
    clearInterval(intervalRef.current);
  };

  // Handle target time change (Bonus feature)
  const handleTargetTimeChange = (e) => {
    const newTarget = parseInt(e.target.value) || 1;
    setTargetTime(newTarget);
    setHasReachedTarget(false); // Reset target reached flag
  };

  // Format time display (mm:ss)
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "50px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
  };

  const titleStyle = {
    color: "#2d3748",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    color: "#4a5568",
    fontSize: "16px",
    marginBottom: "40px",
  };

  const timerDisplayStyle = {
    fontSize: "72px",
    fontWeight: "bold",
    color: hasReachedTarget ? "#48bb78" : "#2d3748",
    marginBottom: "20px",
    fontFamily: "'Courier New', monospace",
    textShadow: hasReachedTarget ? "0 0 20px #48bb78" : "none",
    transition: "all 0.3s ease",
  };

  const secondsDisplayStyle = {
    fontSize: "24px",
    color: "#718096",
    marginBottom: "30px",
  };

  const targetInfoStyle = {
    backgroundColor: hasReachedTarget ? "#f0fff4" : "#f7fafc",
    border: hasReachedTarget ? "2px solid #48bb78" : "2px solid #e2e8f0",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "30px",
    fontSize: "16px",
    color: hasReachedTarget ? "#2f855a" : "#4a5568",
    transition: "all 0.3s ease",
  };

  const controlsStyle = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
  };

  const buttonStyle = (type) => ({
    padding: "15px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "120px",
    ...(type === "start" && {
      backgroundColor: "#48bb78",
      color: "white",
      boxShadow: "0 4px 15px rgba(72, 187, 120, 0.4)",
    }),
    ...(type === "stop" && {
      backgroundColor: "#f56565",
      color: "white",
      boxShadow: "0 4px 15px rgba(245, 101, 101, 0.4)",
    }),
    ...(type === "reset" && {
      backgroundColor: "#4299e1",
      color: "white",
      boxShadow: "0 4px 15px rgba(66, 153, 225, 0.4)",
    }),
  });

  const inputGroupStyle = {
    backgroundColor: "#f7fafc",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
  };

  const inputLabelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#4a5568",
    marginBottom: "8px",
  };

  const inputStyle = {
    width: "80px",
    padding: "10px",
    fontSize: "16px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    textAlign: "center",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const statusStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: isRunning ? "#48bb78" : "#718096",
    marginBottom: "20px",
  };

  const achievementStyle = {
    backgroundColor: "#f0fff4",
    border: "2px solid #48bb78",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
    animation: hasReachedTarget ? "pulse 2s infinite" : "none",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          input:focus {
            border-color: #667eea !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          }
        `}
      </style>

      <div style={cardStyle}>
        <h1 style={titleStyle}>⏱️ Stopwatch</h1>
        <p style={subtitleStyle}>React Stopwatch with Sound Trigger</p>

        {/* Timer Display */}
        <div style={timerDisplayStyle}>{formatTime(seconds)}</div>

        <div style={secondsDisplayStyle}>
          {seconds} second{seconds !== 1 ? "s" : ""} elapsed
        </div>

        {/* Target Time Info */}
        <div style={targetInfoStyle}>
          {hasReachedTarget ? (
            <div>
              🎉 <strong>Target Reached!</strong> You've hit {targetTime}{" "}
              seconds!
            </div>
          ) : (
            <div>
              🎯 <strong>Target:</strong> {targetTime} seconds (
              {targetTime - seconds > 0
                ? `${targetTime - seconds} to go`
                : "Target passed!"}
              )
            </div>
          )}
        </div>

        {/* Status */}
        <div style={statusStyle}>
          Status: {isRunning ? "⏯️ Running" : "⏸️ Stopped"}
        </div>

        {/* Control Buttons */}
        <div style={controlsStyle}>
          <button
            style={buttonStyle("start")}
            onClick={startStopwatch}
            disabled={isRunning}
            onMouseOver={(e) =>
              !isRunning && (e.target.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
          >
            ▶️ Start
          </button>

          <button
            style={buttonStyle("stop")}
            onClick={stopStopwatch}
            disabled={!isRunning}
            onMouseOver={(e) =>
              isRunning && (e.target.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
          >
            ⏸️ Stop
          </button>

          <button
            style={buttonStyle("reset")}
            onClick={resetStopwatch}
            onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
            onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
          >
            🔄 Reset
          </button>
        </div>

        {/* Target Time Input (Bonus) */}
        <div style={inputGroupStyle}>
          <label style={inputLabelStyle}>🎯 Set Target Time (seconds):</label>
          <input
            type="number"
            min="1"
            max="3600"
            value={targetTime}
            onChange={handleTargetTimeChange}
            style={inputStyle}
            disabled={isRunning}
          />
          <div style={{ fontSize: "12px", color: "#718096", marginTop: "8px" }}>
            Sound will play when timer reaches this time
          </div>
        </div>

        {/* Achievement Badge */}
        {hasReachedTarget && (
          <div style={achievementStyle}>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>🏆</div>
            <div style={{ color: "#2f855a", fontWeight: "bold" }}>
              Congratulations! Target Achieved!
            </div>
            <div
              style={{ color: "#38a169", fontSize: "14px", marginTop: "5px" }}
            >
              Sound has been triggered at {targetTime} seconds
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
