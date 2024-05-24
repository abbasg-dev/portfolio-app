import React, { createContext, useContext, ReactNode } from "react";
import { AlertState } from "interfaces";

interface AlertContextProps extends AlertState {
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [state, setState] = React.useState<AlertState>({
    isOpen: false,
    type: "",
    message: "",
  });

  const onOpen = (type: string, message: string) => {
    setState({ isOpen: true, type, message });
  };

  const onClose = () => {
    setState({ isOpen: false, type: "", message: "" });
  };

  return (
    <AlertContext.Provider value={{ ...state, onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};
