import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../../utils/queries";

const MealList = () => {
  const { loading, data } = useQuery(QUERY_MEALS);
};

export default MealList;
