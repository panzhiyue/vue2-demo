<template>
  <div id="app">
    <vue2ol-map>
      <vue2ol-view :options="viewOptions"></vue2ol-view>
      <vue2ol-layer-tile>
        <vue2ol-source-osm></vue2ol-source-osm>
      </vue2ol-layer-tile>
      <vue2ol-layer-vector>
        <vue2ol-source-vector :features="features"> </vue2ol-source-vector>
      </vue2ol-layer-vector>
    </vue2ol-map>
  </div>
</template>

<script>
import * as proj from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
export default {
  name: "App",
  components: {},
  data() {
    return {
      viewOptions: {
        center: [0, 0],
        projection: proj.get("EPSG:4326"),
        zoomFactor: 2,
        maxZoom: 18,
        zoom: 5,
      },
      features: [],
    };
  },
  mounted() {
    let i = 0;
    setInterval(() => {
      i++;
      let coordinate = [0.1 * i, 0.1 * i];
      let feature = new Feature({
        geometry: new Point(coordinate),
      });
      this.features = [feature];
    }, 1000);
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
