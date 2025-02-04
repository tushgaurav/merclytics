function StatCard({
  metricValue,
  metricName,
}: {
  metricValue: string;
  metricName: string;
}) {
  return (
    <div className="bg-[#3F2B54] rounded-xl p-6 text-center text-text-subheading max-w-60">
      <h1 className="text-6xl tracking-tighter font-bold mb-4">{metricValue}</h1>
      <h3 className="font-medium text-lg leading-5">{metricName}</h3>
    </div>
  );
}

export default function Stats() {
  const statitics = [
    { metricValue: "40,000", metricName: "Customer Interactions Automated" },
    { metricValue: "98%", metricName: "Customer Query Resolution Rate" },
    { metricValue: "56,300", metricName: "AI-Powered Decisions Daily" },
  ];
  return (
    <div className="lg:mt-20 max-w-4xl mx-auto p-4 lg:mb-20">
      <div className="flex justify-between items-center">
        {statitics.map((stats) => {
          return (
            <StatCard
              key={stats.metricValue}
              metricValue={stats.metricValue}
              metricName={stats.metricName}
            />
          );
        })}
      </div>
    </div>
  );
}
