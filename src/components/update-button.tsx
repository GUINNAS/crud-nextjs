"use client";

import { updateTodo } from "@/app/dashboard/action";
import { Todo } from "@/types/todo";

type Props = {
    todo: Todo;
};

const UpdateButton = ({ todo }: Props) => {
    return (
        <button 
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
            onClick={async () => {
                updateTodo(todo);
            }}
        >
        Atualizar
        </button>
    );
};

export default UpdateButton;
