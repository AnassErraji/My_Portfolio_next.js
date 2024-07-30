import { store } from "@/features/store";
import React from "react";
import { Provider } from "react-redux";
import AuthWrapper from "@/components/AuthWrapper"; // Assure-toi que le chemin est correct

function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        {children}
      </AuthWrapper>
    </Provider>
  );
}

export default ReduxProvider;
