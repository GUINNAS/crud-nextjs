'use server'

import { Todo } from '@/types/todo';
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache';
 
export async function createTodo(formdata: FormData) {
    
    const supabase = await createClient();

    const {data: session} = await supabase.auth.getUser();
    
    const data = {
        task: formdata.get("task") as string,
    };

    const { error } = await supabase
        .from('todos')
        .insert({   ...data, user_id: session.user?.id });

    if (!error) {
        revalidatePath("/");
    }
}

export async function deleteTodo(id: number) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

    if (!error) {
        revalidatePath("/");
    }
}

export async function updateTodo(todo: Todo) {
    const supabase = await createClient();

    const {data, error} = await supabase
    .from("todos")
    .update({ is_complete: !todo.is_complete })
    .eq("id", todo.id)
    .select();

    console.log(data)

    if (!error) {
        revalidatePath("/");
    }

}

