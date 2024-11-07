import Image from "next/image";

export default function Home() {
    return (
        <div
            className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="w-full max-w-md">
                <div className="text-2xl font-bold text-gray-200 text-center">Environment Variables</div>
                <div className="grid grid-cols-2 gap-0 border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <div className="px-4 py-2 bg-gray-100 font-semibold text-gray-700">Variable</div>
                    <div className="px-4 py-2 bg-gray-100 font-semibold text-gray-700">Value</div>
                    <div className="px-4 py-2 border-t">database_host</div>
                    <div className="px-4 py-2 border-t">{process.env.DATABASE_HOST}</div>
                    <div className="px-4 py-2 border-t">database_name</div>
                    <div className="px-4 py-2 border-t">{process.env.DATABASE_NAME}</div>
                    <div className="px-4 py-2 border-t">database_user</div>
                    <div className="px-4 py-2 border-t">{process.env.DATABASE_USER}</div>
                    <div className="px-4 py-2 border-t">database_password</div>
                    <div className="px-4 py-2 border-t">{process.env.DATABASE_PASSWORD}</div>
                </div>
            </main>
        </div>
    );
}

