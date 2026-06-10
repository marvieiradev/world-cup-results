export function Header() {
    return (
        <header className="bg-black text-white p-4 flex items-center justify-center gap-4">
            <img src="logo.svg" alt="Logo" className="w-7 h-7" />
            <span className="text-2xl md:text-3xl font-bold">Tabela da Copa</span>
        </header>
    );
}