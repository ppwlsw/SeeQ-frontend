function ReminderCard() {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md p-4">
      <div className="flex-flex-row line-clamp-2 text-lg font-bold">
        {" "}
        Et eiusmod mollit nostrud consectetur proident reprehenderit.{" "}
      </div>
      <div className="text-md font-light text-slate-200">เวลา : 10:12 </div>
      <div className="flex-flex-row line-clamp-4">
        Dolor labore reprehenderit consectetur quis anim aute. Ea laborum non
        cupidatat amet aliquip in ad incididunt duis dolore deserunt. Anim et
        veniam non veniam est sunt officia occaecat exercitation sit occaecat
        nisi aute.
      </div>
    </div>
  );
}

export default ReminderCard;
