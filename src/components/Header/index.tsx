'use client';

import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import Home from "@/app/page";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Para redirecionar o usuário e detectar mudanças de rota
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // Supabase helper

export function Header() {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter(); // Hook para redirecionar
    const supabase = createClientComponentClient(); // Instância do cliente Supabase

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        try {
            // Encerra a sessão do usuário no Supabase
            await supabase.auth.signOut();
            // Redireciona para a página de login
            router.push("/login");
        } catch (error) {
            console.error("Erro ao encerrar a sessão:", error);
        }
    };

    // Fecha o menu ao clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".menu-container")) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Fecha o menu ao mudar de página
    const pathname = usePathname();

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>
                    DASHBOARD    
                </div>

                <nav>
                    <ul className="flex items-center justify-center gap-10">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="/dashboard">
                                Painel
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>

                        <li className="relative menu-container">
                            {/* Ícone do usuário */}
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <CircleUserRound className="w-6 h-6" />
                            </button>

                            {/* Menu de funcionalidades */}
                            {menuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link href="/profile">Perfil</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link href="/settings">Configurações</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <button onClick={handleLogout}>
                                                Sair
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
                    
            </div>
        </header>
    )
}