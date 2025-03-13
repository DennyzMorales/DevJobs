import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../auth/firebase"; // Asegúrate de importar correctamente

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Ahora TypeScript lo reconoce
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Limpia el listener cuando el componente se desmonta
  }, []);

  return { user, loading };
};
