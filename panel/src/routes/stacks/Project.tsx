import { useParams } from "@solidjs/router";
import { ChartData, ChartOptions } from "chart.js";
import { createSignal, onCleanup } from "solid-js";
import { LineChart } from "~/components/ui/Charts";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "~/components/ui/Tabs";

const chartOptions: ChartOptions = {
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      // max: 1,
    },
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "CPU Usage",
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
};

export default function Page() {
  const params = useParams<{ project: string }>();
  // const socket = new WebSocket("ws://localhost:3000/ws/stats/1");
  // const [chartData, setChartData] = createSignal<ChartData<"line">>({
  //   labels: Array.from(Array(60).keys()).map((i) => `${60 - i} secs ago`),
  //   datasets: [
  //     {
  //       data: Array.from(Array(60).map(() => 0)),
  //       fill: true,
  //       label: "CPU Usage (%)",
  //       tension: 0.3,
  //       borderJoinStyle: "round",
  //     },
  //   ],
  // });
  //
  // const [memChartData, setMemChartData] = createSignal<ChartData<"line">>({
  //   labels: Array.from(Array(60).keys()).map((i) => `${60 - i} secs ago`),
  //   datasets: [
  //     {
  //       data: Array.from(Array(60).map(() => 0)),
  //       fill: true,
  //       label: "Memory Usage (MB)",
  //       tension: 0.3,
  //       borderJoinStyle: "round",
  //     },
  //   ],
  // });
  //
  // socket.onmessage = (e) => {
  //   const data = JSON.parse(e.data);
  //   const cpuDelta =
  //     data.cpu_stats.cpu_usage.total_usage -
  //     data.precpu_stats.cpu_usage.total_usage;
  //   const systemDelta =
  //     data.cpu_stats.system_cpu_usage - data.precpu_stats.system_cpu_usage;
  //   const numCores = data.cpu_stats.online_cpus;
  //
  //   const percent = (cpuDelta / systemDelta) * numCores * 100;
  //
  //   console.log(data);
  //
  //   setChartData((prev) => {
  //     const datasets = prev.datasets;
  //     datasets[0].data.shift();
  //     datasets[0].data.push(percent);
  //     return { ...prev, datasets };
  //   });
  //
  //   setMemChartData((prev) => {
  //     const datasets = prev.datasets;
  //     datasets[0].data.shift();
  //     datasets[0].data.push(
  //       (data.memory_stats.usage / data.memory_stats.limit) * 1000,
  //     );
  //     return { ...prev, datasets };
  //   });
  // };
  //
  // onCleanup(() => socket.close());

  return (
    <div class="w-full space-y-4 p-8">
      <h2 class="text-2xl font-semibold">{params.project}</h2>
      <Tabs>
        <TabsList class="grid grid-cols-3">
          <TabsIndicator />
          <TabsTrigger value="1">Long Title 1</TabsTrigger>
          <TabsTrigger value="2">Long Title 2</TabsTrigger>
          <TabsTrigger value="3">Long Title 3</TabsTrigger>
        </TabsList>
        <TabsContent value="1">1</TabsContent>
        <TabsContent value="2">2</TabsContent>
        <TabsContent value="3">3</TabsContent>
      </Tabs>
      {/* <div class="h-64 w-full"> */}
      {/*   <LineChart data={chartData()} options={chartOptions} /> */}
      {/* </div> */}
      {/* <div class="h-64 w-full"> */}
      {/*   <LineChart data={memChartData()} options={chartOptions} /> */}
      {/* </div> */}
    </div>
  );
}