import { Header } from "../components/Header";

export const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="text-gray-600">This is the main landing page of the application.</p>
        </div>
    );
}
