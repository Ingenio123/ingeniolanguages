import { useState } from "react";
import { GET_ONE_SUMMARY_SERVICES } from "../services/GetOneSummary.services";
export const useGetSummaryHooks = () => {
  const [loading, setLoading] = useState(null);
  const getSummary = async () => {
    try {
      setLoading(true);
      const res = await GET_ONE_SUMMARY_SERVICES();
      setLoading(false);
      return res;
    } catch (error) {}
  };
  return {
    getSummary,
    loading,
  };
};
