import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function RootRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/blog');
  }, [navigate]);

  return null;
}

export { RootRoute }
