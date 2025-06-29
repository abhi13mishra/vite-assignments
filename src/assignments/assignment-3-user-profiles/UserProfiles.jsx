import { useState, useEffect } from "react";

// UserCard Component - Reusable component to display individual user info
function UserCard({ user }) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "24px",
    margin: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
    minWidth: "280px",
    maxWidth: "320px",
  };

  const avatarStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#667eea",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "8px",
  };

  const emailStyle = {
    fontSize: "14px",
    color: "#4a5568",
    marginBottom: "8px",
  };

  const cityStyle = {
    fontSize: "14px",
    color: "#718096",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)";
      }}
    >
      <div style={avatarStyle}>{user.name.charAt(0).toUpperCase()}</div>
      <div style={nameStyle}>{user.name}</div>
      <div style={emailStyle}>✉️ {user.email}</div>
      <div style={cityStyle}>📍 {user.address.city}</div>
    </div>
  );
}

// Main UserProfiles Component
function UserProfiles() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users data using useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const userData = await response.json();
        setUsers(userData);
        setFilteredUsers(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term (case-insensitive)
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "40px",
  };

  const titleStyle = {
    color: "white",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  };

  const subtitleStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "18px",
    marginBottom: "30px",
  };

  const searchContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  };

  const searchInputStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "25px",
    width: "300px",
    maxWidth: "90%",
    outline: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  };

  const contentStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const usersGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0",
  };

  const loadingStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "20px",
    margin: "50px 0",
  };

  const errorStyle = {
    textAlign: "center",
    backgroundColor: "rgba(245, 101, 101, 0.9)",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    margin: "20px auto",
    maxWidth: "500px",
    fontSize: "18px",
  };

  const noResultsStyle = {
    textAlign: "center",
    color: "white",
    fontSize: "18px",
    margin: "40px 0",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const statsStyle = {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "16px",
    marginBottom: "20px",
  };

  const requirementsStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "15px",
    padding: "30px",
    margin: "40px auto",
    maxWidth: "800px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  };

  const retryButtonStyle = {
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "15px",
    transition: "all 0.3s ease",
  };

  const retryUsers = () => {
    setError(null);
    setLoading(true);
    // Re-trigger the useEffect by forcing a re-render
    window.location.reload();
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>👥 User Profiles</h1>
          <p style={subtitleStyle}>
            Fetching and displaying user data with search functionality
          </p>
        </div>

        {/* Search Input - Bonus Feature */}
        {!loading && !error && (
          <div style={searchContainerStyle}>
            <input
              type="text"
              placeholder="🔍 Search users by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={searchInputStyle}
            />
          </div>
        )}

        {/* Stats Display */}
        {!loading && !error && (
          <div style={statsStyle}>
            {searchTerm ? (
              <p>
                Showing {filteredUsers.length} of {users.length} users
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            ) : (
              <p>Displaying {users.length} user profiles</p>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div style={loadingStyle}>
            <div
              style={{
                display: "inline-block",
                width: "40px",
                height: "40px",
                border: "4px solid rgba(255,255,255,0.3)",
                borderTop: "4px solid white",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                marginRight: "15px",
              }}
            ></div>
            Loading user profiles...
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        )}

        {/* Error State - Bonus Feature */}
        {error && (
          <div style={errorStyle}>
            <h3>❌ Oops! Something went wrong</h3>
            <p>We couldn't fetch the user profiles: {error}</p>
            <p>Please check your internet connection and try again.</p>
            <button
              style={retryButtonStyle}
              onClick={retryUsers}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5a67d8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#667eea")}
            >
              🔄 Retry
            </button>
          </div>
        )}

        {/* No Results Found */}
        {!loading && !error && searchTerm && filteredUsers.length === 0 && (
          <div style={noResultsStyle}>
            <h3>🔍 No users found</h3>
            <p>No users match "{searchTerm}". Try a different search term.</p>
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && filteredUsers.length > 0 && (
          <div style={usersGridStyle}>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfiles;
