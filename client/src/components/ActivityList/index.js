import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ACTIVITIES } from "../../utils/queries";

const ActivityList = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES);
};

export default ActivityList;
