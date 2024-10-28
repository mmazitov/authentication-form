import Form from './components/Form';
import Navbar from './components/Navbar';
export default function Home() {
  return (
		<main className="bg-[url('/bg-main.png')] lg:bg-[url('/bg-main-2.png')] shadow-2xl bg-cover bg-center bx-shadow rounded-2xl w-9/12 h-[80vh] overflow-hidden">
			<Navbar />
			<div className='grid grid-cols-1 lg:grid-cols-3'>
				<Form />
			</div>
		</main>
  );
}
