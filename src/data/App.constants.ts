export const bucketKeysOptions = [
  {
    label: "Aggregation for all series (No Grouping)",
    value: []
  },
  {
    label: "Aggregation for series, grouped By deployment, cluster",
    value: ["deployment", "cluster", "node"]
  },
  {
    label: "Aggregation for series, grouped By clusters, node",
    value: ["cluster", "node"]
  },
  // Below two cases are same as that of "Aggregation for series, grouped By deployment"
  // {
  //   label: "Aggregation for series, grouped By deployment, cluster",
  //   value: ["deployment", "cluster"]
  // },
  // {
  //   label: "Aggregation for series, grouped By deployment, node",
  //   value: ["deployment", "node"]
  // },
  {
    label: "Aggregation for series, grouped By deployment",
    value: ["deployment"]
  },
  {
    label: "Aggregation for series, grouped By cluster",
    value: ["cluster"]
  },
  {
    label: "Aggregation for series, grouped By node",
    value: ["node"]
  }
  // {
  //   label: "SourceHosts Grouped By SourceCategory",
  //   value: ["_sourceCategory", "_sourceHost"]
  // },
  // {
  //   label: "All SourceHost",
  //   value: ["_sourceHost"]
  // },
  // {
  //   label: "All SourceCategory",
  //   value: ["_sourceCategory"]
  // }
];

export const aggregateOptions = [
  "avg",
  "max",
  "count",
  "latest",
  "min",
  "sum"
].map(text => ({
  label: text,
  value: text
}));
