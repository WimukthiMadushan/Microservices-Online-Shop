import React, { createContext, useContext, useEffect, useState } from "react";
import keycloak from "@/lib/keycloak";
import { KeycloakProfile } from "keycloak-js";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | undefined;
  userProfile: KeycloakProfile | undefined;
  login: () => void;
  logout: () => void;
  hasRole: (role: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<KeycloakProfile | undefined>(
    undefined
  );
  const [token, setToken] = useState<string | undefined>(undefined);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const authenticated = await keycloak.init({
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            window.location.origin + "/silent-check-sso.html",
          pkceMethod: "S256",
        });

        setIsAuthenticated(authenticated);
        if (authenticated) {
          setToken(keycloak.token);
          const profile = await keycloak.loadUserProfile();
          setUserProfile(profile);
        }
      } catch (error) {
        console.error("Failed to initialize Keycloak", error);
      } finally {
        setIsInitialized(true);
      }
    };

    initKeycloak();
  }, []);

  const login = () => {
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout();
  };

  const hasRole = (role: string) => {
    return keycloak.hasRealmRole(role);
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, userProfile, login, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
