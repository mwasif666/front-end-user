import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvide = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [product ,setProduct] = useState([])
  const navigate = useNavigate();
  
  const [isLoading , setIsLoading] = useState(true)
  const getProduct = async()=>{
    setIsLoading(true)
     try {
      const response = await fetch(`http://localhost:5000/api/prod/v1/getproduct`)
      const res = await response.json()
      console.log(res);
      if(res.success){
        setProduct(res.product)
        setIsLoading(false)
        console.log(product);
      }
     } catch (error) {
      console.log(error);
     }
  }
  useEffect(()=>{
    getProduct()
  },[])

  const login = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/v1/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
        if (response.status >= 200 && response.status < 300) {
          setAuthToken(response.data.authToken);
          localStorage.setItem("authToken", response.data.authToken);
          localStorage.setItem("userDetails", JSON.stringify(response.data.userDetails));
  
          setLoading(false);
          alert(response.data.message);
          navigate('/');
        } else {
          alert(response.data.message);
          setLoading(false);
        }
    } catch (error) {
      console.error("Error in login request:", error);
      // Handle the error
      if (error.response.data.errors) {
        alert(error.response.data.errors[0].msg || error.response.data.message)
      }
      if (error.response.data.message) {
        alert(error.response.data.message)
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error in setting up the request:", error.message);
      }
    }
  };

  const signUp = async (data) => { 
  setLoading(true);
  try {
    const response = await fetch("http://localhost:5000/api/auth/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const res = await response.json()
    console.log(res);
    if(res.errors){
      alert(res.errors[0].msg)
      return
    }
    if (res.success) {
      setAuthToken(res.authToken);
      localStorage.setItem("authToken", res.authToken);
      localStorage.setItem("userDetails",JSON.stringify(res.userDetails));
      setLoading(false);
      alert(res.message);
    } else {
      alert(res.message);
      setLoading(false);
    }
  } catch (error) {
    console.error(error);
  }
};

  const isLoggedIn = () => {
    setLoading(true);
    let authToken = localStorage.getItem("authToken");
    let user = JSON.parse(localStorage.getItem("userDetails"));
    setAuthToken(authToken);
    setUser(user);
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDetails");
    setAuthToken(null);
    setUser(null);
    setLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, signUp, isLoggedIn, logout, user, loading, authToken, setIsLoading, isLoading, product}}>
      {children}
    </AuthContext.Provider>
  );
}; 