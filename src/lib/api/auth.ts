import { API_ENDPOINTS } from "@/lib/constants";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  phoneNumber: string;
  fullName: string;
  role?: "client" | "cleaner" | "admin";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface UserResponse {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  role: "client" | "cleaner" | "admin";
  isActive: boolean;
  isVerified: boolean;
  profilePhoto?: string;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
}

const BASE_URL = `${API_ENDPOINTS.api}${API_ENDPOINTS.apiPrefix}/auth`;

export const authApi = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to login");
    }

    return response.json();
  },

  async register(data: RegisterRequest): Promise<UserResponse> {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to register");
    }

    return response.json();
  },

  async getProfile(): Promise<UserResponse> {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get profile");
    }

    return response.json();
  },

  async logout(): Promise<void> {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  },
};
