"use client";

import { deleteTodo } from "@/app/dashboard/action";

type Props = {
    id: number;
};

const DeleteButton = ({ id }: Props) => {
    return (
        <button 
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
            onClick={async () => {
                deleteTodo(id);
            }}
        >
        Delete
        </button>
    );
};

export default DeleteButton;
