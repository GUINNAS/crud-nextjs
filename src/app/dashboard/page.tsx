import { createClient } from '@/utils/supabase/server';
import { createTodo } from './action';
import DeleteButton from '@/components/delete-button';
import UpdateButton from '@/components/update-button';

const DashboardPage = async () => {
    const supabase = await createClient();
    const {data : todos} = await supabase.from('todos').select("*");
    return (
        <div>
            <form 
                className="flex gap-2 mt-4 mb-4"
                action={createTodo}>
                <input 
                    type="text" 
                    name="task" 
                    placeholder="Digite uma tarefa"
                    className="h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Adicionar
                </button>
            </form>

            {todos?.map(todo => (
                <div key={todo.id} className="flex justify-between items-center p-4 rounded-md mt-2">
                    <h1
                    className={`text-lg font-bold ${todo.is_complete ? "line-through" : ""}`}
                    >
                    {todo.task}
                    </h1>
                    <div className="flex gap-2">
                        <DeleteButton id={todo.id}/>
                        <UpdateButton todo={todo}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardPage;