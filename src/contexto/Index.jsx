import { createContext, useState, useEffect } from 'react';
import { supabase } from '../../supabase';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Detectar sesión activa al cargar
  useEffect(() => {
    const getUsuario = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUsuario(user);
    };

    getUsuario();

    // Escuchar cambios en la sesión (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });

    // Cleanup
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
