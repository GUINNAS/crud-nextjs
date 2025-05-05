export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <div className="bg-blue-500 text-white p-4 rounded-md max-w-sm w-full sm:w-1/3">
          <h1 className="text-3xl font-bold underline">Suas Tarefas</h1>
          <p className="text-xl">Quantidade total de tarefas</p>
          <p className="text-lg">12 tarefas</p>
          <button className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded-md max-w-sm w-full sm:w-1/3">
          <h1 className="text-3xl font-bold underline">Tarefas Concluídas</h1>
          <p className="text-xl">Quantidade total de tarefas concluídas</p>
          <p className="text-lg">8 tarefas concluídas</p>
          <button className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>

        <div className="bg-blue-500 text-white p-4 rounded-md max-w-sm w-full sm:w-1/3">
          <h1 className="text-3xl font-bold underline">Tarefas Pendentes</h1>
          <p className="text-xl">Quantidade total de tarefas pendentes</p>
          <p className="text-lg">5 tarefas pendentes</p>
          <button className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
