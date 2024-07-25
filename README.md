# PlanItOut
   <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Timeline Planner</h1>
      <div className="grid grid-cols-2 gap-4">
        <DateInput label="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <DateInput label="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        <TimeInput label="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <TimeInput label="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </div>
      <TextInput label="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
    </div>