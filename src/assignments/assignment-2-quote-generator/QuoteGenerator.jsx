import { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);

  // Fetch quote function
  const fetchQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data);
      setLastFetched(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh quote every 30 seconds using useEffect
  useEffect(() => {
    // Fetch initial quote
    fetchQuote();

    // Set up interval for auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
  };

  const quoteStyle = {
    fontSize: "24px",
    fontStyle: "italic",
    color: "#2d3748",
    marginBottom: "20px",
    lineHeight: "1.6",
    minHeight: "60px",
  };

  const authorStyle = {
    fontSize: "18px",
    color: "#4a5568",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    padding: "15px 30px",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
  };

  const loadingSpinnerStyle = {
    width: "40px",
    height: "40px",
    border: "4px solid #e2e8f0",
    borderTop: "4px solid #667eea",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "20px auto",
  };

  const infoStyle = {
    fontSize: "14px",
    color: "#718096",
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "rgba(102, 126, 234, 0.1)",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .quote-content {
            animation: fadeIn 0.6s ease-out;
          }
        `}
      </style>

      <div style={cardStyle}>
        <h1 style={{ color: "#2d3748", marginBottom: "30px" }}>
          💭 Daily Quote Generator
        </h1>

        {loading ? (
          <div>
            <div style={loadingSpinnerStyle}></div>
            <p style={{ color: "#718096" }}>Fetching inspiring quote...</p>
          </div>
        ) : error ? (
          <div>
            <p style={{ color: "#e53e3e", fontSize: "18px" }}>❌ {error}</p>
            <button
              style={buttonStyle}
              onClick={fetchQuote}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#5a67d8";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Try Again
            </button>
          </div>
        ) : quote ? (
          <div className="quote-content">
            <blockquote style={quoteStyle}>"{quote.content}"</blockquote>
            <p style={authorStyle}>— {quote.author}</p>

            <button
              style={buttonStyle}
              onClick={fetchQuote}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#5a67d8";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "translateY(0)";
              }}
            >
              🔄 Get New Quote
            </button>

            <div style={infoStyle}>
              <p>
                <strong>🔄 Auto-refresh:</strong> New quote every 30 seconds
              </p>
              <p>
                <strong>⏰ Last updated:</strong> {lastFetched}
              </p>
              <p>
                <strong>📝 Quote length:</strong> {quote.content.length}{" "}
                characters
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuoteGenerator;
