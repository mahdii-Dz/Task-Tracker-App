import TaskInput from "@/components/TaskInput";
import TasksList from "@/components/TasksList";

export default function Home() {
  return (
    <section className="flex flex-col w-full h-dvh">
      <div className="shrink-0">
        <TaskInput />
      </div>
      <div className="grow overflow-hidden">
        <TasksList />
      </div>
    </section>
  );
}
