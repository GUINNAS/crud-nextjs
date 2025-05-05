import { login } from "./action";

const LoginPage = () => {
    return (
        <div className="h-full flex bg-zinc-950 items-center justify-center">
            <form 
                action={login}
                className="flex flex-col gap-4 w-96 bg-zinc-800 p-8 rounded-lg shadow-lg">
                
                <input 
                    type="text" 
                    name="email" 
                    placeholder="E-mail"
                    className="bg-zinc-900 text-white p-2 rounded-md"
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    className="bg-zinc-900 text-white p-2 rounded-md"
                />

                <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;