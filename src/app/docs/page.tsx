'use client'

import commonApi from "@/libs/adaptors/api/commonApi";
import { loggingError } from "@/libs/utils/logger";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function RequestCallbackContent() {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(
    ['transaction_id', 'code', 'location', 'state'].map((key) => [key, searchParams.get(key) || null])
  );

  useEffect(() => {
    const fetchData = async () => {
      const { state, code } = queryParams;

      if (!state || !code) {
        alert('fail');
        return;
      }

      const params = {
          client_id: '',
          redirect_uri:'' 
      }

      try {
        const response = await commonApi.post("/api/v1/callback", {
          state,
          code,
          ...params
        });
        if (response.status !== 200 || !response.data.status) {
          throw new Error("Failed to process callback");
        }
        alert('SUCCESS');
        window.close();
      } catch (error) {
        loggingError("Failed to api call:", error);
        alert('error');
      }
    };

    fetchData();
  }, [queryParams]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>DEFAULT PAGE</h1>
        <p>CLOSE THIS PAGE</p>
      </main>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RequestCallbackContent />
    </Suspense>
  );
}
