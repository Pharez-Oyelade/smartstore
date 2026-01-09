"use client";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { SalesProvider } from "@/context/SalesContext";

// export default function Providers({ children }) {
//   return (
//     <AuthProvider>
//       <SalesProvider>
//         <CartProvider>{children}</CartProvider>
//       </SalesProvider>
//     </AuthProvider>
//   );
// }

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SalesProvider>
          <CartProvider>{children}</CartProvider>
        </SalesProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
