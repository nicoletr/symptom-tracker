import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_SYMPTOMS } from "../../utils/queries";

const SymptomList = () => {
  const { loading, data } = useQuery(QUERY_SYMPTOMS);
};

export default SymptomList;
