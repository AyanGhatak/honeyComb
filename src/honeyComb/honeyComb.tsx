import * as React from "react";
import styles from "./honeyComb.module.css";
import { useEffect, useRef, FunctionComponent } from "react";
import { bucketizeData } from "./honeyComb-utils";
import { CPU_Usage, Deployment_Data } from "../data";
import { renderFn, updateZoomRect } from "./honeyComb-d3";

interface HoneyCombProps {
  bucketKeys: string[];
  colorDimension: string;
}

export const HoneyComb: FunctionComponent<HoneyCombProps> = props => {
  const groupEl = useRef(null);
  const svgEl = useRef(null);
  const zoomEl = useRef(null);

  useEffect(() => {
    // TODO: Remove the any type below.
    const { width, height } = (svgEl.current as any).getBoundingClientRect();
    var buckets = bucketizeData(
      Deployment_Data,
      // Deployment_Data.splice(0, 10),
      props.bucketKeys
    );
    console.log(props.bucketKeys, buckets);
    const renderProps = {
      width,
      height,
      parentGroupEl: groupEl.current
    };
    updateZoomRect(zoomEl.current, renderProps);
    renderFn(buckets, props.colorDimension, renderProps);
  });
  return (
    <svg className={styles.svg} ref={svgEl}>
      <rect ref={zoomEl} />
      <g ref={groupEl} />
    </svg>
  );
};
