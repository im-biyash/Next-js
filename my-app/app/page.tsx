import Exampleclient from './components/Exampleclient';


export default function Home() {
  console.log("where do u render?");
  
  return (
   <main className="flex flex-col justify-center items-center min-h-screen p-24 text-4xl">
   <h1>WHere do i render?</h1>
   <Exampleclient />
  
   </main>
  );
}
