export default async function Home() {
    return (
        <main className=''>
            <nav className='w-screen'>
                <ul className='flex flex-row w-full justify-around'>
                    <li>
                        <a href='/'>Car dealership</a>
                    </li>
                    <li>
                        <a href='/listings'>Listings</a>
                    </li>
                </ul>
            </nav>
            <div></div>
        </main>
    );
}
